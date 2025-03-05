// import Navbar from "../../../assets/navFolder/Navbar";
// import "./weight.css";

// export default function Weight() {
//   return (
//     <>
//       <Navbar />
//       {/* write all code within this div because nav has fixed position
//        and content will be placed bahind it if it does not have margin top */}
//       <div style={{ marginTop: "9%" }}>
//         <p>Weight works</p>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import Navbar from "../../../assets/navFolder/Navbar";
import "./weight.css";

const IdealCalculator = () => {
  const [gender, setGender] = useState(() => {
    const savedGender = localStorage.getItem("gender");
    return savedGender || "";
  });
  const [age, setAge] = useState(() => {
    const savedAge = localStorage.getItem("age");
    return savedAge || "";
  });
  const [height, setHeight] = useState(() => {
    const savedHeight = localStorage.getItem("height");
    const parsedHeight = parseInt(savedHeight) || "";
    return parsedHeight >= 0 ? parsedHeight.toString() : "";
  });
  const [idealWeight, setIdealWeight] = useState(null); // Average ideal weight
  const [formulaWeights, setFormulaWeights] = useState(null); // Individual formula weights
  const [showResults, setShowResults] = useState(false);
  const [bmiRange, setBmiRange] = useState(null);
  const [ageError, setAgeError] = useState("");
  const [heightError, setHeightError] = useState("");

  useEffect(() => {
    localStorage.setItem("gender", gender);
    localStorage.setItem("age", age === "" ? "" : age.toString());
    localStorage.setItem("height", height === "" ? "" : height.toString());
  }, [gender, age, height]);

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

  const calculateIdealWeight = (e) => {
    e.preventDefault();
    if (!gender) {
      alert("Please select a gender before calculating.");
      return;
    }
    if (!height) {
      alert("Please enter your height before calculating.");
      return;
    }

    const heightInCm = parseInt(height);
    const heightInMeters = heightInCm / 100;
    const heightInInches = heightInCm / 2.54;
    let robinson, miller, devine, hamwi;

    if (gender === "male") {
      robinson = 52 + 1.9 * (heightInInches - 60); // Convert lbs to kg
      miller = 56.2 + 1.41 * (heightInInches - 60); // Convert lbs to kg
      devine = 50 + 2.3 * (heightInInches - 60); // Already in kg
      hamwi = 48 + 2.7 * (heightInInches - 60); // Already in kg
    } else {
      robinson = 49 + 1.7 * (heightInInches - 60); // Convert lbs to kg
      miller = 53.1 + 1.36 * (heightInInches - 60); // Convert lbs to kg
      devine = 45.5 + 2.3 * (heightInInches - 60); // Already in kg
      hamwi = 45.5 + 2.2 * (heightInInches - 60); // Already in kg
    }

    // Round to 1 decimal place
    robinson = robinson.toFixed(1);
    miller = miller.toFixed(1);
    devine = devine.toFixed(1);
    hamwi = hamwi.toFixed(1);

    // Average in kg
    const averageIdealWeight = (
      (parseFloat(robinson) +
        parseFloat(miller) +
        parseFloat(devine) +
        parseFloat(hamwi)) /
      4
    ).toFixed(1);
    const minHealthyWeight = (18.5 * heightInMeters * heightInMeters).toFixed(
      1
    );
    const maxHealthyWeight = (24.9 * heightInMeters * heightInMeters).toFixed(
      1
    );
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
    if (height && gender) {
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
      const minHealthyWeight = (18.5 * heightInMeters * heightInMeters).toFixed(
        1
      );
      const maxHealthyWeight = (24.9 * heightInMeters * heightInMeters).toFixed(
        1
      );
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
    } else {
      alert(
        "Please fill in all fields, including gender, before recalculating."
      );
    }
  };

  // const resetForm = () => {
  //   recalculateFromInputs();
  // };

  const clearInputs = () => {
    setGender("");
    setAge("");
    setHeight("");
    setAgeError("");
    setHeightError("");
    setIdealWeight(null);
    setFormulaWeights(null);
    localStorage.removeItem("gender");
    localStorage.removeItem("age");
    localStorage.removeItem("height");
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
              <div className="logo-I"></div>
              <div className="background-image-I"></div>
              <div className="content-I">
                <div className="small-image-I"></div>
                <h1 className="ideal-weight-title-I">
                  <span className="title-I">Ideal Weight</span>
                  <span className="title-I">Calculator</span>
                </h1>
                <div className="under-header-I">
                  <p>
                    It Helps Determine Your Ideal Body Weight Ranges Based On
                    Popular Formulas Like Robinson, Miller, Devine, And Hamwi.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <form className="input-section-I" onSubmit={calculateIdealWeight}>
              <div className="Calculator-one-circle-I"></div>
              <h2 className="body-parameters-side2-I">Body Parameters</h2>
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
                  onChange={(e) =>
                    handleNumericInput(e.target.value, setAge, age, setAgeError)
                  }
                  placeholder="21"
                  className={`numeric-input-I ${ageError ? "error-I" : ""}`}
                  pattern="[0-9]*"
                />
                {ageError && <p className="error-message-I">{ageError}</p>}
              </div>
              <div className="input-group-I">
                <label>Height</label>
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
                  className={`numeric-input-I ${heightError ? "error-I" : ""}`}
                  pattern="[0-9]*"
                />
                {heightError && (
                  <p className="error-message-I">{heightError}</p>
                )}
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
              <div className="Calculator-circles-I"></div>
              <div className="Calculator-one-circle-s1-I"></div>
              <h2 className="body-parameters-side1-I">Body Parameters</h2>
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
                  onChange={(e) =>
                    handleNumericInput(e.target.value, setAge, age, setAgeError)
                  }
                  placeholder="21"
                  className={`numeric-input-I ${ageError ? "error-I" : ""}`}
                  pattern="[0-9]*"
                />
                {ageError && <p className="error-message-I">{ageError}</p>}
              </div>
              <div className="input-group-I">
                <label>Height</label>
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
                  className={`numeric-input-I ${heightError ? "error-I" : ""}`}
                  pattern="[0-9]*"
                />
                {heightError && (
                  <p className="error-message-I">{heightError}</p>
                )}
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
              <div className="Calculator-circles-side2-I"></div>
              <div className="result-logo-I"></div>
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
                      <td className="ideal-weight-value-I">
                        Healthy BMI Range
                      </td>
                      <td>{formulaWeights?.bmiRange} kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="ideal-buttons-result-I">
                <button
                  className="calculate-btn-I"
                  onClick={recalculateFromInputs}
                >
                  Calculate Again
                </button>
                <button className="other-calculators-btn-I">
                  Other Calculators
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default IdealCalculator;
