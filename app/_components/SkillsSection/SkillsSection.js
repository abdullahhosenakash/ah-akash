'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SkillsTemplate from '@/app/_components/SkillsSection/SkillsTemplate';
const skills = {
  webSkills: [
    {
      skillName: 'React JS',
      percentage: '90%'
    },
    {
      skillName: 'Next.JS',
      percentage: '40%'
    },
    {
      skillName: 'Express JS',
      percentage: '70%'
    },
    {
      skillName: 'Node JS',
      percentage: '60%'
    },
    {
      skillName: 'MongoDB',
      percentage: '70%'
    }
  ],
  programmingSkills: [
    {
      skillName: 'JavaScript',
      percentage: '90%'
    },
    {
      skillName: 'C',
      percentage: '80%'
    },
    {
      skillName: 'Java',
      percentage: '30%'
    }
  ],
  toolsSkills: [
    {
      skillName: 'Git',
      percentage: '60%'
    },
    {
      skillName: 'Microsoft Office',
      percentage: '70%'
    }
  ],
  languageSkills: [
    {
      skillName: 'বাংলা (Bangla)',
      percentage: '100%'
    },
    {
      skillName: 'English',
      percentage: '80%'
    },
    {
      skillName: 'Hindi',
      percentage: '50%'
    }
  ]
};
const SkillsSection = () => {
  const [selectedSkills, setSelectedSkills] = useState('web');

  return (
    <section className='relative'>
      <h3 className='text-2xl border-b-2 border-yellow-400 w-fit mx-auto lg:mx-0'>
        My Skills
      </h3>
      <div className='lg:flex grid grid-cols-2 lg:gap-4 gap-2 mt-3 text-lg'>
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
      {selectedSkills === 'web' && <SkillsTemplate skills={skills.webSkills} />}
      {selectedSkills === 'programming' && (
        <SkillsTemplate skills={skills.programmingSkills} />
      )}
      {selectedSkills === 'tools' && (
        <SkillsTemplate skills={skills.toolsSkills} />
      )}
      {selectedSkills === 'language' && (
        <SkillsTemplate skills={skills.languageSkills} />
      )}
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
