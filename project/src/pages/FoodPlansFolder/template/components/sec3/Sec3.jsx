import "./sec3.css";
import PropTypes from "prop-types";
export default function Sec3({ sec3_title, sec3_description, sec3_cards }) {
  let cards = sec3_cards;
  return (
    <div
      className="sec3 position-relative w-100 vh-75 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: "url('./imgs/sec3_main_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: " 15% 0 8% 0",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.41)" }}
      ></div>
      {/* Your content here (optional) */}
      <div className="text-white text-center position-relative z-index-1 my-5">
        <h2 className="fw-bold mt-4">{sec3_title}</h2>
        <p className="mb-5 mt-3 fs-5 w-75 m-auto">{sec3_description}</p>
        <p className="mb-5" style={{ color: "transparent" }}>
          .
        </p>
      </div>
      <div className="row position-absolute top-50 w-100">
        {cards.map((card, index) => (
          <div className="col-12 col-md-6 my-3 col-xl-3" key={index}>
            <div
              className="d-flex justify-content-center align-items-center flex-column p-3 rounded my-0 my-md-5 text-center"
              style={{ backgroundColor: "#E2E2E2", height: "400px" }}
            >
              <img
                src={card.img}
                alt=""
                className="p-3 rounded-circle border border-2 border-black my-3"
              />
              <p className="fs-5 text-center">
                <span style={{ color: "#CB8778" }}>{card.coloredText}</span>
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Sec3.propTypes = {
  sec3_title: PropTypes.string.isRequired,
  sec3_description: PropTypes.string.isRequired,
  sec3_cards: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      coloredText: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
