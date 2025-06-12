import { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../../assets/navFolder/Navbar";
import "./bmi.css";

const BMICalculator = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [ageError, setAgeError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleNumericInputChange = (value, setter) => {
    setter(value); // Update the input value as the user types
  };

  const [islogged, setIsLogged] = useState(() => {
        return localStorage.getItem("islogged") === "true";
      });

  const handleNumericInputBlur = (value, setter, errorSetter) => {
    if (value === "") {
      setter("");
      errorSetter("");
      return;
    }

    const numericValue = parseInt(value);
    if (isNaN(numericValue) || numericValue < 0) {
      errorSetter("invalid");
      setter("");
    } else {
      errorSetter("");
      setter(numericValue.toString());
    }
  };

  const calculateBmi = (e) => {
    e.preventDefault();
    if (!gender) {
      setPopupMessage("Please select a gender before calculating.");
      setShowPopup(true);
      return;
    }
    if (!age || !height || !weight) {
      setPopupMessage("Please fill in all fields before calculating.");
      setShowPopup(true);
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    setBmi(calculatedBmi);
    setShowResults(true);
  };

  const recalculateFromInputs = () => {
    if (age && height && weight && gender) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

      setBmi(calculatedBmi);
    } else {
      setPopupMessage("Please fill in all fields, including gender, before recalculating.");
      setShowPopup(true);
    }
  };

  const clearInputs = () => {
    setGender("");
    setAge("");
    setHeight("");
    setWeight("");
    setAgeError("");
    setWeightError("");
    setHeightError("");
    setBmi(null);
  };

  const getWeightStatus = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "Healthy";
    if (bmi >= 25.0 && bmi <= 29.9) return "Overweight";
    if (bmi >= 30.0) return "Obese";
    return "";
  };

  const weightStatus = bmi ? getWeightStatus(parseFloat(bmi)) : "";

  return (
    <>
      <Navbar showBackground={false} isExpanded={true}  islogged={islogged} setIsLogged={setIsLogged} darkmenu={"back"}/>
      <div className={`calorie-calculator-B ${showResults ? "show-results-B" : ""}`}>
        <div className="left-panel-B">
          {!showResults ? (
            <>
              <div className="background-image-B"></div>
              <div className="content-B">
                <div className="small-image-B"></div>
                <h1 className="bmi-title-B">
                  <span className="title-B">BMI</span>
                  <span className="title-B">Calculator</span>
                </h1>
                <div className="under-header-B">
                  <p>
                    It Helps Categorize Your Weight As Underweight, Normal,
                    Overweight, Or Obese, Providing A Quick Assessment Of Your
                    Health.
                  </p>
                </div>
                <div className="Arrow-right-B"></div>
              </div>
            </>
          ) : (
            <form className="input-section-B" onSubmit={calculateBmi}>
              <div className="Calculator-one-circle-B"></div>
              <h2 className="BMI-parameters-side2-B">Body Parameters</h2>
              <div className="gender-selection-B">
                <button
                  className={gender === "male" ? "active-B" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("male");
                  }}
                >
                  Male
                </button>
                <button
                  className={gender === "female" ? "active-B" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("female");
                  }}
                >
                  Female
                </button>
              </div>
              <div className="input-group-B">
                <label>Age</label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => handleNumericInputChange(e.target.value, setAge)}
                  onBlur={(e) => handleNumericInputBlur(e.target.value, setAge, setAgeError)}
                  placeholder="21"
                  className={`numeric-input-B ${ageError ? "error-B" : ""}`}
                  pattern="[0-9]*"
                />
              </div>
              <div className="flex-inputs-B">
                <div className="input-group-B">
                  <label>Weight</label>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => handleNumericInputChange(e.target.value, setWeight)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setWeight, setWeightError)}
                    placeholder="65kg"
                    className={`numeric-input-B ${weightError ? "error-B" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
                <div className="input-group-B">
                  <label>Height</label>
                  <input
                    type="text"
                    value={height}
                    onChange={(e) => handleNumericInputChange(e.target.value, setHeight)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setHeight, setHeightError)}
                    placeholder="180cm"
                    className={`numeric-input-B ${heightError ? "error-B" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
              </div>
              <div className="bmi-buttons-B">
                <input
                  type="button"
                  value="Clear"
                  className="clear-btn-B"
                  onClick={clearInputs}
                />
                <button className="calculate-btn-B" type="submit">
                  Calculate{" "}
                  <img
                    src="./logo/Arrow right-white.svg"
                    alt="Arrow"
                    className="arrow-icon-B"
                  />
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="right-panel-B">
          {!showResults ? (
            <form className="input-section-B" onSubmit={calculateBmi}>
              <div className="Calculator-circles-S1-B"></div>
              <div className="Calculator-one-circle-s1-B"></div>
              <h2 className="BMI-parameters-side1-B">Body Parameters</h2>
              <div className="gender-selection-B">
                <button
                  className={gender === "male" ? "active-B" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("male");
                  }}
                >
                  Male
                </button>
                <button
                  className={gender === "female" ? "active-B" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("female");
                  }}
                >
                  Female
                </button>
              </div>
              <div className="input-group-B">
                <label>Age</label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => handleNumericInputChange(e.target.value, setAge)}
                  onBlur={(e) => handleNumericInputBlur(e.target.value, setAge, setAgeError)}
                  placeholder="21"
                  className={`numeric-input-B ${ageError ? "error-B" : ""}`}
                  pattern="[0-9]*"
                />
              </div>
              <div className="flex-inputs-B">
                <div className="input-group-B">
                  <label>Weight</label>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => handleNumericInputChange(e.target.value, setWeight)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setWeight, setWeightError)}
                    placeholder="65kg"
                    className={`numeric-input-B ${weightError ? "error-B" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
                <div className="input-group-B">
                  <label>Height</label>
                  <input
                    type="text"
                    value={height}
                    onChange={(e) => handleNumericInputChange(e.target.value, setHeight)}
                    onBlur={(e) => handleNumericInputBlur(e.target.value, setHeight, setHeightError)}
                    placeholder="180cm"
                    className={`numeric-input-B ${heightError ? "error-B" : ""}`}
                    pattern="[0-9]*"
                  />
                </div>
              </div>
              <div className="bmi-buttons-B">
                <div className="Calculator-circles-B"></div>
                <input
                  type="button"
                  value="Clear"
                  className="clear-btn-B"
                  onClick={clearInputs}
                />
                <button className="calculate-btn-B" type="submit">
                  Calculate{" "}
                  <img
                    src="./logo/Arrow right-white.svg"
                    alt="Arrow"
                    className="arrow-icon-B"
                  />
                </button>
              </div>
            </form>
          ) : (
            <div className="result-section-B">
              <div className="Calculator-circles-side2-B"></div>
              <div className="result-header-B">
                <h2>Your Result</h2>
                <h3 className="bmi-value-B">
                  {bmi} kg/M<sup>2</sup>
                </h3>
                <p className="subtext-B">
                  {bmi
                    ? `You Have A ${weightStatus} Body Weight, ${
                        weightStatus === "Healthy" ? "Great Job!" : ""
                      }`
                    : ""}
                </p>
              </div>
              <div className="bmi-table-div-B">
                <table className="bmi-table-B">
                  <thead>
                    <tr>
                      <th>BMI</th>
                      <th>Weight Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="bmi-value-B">Below 18.5</td>
                      <td>Underweight</td>
                    </tr>
                    <tr>
                      <td className="bmi-value-B">18.5-24.9</td>
                      <td>Healthy</td>
                    </tr>
                    <tr>
                      <td className="bmi-value-B">25.0-29.9</td>
                      <td>Overweight</td>
                    </tr>
                    <tr>
                      <td className="bmi-value-B">30.0 And Above</td>
                      <td>Obese</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bmi-buttons-result-B">
                <button
                  className="calculate-again-btn-B"
                  onClick={recalculateFromInputs}
                >
                  Calculate Again
                </button>
                <Link to="/Calculators">
                  <button className="other-calculators-btn-B">
                    Other Calculators
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay-B">
          <div className="popup-B">
            <p>{popupMessage}</p>
            <button
              className="popup-close-btn-B"
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

export default BMICalculator;