interface IProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: IProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      {" "}
      {children}
    </div>
  );
}
