import "../cardFolder/card.css";
export default function card({ textContent, img }) {
  return (
    <>
      <div className="mt-5 h-100">
        <div
          className="cardd m-auto text-center text-light p-3 rounded-0 position-relative h-75 mt-5"
          style={{
            border: "3px solid #000000",
            width: "18rem",
            backgroundColor: "#FFFFFF",
          }}
        >
          <img src={img} className="card-img-top w-25 m-auto" alt="..." />
          <div className="card-body">
            <p className="card-text fs-3 mb-5" style={{ color: "#EC7E4A" }}>
              {textContent}
            </p>
            {/* href="#",link-underline link-underline-opacity-0 */}
            <p
              style={{ color: "#000000" }}
              className=" position-absolute bottom-0 start-50 translate-middle mb-3"
            >
              start Now
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
