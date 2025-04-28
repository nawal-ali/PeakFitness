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
      path: "/Calorie",
    },
    {
      id: 2,
      name: "Ideal Weight",
      img: "./imgs/Ideal-Weight-image.png",
      color: "#ec7e4a",
      path: "/Weight",
    },
    {
      id: 3,
      name: "BMI",
      img: "./imgs/BMI-image.png",
      color: "#ec7e4a",
      path: "/BMI",
    },
    {
      id: 4,
      name: "Body Fat",
      img: "./imgs/Body-Fat-image.png",
      color: "#ec7e4a",
      path: "/BodyFat",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(items[0].name);
  const [showChoose, setShowChoose] = useState(true);
  const [isLastItem, setIsLastItem] = useState(false);

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
        const currentFirstItem = sliderRef.current.children[0];
        const currentId = parseInt(currentFirstItem.dataset.id);
        if (currentId === items[items.length - 1].id) {
          setIsLastItem(true);
        } else if (isLastItem) {
          setIsLastItem(false);
          resetToFirst();
        } else {
          setIsLastItem(false);
        }
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
        setIsLastItem(false);
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
        span.className = "thumbnail-span-SC";
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

  const resetToFirst = () => {
    if (!sliderRef.current || !thumbnailRef.current || !carouselRef.current)
      return;

    const sliderItems = Array.from(sliderRef.current.children);
    const thumbnailItems = Array.from(thumbnailRef.current.children);

    const orderedSliderItems = items.map((item) =>
      sliderItems.find(
        (sliderItem) => parseInt(sliderItem.dataset.id) === item.id
      )
    );
    sliderRef.current.innerHTML = "";
    orderedSliderItems.forEach((item) => sliderRef.current.appendChild(item));

    const filteredItems = items.filter(
      (item) =>
        item.id !== 0 &&
        item.id !== items.find((i) => i.name === selectedItem)?.id
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
      span.className = "thumbnail-span-SC";
      span.innerText = " Calculator";
      titleDiv.appendChild(span);

      contentDiv.appendChild(titleDiv);
      thumbDiv.appendChild(img);
      thumbDiv.appendChild(contentDiv);
      thumbnailRef.current.appendChild(thumbDiv);
    });

    carouselRef.current.classList.add("reset-SC");
    setTimeout(() => {
      carouselRef.current.classList.remove("reset-SC");
    }, 500);
  };

  const handleStartClick = (itemName) => {
    console.log(`Starting with ${itemName} calculator`);
  };

  return (
    <>
      {/* showSearch={false} showBackground={false}  */}
      <Navbar />
      <div className="carousel-SC position-relative" ref={carouselRef}>
        <div
          className="position-absolute w-100 h-100 top-0 start-0"
          style={{ backgroundColor: "#0000006b", zIndex: "2" }}
        >
          {" "}
        </div>
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
                    <div className="choose-calc-container-SC">
                      <span className="choose-calc-text-SC">
                        Choose Calculator
                      </span>
                      <span className="get-started-text-SC">
                        to Get Started
                      </span>
                    </div>
                  ) : (
                    <>
                      {item.name} <span>Calculator</span>
                    </>
                  )}
                </div>
                {item.id !== 0 && (
                  <Link to={item.path} className="start-button-SC">
                    Let&aposs get started
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
              <Link
                to={item.path} // ربط الـ thumbnail بـ path بتاع العنصر
                key={item.id}
                className="item-SC"
                data-id={item.id}
                onClick={(e) => {
                  e.preventDefault(); // لمنع التنقل المباشر لو عايزة السلايدر يتحرك أولاً
                  showSlider("select", item.id); // تحريك السلايدر
                  setTimeout(() => (window.location.href = item.path), 500); // التنقل بعد الأنيميشن
                }}
              >
                <img src={item.img} alt="thumbnail" />
                <div className="content-SC">
                  <div className="title-SC">
                    {item.name}{" "}
                    <span className="thumbnail-span-SC">Calculator</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Slider_C;
