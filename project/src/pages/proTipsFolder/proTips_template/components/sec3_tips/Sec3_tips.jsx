export default function Sec3_tips({
  sec3_tips_coloredText,
  sec3_tips_text,
  sec3_tips_title,
  sec3_tips_colredTitle,
  sec3_tips_imgs,
}) {
  const text_color = "#CB8778";
  let coloredText = sec3_tips_coloredText,
    text = sec3_tips_text;
  return (
    <div className="fw-bold" style={{ marginTop: "150px" }}>
      <h1
        style={{ color: "black", marginBottom: "1rem", fontSize: "3.2rem" }}
        className="text-center fw-bold"
      >
        {sec3_tips_title}
      </h1>
      <h3
        style={{ color: text_color, textAlign: "center", marginBottom: "2rem" }}
      >
        {sec3_tips_colredTitle}
      </h3>
      <div className="row g-0">
        <div className="col-12 col-md-6 col-lg-3">
          <img
            src={sec3_tips_imgs[0]}
            alt=""
            className="w-100 p-2"
            style={{ border: "2px dashed black" }}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3 text-center d-flex justify-content-center align-items-center">
          {/* <p className="p-0 ps-sm-3 p-md-3 fs-3 fs-md-1"> */}
            <h3 className="p-0 ps-sm-3 p-md-3 fs-3 fs-md-1" style={{ color: text_color }}>{coloredText[1]} </h3> {text[1]}
          {/* </p> */}
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img
            src={sec3_tips_imgs[1]}
            alt=""
            className="w-100 p-2"
            style={{ border: "2px dashed black" }}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3 text-center d-flex justify-content-center align-items-center">
          {/* <p className="p-0 ps-sm-3 p-md-3 fs-3 fs-md-1"> */}
            <h3 className="p-0 ps-sm-3 p-md-3 fs-3 fs-md-1" style={{ color: text_color }}>{coloredText[3]} </h3> {text[3]}
          {/* </p> */}
        </div>
        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center">
          <div className="p-0 ps-sm-3 p-md-3 fs-3 fs-md-1 text-center ">
            <h3 style={{ color: text_color }}>{coloredText[0]} </h3>{" "}
            <p>{text[0]}</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img
            src={sec3_tips_imgs[3]}
            alt=""
            className="w-100 p-2"
            style={{ border: "2px dashed black" }}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center">
          <div className="p-0 ps-sm-3 p-md-3 fs-3 fs-md-1 text-center">
            <h3 style={{ color: text_color }}>{coloredText[2]} </h3>
            <p>{text[2]}</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img
            src={sec3_tips_imgs[2]}
            alt=""
            className="w-100 p-2"
            style={{ border: "2px dashed black" }}
          />
        </div>
      </div>
    </div>
  );
}
