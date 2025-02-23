import "../footerFolder/footer.css";
export default function footer() {
  return (
    <>
      <div className="custom-footer p-5 rounded-top-circle">
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
              <a
                href="#"
                className="link-underline link-underline-opacity-0 link-light"
              >
                Home
              </a>
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
              <a
                href="#"
                className="link-underline link-underline-opacity-0 link-light"
              >
                Food plan
              </a>
            </p>
            <p>
              <a
                href="#"
                className="link-underline link-underline-opacity-0 link-light"
              >
                About Us
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-2 mt-5">
            <h4 className="custom-color">More</h4>
            <p>
              {" "}
              <a
                href="#"
                className="link-underline link-underline-opacity-0 link-light"
              >
                Our fitness Tools
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-2 mt-5">
            <h4 className="custom-color">Contact Us</h4>
          </div>
          <div className="col-12 col-sm-6 col-md-2 mt-5">
            <h4 className="custom-color">Share Us</h4>
          </div>
        </div>
      </div>
    </>
  );
}
