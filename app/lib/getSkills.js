async function getSkills() {
  const res = await fetch('skills.json');
  if (!res.ok) {
    throw new Error('Failed to fetch skills');
  }
  return res.json();
}
