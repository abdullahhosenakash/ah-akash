const SkillsTemplate = ({ skills }) => {
  return (
    <div className='h-[21.6rem] lg:h-fit lg:border-0 border border-yellow-400 rounded-md p-2 lg:p-0 mt-2 lg:mt-0'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:mt-2'>
        {skills.map((skill) => (
          <div className='flex flex-col gap-3' key={skill.skillName}>
            <div className='relative p-4 bg-slate-700 rounded-md'>
              <div className='flex justify-between'>
                <span>{skill.skillName}</span>
                <span>{skill.percentage}</span>
              </div>{' '}
              <span
                className={`block w-[90%] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTemplate;
