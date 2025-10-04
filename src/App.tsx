import CustomNavbar from "./components/CustomNavbar";
import TechMarquee from "./components/TechMarquee";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Works from "./pages/Works";
// import Experiences from "./pages/experiences";
import aboutSecBg from "./assets/sectionBg.jpg";
import worksBg from "./assets/worksbg.webp";

function App() {
  return (
    <div className="min-h-screen bg-black ">
      <Home />
      <div className=" pt-20 md:pt-8  ">
        <CustomNavbar />
        <TechMarquee direction="toLeft" />
        <TechMarquee direction="toRight" />
        <section
          className="relative bg-cover bg-center bg-no-repeat mt-8"
          style={{ backgroundImage: `url(${aboutSecBg})` }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/90"></div>
          <About />
          {/* <Experiences /> */}
        </section>
        <TechMarquee direction="toLeft" />
        <TechMarquee direction="toRight" />
        <section
          className="relative bg-cover bg-center bg-no-repeat mt-8"
          style={{ backgroundImage: `url(${worksBg})` }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/90"></div>
          <Works />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
