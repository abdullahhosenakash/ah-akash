export default async function getProjects() {
  const res = await fetch('http://localhost:3000/api/projects');
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
}
