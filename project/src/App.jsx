import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homeFolder/Home";
import Exercises from "./pages/exercisesFolder/Exercises";
import Tips from "./pages/proTipsFolder/ProTips";
import Plans from "./pages/FoodPlansFolder/FoodPlans";
import About from "./pages/aboutFolder/About";
import Calculators from "./pages/calcsFolder/Calculators";
import BMI from "./pages/calcsFolder/BMI/BMI";
import BodyFat from "./pages/calcsFolder/Body-Fat/BodyFat";
import Calorie from "./pages/calcsFolder/Calorie/Calorie";
import Weight from "./pages/calcsFolder/Ideal-Weight/Weight";
import Slider_FP from "./pages/Food-Plan/Slider-FP/Slider-FP";
import WeightGain from "./pages/Food-Plan/Weight-Gain/weight-Gain-FP";

function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/ProTips" element={<Tips />} />
            <Route path="/FoodPlans" element={<Plans />} />
            <Route path="/about" element={<About />} />
            <Route path="/Calculators" element={<Calculators />} />
            <Route path="/BMI" element={<BMI />} />
            <Route path="/BodyFat" element={<BodyFat />} />
            <Route path="/Calorie" element={<Calorie />} />
            <Route path="/Weight" element={<Weight />} />
            <Route path="/FoodPlanSlider" element={<Slider_FP/>}/>
            <Route path="/weight-gain-details" element={<WeightGain/>}/>
          </Routes>
        </Router>
        {/* <h1>app works!</h1> */}
      </div>
    </>
  );
}

export default App;
