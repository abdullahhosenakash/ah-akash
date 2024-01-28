export default async function getProjects(_id) {
  const res = await fetch(`${process.env.HOST_URL}/api/projects/${_id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
}
