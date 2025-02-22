// EducationCard.js
const EducationCard = ({ school, discipline, graduation, degree }) => {
  return (
    <div className="font-bodyFont w-full max-w-md p-4 sm:p-6 bg-gray-800 rounded-lg shadow-lg">
      <ol className="relative border-l border-designColor">
        <li className="mb-4 ml-4 sm:ml-6">
          <div className="absolute w-3 h-3 bg-designColor rounded-full mt-1.5 -left-1.5" />
          <time className="mb-1 text-xs sm:text-sm text-gray-400">{graduation}</time>
          <h3 className="text-base sm:text-lg font-semibold text-gray-200">{school}</h3>
          <p className="text-sm sm:text-base text-gray-400">{discipline}</p>
          <p className="text-designColor text-sm sm:text-base">{degree}</p>
        </li>
      </ol>
    </div>
  );
};

export default EducationCard;
