import { useState, useEffect } from "react";
import { Carousel } from "nuka-carousel";
import axios from "axios";
import "../comments/comments.css";

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const BASE_URL = "http://localhost:5000/api";
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/comments`);
        console.log(response.data);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  //wrapAround: true,
  const carouselSettings = {
    autoplay: true,
    autoplayInterval: 3000,
    pauseOnHover: true,
    slidesToScroll: 1,
    defaultControlsConfig: {
      pagingDotsStyle: {
        fill: "#CB8778",
      },
    },
  };

  //<Carousel autoplay showDots> </Carousel>
  return (
    <section className="customer-reviews-section my-5">
      {/* 3️⃣ Heading */}
      <h1 className="text-center mb-4 text-black">What Our Customers Say</h1>

      <div className="reviews-container position-relative ">
        {/* 4️⃣ Orange Speech Bubble */}
        {/* w-75 */}
        <div
          className="orange-bubble position-absolute top-50 start-50 h-100 translate-middle d-flex align-items-start gap-2 p-4"
          style={{ width: "80%" }}
        >
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
        <div className="carousel-wrapper pt-5 mt-5 w-100 ">
          <Carousel {...carouselSettings}>
            {comments.map((item) => (
              <div
                key={item._id}
                className="cardd text-center mx-1 p-3 text-light"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "6px solid #CB8778",
                  borderRadius: "20px",
                }}
              >
                <div className="card-body text-black">
                  <h4 className="card-title mb-3">{item.user.username}</h4>
                  <p className="card-text">{item.text}</p>
                  {/* <p className="text-muted">{item.email}</p> */}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
