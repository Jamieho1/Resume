import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-22 h-22 flex flex-col items-center" key={technology.name}>
          <div className="w-20 h-20 rounded-full bg-gray-200 mb-2 flex items-center justify-center">
            <img src={technology.icon} alt={technology.name} className="w-14 h-14 object-contain" />
          </div>
          <p className="text-center">{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
