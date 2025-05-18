import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Font Awesome
import "./toTop.css"; // Import the CSS file for animations

export default function ToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`to-top-button ${isVisible ? "visible" : "hidden"}`}>
      <button
        className="btn text-light shadow-lg"
        style={{ zIndex: 1000 }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}
