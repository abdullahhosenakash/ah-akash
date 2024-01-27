export default async function getProjects(_id) {
  const res = await fetch(`http://localhost:3000/api/projects/${_id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
}
