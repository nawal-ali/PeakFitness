import Navbar from "../assets/Navbar";
import Button from "../assets/Button";
import Card from "../assets/Card";
import "../pages/home.css";
export default function home() {
  return (
    <>
      <div className="vw-100 position-relative">
        <Navbar />
        <img
          src="./imgs/Rectangle 84.png"
          alt="Rectangle 84 the top section img"
          className="vw-100 vh-100 object-fit-cover"
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 style={{ fontSize: "8rem" }}>Welcome to</h1>
          <h1 style={{ color: "#EC7E4A", fontSize: "8rem" }}>PeakFitness</h1>
        </div>
      </div>
      <div className="row container-fluid section-1">
        <div className="col-12 col-md-6 ps-4">
          <p style={{ fontSize: "2rem" }} className="mb-5">
            <span style={{ color: "#EC7E4A", fontSize: "5rem" }}>Discover</span>{" "}
            the path to your{" "}
            <span style={{ color: "#EC7E4A" }}>ideal weight</span>,{" "}
            <span style={{ color: "#EC7E4A" }}>better health</span>, and a{" "}
            <span style={{ color: "#EC7E4A" }}>
              sustainable, healthy lifestyle
            </span>
            . At Pure Vitality, we’re here to guide you with fitness programs,
            nutritional advice, and personalized support to help you achieve
            your goals and thrive every day!
          </p>
          <Button
            content="Let's get started"
            customWidth="40%"
            customPadding="2%"
            customFontSize="1.4rem"
          />
        </div>
        <div className="col-12 col-md-6 text-end">
          <model-viewer
            className="w-100 h-100"
            src="/afi.glb"
            alt="plane"
            auto-rotate
            camera-controls
            ar
          ></model-viewer>
        </div>
      </div>
      <div className="angled-background">
        <div className="mt-5 custom-card card-3">
          <Card
            img="/logo/calc-white-logo.svg"
            textContent="Track your progress accurately"
          />
        </div>
        <div className="mt-5 custom-card card-2">
          <Card
            img="/logo/food-white-logo.svg"
            textContent="Fuel your body the right way"
          />
        </div>
        <div className="mt-5 custom-card card-1">
          <Card
            img="/logo/gym-white-logo.svg"
            textContent="Find the best exercises for your goals"
          />
        </div>
      </div>
    </>
  );
}
