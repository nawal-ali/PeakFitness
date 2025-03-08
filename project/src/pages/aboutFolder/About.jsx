import Navbar from "../../assets/navFolder/Navbar";
import Footer from "../../assets/footerFolder/Footer";
import MainDiv from "./about-components/MainDiv";
import IconsDiv from "./about-components/IconsDiv";
import ChooseUs from "./about-components/ChooseUs";
export default function about() {
  return (
    <>
      <Navbar showBackground={false} />
      <MainDiv />
      <div className="row mt-5 w-100">
        <div className="col-12">
          <IconsDiv />
        </div>
        <div style={{ width: "90%", margin: "6% auto" }}>
          <ChooseUs />
        </div>
      </div>
      <div className="row" style={{ width: "90%", margin: "6% auto" }}>
        <div className="col-12 col-md-6">
          <img
            src="./imgs/our-story.png"
            alt=""
            className="w-100 rounded mb-4 mb-md-0"
          />
        </div>
        <div className="col-12 col-md-6">
          <h1 style={{ color: "#EC7E4A" }}>OUR STORY</h1>
          <p className="fs-2">
            &quot;PeakFitness was born from a passion for strength, endurance,
            and transformation. What started as a small training space has grown
            into a community where individuals push limits, break barriers, and
            achieve greatness. Here, every drop of sweat tells a story of
            dedication, and every workout brings you closer to your best
            self.&quot;
          </p>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}
