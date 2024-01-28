'use client';

import Project from '@/app/projects/Project';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch('/api/projects');
      const result = await response.json();
      setProjects(result);
    };
    getProjects();
  }, []);
  return (
    <section className='lg:px-20 px-3 mt-6'>
      <h2 className='text-2xl border-b-2 border-yellow-400 w-fit mx-auto'>
        My Projects
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6'>
        {projects?.map((project) => (
          <Project project={project} key={project._id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
