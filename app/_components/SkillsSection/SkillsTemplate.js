import noorehuda from '@/app/_lib/getFont';
import skills from '@/app/_utils/skills';
import Link from 'next/link';

const SkillsTemplate = ({ skillType, from = '' }) => {
  const [english1, arabic1, english2, arabic2, english3, arabic3, english4] =
    skills?.language[3]?.description?.split('~');
  const [git1, git2] = skills?.tools[0]?.description?.split('~');
  const arabicDescription = (
    <>
      <span className=''>{english1}</span>
      <span className={`text-2xl ${noorehuda.className}`}>{arabic1}</span>
      <span className=''>{english2}</span>
      <span className={`text-2xl ${noorehuda.className}`}>{arabic2}</span>
      <span className=''>{english3}</span>
      <span className={`text-2xl ${noorehuda.className}`}>{arabic3}</span>
      <span className=''>{english4}</span>
    </>
  );
  const gitDescription = (
    <>
      <span className=''>{git1}</span>
      <Link
        href='https://www.github.com/abdullahhosenakash'
        target='_blank'
        className='text-yellow-400 hover:underline'
      >
        {git2}
      </Link>
    </>
  );
  return (
    <div
      className={`h-[21.6rem] lg:h-fit lg:border-0 border border-yellow-400 rounded-md p-2 lg:p-0 mt-2 lg:mt-0 ${
        from === 'skillsPage' && 'h-full border-0 p-0'
      }`}
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:mt-2'>
        {skillType?.map((skill) => (
          <div
            className={`flex flex-col relative gap-3 bg-slate-700 rounded-md ${
              skill.skillName === 'عَرَبِيًّا (Arabic)'
                ? 'px-4 py-3 justify-between'
                : 'p-4'
            }`}
            key={skill.skillName}
          >
            <div className='flex justify-between items-center'>
              {skill.skillName === 'عَرَبِيًّا (Arabic)' ? (
                <span className=''>
                  <span className={`text-2xl ${noorehuda.className}`}>
                    {skill.skillName.split(' ')[0]}
                  </span>
                  <span className=''>{skill.skillName.split(' ')[1]}</span>
                </span>
              ) : (
                <span>{skill.skillName}</span>
              )}
              <span>{skill.percentage}</span>
            </div>{' '}
            {from === 'skillsPage' && <hr />}
            <div
              className={`${
                skill.percentage === '30%'
                  ? 'w-[30%]'
                  : skill.percentage === '35%'
                  ? 'w-[35%]'
                  : skill.percentage === '40%'
                  ? 'w-[40%]'
                  : skill.percentage === '45%'
                  ? 'w-[45%]'
                  : skill.percentage === '50%'
                  ? 'w-[50%]'
                  : skill.percentage === '55%'
                  ? 'w-[55%]'
                  : skill.percentage === '60%'
                  ? 'w-[60%]'
                  : skill.percentage === '65%'
                  ? 'w-[65%]'
                  : skill.percentage === '70%'
                  ? 'w-[70%]'
                  : skill.percentage === '75%'
                  ? 'w-[75%]'
                  : skill.percentage === '80%'
                  ? 'w-[80%]'
                  : skill.percentage === '85%'
                  ? 'w-[85%]'
                  : skill.percentage === '90%'
                  ? 'w-[90%]'
                  : skill.percentage === '95%'
                  ? 'w-[95%]'
                  : skill.percentage === '100%'
                  ? 'w-[100%]'
                  : ''
              } absolute bottom-0 left-0 border-b-8 border-yellow-400 rounded-lg`}
            />
            {from === 'skillsPage' && (
              <p className='text-slate-300 p-1'>
                {skill.skillName === 'Git'
                  ? gitDescription
                  : skill.skillName === 'عَرَبِيًّا (Arabic)'
                  ? arabicDescription
                  : skill.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTemplate;
