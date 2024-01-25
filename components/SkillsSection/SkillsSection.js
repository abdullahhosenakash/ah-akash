'use client';

import { useState } from 'react';
import WebSkills from '@/components/SkillsSection/WebSkills';
import ProgrammingSkills from './ProgrammingSkills';
import ToolsSkills from './ToolsSkills';
import LanguageSkills from './LanguageSkills';
import Link from 'next/link';

const SkillsSection = () => {
  const [selectedSkills, setSelectedSkills] = useState('web');
  return (
    <section className='relative'>
      <h3 className='text-2xl border-b-2 border-yellow-400 w-fit'>My Skills</h3>
      <div className='flex flex-wrap gap-4 mt-3 text-lg'>
        <button
          className={`px-3 py-1 border-2 border-yellow-400 rounded-md ${
            selectedSkills === 'web' && 'bg-yellow-400 text-black'
          }`}
          onClick={() => setSelectedSkills('web')}
        >
          Web
        </button>
        <button
          className={`px-3 py-1 border-2 border-yellow-400 rounded-md ${
            selectedSkills === 'programming' && 'bg-yellow-400 text-black'
          }`}
          onClick={() => setSelectedSkills('programming')}
        >
          Programming
        </button>
        <button
          className={`px-3 py-1 border-2 border-yellow-400 rounded-md ${
            selectedSkills === 'tools' && 'bg-yellow-400 text-black'
          }`}
          onClick={() => setSelectedSkills('tools')}
        >
          Tools
        </button>
        <button
          className={`px-3 py-1 border-2 border-yellow-400 rounded-md ${
            selectedSkills === 'language' && 'bg-yellow-400 text-black'
          }`}
          onClick={() => setSelectedSkills('language')}
        >
          Language
        </button>
      </div>
      {selectedSkills === 'web' && <WebSkills />}
      {selectedSkills === 'programming' && <ProgrammingSkills />}
      {selectedSkills === 'tools' && <ToolsSkills />}
      {selectedSkills === 'language' && <LanguageSkills />}
      <Link
        href='/skills'
        className='text-lg text-yellow-400 hover:underline lg:absolute lg:bottom-0'
      >
        More about my skills
      </Link>
    </section>
  );
};

export default SkillsSection;
