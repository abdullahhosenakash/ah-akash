import AboutSection from '@/components/AboutSection/AboutSection';
import Banner from '@/components/Banner/Banner';
import SkillsSection from '@/components/SkillsSection/SkillsSection';

export default function Home() {
  return (
    <main className='lg:px-20 px-4'>
      <Banner />
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12'>
        <AboutSection />
        <SkillsSection />
      </section>
    </main>
  );
}
