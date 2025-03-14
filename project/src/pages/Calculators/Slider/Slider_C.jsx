import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./calc.css";

const Slider_C = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const [isLastItem, setIsLastItem] = useState(false); // تتبع إذا كنا عند آخر عنصر

  const items = [
  {id: 0,name: "Choose Calculator",subtitle: "to Get Started",img: "./imgs/choose-calc-image.png",color: "#ec7e4a"},
  {id: 1,name: "Calorie",img: "./imgs/Calorie-image.png",color: "#ec7e4a",path: "/Calorie"},
  {id: 2,name: "Ideal Weight",img: "./imgs/Ideal-Weight-image.png",color: "#ec7e4a",path: "/Weight"},
  {id: 3,name: "BMI",img: "./imgs/BMI-image.png",color: "#ec7e4a",path: "/BMI",},
  {id: 4,name: "Body Fat",img: "./imgs/Body-Fat-image.png",color: "#ec7e4a",path: "/BodyFat"},
  ];

  const [selectedItem, setSelectedItem] = useState(items[0].name);
  const [showChoose, setShowChoose] = useState(true);

  useEffect(() => {
    setSelectedItem(items[0].name);
  }, []);

  const showSlider = (type, index = null) => {
    if (!sliderRef.current || !thumbnailRef.current || !carouselRef.current) return;

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

        // Check if we are showing the last item
        const currentFirstItem = sliderRef.current.children[0];
        const currentId = parseInt(currentFirstItem.dataset.id);
        if (currentId === items[items.length - 1].id) {
          setIsLastItem(true); // نحدد إننا وصلنا لآخر عنصر
        } else if (isLastItem) {
          // إذا كنا عند آخر عنصر وضغطنا Next، نرجع للأول
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
        setIsLastItem(false); // Reset the flag when going back
      }, 500);
    } else if (type === "select" && index !== null) {
      const selectedItemElement = sliderItems.find(item => parseInt(item.dataset.id) === index);
      if (selectedItemElement) {
        sliderItems.forEach(item => item.classList.remove("active-SC"));
        selectedItemElement.classList.add("active-SC");
        sliderRef.current.prepend(selectedItemElement);
      }

      const chooseElement = sliderRef.current.querySelector(`[data-id="0"]`);
      if (chooseElement) chooseElement.remove();

      const filteredItems = items.filter(item => item.id !== 0 && item.id !== index);

      thumbnailRef.current.innerHTML = '';

      filteredItems.forEach(item => {
        const thumbDiv = document.createElement('div');
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
        const [firstPart, secondPart] = item.name.split(' ');
        titleDiv.innerHTML = `${firstPart} <span style="color: ${item.color}">${secondPart}</span>`;

        const button = document.createElement('button');
        button.className = 'start-button-PT';
        button.innerText = 'Read more';
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

    // Reorder slider to original order
    const orderedSliderItems = items.map(item => 
      sliderItems.find(sliderItem => parseInt(sliderItem.dataset.id) === item.id)
    );
    sliderRef.current.innerHTML = '';
    orderedSliderItems.forEach(item => sliderRef.current.appendChild(item));

    // Rebuild thumbnails
    const filteredItems = items.filter(item => item.id !== 0 && item.id !== items.find(i => i.name === selectedItem)?.id);
    thumbnailRef.current.innerHTML = '';
    filteredItems.forEach(item => {
      const thumbDiv = document.createElement('div');
      thumbDiv.className = 'item-SC';
      thumbDiv.setAttribute('data-id', item.id);
      thumbDiv.onclick = () => showSlider('select', item.id);

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = "thumbnail";

      const contentDiv = document.createElement("div");
      contentDiv.className = "content-SC";

      const titleDiv = document.createElement('div');
      titleDiv.className = 'title-SC';
      const [firstPart, secondPart] = item.name.split(' ');
      titleDiv.innerHTML = `${firstPart} <span style="color: ${item.color}">${secondPart}</span>`;

      thumbDiv.appendChild(img);
      thumbDiv.appendChild(contentDiv);
      contentDiv.appendChild(titleDiv);
      thumbnailRef.current.appendChild(thumbDiv);
    });

    // Add reset animation
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
      <div className="carousel-SC" ref={carouselRef}>
        <>
        <div className="arrows-SC">
          <button id="prev" onClick={() => showSlider('prev')}>{'<'}</button>
          <button id="next" onClick={() => showSlider('next')}>{'>'}</button>
        </div>

          <div className="list-SC" ref={sliderRef}>
            {items.map(item => (
              <div className={`item-SC ${item.name === selectedItem ? "active-SC" : "" }`} key={item.id} data-id={item.id}>
                <img src={item.img} alt={`${item.name} calculator`} />
                <div className="content-SC">
                  <div className="title-SC">
                    {item.id === 0 ? (
                      <div style={{display: "flex",flexDirection: "column",alignItems: "center",}}>
                        <span style={{ color: item.color }}>Choose Calculator</span>
                        <span style={{ color: "#fff", textWrap: "nowrap", marginRight: "-100px",}}>to Get Started</span>
                      </div>
                    ) : (
                      <>
                        {item.name}{" "}
                        <span style={{ color: item.color }}>Calculator</span>
                      </>
                    )}
                  </div>
                  {item.id !== 0 && (
                    <Link to={item.path} className="start-button-SC">
                      Let's get started
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="thumbnail-SC" ref={thumbnailRef}>
            {items
              .filter(item =>item.id !== 0 && item.id !== items.find(i => i.name === selectedItem)?.id)
              .map(item => (
                <div
                  className="item-SC"
                  key={item.id}
                  data-id={item.id}
                  onClick={() => showSlider("select", item.id)}
                >
                  <img src={item.img} alt="thumbnail" />
                  <div className="content-SC">
                    <div className="title-SC">
                      {item.name.split('')[0]}<span style={{ color: item.color }}>Calculator</span>
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