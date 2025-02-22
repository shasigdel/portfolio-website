const EducationCard = ({ school, discipline, graduation, degree }) => {
  return (
    <div className="font-bodyFont w-96 p-6 bg-gray-800 rounded-lg shadow-lg">
      <ol className="relative border-l border-designColor">
        <li className="mb-6 ml-6">
          <div className="absolute w-3 h-3 bg-designColor rounded-full mt-1.5 -left-1.5"></div>
          <time className="mb-1 text-sm text-gray-400">{graduation}</time>
          <h3 className="text-lg font-semibold text-gray-200">{school}</h3>
          <p className="text-base text-gray-400">{discipline}</p>
          <p className="text-designColor">{degree}</p>
        </li>
      </ol>
    </div>
  );
};

export default EducationCard;
