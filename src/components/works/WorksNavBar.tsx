interface IProps {
  viewedComponent: string;
  changingViewedComponent: (componentName: string) => void;
}

export default function WorksNavBar({
  viewedComponent,
  changingViewedComponent,
}: IProps) {
  const activeStyle =
    "bg-gradient-to-bl from-[#6b45c4] to-cyan-300  scale-100 text-amber-300";
  const normalStyle = "bg-gradient-to-br from-[#6b45c4] to-cyan-500 scale-95";
  const commonStyle =
    " hover:bg-gradient-to-tr hover:from-[#6b45c4] hover:to-cyan-300 hover:scale-100  duration-300 p-3 shadow-teal-500 w-full md:w-1/3 text-center rounded-2xl";

  const liArray = ["Projects", "Certifacetes", "TechStack"];

  const renderedListItems = liArray.map((item) => (
    <li
      key={item}
      className={
        viewedComponent === item
          ? activeStyle + commonStyle
          : normalStyle + commonStyle
      }
      onClick={() => changingViewedComponent(item)}
    >
      {item}
    </li>
  ));

  return (
    <>
      <ul className=" w-full lg:w-2/3 px-10 flex flex-col md:flex-row justify-around gap-3 sm:gap-6 text-md sm:text-2xl font-extrabold  cursor-pointer border border-cyan-300 p-3 rounded-2xl mx-auto  ">
        {renderedListItems}
      </ul>
    </>
  );
}
