import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Slider-FP.css';

const Slider_FP = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isReadMoreClicked, setIsReadMoreClicked] = useState(false); // حالة للتحكم في انيميشن الإخفاء
  const [moveLeft, setMoveLeft] = useState(false); // حالة للحركة للشمال
  const [scaleZero, setScaleZero] = useState(false); // حالة جديدة لتقليص الحجم إلى 0
  const navigate = useNavigate();

  const items = [
    {
      id: 0,
      name: 'Weight Gain',
      quote: '"Gain Weight, Stay Strong!"',
      description: 'Explore Key Strategies To Increase Your Weight While Staying Healthy And Active',
      color: '#ec7e4a',
      thumbnailImg: '../../../images/Weight-gain.png',
      backgroundImage: '../../../images/Food-Plan-W-G.png'
    },
    {
      id: 1,
      name: 'Weight Loss',
      quote: '"Smart Strategies For Shedding Extra Pounds"',
      description: 'Practical Advice TO Help You Reach Your Ideal Weight',
      color: '#4aec7e',
      thumbnailImg: '../../../images/Weight-loss.png',
      backgroundImage: '../../../images/Food-Plan-W-L.png'
    },
    {
      id: 2,
      name: 'Muscle Gain',
      quote: '"Gain Muscle Boost Strength"',
      description: 'And Transform Your Physique With Science-Backed Strategies"',
      color: '#7e4aec',
      thumbnailImg: '../../../images/Muscle-gain.png',
      backgroundImage: '../../../images/Food-Plan-M-G.png'
    }
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
    setSelectedItem((selectedItem + 1) % items.length);
  };

  const handlePrev = () => {
    setSelectedItem((selectedItem - 1 + items.length) % items.length);
  };

  const handleReadMore = () => {
    console.log("Read More clicked, selectedItem:", selectedItem);
    if (selectedItem === 0) { // فقط لـ Weight Gain
      setIsReadMoreClicked(true); // تفعيل حالة انيميشن الإخفاء
      console.log("isReadMoreClicked set to true");

      // بعد 2 ثانية (لما العناصر تختفي)، نحرك الـ active item للشمال
      setTimeout(() => {
        setMoveLeft(true);
        console.log("moveLeft set to true");
      }, 2000);

      // بعد 3 ثواني (2 ثانية للإخفاء + 1 ثانية للحركة للشمال)، نصغر الحجم لـ 0
      setTimeout(() => {
        setScaleZero(true);
        console.log("scaleZero set to true");
      }, 3000);

      // بعد 4 ثواني (2 ثانية للإخفاء + 1 ثانية للشمال + 1 ثانية للـ scale(0))، ننتقل للصفحة
      setTimeout(() => {
        console.log("Navigating to /weight-gain-details");
        navigate("/weight-gain-details", { replace: false });
        console.log("Navigation completed");
      }, 4000); // الانتقال بعد 4 ثواني
    }
  };

  const handleDotClick = (index) => {
    setSelectedItem(index);
  };

  const currentItem = items[selectedItem];

  return (
    <div className="carousel-PT" style={{ backgroundImage: `url(${currentItem.backgroundImage})` }}>
      <img src="../../../images/logo-4.svg" alt="Logo" className="logo-FP" />
      
      <div className={`content-overlay ${isReadMoreClicked ? 'hide' : ''}`}>
        <div className={`title-PT ${isAnimating ? 'animate' : ''}`}>{currentItem.name}</div>
        <div className={`quote-PT ${isAnimating ? 'animate' : ''}`}>{currentItem.quote}</div>
        <div className={`description-PT ${isAnimating ? 'animate' : ''}`}>{currentItem.description}</div>
        
        <button
          type="button" // Prevent form submission behavior
          className={`read-more-btn ${isAnimating ? 'animate' : ''}`}
          onClick={handleReadMore}
        >
          Read more
        </button>
      </div>
      
      <div className="slider-container">
        <div className="list-PT">
          {items.map((item, index) => {
            let position = (index - selectedItem + items.length) % items.length;
            let transformValue = '';
            let isActive = index === selectedItem;

            // Adjust position based on screen width
            if (screenWidth >= 2500) {
              if (position === 0) {
                transformValue = `translateX(0) scale(1)`;
              } else if (position === 1) {
                transformValue = `translateX(550px) scale(0.6)`;
              } else if (position === 2) {
                transformValue = `translateX(-550px) scale(0.6)`;
              } else {
                transformValue = `translateX(${position > 1 ? '1100px' : '-1100px'}) scale(0)`;
              }
            } else {
              if (position === 0) {
                transformValue = `translateX(0) scale(1)`;
              } else if (position === 1) {
                transformValue = `translateX(200px) scale(0.6)`;
              } else if (position === 2) {
                transformValue = `translateX(-200px) scale(0.6)`;
              } else {
                transformValue = `translateX(${position > 1 ? '600px' : '-600px'}) scale(0)`;
              }
            }

            // لما يضغط على Read More
            if (isReadMoreClicked) {
              console.log("isReadMoreClicked is true, isActive:", isActive);
              if (isActive) {
                if (scaleZero) {
                  transformValue = `translateX(-160%) translateY(5%) scaleX(1) scaleY(1.15)`; // التصغير لـ 0 بعد الحركة للشمال
                } else if (moveLeft) {
                  transformValue = `translateX(-160%) translateY(5%) scaleX(1) scaleY(1.15)`; // الحركة للشمال
                } else {
                  transformValue = `translateX(0) translateY(5%) scaleX(1) scaleY(1.15)`; // التكبير وتحريك لفوق فقط
                }
              } else {
                transformValue = `translateX(${position === 1 ? '200px' : '-200px'}) scale(0)`; // الـ items اللي مش active تصغر
              }
            }

            // نغير الـ transition بناءً على الحالة
            const transitionValue = isReadMoreClicked
              ? (scaleZero ? 'transform 1s ease 0s' : moveLeft ? 'transform 1s ease 0s' : 'transform 2s ease 0s')
              : 'transform 0.5s ease, opacity 0.5s ease';

            return (
              <div
                className={`item-PT ${isActive ? 'active-PT' : ''}`}
                key={item.id}
                style={{
                  transform: transformValue,
                  opacity: position <= 2 ? (position === 0 ? 1 : 0.6) : 0,
                  zIndex: position === 0 ? 10 : position === 1 ? 5 : position === 2 ? 5 : 0,
                  transition: transitionValue,
                }}
              >
                <div className="content-PT">
                  <div className={`thumbnail-counter ${isReadMoreClicked ? 'hide' : ''}`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <img src={item.thumbnailImg} alt={item.name} className="thumbnail-img" />
                {isActive && (
                  <div className={`arrows-PT ${isReadMoreClicked ? 'hide' : ''}`}>
                    <button onClick={handlePrev}>‹</button>
                    <button onClick={handleNext}>›</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className={`dots-PT ${isReadMoreClicked ? 'hide' : ''}`}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === selectedItem ? 'active-dot' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider_FP;