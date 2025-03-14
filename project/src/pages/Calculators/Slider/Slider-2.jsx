import React, { useRef, useState, useEffect } from 'react';
import './Slider-2.css';

const Slider_Calc = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const [isLastItem, setIsLastItem] = useState(false);

  const items = [
    { id: 0, name: 'Choose Calculator ', subtitle: 'to get started', img: '../../../../images/Slider-Main.png', color: '#ec7e4a' },
    { id: 1, name: 'Calorie ', img: '../../../../images/Calorie.png', color: '#ec7e4a' },
    { id: 2, name: 'Ideal Weight ', img: '../../../../images/Ideal-weight.png', color: '#ec7e4a' },
    { id: 3, name: 'BMI ', img: '../../../../images/Muscle-gain-Slider.png', color: '#ec7e4a' },
    { id: 4, name: "Body Fat ", img: "./imgs/Body-Fat-image.png", color: "#ec7e4a", path: "/BodyFat" }
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

    if (type === 'next') {
      const firstItem = sliderItems.shift();
      sliderRef.current.appendChild(firstItem);
      
      if (thumbnailItems.length > 0) {
        const firstThumbnail = thumbnailItems.shift();
        thumbnailRef.current.appendChild(firstThumbnail);
      }
      
      carouselRef.current.classList.add('next-PT');
      setTimeout(() => {
        carouselRef.current.classList.remove('next-PT');
        
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
    } else if (type === 'prev') {
      const lastItem = sliderItems.pop();
      sliderRef.current.prepend(lastItem);
      
      if (thumbnailItems.length > 0) {
        const lastThumbnail = thumbnailItems.pop();
        thumbnailRef.current.prepend(lastThumbnail);
      }
      carouselRef.current.classList.add('prev-PT');
      setTimeout(() => {
        carouselRef.current.classList.remove('prev-PT');
        setIsLastItem(false);
      }, 500);
    } else if (type === 'select' && index !== null) {
      const selectedItemElement = sliderItems.find(item => parseInt(item.dataset.id) === index);
      if (selectedItemElement) {
        sliderItems.forEach(item => item.classList.remove('active-PT'));
        selectedItemElement.classList.add('active-PT');
        sliderRef.current.prepend(selectedItemElement);
      }
      
      const chooseElement = sliderRef.current.querySelector(`[data-id="0"]`);
      if (chooseElement) chooseElement.remove();
      
      const filteredItems = items.filter(item => item.id !== 0 && item.id !== index);
      
      thumbnailRef.current.innerHTML = '';
      
      filteredItems.forEach(item => {
        const thumbDiv = document.createElement('div');
        thumbDiv.className = 'item-PT';
        thumbDiv.setAttribute('data-id', item.id);
        thumbDiv.onclick = () => showSlider('select', item.id);
        
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = 'thumbnail';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'content-PT';
        
        const titleDiv = document.createElement('div');
        titleDiv.className = 'title-PT';
        const firstPart = item.name.trim();
        titleDiv.innerHTML = `${firstPart} <span style="color: ${item.color}">Calculator</span>`;
        
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
      
      carouselRef.current.classList.add('next-PT');
      setTimeout(() => {
        carouselRef.current.classList.remove('next-PT');
      }, 500);
      setSelectedItem(items[index].name);
    }
  };

  const resetToFirst = () => {
    if (!sliderRef.current || !thumbnailRef.current || !carouselRef.current) return;
    
    const sliderItems = Array.from(sliderRef.current.children);
    const thumbnailItems = Array.from(thumbnailRef.current.children);
    
    const orderedSliderItems = items.map(item => 
      sliderItems.find(sliderItem => parseInt(sliderItem.dataset.id) === item.id)
    );
    sliderRef.current.innerHTML = '';
    orderedSliderItems.forEach(item => sliderRef.current.appendChild(item));
    
    const filteredItems = items.filter(item => item.id !== 0 && item.id !== items.find(i => i.name === selectedItem)?.id);
    thumbnailRef.current.innerHTML = '';
    filteredItems.forEach(item => {
      const thumbDiv = document.createElement('div');
      thumbDiv.className = 'item-PT';
      thumbDiv.setAttribute('data-id', item.id);
      thumbDiv.onclick = () => showSlider('select', item.id);
      
      const img = document.createElement('img');
      img.src = item.img;
      img.alt = 'thumbnail';
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'content-PT';
      
      const titleDiv = document.createElement('div');
      titleDiv.className = 'title-PT';
      const firstPart = item.name.trim();
      titleDiv.innerHTML = `${firstPart} <span style="color: ${item.color}">Calculator</span>`;
      
      thumbDiv.appendChild(img);
      thumbDiv.appendChild(contentDiv);
      contentDiv.appendChild(titleDiv);
      thumbnailRef.current.appendChild(thumbDiv);
    });

    carouselRef.current.classList.add('reset-PT');
    setTimeout(() => {
      carouselRef.current.classList.remove('reset-PT');
    }, 500);
  };

  const handleStartClick = (itemName) => {
    console.log(`Reading more about ${itemName}`);
  };

  return (
    <div className="carousel-PT" ref={carouselRef}>
      <img src={'../../../../images/Logo-4.svg'} alt="Logo" className="logo-PT" />
      <>
        <div className="arrows-PT">
          <button id="prev" onClick={() => showSlider('prev')}>{'<'}</button>
          <button id="next" onClick={() => showSlider('next')}>{'>'}</button>
        </div>

        <div className="list-PT" ref={sliderRef}>
          {items.map(item => (
            <div className={`item-PT ${item.name === selectedItem ? 'active-PT' : ''}`} key={item.id} data-id={item.id}>
              <img src={item.img} alt={`${item.name}`} />
              <div className="content-PT">
                <div className="title-PT">
                  {item.id === 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <span>
                        <span style={{ color: item.color }}>Choose</span> <span style={{ color: item.color }}>Calculator</span>
                      </span>
                      <span style={{ color: '#fff' }}>to get started</span>
                    </div>
                  ) : (
                    <>
                      {item.name.trim()} <span style={{ color: item.color }}>Calculator</span>
                    </>
                  )}
                </div>
                {item.id !== 0 && (
                  <button 
                    className="start-button-PT"
                    onClick={() => handleStartClick(item.name)}
                  >
                    Read more
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail-PT" ref={thumbnailRef}>
          {items
            .filter(item => item.id !== 0 && item.id !== items.find(i => i.name === selectedItem)?.id)
            .map(item => (
              <div
                className="item-PT"
                key={item.id}
                data-id={item.id}
                onClick={() => showSlider('select', item.id)}
              >
                <img src={item.img} alt="thumbnail" />
                <div className="content-PT">
                  <div className="title-PT">
                    {item.name.trim()} <span style={{ color: item.color }}>Calculator</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </>
    </div>
  );
};

export default Slider_Calc;