import Projects from "../components/works/Projects";
import Certifacetes from "../components/works/Certifacetes";
import TechStack from "../components/works/TechStack";
import { useRef, useState } from "react";
import WorksNavBar from "@/components/works/WorksNavBar";
import Title from "@/components/ui/Title";
import ToDirection from "@/components/animations/ToDirection";

export default function Works() {
  const ref = useRef(null);

  const [viewedComponent, setViewedComponent] = useState("Projects");

  function changingViewedComponent(componentName: string) {
    setViewedComponent(componentName);
  }

  let componentToRender;
  switch (viewedComponent) {
    case "Projects":
      componentToRender = <Projects />;
      break;
    case "Certifacetes":
      componentToRender = <Certifacetes />;
      break;
    case "TechStack":
      componentToRender = <TechStack />;
      break;
    default:
      componentToRender = <Projects />;
  }

  return (
    <section
      id="services"
      className=" container mx-auto py-8 px-4 sm:px-6 lg:px-10"
    >
      <div ref={ref}>
        <Title title="Works" />
      </div>
      <ToDirection direction="up" duration={0.2}>
        <div className="mt-5 text-white">
          <WorksNavBar
            viewedComponent={viewedComponent}
            changingViewedComponent={changingViewedComponent}
          />
          {componentToRender}
        </div>
      </ToDirection>
    </section>
  );
}
