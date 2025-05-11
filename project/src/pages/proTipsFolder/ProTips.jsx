import Navbar from "../../assets/navFolder/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./protips_slider.css";

const Slider_PT = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isReadMoreClicked, setIsReadMoreClicked] = useState(false);
  const navigate = useNavigate();

  const items = [
    {
      id: 0,
      name: "Weight Gain",
      description:
        "Gaining Weight The Healthy Way Takes More Than Just Eating More. Discover Simple Tips To Increase Your Weight Safely And Effectively",
      color: "#ec7e4a",
      thumbnailImg: "/imgs/Pro-Tips-W-G.png",
      link: "/weight-gain-details",
    },
    {
      id: 1,
      name: "Weight Loss",
      description:
        "Losing Weight Is A Journey—These Simple Tips Make It Easier, Healthier, And More Sustainable",
      color: "#4aec7e",
      thumbnailImg: "/imgs/Pro-Tips-W-L.png",
      link: "/weight-loss-details",
    },
    {
      id: 2,
      name: "Muscle Gain",
      description:
        "Building Muscle Isn't Just About Lifting Weights. These Tips Will Help You Grow Stronger, Faster, And Smarter",
      color: "#7e4aec",
      thumbnailImg: "/imgs/Pro-Tips-M-G.png",
      link: "/muscle-gain-details",
    },
  ];

  useEffect(() => {
    document.title = items[selectedItem].name;
  }, [selectedItem]);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 2000);
    return () => clearTimeout(timer);
  }, [selectedItem]);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setSelectedItem((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setSelectedItem((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleReadMore = () => {
    const currentIndex = selectedItem;
    setIsReadMoreClicked(true);

    setTimeout(() => {
      const currentLink = items[currentIndex].link;
      navigate(currentLink, { replace: false });
    }, 500); // Match fade-out transition duration
  };

  const handleDotClick = (index) => {
    setSelectedItem(index);
  };

  const currentItem = items[selectedItem];
  return (
    <>
      <Navbar showSearch={false} showBackground={false} />
      <div className={`carousel-PT carousel-PT-SPT`}>
        <div
          className={`content-overlay content-overlay-SPT ${
            isReadMoreClicked ? "hide hide-SPT" : ""
          }`}
        >
          <div
            className={`title-PT title-PT-SPT ${
              isAnimating ? "animate animate-SPT" : ""
            }`}
          >
            {currentItem.name}
          </div>
          <div
            className={`description-PT description-PT-SPT ${
              isAnimating ? "animate animate-SPT" : ""
            }`}
          >
            {currentItem.description}
          </div>

          <button
            type="button"
            className={`read-more-btn read-more-btn-SPT ${
              isAnimating ? "animate animate-SPT" : ""
            }`}
            onClick={handleReadMore}
          >
            Read more
          </button>
        </div>

        <div className={`slider-container slider-container-SPT`}>
          <div className={`list-PT list-PT-SPT`}>
            {items.map((item, index) => {
              let position =
                (index - selectedItem + items.length) % items.length;
              let transformValue = "";
              let isActive = index === selectedItem;

              if (screenWidth >= 2500) {
                if (position === 0) {
                  transformValue = `translateX(0) scale(1)`;
                } else if (position === 1) {
                  transformValue = `translateX(450px) scale(0.8)`;
                } else if (position === 2) {
                  transformValue = `translateX(-450px) scale(0.8)`;
                } else {
                  transformValue = `translateX(${
                    position > 1 ? "900px" : "-900px"
                  }) scale(0)`;
                }
              } else {
                if (position === 0) {
                  transformValue = `translateX(0) scale(1)`;
                } else if (position === 1) {
                  transformValue = `translateX(270px) scale(0.7)`;
                } else if (position === 2) {
                  transformValue = `translateX(-270px) scale(0.7)`;
                } else {
                  transformValue = `translateX(${
                    position > 1 ? "640px" : "-640px"
                  }) scale(0)`;
                }
              }

              const transitionValue = "transform 0.5s ease, opacity 0.5s ease";

              return (
                <div
                  className={`item-PT item-PT-SPT ${
                    isActive ? "active-PT active-PT-SPT" : ""
                  }`}
                  key={item.id}
                  style={{
                    transform: transformValue,
                    opacity: position <= 2 ? (position === 0 ? 1 : 0.6) : 0,
                    zIndex:
                      position === 0
                        ? 10
                        : position === 1
                        ? 5
                        : position === 2
                        ? 5
                        : 0,
                    transition: transitionValue,
                  }}
                >
                  <div className={`content-PT content-PT-SPT`}>
                    <div
                      className={`thumbnail-counter thumbnail-counter-SPT ${
                        isReadMoreClicked ? "hide hide-SPT" : ""
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <img
                    src={item.thumbnailImg}
                    alt={item.name}
                    className={`thumbnail-img thumbnail-img-SPT`}
                  />
                  {isActive && (
                    <div
                      className={`arrows-PT arrows-PT-SPT ${
                        isReadMoreClicked ? "hide hide-SPT" : ""
                      }`}
                    >
                      <button onClick={handlePrev}>‹</button>
                      <button onClick={handleNext}>›</button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`dots-PT dots-PT-SPT ${
            isReadMoreClicked ? "hide hide-SPT" : ""
          }`}
        >
          {items.map((_, index) => (
            <span
              key={index}
              className={`dot dot-SPT ${
                index === selectedItem ? "active-dot active-dot-SPT" : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider_PT;