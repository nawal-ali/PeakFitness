import Navbar from "../assets/Navbar";
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
      <div className="row mt-5 container-fluid">
        <div className="col-12 col-md-6">
          <p style={{ fontSize: "2rem" }} className="ps-4 w-75">
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
        </div>
      </div>
    </>
  );
}
