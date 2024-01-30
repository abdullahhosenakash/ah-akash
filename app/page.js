import AboutSection from '@/app/_components/AboutSection/AboutSection';
import Banner from '@/app/_components/Banner/Banner';
import SkillsSection from '@/app/_components/SkillsSection/SkillsSection';
import Projects from '@/app/projects/page';
import ContactSection from './_components/ContactSection/ContactSection';

export default function Home() {
  return (
    <main>
      <Banner />
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 lg:px-20 px-2'>
        <AboutSection />
        <SkillsSection />
      </section>
      <Projects from='homepage' />
      <ContactSection />
    </main>
  );
}
