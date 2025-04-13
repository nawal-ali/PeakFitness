import { useState, useEffect } from "react";
import { Carousel } from "nuka-carousel";
import "../comments/comments.css";

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=20")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  const carouselSettings = {
    wrapAround: true,
    autoplay: true,
    autoplayInterval: 3000,
    pauseOnHover: true,
    slidesToScroll: 1,
    defaultControlsConfig: {
      pagingDotsStyle: {
        fill: "#EC7E4A",
      },
    },
  };

  //<Carousel autoplay showDots> </Carousel>
  return (
    <section className="customer-reviews-section my-5">
      {/* 3️⃣ Heading */}
      <h1 className="text-center mb-4">
        What Our <span className="custom-color">Customers Say</span>
      </h1>

      <div className="reviews-container position-relative ">
        {/* 4️⃣ Orange Speech Bubble */}
        <div className="orange-bubble position-absolute top-50 start-50 w-75 h-100 translate-middle d-flex align-items-start gap-2 p-4">
          <img
            src="/imgs/Vector.png"
            alt="Speech Icon"
            className="speech-icon"
          />
          <p className="fs-4 text-white m-0">
            At This Part you can see a few of the many positive reviews of our
            customers
          </p>
        </div>

        {/* 5️⃣ Nuka Carousel with Fetched Comments */}
        <div className="carousel-wrapper pt-5 mt-5">
          <Carousel {...carouselSettings}>
            {comments.map((item) => (
              <div
                key={item.id}
                className="card text-center mx-1 p-3 text-light"
                style={{ backgroundColor: "#303030" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.body}</p>
                  <p className="text-muted">{item.email}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
