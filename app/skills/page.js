'use client';

import { useState } from 'react';
import SkillsSelectionButton from '@/app/_components/SkillsSection/SkillsSelectionButton';
import skills from '@/app/_utils/skills';
import SkillsTemplate from '../_components/SkillsSection/SkillsTemplate';

const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState('web');

  return (
    <section className='lg:px-20 lg:mt-6 m-3 lg:h-[105vh]'>
      <h3 className='text-2xl border-b-2 border-yellow-400 w-fit mx-auto'>
        My Skills
      </h3>
      <div className='lg:flex grid grid-cols-2 lg:gap-4 gap-2 lg:justify-center mt-3 text-lg'>
        {Object.keys(skills)?.map((skill) => (
          <SkillsSelectionButton
            key={skill}
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
            skill={skill}
          />
        ))}
      </div>

      {selectedSkills === 'web' && (
        <div>
          <SkillsTemplate skillType={skills?.web} from='skillsPage' />
        </div>
      )}

      {selectedSkills === 'programming' && (
        <div>
          <SkillsTemplate skillType={skills?.programming} from='skillsPage' />
        </div>
      )}

      {selectedSkills === 'tools' && (
        <div>
          <SkillsTemplate skillType={skills?.tools} from='skillsPage' />
        </div>
      )}

      {selectedSkills === 'language' && (
        <div>
          <SkillsTemplate skillType={skills?.language} from='skillsPage' />
        </div>
      )}
    </section>
  );
};

export default Skills;
