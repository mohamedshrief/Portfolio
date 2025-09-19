import { useState } from "react";
import CardsLayout from "./CardsLayout";
import { projectsData } from "@/Data/WorksProjectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState<number>(3);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };
  const handleSeeLess = () => {
    setVisibleCount((prev) => prev - 3);
  };

  const allVisible = visibleCount >= projectsData.length;
  const minVisible = visibleCount <= 3;

  return (
    <>
      <CardsLayout>
        {projectsData.slice(0, visibleCount).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </CardsLayout>

      {/* الزر برا الـ Layout */}
      <div className="w-full flex justify-center gap-4">
        <button
          onClick={handleSeeMore}
          disabled={allVisible}
          className={` w-[200px] py-3 rounded-2xl text-white text-lg  shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:text-white hover:shadow-cyan-400/20 hover:scale-[1.04] hover:-translate-y-[2px] ${
            allVisible
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-gradient-to-br from-cyan-500 to-transparent hover:from-[#502c7c] hover:to-indigo-700"
          }`}
        >
          {allVisible ? "No More Projects" : "See More"}
        </button>
        <button
          onClick={handleSeeLess}
          disabled={minVisible}
          className={`w-[200px] py-3 rounded-2xl  bg-gradient-to-br  text-white text-lg  shadow-sm backdrop-blur-sm transition-all duration-300 ease-out   hover:text-white hover:shadow-cyan-400/20 hover:ring-1 hover:ring-cyan-400/30 hover:scale-[1.04] hover:-translate-y-[2px] ${
            minVisible
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "from-[#502c7c] to-indigo-700 hover:from-cyan-500 hover:to-transparent"
          }`}
        >
          See Less
        </button>
      </div>
    </>
  );
}
