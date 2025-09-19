import Logo from "@/components/footer/Logo";
import bg from "../assets/footer/cta.avif";
import wings from "../assets/footer/wings.svg";
import ToDirection from "@/components/animations/ToDirection";
import { ContactMeDialog } from "@/components/footer/ContactMeDialog";

export default function Footer() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat mt-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* المحتوى */}
      <div className="relative z-10 text-white py-20 text-center">
        <div
          id="logo"
          className=" bg-contain bg-center bg-no-repeat w-[350px] h-[130px] mx-auto rounded-full mb-4 flex items-center justify-center"
          style={{ backgroundImage: `url(${wings})` }}
        >
          <Logo />
        </div>
        <div className="relative overflow-hidden">
          <ToDirection direction="left" repeat={false}>
            <h2 className="text-3xl lg:text-5xl  mb-4">
              TURNING <span className="font-bold">VISIONS</span> INTO{" "}
              <span className="font-bold">INTERACTIVE REALITY</span>
            </h2>
          </ToDirection>
          <ToDirection direction="right" repeat={false}>
            <h2 className="text-3xl  lg:text-5xl mb-4">
              <span className="font-semibold text-stone-300">CODE</span>
              ....
              <span className="font-bold text-stone-200">CREATE</span>
              ....
              <span className="font-black text-stone-100">INSPIRE.</span>
            </h2>
          </ToDirection>
        </div>
        <div id="dialog-container" className="my-6">
          <ContactMeDialog />
        </div>
        <div className="caption py-5 text-center">
          <h3 className="text-xl lg:text-2xl font-semibold text-white">
            Open to exciting full-time positions & freelance collaborations
          </h3>

          <p className="text-neutral-300 mt-2 lg:text-lg">
            Passionate about building interactive web applications and creating
            smooth,
            <br /> user-friendly experiences that bring ideas to life.
          </p>
        </div>
      </div>
    </div>
  );
}
