import Navbar from "../../assets/navFolder/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SliderFP.css";

const Slider_FP = () => {
    const [islogged, setIsLogged] = useState(() => {
    return localStorage.getItem("islogged") === "true";
  });
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
        " \"Gain Weight, Stay Explore Key Strong ! \" Strategies To Increase Your Weight While Staying Healthy And Active",
      color: "#ec7e4a",
      thumbnailImg: "/public/imgs/Weight-gain.png",
      link: "/weight-gain-details",
    },
    {
      id: 1,
      name: "Weight Loss",
      description: "\"Smart Strategies For Shedding Extra Pounds!\" Practical Advice To Help You Reach Your Ideal Weight.",
      color: "#4aec7e",
      thumbnailImg: "/public/imgs/Weight-loss.png",
      link: "/weight-loss-details",
    },
    {
      id: 2,
      name: "Muscle Gain",
      description:'"Gain Muscle, Boost Strength And Transform Your Physique With Science-Backed Strategies."',
      color: "#7e4aec",
      thumbnailImg: "/public/imgs/Muscle-gain.png",
      link: "/muscle-gain-details",
    },
  ];

  useEffect(() => {
    document.title = items[selectedItem].name;
  }, [selectedItem]);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedItem]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
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
    }, 500); // Short delay to allow fade-out
  };

  const handleDotClick = (index) => {
    setSelectedItem(index);
  };

  const currentItem = items[selectedItem];
  return (
    <>
      <Navbar showSearch={false} showBackground={false} islogged={islogged} setIsLogged={setIsLogged} darkmenu={"white"} />
      <div className={`carousel-PT carousel-PT-SFP`}>
        <div
          className={`content-overlay content-overlay-SFP ${
            isReadMoreClicked ? "hide hide-SFP" : ""
          }`}
        >
          <div
            className={`title-PT title-PT-SFP ${
              isAnimating ? "animate animate-SFP" : ""
            }`}
          >
            {currentItem.name}
          </div>
          <div
            className={`description-PT description-PT-SFP ${
              isAnimating ? "animate animate-SFP" : ""
            }`}
          >
            {currentItem.description}
          </div>

          <button
            type="button"
            className={`read-more-btn read-more-btn-SFP ${
              isAnimating ? "animate animate-SFP" : ""
            }`}
            onClick={handleReadMore}
          >
            Read more
          </button>
        </div>

        <div className={`slider-container slider-container-SFP`}>
          <div className={`list-PT list-PT-SFP`}>
            {items.map((item, index) => {
              let position =
                (index - selectedItem + items.length) % items.length;
              let transformValue = "";
              let isActive = index === selectedItem;

              // Responsive transform values based on screen width
              if (screenWidth >= 2500) {
                if (position === 0) {
                  transformValue = `translateX(0) scale(1)`;
                } else if (position === 1) {
                  transformValue = `translateX(550px) scale(0.6)`;
                } else if (position === 2) {
                  transformValue = `translateX(-550px) scale(0.6)`;
                } else {
                  transformValue = `translateX(${
                    position > 1 ? "1100px" : "-1100px"
                  }) scale(0)`;
                }
              } else if (screenWidth >= 1440) {
                if (position === 0) {
                  transformValue = `translateX(0) scale(1)`;
                } else if (position === 1) {
                  transformValue = `translateX(280px) scale(0.5)`;
                } else if (position === 2) {
                  transformValue = `translateX(-280px) scale(0.5)`;
                } else {
                  transformValue = `translateX(${
                    position > 1 ? "600px" : "-600px"
                  }) scale(0)`;
                }
              } else if (screenWidth >= 1024) {
                if (position === 0) {
                  transformValue = `translateX(0) scale(1)`;
                } else if (position === 1) {
                  transformValue = `translateX(240px) scale(0.5)`;
                } else if (position === 2) {
                  transformValue = `translateX(-240px) scale(0.5)`;
                } else {
                  transformValue = `translateX(${
                    position > 1 ? "500px" : "-500px"
                  }) scale(0)`;
                }
              } else if (screenWidth >= 768) {
                if (position === 0) {
                  transformValue = `translateX(0) scale(1)`;
                } else if (position === 1) {
                  transformValue = `translateX(200px) scale(0.5)`;
                } else if (position === 2) {
                  transformValue = `translateX(-200px) scale(0.5)`;
                } else {
                  transformValue = `translateX(${
                    position > 1 ? "400px" : "-400px"
                  }) scale(0)`;
                }
              } else if (screenWidth >= 425) {
                if (position === 0) {
                  transformValue = `translateX(0) scale(1)`;
                } else if (position === 1) {
                  transformValue = `translateX(160px) scale(0.5)`;
                } else if (position === 2) {
                  transformValue = `translateX(-160px) scale(0.5)`;
                } else {
                  transformValue = `translateX(${
                    position > 1 ? "320px" : "-320px"
                  }) scale(0)`;
                }
              } else {
                if (position === 0) {
                  transformValue = `translateX(0) scale(1)`;
                } else if (position === 1) {
                  transformValue = `translateX(120px) scale(0.5)`;
                } else if (position === 2) {
                  transformValue = `translateX(-120px) scale(0.5)`;
                } else {
                  transformValue = `translateX(${
                    position > 1 ? "240px" : "-240px"
                  }) scale(0)`;
                }
              }

              if (isReadMoreClicked) {
                transformValue = isActive
                  ? `translateX(0) scale(1)`
                  : `translateX(${position === 1 ? "280px" : "-280px"}) scale(0.5)`;
              }

              const transitionValue = isReadMoreClicked
                ? "opacity 0.5s ease"
                : "transform 0.5s ease, opacity 0.5s ease";

              return (
                <div
                  className={`item-PT item-PT-SFP ${
                    isActive ? "active-PT active-PT-SFP" : ""
                  } ${isReadMoreClicked ? "hide hide-SFP" : ""}`}
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
                  <div className={`content-PT content-PT-SFP`}>
                    <div
                      // className={`thumbnail-counter thumbnail-counter-SFP ${
                      //   isReadMoreClicked ? "hide hide-SFP" : ""
                      // }`}
                    >
                      {/* {String(index + 1).padStart(2, "0")} */}
                    </div>
                  </div>
                  <img
                    src={item.thumbnailImg}
                    alt={item.name}
                    className={`thumbnail-img thumbnail-img-SFP`}
                  />
                  {isActive && (
                    <div
                      className={`arrows-PT arrows-PT-SFP ${
                        isReadMoreClicked ? "hide hide-SFP" : ""
                      }`}
                    >
                      <button onClick={handlePrev}>‹</button>
                      <button onClick={handleNext}>›</button>
                    </div>
                  )}
                  
                  {/* Dots are placed inside each active item */}
                  {isActive && (
                    <div
                      className={`dots-PT dots-PT-SFP ${
                        isReadMoreClicked ? "hide hide-SFP" : ""
                      }`}
                    >
                      {items.map((_, dotIndex) => (
                        <span
                          key={dotIndex}
                          className={`dot dot-SFP ${
                            dotIndex === selectedItem ? "active-dot active-dot-SFP" : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDotClick(dotIndex);
                          }}
                        ></span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider_FP;
