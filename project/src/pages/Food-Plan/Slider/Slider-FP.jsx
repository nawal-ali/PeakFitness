import React, { useState, useEffect } from 'react';
import './Slider-FP.css';

const Slider_FP = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // حالة للتحكم في الانميشن

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
      quote: '"Gain Muscle Boost Strength,',
      description: 'And Transform Your Physque Wlth Science-Backed Strategies"',
      color: '#7e4aec',
      thumbnailImg: '../../../images/Muscle-gain.png',
      backgroundImage: '../../../images/Food-Plan-M-G.png'
    }
  ];

  // تحديث عنوان الصفحة بناءً على العنصر المختار
  useEffect(() => {
    document.title = items[selectedItem].name;
  }, [selectedItem]);

  // التحكم في الانميشن عند تغيير العنصر
  useEffect(() => {
    setIsAnimating(true); // بدء الانميشن
    const timer = setTimeout(() => setIsAnimating(false), 2000); // إعادة تعيين بعد 2 ثانية (مدة الانميشن الكلية)
    return () => clearTimeout(timer); // تنظيف التايمر عند إلغاء الـ Effect
  }, [selectedItem]);

  const handleNext = () => {
    setSelectedItem((selectedItem + 1) % items.length);
  };

  const handlePrev = () => {
    setSelectedItem((selectedItem - 1 + items.length) % items.length);
  };

  const handleDotClick = (index) => {
    setSelectedItem(index);
  };

  const currentItem = items[selectedItem]; // الحصول على العنصر الحالي

  return (
    <div className="carousel-PT" style={{ backgroundImage: `url(${currentItem.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}>
      {/* اللوجو الثابت فوق الكاروسيل */}
      <img src="../../../images/logo-4.svg" alt="Logo" className="logo" /> {/* استبدل مسار اللوجو بالمسار الصحيح */}
      
      <div className="content-overlay">
        <div className={`title-PT ${isAnimating ? 'animate' : ''}`}>{currentItem.name}</div>
        <div className={`quote-PT ${isAnimating ? 'animate' : ''}`}>{currentItem.quote}</div>
        <div className={`description-PT ${isAnimating ? 'animate' : ''}`}>{currentItem.description}</div>
        <button className={`read-more-btn ${isAnimating ? 'animate' : ''}`}>Read more</button>
      </div>
      
      <div className="slider-container">
        <div className="list-PT">
          {items.map((item, index) => {
            let position = (index - selectedItem + items.length) % items.length;
            let transformValue = '';

            if (position === 0) {
              transformValue = `translateX(0) scale(1)`;
            } else if (position === 1) {
              transformValue = `translateX(200px) scale(0.6)`;
            } else if (position === 2) {
              transformValue = `translateX(-200px) scale(0.6)`;
            } else {
              transformValue = `translateX(${position > 1 ? '400px' : '-400px'}) scale(0) opacity(0)`;
            }

            return (
              <div
                className={`item-PT ${index === selectedItem ? 'active-PT' : ''}`}
                key={item.id}
                style={{
                  transform: transformValue,
                  opacity: position <= 2 ? (position === 0 ? 1 : 0.6) : 0,
                  zIndex: position === 0 ? 10 : position === 1 ? 5 : position === 2 ? 5 : 0,
                  transition: 'transform 0.5s ease, opacity 0.5s ease',
                }}
              >
                <div className="content-PT">
                  <div className="thumbnail-counter">{String(index + 1).padStart(2, '0')}</div>
                </div>
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

export default Slider_FP;