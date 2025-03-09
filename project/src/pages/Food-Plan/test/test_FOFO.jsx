import React, { useState, useEffect } from 'react';
import './test_FOFO.css';

const test_FOFO = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // حالة التوسعة

  const items = [
    {
      id: 0,
      name: 'Weight Gain',
      quote: '"Gain Weight, Stay Strong!"',
      description: 'Explore Key Strategies To Increase Your Weight While Staying Healthy And Active',
      extraInfo: 'This plan includes high-calorie meals rich in proteins and healthy fats to ensure steady weight gain.',
      color: '#ec7e4a',
      thumbnailImg: '../../../images/Weight-gain.png',
      backgroundImage: '../../../images/Food-Plan-W-G.png'
    },
    {
      id: 1,
      name: 'Weight Loss',
      quote: '"Smart Strategies For Shedding Extra Pounds"',
      description: 'Practical Advice To Help You Reach Your Ideal Weight',
      extraInfo: 'A diet designed to help you burn fat efficiently with balanced macronutrients and exercise routines.',
      color: '#4aec7e',
      thumbnailImg: '../../../images/Weight-loss.png',
      backgroundImage: '../../../images/Food-Plan-W-L.png'
    },
    {
      id: 2,
      name: 'Muscle Gain',
      quote: '"Gain Muscle Boost Strength"',
      description: 'Transform Your Physique With Science-Backed Strategies',
      extraInfo: 'This plan focuses on high-protein meals combined with weight training to enhance muscle growth.',
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

  const handleNext = () => {
    setSelectedItem((selectedItem + 1) % items.length);
    setIsExpanded(false);
  };

  const handlePrev = () => {
    setSelectedItem((selectedItem - 1 + items.length) % items.length);
    setIsExpanded(false);
  };

  const handleDotClick = (index) => {
    setSelectedItem(index);
    setIsExpanded(false);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const currentItem = items[selectedItem];

  return (
    <div className="carousel-PT" style={{ backgroundImage: `url(${currentItem.backgroundImage})` }}>
      <img src="../../../images/logo-4.svg" alt="Logo" className="logo" />

      <div className="content-overlay">
        <div className={`title-PT ${isAnimating ? 'animate' : ''}`}>{currentItem.name}</div>
        <div className={`quote-PT ${isAnimating ? 'animate' : ''}`}>{currentItem.quote}</div>
        <div className={`description-PT ${isAnimating ? 'animate' : ''}`}>{currentItem.description}</div>

        <button className={`read-more-btn ${isAnimating ? 'animate' : ''}`} onClick={handleExpand}>
          {isExpanded ? 'Close' : 'Read more'}
        </button>

        {isExpanded && (
          <div className="expanded-info">
            <p>{currentItem.extraInfo}</p>
          </div>
        )}
      </div>

      <div className="slider-container">
        <div className="list-PT">
          {items.map((item, index) => {
            let position = (index - selectedItem + items.length) % items.length;
            let transformValue = position === 0 ? `scale(${isExpanded ? 1.1 : 1})` : `scale(0.6)`;

            return (
              <div
                className={`item-PT ${index === selectedItem ? 'active-PT' : ''} ${isExpanded ? 'expanded' : ''}`}
                key={item.id}
                style={{ transform: transformValue }}
              >
                <img src={item.thumbnailImg} alt={item.name} className="thumbnail-img" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="arrows-PT">
        <button onClick={handlePrev}>‹</button>
        <button onClick={handleNext}>›</button>
      </div>

      <div className="dots-PT">
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

export default test_FOFO;
