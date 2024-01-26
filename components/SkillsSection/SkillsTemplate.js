const SkillsTemplate = ({ skills }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 mt-2'>
      {skills.map((skill) => (
        <div className='flex flex-col gap-3' key={skill.skillName}>
          <div className='relative p-4 bg-slate-700 rounded-md'>
            <div className='flex justify-between'>
              <span>{skill.skillName}</span>
              <span>{skill.percentage}</span>
            </div>{' '}
            <span
              className={`block w-[${skill.percentage}] absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsTemplate;
