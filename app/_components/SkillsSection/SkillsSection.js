'use client';

import { useState } from 'react';
import Link from 'next/link';
import SkillsTemplate from '@/app/_components/SkillsSection/SkillsTemplate';
import SkillsSelectionButton from '@/app/_components/SkillsSection/SkillsSelectionButton';
import skills from '@/app/_utils/skills';

const SkillsSection = () => {
  const [selectedSkills, setSelectedSkills] = useState('web');

  return (
    <section className='relative'>
      <h3 className='text-2xl border-b-2 border-yellow-400 w-fit mx-auto lg:mx-0'>
        My Skills
      </h3>
      <div className='lg:flex grid grid-cols-2 lg:gap-4 gap-2 mt-3 text-lg'>
        {Object.keys(skills)?.map((skill) => (
          <SkillsSelectionButton
            key={skill}
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
            skill={skill}
          />
        ))}
      </div>
      {selectedSkills === 'web' && <SkillsTemplate skillType={skills.web} />}
      {selectedSkills === 'programming' && (
        <SkillsTemplate skillType={skills.programming} />
      )}
      {selectedSkills === 'tools' && (
        <SkillsTemplate skillType={skills.tools} />
      )}
      {selectedSkills === 'language' && (
        <SkillsTemplate skillType={skills.language} />
      )}

      <Link
        href='/skills'
        className='text-lg text-yellow-400 hover:underline lg:absolute lg:bottom-0  block mx-auto text-center'
      >
        More about my skills
      </Link>
    </section>
  );
};

export default SkillsSection;
