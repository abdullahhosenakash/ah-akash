const SkillsTemplate = ({ skills }) => {
  const width = '1/2';
  return (
    <div className='h-[21.6rem] lg:h-fit lg:border-0 border border-yellow-400 rounded-md p-2 lg:p-0 mt-2 lg:mt-0'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:mt-2'>
        {skills.map((skill) => (
          <div
            className='flex flex-col relative gap-3 p-4 bg-slate-700 rounded-md'
            key={skill.skillName}
          >
            <div className='flex justify-between'>
              <span>{skill.skillName}</span>
              <span>{skill.percentage}</span>
            </div>{' '}
            <div
              className={`${
                skill.percentage === '30%'
                  ? 'w-[30%]'
                  : skill.percentage === '40%'
                  ? 'w-[40%]'
                  : skill.percentage === '50%'
                  ? 'w-[50%]'
                  : skill.percentage === '60%'
                  ? 'w-[60%]'
                  : skill.percentage === '70%'
                  ? 'w-[70%]'
                  : skill.percentage === '80%'
                  ? 'w-[80%]'
                  : skill.percentage === '90%'
                  ? 'w-[90%]'
                  : skill.percentage === '100%'
                  ? 'w-[100%]'
                  : ''
              } absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTemplate;
