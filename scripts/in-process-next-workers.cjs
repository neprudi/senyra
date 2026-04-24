const Module = require('module');
const path = require('path');
const { PassThrough } = require('stream');

const originalLoad = Module._load;

class InProcessWorker {
  constructor(workerPath, options = {}) {
    this.workerPath = workerPath;
    this.options = options;
    this.workerModule = require(workerPath);
    this._stdout = new PassThrough();
    this._stderr = new PassThrough();
    this._workerPool = { _workers: [] };
    this._ended = false;

    for (const method of options.exposedMethods || []) {
      this[method] = async (...args) => this._invoke(method, args);
    }
  }

  async _invoke(method, args) {
    const fn = this.workerModule[method];
    if (typeof fn !== 'function') {
      const available = Object.keys(this.workerModule).join(', ');
      throw new Error(
        `InProcessWorker could not find method "${method}" in ${path.basename(this.workerPath)}. Available exports: ${available}`
      );
    }

    return await fn(...args);
  }

  getStdout() {
    return this._stdout;
  }

  getStderr() {
    return this._stderr;
  }

  async end() {
    this._ended = true;
    this._stdout.end();
    this._stderr.end();
  }
}

Module._load = function patchedLoad(request, parent, isMain) {
  if (request === 'next/dist/compiled/jest-worker') {
    return { Worker: InProcessWorker };
  }

  return originalLoad.call(this, request, parent, isMain);
};
