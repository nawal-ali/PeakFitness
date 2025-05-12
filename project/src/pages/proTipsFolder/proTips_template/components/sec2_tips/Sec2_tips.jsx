import PropTypes from "prop-types";
export default function Sec2_tips({
  sec2_tips_img,
  sec2_tips_title,
  sec2_tips_list,
}) {
  let lists = sec2_tips_list;
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="row">
        <div className="col-12 col-md-5 d-flex justify-content-end align-items-end">
          <img
            src={sec2_tips_img}
            alt=""
            className="w-100 p-3"
            style={{ border: "3px dashed black", borderRadius: "20%" }}
          />
        </div>
        <div className="col-12 col-md-7 ps-3 ps-md-5">
          <h1 className="text-black fw-bold my-2" style={{ fontSize: "3rem" }}>
            {sec2_tips_title}
          </h1>
          <div className="fw-bold">
            {lists.map((point, index) => {
              return (
                <div key={index} className="fs-4 my-4 d-flex ">
                  {/* <div className="me-2"> */}
                  <img
                    src={point.img}
                    className="border border-5 border-black rounded-circle align-self-center me-2 mt-2 p-3"
                    style={{ width: "120px" }}
                  ></img>
                  {/* </div> */}
                  <div>
                    <h2 style={{ color: "#CB8778" }}>{point.coloredText}</h2>
                    <p>{point.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
