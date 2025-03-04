// import Navbar from "../../assets/navFolder/Navbar";
// import "./calc.css";
// import { Link } from "react-router-dom";

// export default function Calculators() {
//   return (
//     <>
//       <Navbar showSearch={false} />
//       {/* if u want to keep the search bar just delete  showSearch={false}*/}

//       {/* write all code within this div because nav has fixed position
//        and content will be placed bahind it if it does not have margin top */}
//       <div style={{ marginTop: "9%" }}>
//         {/* here are all the calulators routes */}
//         <Link to="/BMI">
//           <button style={{ backgroundColor: "red" }}>to BMI</button>
//         </Link>
//         <Link to="/BodyFat">
//           <button style={{ backgroundColor: "red" }}>to body fat</button>
//         </Link>
//         <Link to="/Calorie">
//           <button style={{ backgroundColor: "red" }}>to Calorie</button>
//         </Link>
//         <Link to="/Weight">
//           <button style={{ backgroundColor: "red" }}>to weight</button>
//         </Link>
//       </div>
//     </>
//   );
// }

import { useRef, useState, useEffect } from "react";
import Navbar from "../../assets/navFolder/Navbar";
import { Link } from "react-router-dom";
import "./calc.css";

const Slider_C = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);

  const items = [
    {
      id: 0,
      name: "Choose Calculator",
      subtitle: "to Get Started",
      img: "./imgs/choose-calc-image.png",
      color: "#ec7e4a",
    },
    {
      id: 1,
      name: "Calorie",
      img: "./imgs/Calorie-image.png",
      color: "#ec7e4a",
    },
    {
      id: 2,
      name: "Ideal Weight",
      img: "./imgs/Ideal-Weight-image.png",
      color: "#ec7e4a",
    },
    {
      id: 3,
      name: "BMI",
      img: "./imgs/BMI-image.png",
      color: "#ec7e4a",
    },
    {
      id: 4,
      name: "Body Fat",
      img: "./imgs/Body-Fat-image.png",
      color: "#ec7e4a",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(items[0].name);
  const [showChoose, setShowChoose] = useState(true);

  useEffect(() => {
    setSelectedItem(items[0].name);
  }, []);

  const showSlider = (type, index = null) => {
    if (!sliderRef.current || !thumbnailRef.current || !carouselRef.current)
      return;

    const sliderItems = Array.from(sliderRef.current.children);
    let thumbnailItems = Array.from(thumbnailRef.current.children);

    if (index !== null && index !== 0) {
      setShowChoose(false);
    }

    if (type === "next") {
      const firstItem = sliderItems.shift();
      sliderRef.current.appendChild(firstItem);

      if (thumbnailItems.length > 0) {
        const firstThumbnail = thumbnailItems.shift();
        thumbnailRef.current.appendChild(firstThumbnail);
      }
      carouselRef.current.classList.add("next-SC");
      setTimeout(() => {
        carouselRef.current.classList.remove("next-SC");
      }, 500);
    } else if (type === "prev") {
      const lastItem = sliderItems.pop();
      sliderRef.current.prepend(lastItem);

      if (thumbnailItems.length > 0) {
        const lastThumbnail = thumbnailItems.pop();
        thumbnailRef.current.prepend(lastThumbnail);
      }
      carouselRef.current.classList.add("prev-SC");
      setTimeout(() => {
        carouselRef.current.classList.remove("prev-SC");
      }, 500);
    } else if (type === "select" && index !== null) {
      const selectedItemElement = sliderItems.find(
        (item) => parseInt(item.dataset.id) === index
      );
      if (selectedItemElement) {
        sliderItems.forEach((item) => item.classList.remove("active-SC"));
        selectedItemElement.classList.add("active-SC");
        sliderRef.current.prepend(selectedItemElement);
      }

      const chooseElement = sliderRef.current.querySelector(`[data-id="0"]`);
      if (chooseElement) chooseElement.remove();

      const filteredItems = items.filter(
        (item) => item.id !== 0 && item.id !== index
      );

      thumbnailRef.current.innerHTML = "";

      filteredItems.forEach((item) => {
        const thumbDiv = document.createElement("div");
        thumbDiv.className = "item-SC";
        thumbDiv.setAttribute("data-id", item.id);
        thumbDiv.onclick = () => showSlider("select", item.id);

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = "thumbnail";

        const contentDiv = document.createElement("div");
        contentDiv.className = "content-SC";

        const titleDiv = document.createElement("div");
        titleDiv.className = "title-SC";
        titleDiv.innerText = item.name;

        const span = document.createElement("span");
        span.style.color = item.color;
        span.innerText = " Calculator";
        titleDiv.appendChild(span);

        const button = document.createElement("button");
        button.className = "start-button-SC";
        button.innerText = "Lets get started";
        button.onclick = () => handleStartClick(item.name);

        contentDiv.appendChild(titleDiv);
        contentDiv.appendChild(button);
        thumbDiv.appendChild(img);
        thumbDiv.appendChild(contentDiv);
        thumbnailRef.current.appendChild(thumbDiv);
      });

      carouselRef.current.classList.add("next-SC");
      setTimeout(() => {
        carouselRef.current.classList.remove("next-SC");
      }, 500);
      setSelectedItem(items[index].name);
    }
  };

  const handleStartClick = (itemName) => {
    console.log(`Starting with ${itemName} calculator`);
  };

  return (
    <>
      <Navbar showSearch={false} />
      <div className="carousel-SC" ref={carouselRef}>
        <>
          <div className="arrows-SC">
            <button id="prev" onClick={() => showSlider("prev")}>
              {"<"}
            </button>
            <button id="next" onClick={() => showSlider("next")}>
              {">"}
            </button>
          </div>

          <div className="list-SC" ref={sliderRef}>
            {items.map((item) => (
              <div
                className={`item-SC ${
                  item.name === selectedItem ? "active-SC" : ""
                }`}
                key={item.id}
                data-id={item.id}
              >
                <img src={item.img} alt={`${item.name} calculator`} />
                <div className="content-SC">
                  <div className="title-SC">
                    {item.id === 0 ? (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ color: item.color }}>
                          Choose Calculator
                        </span>
                        <span
                          style={{
                            color: "#fff",
                            textWrap: "nowrap",
                            marginRight: "-100px",
                          }}
                        >
                          to Get Started
                        </span>
                      </div>
                    ) : (
                      <>
                        {item.name}{" "}
                        <span style={{ color: item.color }}>Calculator</span>
                      </>
                    )}
                  </div>
                  {item.id !== 0 && (
                    <Link
                      to={`/${item.name.toLowerCase().replace(" ", "-")}`}
                      className="start-button-SC"
                    >
                      Let&apos;s get started
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="thumbnail-SC" ref={thumbnailRef}>
            {items
              .filter(
                (item) =>
                  item.id !== 0 &&
                  item.id !== items.find((i) => i.name === selectedItem)?.id
              )
              .map((item) => (
                <div
                  className="item-SC"
                  key={item.id}
                  data-id={item.id}
                  onClick={() => showSlider("select", item.id)}
                >
                  <img src={item.img} alt="thumbnail" />
                  <div className="content-SC">
                    <div className="title-SC">
                      {item.id === 0 ? (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <span style={{ color: item.color }}>
                            Choose Calculator
                          </span>
                          <span style={{ color: "#fff", textWrap: "nowrap" }}>
                            to Get Started
                          </span>
                        </div>
                      ) : (
                        <>
                          {item.name}{" "}
                          <span style={{ color: item.color }}>Calculator</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      </div>
    </>
  );
};

export default Slider_C;
