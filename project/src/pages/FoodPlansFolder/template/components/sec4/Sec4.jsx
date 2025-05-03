import PropTypes from "prop-types";
import "./Sec4.css"; // Import the CSS file
export default function Sec4({ sec4_title, sec4_list }) {
  let lists = sec4_list,
    i = 1;
  return (
    <>
      <div className="row sec4" style={{ margin: "30rem 0 8rem 0" }}>
        <div className="col-12 col-lg-4">
          <img src="./imgs/sec4_main_bg.png" width={"100%"} alt="" />
        </div>
        <div className="col-12 col-lg-8 my-5 my-lg-0">
          <h1
            style={{
              color: "#CB8778",
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: "2%",
            }}
          >
            {sec4_title}
          </h1>
          <div className="fw-bold">
            {lists.map((point, index) => {
              return (
                <p key={index} className="fs-4 my-4">
                  <span className="fs-1 me-2">0{i++}</span>
                  <span style={{ color: "#CB8778" }}>{point.coloredText} </span>
                  {point.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
Sec4.propTypes = {
  sec4_title: PropTypes.string.isRequired,
  sec4_list: PropTypes.arrayOf(
    PropTypes.shape({
      coloredText: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
