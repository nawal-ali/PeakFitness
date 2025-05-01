export default function MainDiv() {
  return (
    <div
      className="min-vh-100 min-vw-100 position-relative d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url("./imgs/about_us_main_bg.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <img
        src="./imgs/about-us-main-bg.jpeg"
        alt=""
        className="object-fit-cover"
      /> */}
      {/* position-absolute top-50 start-50 translate-middle */}
      {/* <div
        className=" vw-100 vh-100  d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#0000009c" }}
      > */}
      <div>
        <p
          style={{ fontSize: "6rem", marginTop: "7%" }}
          className="text-center text-light"
        >
          About Us
        </p>
        <p
          style={{ fontSize: "2rem" }}
          className="w-75 m-auto text-light text-center"
        >
          Reach out to us with any questions or concerns you may have, and
          we&apos;ll be happy to help
        </p>
        <div className="w-75 m-auto text-center mt-4">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#CB8778",
                color: "#CB8778",
                display: "inline-block",
                transform: "skewX(-40deg)",
                margin: "7px", // Optional spacing
                width: "30px", // Adjust width
                height: "30px", // Adjust height
              }}
            >
              .
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
