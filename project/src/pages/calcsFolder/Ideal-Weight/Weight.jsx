import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../assets/navFolder/Navbar";
import "./weight.css";

const IdealCalculator = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [idealWeight, setIdealWeight] = useState(null);
  const [formulaWeights, setFormulaWeights] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [bmiRange, setBmiRange] = useState(null);
  const [ageError, setAgeError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleNumericInputChange = (value, setter) => {
    setter(value); // Update the input value as the user types
  };

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

  const calculateIdealWeight = (e) => {
    e.preventDefault();
    if (!gender) {
      setPopupMessage("Please select a gender before calculating.");
      setShowPopup(true);
      return;
    }
    if (!height) {
      setPopupMessage("Please enter your height before calculating.");
      setShowPopup(true);
      return;
    }

    const heightInCm = parseInt(height);
    const heightInMeters = heightInCm / 100;
    const heightInInches = heightInCm / 2.54;
    let robinson, miller, devine, hamwi;

    if (gender === "male") {
      robinson = 52 + 1.9 * (heightInInches - 60);
      miller = 56.2 + 1.41 * (heightInInches - 60);
      devine = 50 + 2.3 * (heightInInches - 60);
      hamwi = 48 + 2.7 * (heightInInches - 60);
    } else {
      robinson = 49 + 1.7 * (heightInInches - 60);
      miller = 53.1 + 1.36 * (heightInInches - 60);
      devine = 45.5 + 2.3 * (heightInInches - 60);
      hamwi = 45.5 + 2.2 * (heightInInches - 60);
    }

    robinson = robinson.toFixed(1);
    miller = miller.toFixed(1);
    devine = devine.toFixed(1);
    hamwi = hamwi.toFixed(1);

    const averageIdealWeight = (
      (parseFloat(robinson) +
        parseFloat(miller) +
        parseFloat(devine) +
        parseFloat(hamwi)) /
      4
    ).toFixed(1);
    const minHealthyWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
    const maxHealthyWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);
    const bmiRangeText = `${minHealthyWeight} - ${maxHealthyWeight} kg`;

    setIdealWeight(averageIdealWeight);
    setFormulaWeights({
      robinson,
      miller,
      devine,
      hamwi,
      bmiRange: bmiRangeText,
    });
    setBmiRange(bmiRangeText);
    setShowResults(true);
  };

  const recalculateFromInputs = () => {
    if (!height || !gender) {
      setPopupMessage("Please fill in all fields, including gender, before recalculating.");
      setShowPopup(true);
      return;
    }

    const heightInCm = parseInt(height);
    const heightInMeters = heightInCm / 100;
    const heightInInches = heightInCm / 2.54;
    let robinson, miller, devine, hamwi;

    if (gender === "male") {
      robinson = 52 + 1.9 * (heightInInches - 60);
      miller = 56.2 + 1.41 * (heightInInches - 60);
      devine = 50 + 2.3 * (heightInInches - 60);
      hamwi = 48 + 2.7 * (heightInInches - 60);
    } else {
      robinson = 49 + 1.7 * (heightInInches - 60);
      miller = 53.1 + 1.36 * (heightInInches - 60);
      devine = 45.5 + 2.3 * (heightInInches - 60);
      hamwi = 45.5 + 2.2 * (heightInInches - 60);
    }

    robinson = robinson.toFixed(1);
    miller = miller.toFixed(1);
    devine = devine.toFixed(1);
    hamwi = hamwi.toFixed(1);

    const averageIdealWeight = (
      (parseFloat(robinson) +
        parseFloat(miller) +
        parseFloat(devine) +
        parseFloat(hamwi)) /
      4
    ).toFixed(1);
    const minHealthyWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
    const maxHealthyWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);
    const bmiRangeText = `${minHealthyWeight} - ${maxHealthyWeight} kg`;

    setIdealWeight(averageIdealWeight);
    setFormulaWeights({
      robinson,
      miller,
      devine,
      hamwi,
      bmiRange: bmiRangeText,
    });
    setBmiRange(bmiRangeText);
    setShowResults(true);
  };

  const clearInputs = () => {
    setGender("");
    setAge("");
    setHeight("");
    setAgeError("");
    setHeightError("");
    setIdealWeight(null);
    setFormulaWeights(null);
  };

  return (
    <>
      <Navbar showSearch={false} showBackground={false} />
      <div
        className={`calorie-calculator-I ${
          showResults ? "show-results-I" : ""
        }`}
      >
        <div className="left-panel-I">
          {!showResults ? (
            <>
              <div className="background-image-I"></div>
              <div className="content-I">
                <div className="small-image-I"></div>
                <h1 className="ideal-weight-title-I">
                  <span className="title-I">Ideal Weight</span>
                  <span className="title-I">Calculator</span>
                </h1>
                <div className="under-header-I">
                  <p>
                    It Computes Ideal Body Weight Ranges Based On
                    Height, Gender, And Age.
                  </p>
                </div>
                <div className="Arrow-right-I"></div>
              </div>
            </>
          ) : (
            <form className="input-section-I" onSubmit={calculateIdealWeight}>
              <div className="Calculator-one-circle-I"></div>
              <h2 className="Ideal-parameters-side2-I">Body Parameters</h2>
              <div className="gender-selection-I">
                <button
                  className={`gender-btn-I ${
                    gender === "male" ? "active-I" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("male");
                  }}
                >
                  Male
                </button>
                <button
                  className={`gender-btn-I ${
                    gender === "female" ? "active-I" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("female");
                  }}
                >
                  Female
                </button>
              </div>
              <div className="input-group-I">
                <label>Age</label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => handleNumericInputChange(e.target.value, setAge)}
                  onBlur={(e) => handleNumericInputBlur(e.target.value, setAge, setAgeError)}
                  placeholder="21"
                  className={`numeric-input-I ${ageError ? "error-I" : ""}`}
                  pattern="[0-9]*"
                />
              </div>
              <div className="input-group-I">
                <label>Height</label>
                <input
                  type="text"
                  value={height}
                  onChange={(e) => handleNumericInputChange(e.target.value, setHeight)}
                  onBlur={(e) => handleNumericInputBlur(e.target.value, setHeight, setHeightError)}
                  placeholder="180cm"
                  className={`numeric-input-I ${heightError ? "error-I" : ""}`}
                  pattern="[0-9]*"
                />
              </div>
              <div className="ideal-buttons-I">
                <input
                  type="button"
                  value="Clear"
                  className="clear-btn-I"
                  onClick={clearInputs}
                />
                <button className="calculate-btn-I" type="submit">
                  Calculate{" "}
                  <img
                    src="./logo/Arrow right-white.svg"
                    alt="Arrow"
                    className="arrow-icon-I"
                  />
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="right-panel-I">
          {!showResults ? (
            <form className="input-section-I" onSubmit={calculateIdealWeight}>
              <div className="Calculator-circles-S1-I"></div>
              <div className="Calculator-one-circle-s1-I"></div>
              <h2 className="Ideal-parameters-side1-I">Body Parameters</h2>
              <div className="gender-selection-I">
                <button
                  className={`gender-btn-I ${
                    gender === "male" ? "active-I" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("male");
                  }}
                >
                  Male
                </button>
                <button
                  className={`gender-btn-I ${
                    gender === "female" ? "active-I" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setGender("female");
                  }}
                >
                  Female
                </button>
              </div>
              <div className="input-group-I">
                <label>Age</label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => handleNumericInputChange(e.target.value, setAge)}
                  onBlur={(e) => handleNumericInputBlur(e.target.value, setAge, setAgeError)}
                  placeholder="21"
                  className={`numeric-input-I ${ageError ? "error-I" : ""}`}
                  pattern="[0-9]*"
                />
              </div>
              <div className="input-group-I">
                <label>Height</label>
                <input
                  type="text"
                  value={height}
                  onChange={(e) => handleNumericInputChange(e.target.value, setHeight)}
                  onBlur={(e) => handleNumericInputBlur(e.target.value, setHeight, setHeightError)}
                  placeholder="180cm"
                  className={`numeric-input-I ${heightError ? "error-I" : ""}`}
                  pattern="[0-9]*"
                />
              </div>
              <div className="ideal-buttons-I">
                <div className="Calculator-circles-I"></div>
                <input
                  type="button"
                  value="Clear"
                  className="clear-btn-I"
                  onClick={clearInputs}
                />
                <button className="calculate-btn-I" type="submit">
                  Calculate{" "}
                  <img
                    src="./logo/Arrow right-white.svg"
                    alt="Arrow"
                    className="arrow-icon-I"
                  />
                </button>
              </div>
            </form>
          ) : (
            <div className="result-section-I">
              <div className="Calculator-circles-S2-I"></div>
              <div className="result-header-I">
                <h2>Your Result</h2>
                <h3 className="ideal-weight-value-I">≈{idealWeight}kg</h3>
              </div>
              <p className="subtext-I">
                The ideal weight based on popular formulas:
              </p>
              <div className="ideal-table-div-I">
                <table className="ideal-table-I">
                  <thead>
                    <tr>
                      <th className="ideal-weight-value-I">Formula</th>
                      <th>Ideal Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="ideal-weight-value-I">Robinson (1983)</td>
                      <td>{formulaWeights?.robinson} kg</td>
                    </tr>
                    <tr>
                      <td className="ideal-weight-value-I">Miller (1983)</td>
                      <td>{formulaWeights?.miller} kg</td>
                    </tr>
                    <tr>
                      <td className="ideal-weight-value-I">Devine (1974)</td>
                      <td>{formulaWeights?.devine} kg</td>
                    </tr>
                    <tr>
                      <td className="ideal-weight-value-I">Hamwi (1964)</td>
                      <td>{formulaWeights?.hamwi} kg</td>
                    </tr>
                    <tr>
                      <td className="ideal-weight-value-I">Healthy BMI Range</td>
                      <td>{formulaWeights?.bmiRange}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="ideal-buttons-result-I">
                <button
                  className="calculate-again-btn-I"
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
        <div className="popup-overlay-I">
          <div className="popup-I">
            <p>{popupMessage}</p>
            <button
              className="popup-close-btn-I"
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

export default IdealCalculator;