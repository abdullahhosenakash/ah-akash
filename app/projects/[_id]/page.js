const ProjectDetails = async ({ params }) => {
  // const project = await import('@/app/api/projects/route');
  // const data = await project.GET();
  const { _id } = params;
  // console.log(await data.json());
  return <div>{_id}</div>;
};

export default ProjectDetails;
