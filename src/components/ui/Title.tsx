import FadeInWithExpantion from "../animations/FadeInWithExpantion";

interface IProps {
  title: string;
  children?: React.ReactNode;
}

export default function Title({ title, children }: IProps) {
  return (
    <FadeInWithExpantion>
      <div className="relative p-10">
        <span className="absolute text-gray-400/25 text-6xl sm:text-8xl top-0 sm:-top-3 left-0 right-0 font-bold text-border-cyan">
          {title}
        </span>

        <h1 className="about-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 tracking-tight relative">
          {title}
        </h1>
        {children && children}
      </div>
    </FadeInWithExpantion>
  );
}
