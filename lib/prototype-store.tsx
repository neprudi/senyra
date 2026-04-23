"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { type ContextId, type MoodId } from '@/lib/senyra';

type PrototypeState = {
  moodId: MoodId;
  contextId: ContextId;
  savedSlugs: string[];
};

type PrototypeContextValue = {
  moodId: MoodId;
  contextId: ContextId;
  savedSlugs: string[];
  setMoodId: (id: MoodId) => void;
  setContextId: (id: ContextId) => void;
  toggleSaved: (slug: string) => void;
  isSaved: (slug: string) => boolean;
};

const STORAGE_KEY = 'senyra:prototype-state';

const defaultState: PrototypeState = {
  moodId: 'comfort',
  contextId: 'slow-evening',
  savedSlugs: ['ember-table', 'soft-archive']
};

const PrototypeContext = createContext<PrototypeContextValue | null>(null);

export function PrototypeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PrototypeState>(defaultState);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<PrototypeState>;
      setState((current) => ({
        moodId: (parsed.moodId as MoodId) ?? current.moodId,
        contextId: (parsed.contextId as ContextId) ?? current.contextId,
        savedSlugs: Array.isArray(parsed.savedSlugs) ? parsed.savedSlugs : current.savedSlugs
      }));
    } catch {
      // Ignore storage issues and keep the default state.
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo<PrototypeContextValue>(
    () => ({
      moodId: state.moodId,
      contextId: state.contextId,
      savedSlugs: state.savedSlugs,
      setMoodId: (id) => setState((current) => ({ ...current, moodId: id })),
      setContextId: (id) => setState((current) => ({ ...current, contextId: id })),
      toggleSaved: (slug) =>
        setState((current) => ({
          ...current,
          savedSlugs: current.savedSlugs.includes(slug)
            ? current.savedSlugs.filter((item) => item !== slug)
            : [slug, ...current.savedSlugs]
        })),
      isSaved: (slug) => state.savedSlugs.includes(slug)
    }),
    [state]
  );

  return <PrototypeContext.Provider value={value}>{children}</PrototypeContext.Provider>;
}

export function usePrototype() {
  const context = useContext(PrototypeContext);
  if (!context) {
    throw new Error('usePrototype must be used within PrototypeProvider');
  }
  return context;
}
