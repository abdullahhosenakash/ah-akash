const Projects = async () => {
  const response = await fetch('http://localhost:3000/api/projects');
  const projects = await response.json();
  console.log(projects);
  return (
    <section className='lg:px-20 px-3 mt-6'>
      <h2 className='text-2xl border-b-2 border-yellow-400 w-fit mx-auto'>
        My Projects
      </h2>
    </section>
  );
};

export default Projects;
