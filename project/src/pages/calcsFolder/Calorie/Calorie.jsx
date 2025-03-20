import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../../assets/navFolder/Navbar";
import "./calorie.css";

const CalorieCalculator = () => {
  const [gender, setGender] = useState(() => {
    const savedGender = localStorage.getItem("gender");
    return savedGender || "";
  });
  const [age, setAge] = useState(() => {
    const savedAge = localStorage.getItem("age");
    const parsedAge = parseInt(savedAge) || "";
    return parsedAge >= 0 ? parsedAge.toString() : "";
  });
  const [height, setHeight] = useState(() => {
    const savedHeight = localStorage.getItem("height");
    const parsedHeight = parseInt(savedHeight) || "";
    return parsedHeight >= 0 ? parsedHeight.toString() : "";
  });
  const [weight, setWeight] = useState(() => {
    const savedWeight = localStorage.getItem("weight");
    const parsedWeight = parseInt(savedWeight) || "";
    return parsedWeight >= 0 ? parsedWeight.toString() : "";
  });
  const [activityLevel, setActivityLevel] = useState(() => {
    const savedActivity = localStorage.getItem("activityLevel");
    return savedActivity || "";
  });
  const [calories, setCalories] = useState(null);
  const [carbs, setCarbs] = useState(null);
  const [protein, setProtein] = useState(null);
  const [fats, setFats] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [meals, setMeals] = useState(() => {
    const savedMeals = localStorage.getItem("meals");
    return savedMeals || "Per Day";
  });
  const [ageError, setAgeError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("gender", gender);
    localStorage.setItem("age", age === "" ? "" : age.toString());
    localStorage.setItem("height", height === "" ? "" : height.toString());
    localStorage.setItem("weight", weight === "" ? "" : weight.toString());
    localStorage.setItem("activityLevel", activityLevel);
    localStorage.setItem("meals", meals);
  }, [gender, age, height, weight, activityLevel, meals]);

  const handleNumericInput = (value, setter, prevValue, errorSetter) => {
    if (value === "") {
      setter("");
      errorSetter("");
      return;
    }

    const numericValue = parseInt(value);
    if (isNaN(numericValue) || numericValue < 0) {
      errorSetter("Please enter a positive number.");
      setter("");
    } else {
      errorSetter("");
      setter(numericValue.toString());
    }
  };

  const calculateCalories = (e) => {
    e.preventDefault();
    if (!gender) {
      setPopupMessage("Please select a gender before calculating.");
      setShowPopup(true);
      return;
    }
    if (!age || !height || !weight || !activityLevel) {
      setPopupMessage("Please fill in all fields correctly.");
      setShowPopup(true);
      return;
    }

    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityFactor;
    switch (activityLevel) {
      case "low":
        activityFactor = 1.2;
        break;
      case "middle":
        activityFactor = 1.55;
        break;
      case "high":
        activityFactor = 1.725;
        break;
      case "very-high":
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1.2;
    }

    const calculatedCalories = Math.round(bmr * activityFactor);
    const calculatedCarbs = Math.round((calculatedCalories * 0.5) / 4);
    const calculatedProtein = Math.round((calculatedCalories * 0.3) / 4);
    const calculatedFats = Math.round((calculatedCalories * 0.2) / 9);

    setCalories(calculatedCalories);
    setCarbs(calculatedCarbs);
    setProtein(calculatedProtein);
    setFats(calculatedFats);
    setShowResults(true);
  };

  const recalculateFromInputs = () => {
    if (!age || !height || !weight || !activityLevel || !gender) {
      setPopupMessage("Please fill in all fields, including gender, before recalculating.");
      setShowPopup(true);
      return;
    }

    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityFactor;
    switch (activityLevel) {
      case "low":
        activityFactor = 1.2;
        break;
      case "middle":
        activityFactor = 1.55;
        break;
      case "high":
        activityFactor = 1.725;
        break;
      case "very-high":
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1.2;
    }

    const calculatedCalories = Math.round(bmr * activityFactor);
    const calculatedCarbs = Math.round((calculatedCalories * 0.5) / 4);
    const calculatedProtein = Math.round((calculatedCalories * 0.3) / 4);
    const calculatedFats = Math.round((calculatedCalories * 0.2) / 9);

    setCalories(calculatedCalories);
    setCarbs(calculatedCarbs);
    setProtein(calculatedProtein);
    setFats(calculatedFats);
  };

  const clearInputs = () => {
    setGender("");
    setAge("");
    setHeight("");
    setWeight("");
    setActivityLevel("");
    setAgeError("");
    setWeightError("");
    setHeightError("");
    localStorage.removeItem("gender");
    localStorage.removeItem("age");
    localStorage.removeItem("height");
    localStorage.removeItem("weight");
    localStorage.removeItem("activityLevel");
  };

  return (
    <>
      <Navbar showSearch={false} showBackground={false} />
      <div
        className={`calorie-calculator-C ${
          showResults ? "show-results-C" : ""
        }`}
      >
        <div className="left-panel-C">
          {!showResults ? (
            <>
              {/* <div className="logo-C"></div> */}
              <div className="background-image-C"></div>
              <div className="content-C">
                <div className="small-image-C"></div>
                <h1 className="Calorie-title-C">
                  <span className="title-C">Calorie</span>
                  <span className="title-C">Calculator</span>
                </h1>
                <p className="under-header-C">
                  Calculate Optimal Macronutrient Ratios For Your Body
                  Enter Your Age, Height, Weight, And Activity Level
                </p>
                <div className="Arrow-right-C"></div>
              </div>
            </>
          ) : (
            <form className="input-section-C" onSubmit={calculateCalories}>
              <div className="Calculator-one-circle-C"></div>
              <h2 className="Calorie-parameters-side2-C">Body Parameters</h2>
              <div className="gender-selection-C">
                <button
                  className={gender === "male" ? "active-C" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("male");
                  }}
                >
                  Male
                </button>
                <button
                  className={gender === "female" ? "active-C" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("female");
                  }}
                >
                  Female
                </button>
              </div>
              <div className="input-group-C">
                <label>Age</label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) =>
                    handleNumericInput(e.target.value, setAge, age, setAgeError)
                  }
                  placeholder="21"
                  className={`numeric-input-C ${ageError ? "error-C" : ""}`}
                  pattern="[0-9]*"
                />
                {ageError && <p className="error-message-C">{ageError}</p>}
              </div>
              <div className="flex-inputs-C">
                <div className="input-group-C">
                  <label>weight</label>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) =>
                      handleNumericInput(
                        e.target.value,
                        setWeight,
                        weight,
                        setWeightError
                      )
                    }
                    placeholder="65kg"
                    className={`numeric-input-C ${
                      weightError ? "error-C" : ""
                    }`}
                    pattern="[0-9]*"
                  />
                  {weightError && (
                    <p className="error-message-C">{weightError}</p>
                  )}
                </div>
                <div className="input-group-C">
                  <label>height</label>
                  <input
                    type="text"
                    value={height}
                    onChange={(e) =>
                      handleNumericInput(
                        e.target.value,
                        setHeight,
                        height,
                        setHeightError
                      )
                    }
                    placeholder="180cm"
                    className={`numeric-input-C ${
                      heightError ? "error-C" : ""
                    }`}
                    pattern="[0-9]*"
                  />
                  {heightError && (
                    <p className="error-message-C">{heightError}</p>
                  )}
                </div>
              </div>
              <div className="activity-slider-C">
                <label>Activity Level</label>
                <div className="slider-track-C">
                  <div className="slider-dot-container-C">
                    <button
                      className={`slider-dot-C ${
                        activityLevel === "low" ? "active-C" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActivityLevel("low");
                      }}
                    ></button>
                    <span className="slider-label-C">LOW</span>
                  </div>
                  <div className="slider-line-C"></div>
                  <div className="slider-dot-container-C">
                    <button
                      className={`slider-dot-C ${
                        activityLevel === "middle" ? "active-C" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActivityLevel("middle");
                      }}
                    ></button>
                    <span className="slider-label-C">MIDDLE</span>
                  </div>
                  <div className="slider-line-C"></div>
                  <div className="slider-dot-container-C">
                    <button
                      className={`slider-dot-C ${
                        activityLevel === "high" ? "active-C" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActivityLevel("high");
                      }}
                    ></button>
                    <span className="slider-label-C">HIGH</span>
                  </div>
                  <div className="slider-line-C"></div>
                  <div className="slider-dot-container-C">
                    <button
                      className={`slider-dot-C ${
                        activityLevel === "very-high" ? "active-C" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActivityLevel("very-high");
                      }}
                    ></button>
                    <span className="slider-label-C">VERY HIGH</span>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="right-panel-C">
          {!showResults ? (
            <form className="input-section-C" onSubmit={calculateCalories}>
              <div className="Calculator-circles-S1-C"></div>
              <h2 className="Calorie-parameters-side1-C">Body Parameters</h2>
              <div className="gender-selection-C">
                <button
                  className={gender === "male" ? "active-C" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("male");
                  }}
                >
                  Male
                </button>
                <button
                  className={gender === "female" ? "active-C" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("female");
                  }}
                >
                  Female
                </button>
              </div>
              <div className="input-group-C">
                <label>Age</label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) =>
                    handleNumericInput(e.target.value, setAge, age, setAgeError)
                  }
                  placeholder="21"
                  className={`numeric-input-C ${ageError ? "error-C" : ""}`}
                  pattern="[0-9]*"
                />
                {ageError && <p className="error-message-C">{ageError}</p>}
              </div>
              <div className="flex-inputs-C">
                <div className="input-group-C">
                  <label>weight</label>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) =>
                      handleNumericInput(
                        e.target.value,
                        setWeight,
                        weight,
                        setWeightError
                      )
                    }
                    placeholder="65kg"
                    className={`numeric-input-C ${
                      weightError ? "error-C" : ""
                    }`}
                    pattern="[0-9]*"
                  />
                  {weightError && (
                    <p className="error-message-C">{weightError}</p>
                  )}
                </div>
                <div className="input-group-C">
                  <label>height</label>
                  <input
                    type="text"
                    value={height}
                    onChange={(e) =>
                      handleNumericInput(
                        e.target.value,
                        setHeight,
                        height,
                        setHeightError
                      )
                    }
                    placeholder="180cm"
                    className={`numeric-input-C ${
                      heightError ? "error-C" : ""
                    }`}
                    pattern="[0-9]*"
                  />
                  {heightError && (
                    <p className="error-message-C">{heightError}</p>
                  )}
                </div>
              </div>
              <div className="activity-slider-C">
                <label>Activity Level</label>
                <div className="slider-track-C">
                  <div className="slider-dot-container-C">
                    <button
                      className={`slider-dot-C ${
                        activityLevel === "low" ? "active-C" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActivityLevel("low");
                      }}
                    ></button>
                    <span className="slider-label-C">LOW</span>
                  </div>
                  <div className="slider-line-C"></div>
                  <div className="slider-dot-container-C">
                    <button
                      className={`slider-dot-C ${
                        activityLevel === "middle" ? "active-C" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActivityLevel("middle");
                      }}
                    ></button>
                    <span className="slider-label-C">MIDDLE</span>
                  </div>
                  <div className="slider-line-C"></div>
                  <div className="slider-dot-container-C">
                    <button
                      className={`slider-dot-C ${
                        activityLevel === "high" ? "active-C" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActivityLevel("high");
                      }}
                    ></button>
                    <span className="slider-label-C">HIGH</span>
                  </div>
                  <div className="slider-line-C"></div>
                  <div className="slider-dot-container-C">
                    <button
                      className={`slider-dot-C ${
                        activityLevel === "very-high" ? "active-C" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActivityLevel("very-high");
                      }}
                    ></button>
                    <span className="slider-label-C">VERY HIGH</span>
                  </div>
                </div>
              </div>
              <div className="Calorie-buttons-C">
                <div className="Calculator-circles-C"></div>
                <input
                  type="button"
                  value="Clear"
                  className="clear-btn-C"
                  onClick={clearInputs}
                />
                <button className="calculate-btn-C" type="submit">
                  Calculate{" "}
                  <img
                    src="./logo/Arrow right-white.svg"
                    alt="Arrow"
                    className="arrow-icon-C"
                  />
                </button>
              </div>
            </form>
          ) : (
            <div className="result-section-C">
              <div className="Calculator-circles-side2-C"></div>
              {/* <div className="result-logo-C"></div> */}
              <div className="result-header-C">
                <h2>Your Result</h2>
                <p className="calories-C">
                  <span className="calorie-value-C">{calories}</span> Kcal
                </p>
                <p className="subtext-C">
                  Suggested Amount of Calories Per Day
                </p>
              </div>
              <div className="macronutrients-C">
                <div className="macro-item-C">
                  <span className="macro-label-C">Carbohydrates:</span>
                  <span className="macro-value-C">
                    {carbs}g<span className="macro-percentage-C">/ 50%</span>
                  </span>
                </div>
                <div className="macro-item-C">
                  <span className="macro-label-C">Protein:</span>
                  <span className="macro-value-C">
                    {protein}g<span className="macro-percentage-C">/ 20%</span>
                  </span>
                </div>
                <div className="macro-item-C">
                  <span className="macro-label-C">Fat:</span>
                  <span className="macro-value-C">
                    {fats}g<span className="macro-percentage-C">/ 30%</span>
                  </span>
                </div>
              </div>
              <div className="meals-toggle-C">
                <button
                  className={meals === "Per Day" ? "active-C" : ""}
                  onClick={() => setMeals("Per Day")}
                >
                  Per Day
                </button>
                <button
                  className={meals === "3 Meals" ? "active-C" : ""}
                  onClick={() => setMeals("3 Meals")}
                >
                  3 Meals
                </button>
                <button
                  className={meals === "4 Meals" ? "active-C" : ""}
                  onClick={() => setMeals("4 Meals")}
                >
                  4 Meals
                </button>
              </div>
              {meals === "Per Day" ? (
                <p>
                  Calories per day:{" "}
                  <span className="calorie-value-C">{calories}</span> Kcal
                </p>
              ) : (
                <p className="Pargraph-calories-per-meal-C">
                  Calories per meal:{" "}
                  <span className="calorie-value-C">
                    {Math.round(calories / (meals === "3 Meals" ? 3 : 4))}
                  </span>{" "}
                  Kcal
                </p>
              )}
              <div className="calorie-buttons-Result-C">
                <button
                  className="calculate-btn-C"
                  onClick={recalculateFromInputs}
                >
                  Calculate Again
                </button>
                <Link to="/Calculators">
                  <button className="other-calculators-btn-C">
                    Other Calculators
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Popup Component */}
      {showPopup && (
        <div className="popup-overlay-C">
          <div className="popup-C">
            <p>{popupMessage}</p>
            <button
              className="popup-close-btn-C"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CalorieCalculator;