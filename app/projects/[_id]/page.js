const ProjectDetails = ({ params }) => {
  const { _id } = params;
  console.log(_id);
  return <div>{_id}</div>;
};

export default ProjectDetails;
