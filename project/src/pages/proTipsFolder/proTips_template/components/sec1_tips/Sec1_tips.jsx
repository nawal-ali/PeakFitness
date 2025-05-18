export default function Sec1_tips({
  sec1_tips_img,
  sec1_tips_title,
  sec1_tips_desc,
}) {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center ps-5">
          <div>
            <h1 style={{ color: "#CB8778", fontSize: "6rem" }}>
              {sec1_tips_title}
            </h1>
            <h3 className="fw-bold">{sec1_tips_desc}</h3>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <img src={sec1_tips_img} className="w-100" alt="" />
        </div>
      </div>
    </>
  );
}
