import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../../assets/navFolder/Navbar";
import "./body.css";

const BodyFatCalc = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState(""); // Added hip measurement for females
  const [bodyFatResults, setBodyFatResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [ageError, setAgeError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [neckError, setNeckError] = useState("");
  const [waistError, setWaistError] = useState("");
  const [hipError, setHipError] = useState(""); // Added hip error state
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const [islogged, setIsLogged] = useState(() => {
    return localStorage.getItem("islogged") === "true";
  });

  // Clear localStorage and reset state on page refresh
  useEffect(() => {
    localStorage.removeItem("gender");
    localStorage.removeItem("age");
    localStorage.removeItem("height");
    localStorage.removeItem("weight");
    localStorage.removeItem("neck");
    localStorage.removeItem("waist");
    localStorage.removeItem("hip");
    setGender("");
    setAge("");
    setHeight("");
    setWeight("");
    setNeck("");
    setWaist("");
    setHip("");
  }, []); // Empty dependency array to run once on mount

  const handleNumericInputChange = (value, setter) => {
    setter(value); // Update the input value as the user types
  };

  const handleNumericInputBlur = (value, setter, errorSetter) => {
    if (value === "") {
      setter("");
      errorSetter("");
      return;
    }

    const numericValue = parseFloat(value);
    if (isNaN(numericValue) || numericValue < 0) {
      errorSetter("invalid");
      setter("");
    } else {
      errorSetter("");
      setter(numericValue.toString());
    }
  };

  const calculateBodyFat = (e) => {
    e.preventDefault();
    if (!gender) {
      setPopupMessage("Please select a gender before calculating.");
      setShowPopup(true);
      return;
    }
    if (!age || !height || !weight || !neck || !waist) {
      setPopupMessage("Please fill in all fields correctly.");
      setShowPopup(true);
      return;
    }
    
    // For females, hip measurement is required
    if (gender === "female" && !hip) {
      setPopupMessage("Hip measurement is required for female calculation.");
      setShowPopup(true);
      return;
    }

    // Using metric units directly (no conversion to inches)
    const heightCm = parseFloat(height);
    const neckCm = parseFloat(neck);
    const waistCm = parseFloat(waist);
    const hipCm = gender === "female" ? parseFloat(hip) : 0;
    const weightKg = parseFloat(weight);

    let bodyFatPercentage;

    try {
      if (gender === "male") {
        // U.S. Navy Method for males (Metric Units):
        // BFP = 495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(height)) - 450
        bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waistCm - neckCm) + 0.15456 * Math.log10(heightCm)) - 450;
      } else {
        // U.S. Navy Method for females (Metric Units):
        // BFP = 495 / (1.29579 - 0.35004 * log10(waist + hip - neck) + 0.22100 * log10(height)) - 450
        bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waistCm + hipCm - neckCm) + 0.22100 * Math.log10(heightCm)) - 450;
      }
    } catch (error) {
      setPopupMessage("Invalid measurements. Please check your inputs.");
      setShowPopup(true);
      return;
    }

    bodyFatPercentage = Math.max(0, bodyFatPercentage).toFixed(1);
    const bodyFatMass = ((bodyFatPercentage / 100) * weightKg).toFixed(1);
    const leanBodyMass = (weightKg - bodyFatMass).toFixed(1);

    let idealBodyFat;
    if (gender === "male") {
      idealBodyFat = 8.9;
    } else {
      idealBodyFat = 17.7;
    }
    idealBodyFat = idealBodyFat.toFixed(1);

    const idealBodyFatMass = ((idealBodyFat / 100) * weightKg).toFixed(1);
    const bodyFatToLose = Math.max(0, (bodyFatMass - idealBodyFatMass)).toFixed(1);

    const bodyFatCategory = getBodyFatStatus(bodyFatPercentage);

    const results = {
      bodyFatPercentage,
      bodyFatCategory,
      bodyFatMass,
      leanBodyMass,
      idealBodyFat,
      bodyFatToLose,
    };

    setBodyFatResults(results);
    setShowResults(true);
  };

  const recalculateFromInputs = () => {
    if (!age || !height || !weight || !gender || !neck || !waist) {
      setPopupMessage("Please fill in all fields, including gender, before recalculating.");
      setShowPopup(true);
      return;
    }

    // For females, hip measurement is required
    if (gender === "female" && !hip) {
      setPopupMessage("Hip measurement is required for female calculation.");
      setShowPopup(true);
      return;
    }

    // Using metric units directly (no conversion to inches)
    const heightCm = parseFloat(height);
    const neckCm = parseFloat(neck);
    const waistCm = parseFloat(waist);
    const hipCm = gender === "female" ? parseFloat(hip) : 0;
    const weightKg = parseFloat(weight);

    let bodyFatPercentage;

    try {
      if (gender === "male") {
        bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waistCm - neckCm) + 0.15456 * Math.log10(heightCm)) - 450;
      } else {
        bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waistCm + hipCm - neckCm) + 0.22100 * Math.log10(heightCm)) - 450;
      }
    } catch (error) {
      setPopupMessage("Invalid measurements. Please check your inputs.");
      setShowPopup(true);
      return;
    }

    bodyFatPercentage = Math.max(0, bodyFatPercentage).toFixed(1);
    const bodyFatMass = ((bodyFatPercentage / 100) * weightKg).toFixed(1);
    const leanBodyMass = (weightKg - bodyFatMass).toFixed(1);

    let idealBodyFat;
    if (gender === "male") {
      idealBodyFat = 8.9;
    } else {
      idealBodyFat = 17.7;
    }
    idealBodyFat = idealBodyFat.toFixed(1);

    const idealBodyFatMass = ((idealBodyFat / 100) * weightKg).toFixed(1);
    const bodyFatToLose = Math.max(0, (bodyFatMass - idealBodyFatMass)).toFixed(1);

    const bodyFatCategory = getBodyFatStatus(bodyFatPercentage);

    const results = {
      bodyFatPercentage,
      bodyFatCategory,
      bodyFatMass,
      leanBodyMass,
      idealBodyFat,
      bodyFatToLose,
    };

    setBodyFatResults(results);
  };

  const clearInputs = () => {
    setGender("");
    setAge("");
    setHeight("");
    setWeight("");
    setNeck("");
    setWaist("");
    setHip("");
    setAgeError("");
    setWeightError("");
    setHeightError("");
    setNeckError("");
    setWaistError("");
    setHipError("");
    setBodyFatResults(null);
    localStorage.removeItem("gender");
    localStorage.removeItem("age");
    localStorage.removeItem("height");
    localStorage.removeItem("weight");
    localStorage.removeItem("neck");
    localStorage.removeItem("waist");
    localStorage.removeItem("hip");
  };

  const getBodyFatStatus = (bodyFat) => {
    if (!bodyFat) return "";
    const fat = parseFloat(bodyFat);
    if (gender === "male") {
      if (fat < 2) return "Essential Fat";
      if (fat <= 5) return "Athletes";
      if (fat <= 13) return "Fitness";
      if (fat <= 17) return "Average";
      if (fat <= 25) return "Obese";
      return "Extreme Obesity";
    } else {
      if (fat < 10) return "Essential Fat";
      if (fat <= 13) return "Athletes";
      if (fat <= 20) return "Fitness";
      if (fat <= 24) return "Average";
      if (fat <= 31) return "Obese";
      return "Extreme Obesity";
    }
  };

  return (
    <>
      <Navbar showBackground={false} isExpanded={true} islogged={islogged} setIsLogged={setIsLogged} darkmenu={"black"}/>

      <div
        className={`calorie-calculator-F ${
          showResults ? "show-results-F" : ""
        }`}
      >
        <div className="left-panel-F">
          {!showResults ? (
            <>
              <div className="background-image-F"></div>
              <div className="content-F">
                <div className="small-image-F"></div>
                <h1 className="fat-title-F">
                  <span className="title-F">Body Fat</span>
                  <span className="title-F">Calculator</span>
                </h1>
                <div className="under-header-F">
                  <p className="under">
                    It Estimates The Percentage Of Fat In Your Body Based On
                    Factors Like Weight, Height, Age, Gender, Neck And Waist.
                  </p>
                </div>
                <div className="Arrow-right-F"></div>
              </div>
            </>
          ) : (
            <form className="input-section-F" onSubmit={calculateBodyFat}>
              <div className="Calculator-one-circle-F"></div>
              <h2 className="Fat-parameters-side2-F">Body Parameters</h2>
              <div className="gender-selection-F">
                <button
                  className={gender === "male" ? "active-F" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("male");
                  }}
                >
                  Male
                </button>
                <button
                  className={gender === "female" ? "active-F" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("female");
                  }}
                >
                  Female
                </button>
              </div>
              <div className="input-group-F">
                <label>Age</label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => handleNumericInputChange(e.target.value, setAge)}
                  onBlur={(e) => handleNumericInputBlur(e.target.value, setAge, setAgeError)}
                  placeholder="21"
                  className={`numeric-input-F ${ageError ? "error-F" : ""}`}
                  pattern="[0-9]*"
                />
              </div>
              <div className="flex-inputs-F">
                <div className="input-group-F">
                  <label>Weight (kg)</label>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => handleNumericInputChange(e.target.value, setWeight)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setWeight, setWeightError)}
                    placeholder="65"
                    className={`numeric-input-F ${weightError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
                <div className="input-group-F">
                  <label>Height (cm)</label>
                  <input
                    type="text"
                    value={height}
                    onChange={(e) => handleNumericInputChange(e.target.value, setHeight)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setHeight, setHeightError)}
                    placeholder="180"
                    className={`numeric-input-F ${heightError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
              </div>
              <div className="flex-inputs-F">
                <div className="input-group-F">
                  <label>Neck (cm)</label>
                  <input
                    type="text"
                    value={neck}
                    onChange={(e) => handleNumericInputChange(e.target.value, setNeck)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setNeck, setNeckError)}
                    placeholder="40"
                    className={`numeric-input-F ${neckError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
                <div className="input-group-F">
                  <label>Waist (cm)</label>
                  <input
                    type="text"
                    value={waist}
                    onChange={(e) => handleNumericInputChange(e.target.value, setWaist)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setWaist, setWaistError)}
                    placeholder="94"
                    className={`numeric-input-F ${waistError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
              </div>
              {gender === "female" && (
                <div className="input-group-F">
                  <label>Hip (cm)</label>
                  <input
                    type="text"
                    value={hip}
                    onChange={(e) => handleNumericInputChange(e.target.value, setHip)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setHip, setHipError)}
                    placeholder="95"
                    className={`numeric-input-F ${hipError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
              )}
              <div className="fat-buttons-F">
                <input
                  type="button"
                  value="Clear"
                  className="clear-btn-F"
                  onClick={clearInputs}
                />
                <button className="calculate-btn-F" type="submit">
                  Calculate{" "}
                  <img
                    src="./logo/Arrow right-white.svg"
                    alt="Arrow"
                    className="arrow-icon-F"
                  />
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="right-panel-F">
          {!showResults ? (
            <form className="input-section-F" onSubmit={calculateBodyFat}>
              <div className="Calculator-circles-F"></div>
              <div className="Calculator-one-circle-s1-F"></div>
              <h2 className="Fat-parameters-side1-F">Body Parameters</h2>
              <div className="gender-selection-F">
                <button
                  className={gender === "male" ? "active-F" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("male");
                  }}
                >
                  Male
                </button>
                <button
                  className={gender === "female" ? "active-F" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("female");
                  }}
                >
                  Female
                </button>
              </div>
              <div className="input-group-F">
                <label>Age</label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => handleNumericInputChange(e.target.value, setAge)}
                  onBlur={(e) => handleNumericInputBlur(e.target.value, setAge, setAgeError)}
                  placeholder="21"
                  className={`numeric-input-F ${ageError ? "error-F" : ""}`}
                  pattern="[0-9]*"
                />
              </div>
              <div className="flex-inputs-F">
                <div className="input-group-F">
                  <label>Weight (kg)</label>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => handleNumericInputChange(e.target.value, setWeight)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setWeight, setWeightError)}
                    placeholder="65"
                    className={`numeric-input-F ${weightError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
                <div className="input-group-F">
                  <label>Height (cm)</label>
                  <input
                    type="text"
                    value={height}
                    onChange={(e) => handleNumericInputChange(e.target.value, setHeight)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setHeight, setHeightError)}
                    placeholder="180"
                    className={`numeric-input-F ${heightError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
              </div>
              <div className="flex-inputs-F">
                <div className="input-group-F">
                  <label>Neck (cm)</label>
                  <input
                    type="text"
                    value={neck}
                    onChange={(e) => handleNumericInputChange(e.target.value, setNeck)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setNeck, setNeckError)}
                    placeholder="40"
                    className={`numeric-input-F ${neckError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
                <div className="input-group-F">
                  <label>Waist (cm)</label>
                  <input
                    type="text"
                    value={waist}
                    onChange={(e) => handleNumericInputChange(e.target.value, setWaist)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setWaist, setWaistError)}
                    placeholder="94"
                    className={`numeric-input-F ${waistError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
              </div>
              {gender === "female" && (
                <div className="input-group-F">
                  <label>Hip (cm)</label>
                  <input
                    type="text"
                    value={hip}
                    onChange={(e) => handleNumericInputChange(e.target.value, setHip)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setHip, setHipError)}
                    placeholder="95"
                    className={`numeric-input-F ${hipError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
              )}
              <div className="fat-buttons-F">
                <div className="Calculator-circles-F"></div>
                <input
                  type="button"
                  value="Clear"
                  className="clear-btn-F"
                  onClick={clearInputs}
                />
                <button className="calculate-btn-F" type="submit">
                  Calculate{" "}
                  <img
                    src="./logo/Arrow right-white.svg"
                    alt="Arrow"
                    className="arrow-icon-F"
                  />
                </button>
              </div>
            </form>
          ) : (
            <div className="result-section-F">
              <div className="Calculator-circles-side2-F"></div>
              <div className="result-header-F">
                <h2>Your Result</h2>
                <h3 className="fat-value-F">
                  Fat: {bodyFatResults?.bodyFatPercentage}%
                </h3>
              </div>
              <div className="fat-table-div-F">
                <table className="fat-table-F">
                  <tbody>
                    <tr>
                      <td className="fat-value-F">
                        Body Fat (U.S. Navy Method)
                      </td>
                      <td>{bodyFatResults?.bodyFatPercentage}%</td>
                    </tr>
                    <tr>
                      <td className="fat-value-F">Body Fat Category</td>
                      <td>{bodyFatResults?.bodyFatCategory}</td>
                    </tr>
                    <tr>
                      <td className="fat-value-F">Body Fat Mass</td>
                      <td>{bodyFatResults?.bodyFatMass} kg</td>
                    </tr>
                    <tr>
                      <td className="fat-value-F">Lean Body Mass</td>
                      <td>{bodyFatResults?.leanBodyMass} kg</td>
                    </tr>
                    <tr>
                      <td className="fat-value-F">
                        Ideal Body Fat For Given Age (Jackson & Pollock)
                      </td>
                      <td>{bodyFatResults?.idealBodyFat}%</td>
                    </tr>
                    <tr>
                      <td className="fat-value-F">
                        Body Fat To Lose To Reach Ideal
                      </td>
                      <td>{bodyFatResults?.bodyFatToLose} kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="fat-buttons-result-F">
                <button
                  className="calculate-again-btn-F"
                  onClick={recalculateFromInputs}
                >
                  Calculate Again
                </button>
                <Link to="/Calculators">
                  <button className="other-calculators-btn-F">
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
        <div className="popup-overlay-F">
          <div className="popup-F">
            <p>{popupMessage}</p>
            <button
              className="popup-close-btn-F"
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

export default BodyFatCalc;