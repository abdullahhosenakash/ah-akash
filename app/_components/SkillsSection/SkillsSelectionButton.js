const SkillsSelectionButton = ({
  selectedSkills,
  setSelectedSkills,
  skill
}) => {
  return (
    <button
      className={`px-3 py-1 border-2 border-yellow-400 rounded-md capitalize ${
        selectedSkills === skill && 'bg-yellow-400 text-black'
      }`}
      onClick={() => setSelectedSkills(skill)}
    >
      {skill}
    </button>
  );
};

export default SkillsSelectionButton;
