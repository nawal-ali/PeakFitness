import Navbar from "../../assets/navFolder/Navbar";
import Button from "../../assets/Button";
import Card from "../../assets/cardFolder/Card";
import Accordion from "../../assets/accordionFolder/Accordion";
import Footer from "../../assets/footerFolder/Footer";
// import CommentCard from "../../assets/comments/CommentCard";
import "../homeFolder/home.css";
import { Link } from "react-router-dom";
import UncontrolledExample from "../../assets/carousel/Carousel ";
export default function home() {
  return (
    <>
      <Navbar />
      <div className="min-vw-100 min-vh-100 position-relative">
        <img
          src="./imgs/Rectangle 84.png"
          alt="Rectangle 84 the top section img"
          className="vw-100 min-vh-100 object-fit-cover"
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 style={{ fontSize: "500%" }}>Welcome to</h1>
          <h1 style={{ color: "#EC7E4A", fontSize: "400%" }}>PeakFitness</h1>
        </div>
      </div>
      <div className="row container-fluid section-1 margin-top-10 ">
        <div className="col-12 col-md-6 ps-4">
          <p style={{ fontSize: "2rem" }} className="mb-5">
            <span style={{ color: "#EC7E4A", fontSize: "5rem" }}>Discover</span>{" "}
            the path to your{" "}
            <span style={{ color: "#EC7E4A" }}>ideal weight</span>,{" "}
            <span style={{ color: "#EC7E4A" }}>better health</span>, and a{" "}
            <span style={{ color: "#EC7E4A" }}>
              sustainable, healthy lifestyle
            </span>
            . At Pure Vitality, we&apos;re here to guide you with fitness
            programs, nutritional advice, and personalized support to help you
            achieve your goals and thrive every day!
          </p>
          <Button
            content="Let's get started"
            customWidth="70%"
            customPadding="2%"
            customFontSize="1.4rem"
          />
        </div>
        <div className="col-12 col-md-6 text-end mt-5 mt-md-0">
          <model-viewer
            className="w-100 h-100"
            style={{ height: "400px", minHeight: "300px" }}
            src="/afi.glb"
            alt="plane"
            auto-rotate
            camera-controls
            ar
          ></model-viewer>
        </div>
      </div>
      <div style={{ marginTop: "20%" }}>
        <UncontrolledExample />
      </div>
      <div>
        <div className="angled-background margin-top-10 flex-column flex-md-row">
          <div className="mt-5 custom-card card-3">
            <Link
              to="/Calculators"
              className="link-underline link-underline-opacity-0"
            >
              <Card
                img="/logo/calc-white-logo.svg"
                textContent="Track your progress accurately"
              />
            </Link>
          </div>
          <div className="mt-5 custom-card card-2">
            <Link
              to="/FoodPlans"
              className="link-underline link-underline-opacity-0"
            >
              <Card
                img="/logo/food-white-logo.svg"
                textContent="Fuel your body the right way"
              />
            </Link>
          </div>
          <div className="mt-5 custom-card card-1">
            <Link
              to="/exercises"
              className="link-underline link-underline-opacity-0"
            >
              <Card
                img="/logo/gym-white-logo.svg"
                textContent="Find the best exercises for your goals"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="comments-section margin-top-10 text-center w-75 m-auto">
        {/* <CommentCard /> */}
      </div>
      <div className="container-fluid margin-top-10 text-center">
        <h1 className="mb-5">
          {" "}
          <span className="custom-color">Q</span>
          <span className="fs-3">&</span>
          <span className="custom-color">A</span>
        </h1>
        <Accordion />
      </div>
      <div className="margin-top-10">
        <Footer />
      </div>
    </>
  );
}
