import React from 'react';

const ProgrammingSkills = () => {
  return (
    <div className='grid grid-cols-2 gap-3 mt-2'>
      <div className='flex flex-col gap-3'>
        <div className='relative p-4 bg-slate-700 rounded-md'>
          <div className='flex justify-between'>
            <span>JavaScript</span>
            <span>90%</span>
          </div>{' '}
          <span className='block w-[90%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg' />
        </div>
        <div className='relative p-4 bg-slate-700 rounded-md'>
          <div className='flex justify-between'>
            <span>C</span>
            <span>80%</span>
          </div>{' '}
          <span className='block w-[80%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg' />
        </div>
        <div className='relative p-4 bg-slate-700 rounded-md'>
          <div className='flex justify-between'>
            <span>Java</span>
            <span>30%</span>
          </div>{' '}
          <span className='block w-[30%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg' />
        </div>
      </div>
    </div>
  );
};

export default ProgrammingSkills;
