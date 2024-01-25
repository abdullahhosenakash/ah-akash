const LanguageSkills = () => {
  return (
    <div className='grid grid-cols-2 gap-3 mt-2'>
      <div className='flex flex-col gap-3'>
        <div className='relative p-4 bg-slate-700 rounded-md'>
          <div className='flex justify-between'>
            <span>English</span>
            <span>80%</span>
          </div>{' '}
          <span className='block w-[70%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg' />
        </div>
        <div className='flex flex-col gap-3'>
          <div className='relative p-4 bg-slate-700 rounded-md'>
            <div className='flex justify-between'>
              <span>বাংলা (Bangla)</span>
              <span>100%</span>
            </div>{' '}
            <span className='block w-[100%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg' />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='relative p-4 bg-slate-700 rounded-md'>
            <div className='flex justify-between'>
              <span>Hindi</span>
              <span>50%</span>
            </div>{' '}
            <span className='block w-[50%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSkills;
