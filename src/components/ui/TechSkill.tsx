interface IProps {
  name: string;
  icon: string;
}

export default function TechSkill({ name, icon }: IProps) {
  return (
    <div>
      <span
        title={name}
        className="group inline-flex items-center gap-2 px-3 py-1 rounded-full  bg-gradient-to-br from-[#502c7c] to-indigo-700 text-white text-sm font-medium shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:border-cyan-400/50 hover:from-cyan-400/10 hover:to-transparent hover:text-white hover:shadow-cyan-400/20 hover:ring-1 hover:ring-cyan-400/30 hover:scale-[1.04] hover:-translate-y-[2px]"
      >
        {icon ? (
          <span className="shrink-0 text-white/70 text-sm  duration-300 group-hover:text-cyan-300 transition-transform group-hover:rotate-180">
            {icon && (
              <img src={icon} alt={name} className="w-6 h-6 object-contain" />
            )}
          </span>
        ) : null}
        <span className="transition-colors duration-300">{name}</span>
      </span>
    </div>
  );
}
