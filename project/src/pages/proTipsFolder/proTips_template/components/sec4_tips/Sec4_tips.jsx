export default function Sec4_tips({
  sec4_tips_title,
  sec4_tips_img,
  sec4_tips_list,
}) {
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="row">
        <div className="col-12 col-md-6">
          <h1
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "3rem",
              borderLeft: "10px solid #CB8778",
              paddingLeft: "15px",
            }}
          >
            {sec4_tips_title}
          </h1>
          <div>
            {sec4_tips_list.map((point, index) => {
              return (
                <ul key={index} className="ps-5">
                  <li className="my-4 fs-4">{point}</li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src={sec4_tips_img} alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
}
