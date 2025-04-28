import "../footerFolder/footer.css";
import { Link } from "react-router-dom";
export default function footer() {
  return (
    <>
      <div className="custom-footer px-5 pt-0 pb-2 bg-black">
        <div className="row pt-5 mt-0 mt-md-5  ms-5">
          {/* <div className="col-12 col-sm-6 col-md-3 col-lg-4 mt-5 p-sm-5 p-md-0">
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
          </div> */}
          <div className="col-12 col-md-3 mt-5">
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
          <div className="col-12 col-md-3 mt-5">
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
          <div className="col-12 col-md-3 mt-5">
            <h4 className="custom-color">Contact Us</h4>
            <p className="text-light">
              <span className="me-2">
                <img src="/logo/location.svg" alt="location" />
              </span>
              Egypt-Gharbia
            </p>
            <p className="text-light">
              <span className="me-2">
                <img src="/logo/phone.svg" alt="location" />
              </span>
              01020734920
            </p>
            <p className="text-light">
              <span className="me-2">
                <img src="/logo/mail.svg" alt="location" />
              </span>
              Pure Vitality@gmail.com
            </p>
          </div>
          <div className="col-12 col-md-3 mt-5">
            <h4 className="custom-color">Share Us</h4>
            <div className="d-flex gap-4">
              <a href="#">
                <img src="/logo/facebook.svg" alt="facebook" />
              </a>
              <a href="#">
                <img src="/logo/insta.svg" alt="insta" />
              </a>
              <a href="#">
                <img src="/logo/x.svg" alt="x" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center mt-5 text-light">
          © 2024 Pure Vitality, Inc. All Rights Reserved
        </p>
      </div>
    </>
  );
}
