export default function Sec5_tips({
  sec5_tips_title,
  sec5_tips_coloredTitle,
  sec5_tips_list,
}) {
  return (
    <div style={{ marginTop: "150px" }}>
      <h1
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        {sec5_tips_title}
      </h1>
      <h3
        style={{ color: "#CB8778", textAlign: "center", marginBottom: "2rem" }}
      >
        {sec5_tips_coloredTitle}
      </h3>
      <div
        style={{
          backgroundImage: 'Url("./imgs/sec5_tips.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "7% 10%",
        }}
      >
        <div className="row">
          {sec5_tips_list.map((point, index) => {
            return (
              <div
                className="col-12 col-md-6 text-center my-3 fw-bold fs-4"
                key={index}
              >
                <div
                  className="p-3 rounded"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.53)" }}
                >
                  <p>{point.title}</p>
                  <p>{point.text}</p>
                </div>
              </div>
            );
          })}

          {/* <div className="col-12 col-md-6">
            <p>{sec5_tips_list[1].title}</p>
            <p>{sec5_tips_list[1].text}</p>
          </div>
          <div className="col-12 col-md-6">
            <p>{sec5_tips_list[2].title}</p>
            <p>{sec5_tips_list[2].text}</p>
          </div>
          <div className="col-12 col-md-6">
            <p>{sec5_tips_list[3].title}</p>
            <p>{sec5_tips_list[3].text}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
