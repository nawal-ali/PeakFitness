import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Slider-FP.css';

const Slider_FP = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isReadMoreClicked, setIsReadMoreClicked] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [scaleZero, setScaleZero] = useState(false);
  const navigate = useNavigate();

  const items = [
    {
      id: 0,
      name: 'Weight Gain',
      quote: '"Gain Weight, Stay Strong!"',
      description: 'Explore Key Strategies To Increase Your Weight While Staying Healthy And Active',
      color: '#ec7e4a',
      thumbnailImg: '/public/imgs/Weight-gain.png',
      backgroundImage: '/public/imgs/Food-Plan-W-G.png'
    },
    {
      id: 1,
      name: 'Weight Loss',
      quote: '"Smart Strategies For Shedding Extra Pounds"',
      description: 'Practical Advice TO Help You Reach Your Ideal Weight',
      color: '#4aec7e',
      thumbnailImg: '/public/imgs/Weight-loss.png',
      backgroundImage: '/public/imgs/Food-Plan-W-L.png'
    },
    {
      id: 2,
      name: 'Muscle Gain',
      quote: '"Gain Muscle Boost Strength"',
      description: 'And Transform Your Physique With Science-Backed Strategies"',
      color: '#7e4aec',
      thumbnailImg: '/public/imgs/Muscle-gain.png',
      backgroundImage: '/public/imgs/Food-Plan-M-G.png'
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
    if (selectedItem === 0) {
      setIsReadMoreClicked(true);
      console.log("isReadMoreClicked set to true");

      setTimeout(() => {
        setMoveLeft(true);
        console.log("moveLeft set to true");
      }, 1000);

      setTimeout(() => {
        setScaleZero(true);
        console.log("scaleZero set to true");
      }, 1000);

      setTimeout(() => {
        console.log("Navigating to /weight-gain-details");
        navigate("/weight-gain-details", { replace: false });
        console.log("Navigation completed");
      }, 2500);
    }
  };

  const handleDotClick = (index) => {
    setSelectedItem(index);
  };

  const currentItem = items[selectedItem];

  return (
            
    <div className={`carousel-PT carousel-PT-SFP`} style={{ backgroundImage: `url(${currentItem.backgroundImage})` }}>
      <img src="/public/logo/logo-4.svg" alt="Logo" className={`logo-FP logo-FP-SFP`} />
      
      <div className={`content-overlay content-overlay-SFP ${isReadMoreClicked ? 'hide hide-SFP' : ''}`}>
        <div className={`title-PT title-PT-SFP ${isAnimating ? 'animate animate-SFP' : ''}`}>{currentItem.name}</div>
        <div className={`quote-PT quote-PT-SFP ${isAnimating ? 'animate animate-SFP' : ''}`}>{currentItem.quote}</div>
        <div className={`description-PT description-PT-SFP ${isAnimating ? 'animate animate-SFP' : ''}`}>{currentItem.description}</div>
        
        <button
          type="button"
          className={`read-more-btn read-more-btn-SFP ${isAnimating ? 'animate animate-SFP' : ''}`}
          onClick={handleReadMore}
        >
          Read more
        </button>
      </div>
      
      <div className={`slider-container slider-container-SFP`}>
        <div className={`list-PT list-PT-SFP`}>
          {items.map((item, index) => {
            let position = (index - selectedItem + items.length) % items.length;
            let transformValue = '';
            let isActive = index === selectedItem;

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

            if (isReadMoreClicked) {
              console.log("isReadMoreClicked is true, isActive:", isActive);
              if (isActive) {
                if (scaleZero) {
                  transformValue = `translateX(-160%) translateY(5%) scaleX(1) scaleY(1.15)`;
                } else if (moveLeft) {
                  transformValue = `translateX(-160%) translateY(5%) scaleX(1) scaleY(1.15)`;
                } else {
                  transformValue = `translateX(0) translateY(5%) scaleX(1) scaleY(1.15)`;
                }
              } else {
                transformValue = `translateX(${position === 1 ? '200px' : '-200px'}) scale(0)`;
              }
            }

            const transitionValue = isReadMoreClicked
              ? (scaleZero ? 'transform 1s ease 0s' : moveLeft ? 'transform 1s ease 0s' : 'transform 2s ease 0s')
              : 'transform 0.5s ease, opacity 0.5s ease';

            return (
              <div
                className={`item-PT item-PT-SFP ${isActive ? 'active-PT active-PT-SFP' : ''}`}
                key={item.id}
                style={{
                  transform: transformValue,
                  opacity: position <= 2 ? (position === 0 ? 1 : 0.6) : 0,
                  zIndex: position === 0 ? 10 : position === 1 ? 5 : position === 2 ? 5 : 0,
                  transition: transitionValue,
                }}
              >
                <div className={`content-PT content-PT-SFP`}>
                  <div className={`thumbnail-counter thumbnail-counter-SFP ${isReadMoreClicked ? 'hide hide-SFP' : ''}`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <img src={item.thumbnailImg} alt={item.name} className={`thumbnail-img thumbnail-img-SFP`} />
                {isActive && (
                  <div className={`arrows-PT arrows-PT-SFP ${isReadMoreClicked ? 'hide hide-SFP' : ''}`}>
                    <button onClick={handlePrev}>‹</button>
                    <button onClick={handleNext}>›</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className={`dots-PT dots-PT-SFP ${isReadMoreClicked ? 'hide hide-SFP' : ''}`}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot dot-SFP ${index === selectedItem ? 'active-dot active-dot-SFP' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
    
  );
};

export default Slider_FP;