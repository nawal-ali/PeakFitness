import "../cardFolder/card.css";
export default function card({ textContent, img }) {
  return (
    <>
      <div className="mt-5 h-100">
        <a href="" className="link-underline link-underline-opacity-0">
          <div
            className="card text-center text-light p-3 rounded-0 position-relative h-75 mt-5"
            style={{
              border: "2px solid #EC7E4A",
              width: "18rem",
              backgroundColor: "#202020",
            }}
          >
            <img src={img} className="card-img-top w-25 m-auto" alt="..." />
            <div className="card-body">
              <p className="card-text fs-3 mb-5">{textContent}</p>
              <a
                href="#"
                style={{ color: "#EC7E4A" }}
                className="link-underline link-underline-opacity-0 position-absolute bottom-0 start-50 translate-middle mb-3"
              >
                start Now
              </a>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
