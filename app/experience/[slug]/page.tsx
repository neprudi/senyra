import { notFound } from 'next/navigation';
import { AppFrame } from '@/components/app-frame';
import { getExperience } from '@/lib/senyra';
import ExperienceDetailScreen from './screen';

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) {
    notFound();
  }
  const safeExperience = experience;

  return (
    <AppFrame title={safeExperience.title} eyebrow={safeExperience.district} backHref="/discover" subtle>
      <ExperienceDetailScreen experience={safeExperience} />
    </AppFrame>
  );
}
