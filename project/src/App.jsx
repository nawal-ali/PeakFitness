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
import Slider_FP from "./pages/FoodPlansFolder/FoodPlans";
import WeightGain from "./pages/FoodPlansFolder/Weight-Gain/Weight-Gain-FP"
import WeightLoss from "./pages/FoodPlansFolder/Weight-Loss/Weight-Loss-FP"
import MuscleGain from "./pages/FoodPlansFolder/Muscle-Gain/Muscle-Gain-FP";
// import Login from "./pages/Auth/Login/Refrence";
import Login from "./pages/Auth/Login/Login";
import SignUp from "./pages/Auth/Login/SignUp";
import ForgetPassword from "./pages/Auth/Password/Forget password/Auth-F";
import NewPassword from "./pages/Auth/Password/New Password/Auth-N";
import Slider_PT from "./pages/proTipsFolder/ProTips";
// import MuscleGain from "./pages/FoodPlansFolder/Muscle-Gain/Muscle-Gain-FP";
// import WeightLoss from "./pages/FoodPlansFolder/Weight-Loss/Weight-Loss-FP";
function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/Forget-Password" element={<ForgetPassword/>} />
            <Route path="/New-Password" element={<NewPassword/>} />
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
            <Route path="/weight-gain-details" element={<WeightGain />} />
            <Route path="/weight-loss-details" element={<WeightLoss />} />
            <Route path="/muscle-gain-details" element={<MuscleGain />} />
            <Route path="/proTipsSlider" element={<Slider_PT />} />
            
            {/* <Route path="/weight-loss-details" element={<WeightLoss />} />
            <Route path="/Muslce-gain-details" element={<MuscleGain />} /> */}
          </Routes>
        </Router>
        {/* <h1>app works!</h1> */}
      </div>
    </>
  );
}

export default App;
