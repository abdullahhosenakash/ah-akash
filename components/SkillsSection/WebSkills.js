const WebSkills = () => {
  return (
    <div className='grid grid-cols-2 gap-3 mt-2'>
      <div className='flex flex-col gap-3'>
        <div className='relative p-4 bg-slate-700 rounded-md'>
          <div className='flex justify-between'>
            <span>React JS</span>
            <span>90%</span>
          </div>{' '}
          <span className='block w-[90%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg' />
        </div>
        <div className='relative p-4 bg-slate-700 rounded-md'>
          <div className='flex justify-between'>
            <span>Next.JS</span>
            <span>40%</span>
          </div>{' '}
          <span className='block w-[40%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg' />
        </div>
        <div className='relative p-4 bg-slate-700 rounded-md'>
          <div className='flex justify-between'>
            <span>Express JS</span>
            <span>70%</span>
          </div>{' '}
          <span className='block w-[70%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg' />
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='relative p-4 bg-slate-700 rounded-md'>
          <div className='flex justify-between'>
            <span>Node JS</span>
            <span>60%</span>
          </div>{' '}
          <span className='block w-[60%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg' />
        </div>
        <div className='relative p-4 bg-slate-700 rounded-md'>
          <div className='flex justify-between'>
            <span>MongoDB</span>
            <span>75%</span>
          </div>{' '}
          <span className='block w-[75%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg' />
        </div>
      </div>
    </div>
  );
};

export default WebSkills;
