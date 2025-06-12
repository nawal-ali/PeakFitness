import { useState, useEffect } from "react";
import { Carousel } from "nuka-carousel";
import axios from "axios";
import "../comments/comments.css";

export default function Comments({ islogged, setIsLogged }) {
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newComment, setNewComment] = useState("");

  const BASE_URL = "http://localhost:5000/api";
  useEffect(() => {
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


  const handleAddComment = async () => {
    try {
      const token = localStorage.getItem("token"); // Adjust if you store token differently

      const response = await axios.post(
        `${BASE_URL}/comments`,
        { text: newComment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
const updated = await axios.get(`${BASE_URL}/comments`);
    setComments(updated.data);
      // setComments([...comments, response.data]);
      setNewComment("");
      setShowModal(false);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  //wrapAround: true,
  // const carouselSettings = {
  //   autoplay: true,
  //   autoplayInterval: 3000,
  //   pauseOnHover: true,
  //   slidesToScroll: 1,
  //   defaultControlsConfig: {
  //     pagingDotsStyle: {
  //       fill: "#CB8778",
  //     },
  //   },
  // };

  //<Carousel autoplay showDots> </Carousel>
  return (
    <section className="customer-reviews-section my-5">
      {/* 3️⃣ Heading */}
      <h1 className="text-center mb-4 text-black">What Our Customers Say</h1>

      <div className="reviews-container position-relative ">
        {/* 4️⃣ Orange Speech Bubble */}
        {/* w-75 */}
        <div
          className="orange-bubble position-absolute top-50 start-50 h-100 translate-middle d-flex align-items-start justify-content-evenly p-4"
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
        {/* <div className="carousel-wrapper pt-5 mt-5 w-100 "> */}
          <div className="comments-marquee-wrapper pt-5 mt-5 w-100">
  <div className="comments-marquee">
    {[...comments, ...comments].map((item, index) => (
      <div
        key={index}
        className="comment-card mx-2 p-3 text-black"
        style={{
          backgroundColor: "#FFFFFF",
          border: "6px solid #CB8778",
          borderRadius: "20px",
          minWidth: "300px",
          maxWidth: "300px",
          flexShrink: 0,
        }}
      >
        <h4 className="mb-2">{item.user.username}</h4>
        <p className="m-0">{item.text}</p>
      </div>
    ))}
  </div>
</div>

          {/* <Carousel {...carouselSettings}>
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
                </div>
              </div>
            ))}
          </Carousel> */}
        {/* </div> */}
      </div>
        {islogged && (<button className="btn btn-dark text-light px-4 my-5"  onClick={() => setShowModal(true)}>ADD COMMENT</button>)}
        {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Your Comment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <textarea
                  className="form-control"
                  rows="4"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write your comment..."
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddComment}
                >
                  Add Comment
                </button>
              </div>
            </div>
          </div>
          {/* Background Overlay */}
          <div className="modal-backdrop fade show" style={{zIndex:-1}}></div>
        </div>
      )}
    </section>
  );
}
