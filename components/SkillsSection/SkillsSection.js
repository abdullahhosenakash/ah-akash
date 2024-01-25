'use client';

import { useState } from 'react';

const SkillsSection = () => {
  const [selectedSkills, setSelectedSkills] = useState('web');
  return (
    <section>
      <h3 className='text-2xl border-b-2 border-yellow-400 w-fit'>My Skills</h3>
      <div className='flex gap-4 mt-2 text-lg'>
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
      </div>
    </section>
  );
};

export default SkillsSection;
