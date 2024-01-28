export default async function getProjects() {
  // const res = await fetch(`${process.env.HOST_URL}/api/projects`);
  const res = await fetch(`https://ah-akash.vercel.app/api/projects`);
  console.log(res);
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
}
