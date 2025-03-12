// import Navbar from "../../../assets/navFolder/Navbar";
// import "./body.css";

// export default function BodyFat() {
//   return (
//     <>
//       <Navbar />
//       {/* write all code within this div because nav has fixed position
//        and content will be placed bahind it if it does not have margin top */}
//       <div style={{ marginTop: "9%" }}>
//         <p>body works</p>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // 
import Navbar from "../../../assets/navFolder/Navbar";
import "./body.css";

const BodyFatCalc = () => {
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
  const [neck, setNeck] = useState(() => {
    const savedNeck = localStorage.getItem("neck");
    const parsedNeck = parseInt(savedNeck) || "";
    return parsedNeck >= 0 ? parsedNeck.toString() : "";
  });
  const [waist, setWaist] = useState(() => {
    const savedWaist = localStorage.getItem("waist");
    const parsedWaist = parseInt(savedWaist) || "";
    return parsedWaist >= 0 ? parsedWaist.toString() : "";
  });
  const [bodyFatResults, setBodyFatResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const [ageError, setAgeError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [neckError, setNeckError] = useState("");
  const [waistError, setWaistError] = useState("");

  useEffect(() => {
    localStorage.setItem("gender", gender);
    localStorage.setItem("age", age === "" ? "" : age.toString());
    localStorage.setItem("height", height === "" ? "" : height.toString());
    localStorage.setItem("weight", weight === "" ? "" : weight.toString());
    localStorage.setItem("neck", neck === "" ? "" : neck.toString());
    localStorage.setItem("waist", waist === "" ? "" : waist.toString());
  }, [gender, age, height, weight, neck, waist]);

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

  const calculateBodyFat = (e) => {
    e.preventDefault();
    if (!gender) {
      alert("Please select a gender before calculating.");
      return;
    }
    if (!age || !height || !weight || !neck || !waist) {
      alert("Please fill in all fields before calculating.");
      return;
    }

    const heightInInches = parseInt(height) / 2.54;
    const neckInInches = parseInt(neck) / 2.54;
    const waistInInches = parseInt(waist) / 2.54;
    const weightInKg = parseInt(weight);

    let bodyFatPercentage;

    if (gender === "male") {
      bodyFatPercentage =
        86.01 * Math.log10(waistInInches - neckInInches) -
        70.041 * Math.log10(heightInInches) +
        36.76;
    } else {
      const hipInInches = waistInInches;
      bodyFatPercentage =
        163.205 * Math.log10(waistInInches + hipInInches - neckInInches) -
        97.684 * Math.log10(heightInInches) -
        78.387;
    }

    bodyFatPercentage = Math.max(0, bodyFatPercentage).toFixed(1);
    const bodyFatMass = ((bodyFatPercentage / 100) * weightInKg).toFixed(1);
    const leanBodyMass = (weightInKg - bodyFatMass).toFixed(1);

    let idealBodyFat;
    if (gender === "male") {
      idealBodyFat = 8.9;
    } else {
      idealBodyFat = 21.8;
    }
    idealBodyFat = idealBodyFat.toFixed(1);

    const idealBodyFatMass = ((idealBodyFat / 100) * weightInKg).toFixed(1);
    const bodyFatToLose = (bodyFatMass - idealBodyFatMass).toFixed(1);

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
    if (age && height && weight && gender && neck && waist) {
      const heightInInches = parseInt(height) / 2.54;
      const neckInInches = parseInt(neck) / 2.54;
      const waistInInches = parseInt(waist) / 2.54;
      const weightInKg = parseInt(weight);
      let bodyFatPercentage;

      if (gender === "male") {
        bodyFatPercentage =
          86.01 * Math.log10(waistInInches - neckInInches) -
          70.041 * Math.log10(heightInInches) +
          36.76;
      } else {
        const hipInInches = waistInInches;
        bodyFatPercentage =
          163.205 * Math.log10(waistInInches + hipInInches - neckInInches) -
          97.684 * Math.log10(heightInInches) -
          78.387;
      }

      bodyFatPercentage = Math.max(0, bodyFatPercentage).toFixed(1);
      const bodyFatMass = ((bodyFatPercentage / 100) * weightInKg).toFixed(1);
      const leanBodyMass = (weightInKg - bodyFatMass).toFixed(1);

      let idealBodyFat;
      if (gender === "male") {
        idealBodyFat = 8.9;
      } else {
        idealBodyFat = 21.8;
      }
      idealBodyFat = idealBodyFat.toFixed(1);

      const idealBodyFatMass = ((idealBodyFat / 100) * weightInKg).toFixed(1);
      const bodyFatToLose = (bodyFatMass - idealBodyFatMass).toFixed(1);

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
    } else {
      alert(
        "Please fill in all fields, including gender, before recalculating."
      );
    }
  };

  // const resetForm = () => {
  //     recalculateFromInputs();
  // };

  const clearInputs = () => {
    setGender("");
    setAge("");
    setHeight("");
    setWeight("");
    setNeck("");
    setWaist("");
    setAgeError("");
    setWeightError("");
    setHeightError("");
    setNeckError("");
    setWaistError("");
    setBodyFatResults(null);
    localStorage.removeItem("gender");
    localStorage.removeItem("age");
    localStorage.removeItem("height");
    localStorage.removeItem("weight");
    localStorage.removeItem("neck");
    localStorage.removeItem("waist");
  };

  const getBodyFatStatus = (bodyFat) => {
    if (!bodyFat) return "";
    const fat = parseFloat(bodyFat);
    if (gender === "male") {
      if (fat < 2) return "Essential Fat";
      if (fat <= 5) return "Athlete";
      if (fat <= 13) return "Fitness";
      if (fat <= 17) return "Average";
      if (fat <= 25) return "Obese";
      return "Extreme Obesity";
    } else {
      if (fat < 10) return "Essential Fat";
      if (fat <= 14) return "Athlete";
      if (fat <= 21) return "Fitness";
      if (fat <= 25) return "Average";
      if (fat <= 32) return "Obese";
      return "Extreme Obesity";
    }
  };

  return (
    <>
      <Navbar showSearch={false} showBackground={false} />

      <div
        className={`calorie-calculator-F ${
          showResults ? "show-results-F" : ""
        }`}
      >
        <div className="left-panel-F">
          {!showResults ? (
            <>
              {/* <div className="logo-F"></div> */}
              <div className="background-image-F"></div>
              <div className="content-F">
                <div className="small-image-F"></div>
                <h1 className="bmi-title-F">
                  <span className="title-F">Body Fat</span>
                  <span className="title-F">Calculator</span>
                </h1>
                <div className="under-header-F">
                  <p>
                    It Estimates The Percentage Of Fat In Your Body Based On
                    Factors Like Weight, Height, Age, Gender, Neck And Waist.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <form className="input-section-F" onSubmit={calculateBodyFat}>
              <div className="Calculator-one-circle-F"></div>
              <h2 className="body-parameters-side2-F">Body Parameters</h2>
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
              <div className="input-group-F">  {/*-F Fat*/}
                <label>Age</label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) =>
                    handleNumericInput(e.target.value, setAge, age, setAgeError)
                  }
                  placeholder="21"
                  className={`numeric-input-F ${ageError ? "error-F" : ""}`}
                  pattern="[0-9]*"
                />
                {ageError && <p className="error-message-F">{ageError}</p>}
              </div>
              <div className="flex-inputs-F">
                <div className="input-group-F">
                  <label>Weight</label>
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
                    className={`numeric-input-F ${
                      weightError ? "error-F" : ""
                    }`}
                    pattern="[0-9]*"
                  />
                  {weightError && (
                    <p className="error-message-F weight-height-error-F">
                      {weightError}
                    </p>
                  )}
                </div>
                <div className="input-group-F">
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
                    className={`numeric-input-F ${
                      heightError ? "error-F" : ""
                    }`}
                    pattern="[0-9]*"
                  />
                  {heightError && (
                    <p className="error-message-F weight-height-error-F">
                      {heightError}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex-inputs-F">
                <div className="input-group-F">
                  <label>Neck</label>
                  <input
                    type="text"
                    value={neck}
                    onChange={(e) =>
                      handleNumericInput(
                        e.target.value,
                        setNeck,
                        neck,
                        setNeckError
                      )
                    }
                    placeholder="40cm"
                    className={`numeric-input-F ${neckError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                  {neckError && (
                    <p className="error-message-F weight-height-error-F">
                      {neckError}
                    </p>
                  )}
                </div>
                <div className="input-group-F">
                  <label>Waist</label>
                  <input
                    type="text"
                    value={waist}
                    onChange={(e) =>
                      handleNumericInput(
                        e.target.value,
                        setWaist,
                        waist,
                        setWaistError
                      )
                    }
                    placeholder="94cm"
                    className={`numeric-input-F ${waistError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                  {waistError && (
                    <p className="error-message-F weight-height-error-F">
                      {waistError}
                    </p>
                  )}
                </div>
              </div>
              <div className="bmi-buttons-F">
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
              <h2 className="body-parameters-side1-F">Body Parameters</h2>
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
                  onChange={(e) =>
                    handleNumericInput(e.target.value, setAge, age, setAgeError)
                  }
                  placeholder="21"
                  className={`numeric-input-F ${ageError ? "error-F" : ""}`}
                  pattern="[0-9]*"
                />
                {ageError && <p className="error-message-F">{ageError}</p>}
              </div>
              <div className="flex-inputs-F">
                <div className="input-group-F">
                  <label>Weight</label>
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
                    className={`numeric-input-F ${
                      weightError ? "error-F" : ""
                    }`}
                    pattern="[0-9]*"
                  />
                  {weightError && (
                    <p className="error-message-F weight-height-error-F">
                      {weightError}
                    </p>
                  )}
                </div>
                <div className="input-group-F">
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
                    className={`numeric-input-F ${
                      heightError ? "error-F" : ""
                    }`}
                    pattern="[0-9]*"
                  />
                  {heightError && (
                    <p className="error-message-F weight-height-error-F">
                      {heightError}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex-inputs-F">
                <div className="input-group-F">
                  <label>Neck</label>
                  <input
                    type="text"
                    value={neck}
                    onChange={(e) =>
                      handleNumericInput(
                        e.target.value,
                        setNeck,
                        neck,
                        setNeckError
                      )
                    }
                    placeholder="40cm"
                    className={`numeric-input-F ${neckError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                  {neckError && (
                    <p className="error-message-F weight-height-error-F">
                      {neckError}
                    </p>
                  )}
                </div>
                <div className="input-group-F">
                  <label>Waist</label>
                  <input
                    type="text"
                    value={waist}
                    onChange={(e) =>
                      handleNumericInput(
                        e.target.value,
                        setWaist,
                        waist,
                        setWaistError
                      )
                    }
                    placeholder="94cm"
                    className={`numeric-input-F ${waistError ? "error-F" : ""}`}
                    pattern="[0-9]*"
                  />
                  {waistError && (
                    <p className="error-message-F weight-height-error-F">
                      {waistError}
                    </p>
                  )}
                </div>
              </div>
              <div className="bmi-buttons-F">
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
              <div className="result-logo-F"></div>
              <div className="result-header-F">
                <h2>Your Result</h2>
                <h3 className="bmi-value-F">
                  Fat: {bodyFatResults?.bodyFatPercentage}%
                </h3>
              </div>
              <div className="bmi-table-div-F">
                <table className="bmi-table-F">
                  <tbody>
                    <tr>
                      <td className="bmi-value-F">
                        Body Fat (U.S. Navy Method)
                      </td>
                      <td>{bodyFatResults?.bodyFatPercentage}%</td>
                    </tr>
                    <tr>
                      <td className="bmi-value-F">Body Fat Category</td>
                      <td>{bodyFatResults?.bodyFatCategory}</td>
                    </tr>
                    <tr>
                      <td className="bmi-value-F">Body Fat Mass</td>
                      <td>{bodyFatResults?.bodyFatMass} kg</td>
                    </tr>
                    <tr>
                      <td className="bmi-value-F">Lean Body Mass</td>
                      <td>{bodyFatResults?.leanBodyMass} kg</td>
                    </tr>
                    <tr>
                      <td className="bmi-value-F">
                        Ideal Body Fat For Given Age (Jackson & Pollock)
                      </td>
                      <td>{bodyFatResults?.idealBodyFat}%</td>
                    </tr>
                    <tr>
                      <td className="bmi-value-F">
                        Body Fat To Lose To Reach Ideal
                      </td>
                      <td>{bodyFatResults?.bodyFatToLose} kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bmi-buttons-result-F">
                <button
                  className="calculate-btn-F"
                  onClick={recalculateFromInputs}
                >
                  Calculate Again
                </button>
                <Link to="/Calculators"> {/* التعديل هنا: استخدمنا Link */}
                  <button className="other-calculators-btn-B">
                    Other Calculators
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BodyFatCalc;
