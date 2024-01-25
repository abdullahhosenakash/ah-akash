import React from 'react';

const ToolsSkills = () => {
  return (
    <div className='grid grid-cols-2 gap-3 mt-2'>
      <div className='flex flex-col gap-3'>
        <div className='relative p-4 bg-slate-700 rounded-md'>
          <div className='flex justify-between'>
            <span>Git</span>
            <span>75%</span>
          </div>{' '}
          <span className='block w-[75%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg' />
        </div>
        <div className='flex flex-col gap-3'>
          <div className='relative p-4 bg-slate-700 rounded-md'>
            <div className='flex justify-between'>
              <span>Microsoft Office</span>
              <span>70%</span>
            </div>{' '}
            <span className='block w-[70%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSkills;
