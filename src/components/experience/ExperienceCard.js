const ExperienceCard = ({ year, company, role, location }) => {
  return (
    <div className="w-full md:w-[95%] lg:w-[50%] xl:w-[45%] p-6 bg-gray-800 rounded-lg shadow-lg">
      <ol className="relative border-l border-designColor pl-6">
        <li className="mb-2">
          <div className="absolute w-3 h-5 bg-designColor rounded-full mt-1.5 -left-1.5"></div>
          <time className="text-sm text-gray-400">{year}</time>
          <h3 className="text-xl font-semibold text-gray-200">{company}</h3>
          <p className="text-base text-gray-400">{location}</p>
          <p className="text-designColor font-medium">{role}</p>
        </li>
      </ol>
    </div>
  );
};

export default ExperienceCard;
