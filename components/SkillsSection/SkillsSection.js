'use client';

import { useState } from 'react';
import Link from 'next/link';
import SkillsTemplate from '@/components/SkillsSection/SkillsTemplate';

const SkillsSection = () => {
  const [selectedSkills, setSelectedSkills] = useState('web');
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
        percentage: '75%'
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
        percentage: '75%'
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
