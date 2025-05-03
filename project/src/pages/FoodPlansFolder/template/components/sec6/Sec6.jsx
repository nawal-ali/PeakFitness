import PropTypes from "prop-types";
export default function Sec6({ sec6_content, sec6_list }) {
  let content = sec6_content,
    list = sec6_list,
    i = 1;
  return (
    <>
      <div className="row" style={{ margin: "10rem 0" }}>
        <div
          className="col-12 col-lg-4 p-0"
          style={{ backgroundColor: "#EAE7E7" }}
        >
          {" "}
          <img src={content.img} width={"100%"} alt="" />
        </div>
        <div
          className="col-12 col-lg-8 my-5 my-lg-0 p-4"
          style={{ backgroundColor: "#EAE7E7" }}
        >
          <h1
            style={{
              color: "#CB8778",
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: "2%",
            }}
          >
            {content.title}
          </h1>
          <div className="fw-bold">
            {list.map((point, index) => {
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
Sec6.propTypes = {
  sec6_content: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      coloredText: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  sec6_list: PropTypes.arrayOf(
    PropTypes.shape({
      coloredText: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
