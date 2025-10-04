import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardHeader1 from "../about/CardHeader1";
import TechSkill from "../ui/TechSkill";
import FadeInWithExpantion from "../animations/FadeInWithExpantion";

export interface Project {
  id: number;
  trackId?: string;
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  Features: string[];
  technologies: { name: string; icon: string }[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <FadeInWithExpantion>
      <Card className="bg-gray-900 dark:bg-gray-800 text-gray-900 h-full dark:text-gray-100 shadow-lg shadow-indigo-700/50 border border-gray-300 dark:border-gray-700">
        <CardHeader>
          <CardTitle>
            <CardHeader1
              text={project.title}
              customStyle="text-lg sm:text-xl lg:text-2xl mb-4 lg:mb-6 "
            />
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="img h-[200px] mb-6">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full object-cover h-full rounded-md shadow-lg shadow-indigo-700 border border-gray-300 dark:border-gray-700"
            />
          </div>
          <ul className="text-sm sm:text-base font-medium border-y border-gray-300 dark:border-gray-700 mb-4 py-4 space-y-2">
            <CardHeader1
              text="Features: "
              customStyle="text-md sm:text-lg lg:text-xl "
              icon="⚡"
            />
            {project.Features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-1 before:content-['📍'] before:mr-1"
              >
                {feature}
              </li>
            ))}
          </ul>
          <CardHeader1
            text="Technologies: "
            customStyle="text-md sm:text-lg lg:text-xl "
            icon="🛠️"
          />
          <ul className="grid grid-cols-2 pt-3 gap-2">
            {project.technologies.map((tech, index) => (
              <li key={index} className="flex items-center gap-2 min-w-[160px]">
                <TechSkill name={tech.name} icon={tech.icon} />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </FadeInWithExpantion>
  );
}
