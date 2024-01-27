export default async function getProjects() {
  const res = await fetch(`${process.env.HOST}/api/projects`);
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
}
