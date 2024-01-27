import AboutSection from '@/app/_components/AboutSection/AboutSection';
import Banner from '@/app/_components/Banner/Banner';
import SkillsSection from '@/app/_components/SkillsSection/SkillsSection';
import Projects from '@/app/projects/page';

export default function Home() {
  return (
    <main className='lg:px-20 px-3'>
      <Banner />
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12'>
        <AboutSection />
        <SkillsSection />
      </section>
      <Projects />
    </main>
  );
}
