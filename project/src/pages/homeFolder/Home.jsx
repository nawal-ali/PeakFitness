import Navbar from "../../assets/navFolder/Navbar";
import Button from "../../assets/Button";
import Card from "../../assets/cardFolder/Card";
import Accordion from "../../assets/accordionFolder/Accordion";
import Footer from "../../assets/footerFolder/Footer";
import CommentCard from "../../assets/comments/CommentCard";
import ToTop from "../../assets/toTopBtn/toTop";
import "../homeFolder/home.css";
import { Link } from "react-router-dom";
import UncontrolledExample from "../../assets/carousel/Carousel ";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    // Load particles.js script dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js";
    script.async = true;
    script.onload = initializeParticles;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeParticles = () => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80 },
          color: { value: "#9C2C1A" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#9C2C1A",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 2 },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            // onhover: { enable: true, mode: 'repulse' },
            // onclick: { enable: true, mode: 'push' }
          },
          modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }
  };

  return (
    <>
      <ToTop />
      <Navbar />
      <div className="min-vw-100 min-vh-100 position-relative">
        <div
          id="particles-js"
          style={{
            // position: "fixed",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#e6e6e6",
          }}
        ></div>
        {/* <img
          // src="./imgs/Rectangle 84.png"
          src="./imgs/main-bg.jpg"
          alt="Rectangle 84 the top section img"
          className="vw-100 min-vh-100 object-fit-cover"
        /> */}
        {/* <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(92, 91, 91, 0.4)" }} // Light white overlay
        ></div> */}
        <div
          className="position-absolute m-auto w-100 d-flex justify-content-center align-items-center"
          style={{ top: "20%" }}
        >
          <h1 style={{ fontSize: "5rem" }}>
            Welcome to <span style={{ color: "#751a12" }}>PeakFitness</span>
          </h1>
        </div>
      </div>
      <div className="row container-fluid section-1 margin-top-10 ">
        <div className="col-12 col-md-6 ps-4">
          <p style={{ fontSize: "2rem" }} className="mb-5">
            <span style={{ color: "#CB8778", fontSize: "5rem" }}>Discover</span>{" "}
            <br />
            the path to your <br />
            <span style={{ color: "#CB8778" }}>ideal weight ,</span>
            <span style={{ color: "#CB8778" }}>better health ,</span>
            <br />
            <span style={{ color: "#CB8778" }}>
              sustainable,and a healthy lifestyle
            </span>{" "}
            . <br />
            At Pure Vitality, we&apos;re here to guide you with fitness
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
            style={{ height: "700px", minHeight: "700px" }}
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
                img="/logo/calc_black_logo.svg"
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
                img="/logo/food_black_logo.svg"
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
        <CommentCard />
      </div>
      <div className="container-fluid margin-top-10 text-center">
        <h1 className="mb-3 text-black">Any questions? We got you</h1>
        <p className="fs-4 w-75 m-auto mb-5">
          Before you start your journey with us, we’ve gathered the most
          important questions and answers to help you get started with
          confidence.
        </p>
        <div className="row w-75 m-auto">
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
            <img src="/imgs/q&a_img.png" alt="" className="w-100" />
          </div>
          <div className="col-12 col-md-8">
            <Accordion />
          </div>
        </div>
      </div>
      <div className="margin-top-10">
        <Footer />
      </div>
    </>
  );
}
