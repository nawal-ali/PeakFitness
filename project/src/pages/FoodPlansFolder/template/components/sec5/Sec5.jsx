import PropTypes from "prop-types";
export default function Sec5({ sec5_coloredText, sec5_text }) {
  const text_color = "#CB8778";
  let coloredText = sec5_coloredText,
    text = sec5_text;
  return (
    <div className="sec5 fw-bold my-5">
      <h1 style={{ color: text_color, marginBottom: "2rem" }}>Carbohydrates</h1>
      <div className="row g-0">
        <div className="col-12 col-md-6 col-lg-4">
          <img src="./imgs/sec5_carbs_img1.png" alt="" className="w-100" />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <p className="p-0 ps-sm-3 p-md-3 fs-3 fs-md-1">
            <span style={{ color: text_color }}>{coloredText[0]} </span>{" "}
            {text[0]}
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <img src="./imgs/sec5_carbs_img2.png" alt="" className="w-100" />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <p className="p-0 ps-sm-3 p-md-3 fs-3 fs-md-1">
            <span style={{ color: text_color }}>{coloredText[1]} </span>{" "}
            {text[0]}
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <img src="./imgs/sec5_carbs_img3.png" alt="" className="w-100" />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <p className="p-0 ps-sm-3 p-md-3 fs-3 fs-md-1">
            <span style={{ color: text_color }}>{coloredText[2]} </span>{" "}
            {text[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

Sec5.propTypes = {
  sec5_coloredText: PropTypes.arrayOf(PropTypes.string).isRequired,
  sec5_text: PropTypes.arrayOf(PropTypes.string).isRequired,
};
