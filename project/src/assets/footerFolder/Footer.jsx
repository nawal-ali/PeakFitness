import "../footerFolder/footer.css";
import { Link } from "react-router-dom";
export default function footer() {
  return (
    <>
      <div className="custom-footer p-5 pb-0 rounded-top-circle">
        <div className="row pt-5 mt-0 mt-md-5 ">
          <div className="col-12 col-sm-6 col-md-3 col-lg-4 mt-5 p-sm-5 p-md-0">
            <div>
              <img src="/logoAndText.svg" alt="" className="w-50" />
            </div>
            <p>
              Discover the path to your ideal weight, better health, and a
              sustainable, healthy lifestyle. At Pure Vitality, we&apos;re here
              to guide you with fitness programs, nutritional advice, and
              personalized support to help you achieve your goals and thrive
              every day!
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-2 mt-5">
            <h4 className="custom-color">Site sections</h4>
            <p>
              <Link
                to="/"
                className="link-underline link-underline-opacity-0 link-light"
              >
                Home
              </Link>
            </p>
            <p>
              <a
                href="#"
                className="link-underline link-underline-opacity-0 link-light"
              >
                Programs
              </a>
            </p>
            <p>
              <Link
                to="/FoodPlans"
                className="link-underline link-underline-opacity-0 link-light"
              >
                Food plan
              </Link>
            </p>
            <p>
              <Link
                to="/About"
                className="link-underline link-underline-opacity-0 link-light"
              >
                About Us
              </Link>
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-2 mt-5">
            <h4 className="custom-color">More</h4>
            <p>
              {" "}
              <Link
                to="/Calculators"
                className="link-underline link-underline-opacity-0 link-light"
              >
                Our fitness Tools
              </Link>
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-2 mt-5">
            <h4 className="custom-color">Contact Us</h4>
          </div>
          <div className="col-12 col-sm-6 col-md-2 mt-5">
            <h4 className="custom-color">Share Us</h4>
          </div>
        </div>
        <p className="text-center mt-5">
          © 2024 Pure Vitality, Inc. All Rights Reserved
        </p>
      </div>
    </>
  );
}
