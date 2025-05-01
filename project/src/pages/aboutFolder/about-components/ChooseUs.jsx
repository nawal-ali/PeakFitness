export default function ChooseUs() {
  const text_color = "#CB8778";
  return (
    <>
      <h1 style={{ color: text_color }} className="mb-5">
        Why Choose Us?
      </h1>
      <div className="row g-0">
        <div className="col-12 col-sm-6 col-md-4">
          <img src="./imgs/choose_1.png" alt="" className="w-100" />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="p-0 ps-sm-3 p-md-3 fs-3 fs-md-1">
            <span style={{ color: text_color }}>At PeakFitness</span> effort
            turns into achievement, and strength becomes a lifestyle!
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <img src="./imgs/choose_3.png" alt="" className="w-100" />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="p-0 ps-sm-3 p-md-3 fs-3 fs-md-1">
            <span style={{ color: text_color }}>Because</span> you deserve the
            best, we provide a complete fitness environment to help you achieve
            your goals!
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <img src="./imgs/choose_2.png" alt="" className="w-100" />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="p-0 ps-sm-3 p-md-3 fs-3 fs-md-1">
            <span style={{ color: text_color }}>
              We don&apos;t just offer workouts
            </span>{" "}
            we provide a full experience to boost your health and fitness!
          </p>
        </div>

        {/* {[...Array(6)].map((_, i) => (
          <div className="col-12 col-sm-6 col-md-4" key={i}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="./imgs/choose-1.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
}
