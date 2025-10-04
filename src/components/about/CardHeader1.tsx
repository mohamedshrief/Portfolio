interface IProps {
  text: string;
  customStyle?: string;
  icon?: string;
}

export default function CardHeader1({ text, customStyle, icon }: IProps) {
  return (
    <h2
      className={`about-subtitle font-bold  flex items-center justify-start ${
        customStyle
          ? customStyle
          : "text-2xl sm:text-3xl lg:text-4xl mb-4 lg:mb-6"
      }`}
    >
      <span className="star mr-2 lg:mr-3 text-xl lg:text-2xl">
        {" "}
        {icon ? icon : "✦"}{" "}
      </span>
      {text}
    </h2>
  );
}
