export function getBaseUrl() {
  if (typeof window !== 'undefined') return '';
  const vc = process.env.VERCEL_URL;
  if (vc) return `https://${vc}`;
  return 'http://localhost:3000';
}

export default async function getProjects() {
  // const res = await fetch(`${process.env.HOST_URL}/api/projects`);
  const res = await fetch(`${getBaseUrl()}/api/projects`);
  console.log(res);
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
}
