import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const Project = ({ project }) => {
  return (
    <div className='bg-slate-800 rounded-lg p-2'>
      <Image
        src={project.imageUrl}
        width={500}
        height={400}
        priority
        alt=''
        className='w-auto rounded-lg border border-yellow-400'
      />
      <h3 className='text-md font-bold my-1'>{project.title}</h3>
      <p className='my-1'>Project Type: {project.type}</p>
      <p className='my-1'>
        Live Website:{' '}
        <Link
          href={project.liveLink}
          className='text-yellow-400 hover:underline'
          target='_blank'
        >
          Click Here{' '}
          <FontAwesomeIcon
            icon={faUpRightFromSquare}
            className='text-sm w-3 h-3 inline'
          />
        </Link>
      </p>
      <Link
        href={`/projects/${project._id}`}
        className='block p-3 text-center bg-slate-700 hover:bg-slate-600 transition text-yellow-400 rounded-lg'
      >
        Details
      </Link>
    </div>
  );
};

export default Project;
