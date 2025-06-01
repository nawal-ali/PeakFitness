import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../assets/navFolder/Navbar";
import Button from "../../assets/Button";
import Card from "../../assets/cardFolder/Card";
import Accordion from "../../assets/accordionFolder/Accordion";
import Footer from "../../assets/footerFolder/Footer";
import CommentCard from "../../assets/comments/CommentCard";
import ToTop from "../../assets/toTopBtn/toTop";
import "../homeFolder/home.css";

export default function Home() {
  const text_color = "#CB8778";
  let isLogged = localStorage.getItem("islogged");
  const [islogged, setIsLogged] = useState(() => {
    return localStorage.getItem("islogged") === "true";
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("islogged", islogged);
  }, [islogged]);

  useEffect(() => {
    // Add a slight delay to ensure localStorage is ready
    setTimeout(() => {
      const showLoginSuccess = localStorage.getItem("showLoginSuccess");
      console.log("showLoginSuccess:", showLoginSuccess); // Debug to check if flag is set
      if (showLoginSuccess === "true") {
        toast.success("You have logged in successfully!"); // English success message
        localStorage.removeItem("showLoginSuccess");
      }
    }, 100); // 100ms delay
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    if (!islogged && isLogged === "true") {
      toast.info("You have been logged out successfully!");
      localStorage.removeItem("token");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [islogged, navigate]);

  return (
    <>
      <ToTop />
      <Navbar islogged={islogged} setIsLogged={setIsLogged} showBackground={true} isExpanded={false} />
      <div
        className="min-vw-100  position-relative"
        style={{ marginTop: "9%" }}
      >
        <div className="row">
          <div className="col-12 col-md-4">
            <img src="./imgs/home_main_img.png" alt="" className="w-100" />
          </div>
          <div className="col-12 col-md-8">
            <h1 style={{  }} className="wellcome-text">Welcome to</h1>
            <h1 style={{ color: "#CB8778", }} className="wellcome-text">PeakFitness</h1>
            <h3 className="w-75 mt-5">
              The journey of a thousand miles begins with a single step! Take
              your first step towards better fitness and join us today.
            </h3>
            <NavLink
              to="/signup"
              className="btn btn-dark text-light px-4 fs-4 mt-5"
            >
              Join Us Now
            </NavLink>
          </div>
        </div>
      </div>
      <div className="row container-fluid section-1 margin-top-10 ">
        <div className="col-12 col-md-6 ps-4">
          <p style={{ fontSize: "2rem" }} className="mb-5">
            <span style={{ color: "", fontSize: "5rem" }}>Discover</span> <br />
            the path to your <br />
            <span style={{ color: text_color }}>ideal weight ,</span>
            <span style={{ color: text_color }}>better health ,</span>
            <br />
            <span style={{ color: text_color }}>
              sustainable,and a healthy lifestyle
            </span>{" "}
            . <br />
            At Pure Vitality, we&apos;re here to guide you with fitness
            programs, nutritional advice, and personalized support to help you
            achieve your goals and thrive every day!
          </p>
          <NavLink
            to="/exercises"
            >
          <Button
            content="Let's get started"
            customWidth="70%"
            customPadding="2%"
            customFontSize="1.4rem"
          />
          </NavLink>
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
      <div>
        <div className="angled-background margin-top-10 row p-5 position-relative">
          <div
            className="overlay position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "#00000087" }}
          ></div>
          <div className="col-12 col-md-4 custom-card card-3">
            <Link
              to="/Calcul propulsors"
              className="link-underline link-underline-opacity-0"
            >
              <Card
                img="/logo/calc_black_logo.svg"
                textContent="Track your progress accurately"
              />
            </Link>
          </div>
          <div className="col-12 col-md-4 custom-card card-2">
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
          <div className="col-12 col-md-4 custom-card card-1">
            <Link
              to="/exercises"
              className="link-underline link-underline-opacity-0"
            >
              <Card
                img="/logo/gym_black_logo.svg"
                textContent="Find the best exercises for your goals"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="comments-section margin-top-10 text-center w-75 m-auto">
        <CommentCard islogged={islogged} setIsLogged={setIsLogged} />
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
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}