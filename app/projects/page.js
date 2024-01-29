import Project from '@/app/projects/Project';
import Link from 'next/link';

const Projects = async ({ from }) => {
  const projectsPromise = await import('@/app/api/projects/route');
  const response = await projectsPromise.GET();
  const data = await response.json();
  let projects = [];
  if (from === 'homepage') {
    for (let i = 0; i < 6; i++) {
      projects = [...projects, data[i]];
    }
  } else {
    projects = data;
  }

  return (
    <section className='lg:px-20 px-2 lg:mt-6 mt-3 mb-6'>
      <h2 className='text-2xl border-b-2 border-yellow-400 w-fit mx-auto'>
        My Projects
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-2 lg:mt-6 mt-2'>
        {projects?.map((project) => (
          <Project project={project} key={project._id} />
        ))}
      </div>
      {from === 'homepage' && (
        <Link
          href='/projects'
          className='block bg-slate-700 text-yellow-400 hover:bg-slate-600 hover:underline px-12 py-4 w-fit mx-auto mt-3 rounded-lg capitalize'
        >
          View all projects
        </Link>
      )}
    </section>
  );
};

export default Projects;
