import "./MainBanner.css";
import PropTypes from "prop-types";
export default function MainBanner({ main_bg, title }) {
  return (
    <>
      <div
        className="main-banner vw-100 vh-100 position-relative"
        style={{
          backgroundImage: `url(${main_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div
          className="overlay position-absolute w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.365)" }}
        ></div> */}
        <div className="text-white position-absolute top-50 start-50 w-100 h-100 translate-middle d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="fw-bold main-title" style={{ fontSize: "10rem" }}>
            {title}
          </h1>
        </div>
        {/*------------------- icons row ------------------------- */}
        <div className="scroll icons-container d-flex flex-wrap justify-content-around my-5 position-absolute top-50 start-0 w-100 h-100">
          <a href="#scrollspyHeading1">
            <div
              className="text-center icon-container icon-1 "
              style={{ marginTop: "9rem" }}
            >
              <div
                className="w-75 m-auto p-5 rounded-circle border border-4 border-black"
                style={{ backgroundColor: "#CB8778" }}
              >
                <img src="./logo/tips_white.svg" alt="" className="w-100" />
              </div>
              <p className="fs-3 my-2 fw-bold">Genaral Tips</p>
            </div>
          </a>
          {/* ----------------------------------------------------- */}
          <a href="#scrollspyHeading2">
            <div
              className="text-center icon-container"
              style={{ marginTop: "12rem" }}
            >
              <div
                className="w-75 m-auto p-5 rounded-circle border border-4 border-black"
                style={{ backgroundColor: "#CB8778" }}
              >
                <img src="./logo/fats_white.svg" alt="" className="w-100" />
              </div>
              <p className="fs-3 my-2 fw-bold">Healthy Fats</p>
            </div>
          </a>
          {/* ----------------------------------------------------- */}
          <a href="#scrollspyHeading3">
            <div
              className="text-center icon-container"
              style={{ marginTop: "15rem" }}
            >
              <div
                className="w-75 m-auto p-5 rounded-circle border border-4 border-black"
                style={{ backgroundColor: "#CB8778" }}
              >
                <img src="./logo/protein_white.svg" alt="" className="w-100" />
              </div>
              <p className="fs-3 my-2 fw-bold">Protein</p>
            </div>
          </a>
          {/* ---------------------------------------------------- */}
          <a href="#scrollspyHeading4">
            <div
              className="text-center icon-container"
              style={{ marginTop: "12rem" }}
            >
              <div
                className="w-75 m-auto p-5 rounded-circle border border-4 border-black"
                style={{ backgroundColor: "#CB8778" }}
              >
                <img
                  src="./logo/carbohydrates_white.svg"
                  alt=""
                  className="w-100"
                />
              </div>
              <p className="fs-3 my-2 fw-bold">Carbohydrates</p>
            </div>
          </a>
          {/* --------------------------------------------------- */}
          <a href="#scrollspyHeading5">
            <div
              className="text-center icon-container"
              style={{ marginTop: "9rem" }}
            >
              <div
                className="w-75 m-auto p-5 rounded-circle border border-4 border-black"
                style={{ backgroundColor: "#CB8778" }}
              >
                <img
                  src="./logo/Calculate_white.svg"
                  alt=""
                  className="w-100"
                />
              </div>
              <p className="fs-3 my-2 fw-bold"> Calculate Calories</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
MainBanner.propTypes = {
  main_bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
