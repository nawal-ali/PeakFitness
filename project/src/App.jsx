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
import AuthForm from "./pages/Auth/Login/Loginn";
import ForgetPassword from "./pages/Auth/Password/Forget password/Auth-F";
import NewPassword from "./pages/Auth/Password/New password/Auth-N";

function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/Forget-Password" element={<ForgetPassword />} />
            <Route path="/New-Password" element={<NewPassword />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/ProTips" element={<Tips />} />
            <Route path="/FoodPlans" element={<Plans />} />
            <Route path="/about" element={<About />} />
            <Route path="/Calculators" element={<Calculators />} />
            <Route path="/BMI" element={<BMI />} />
            <Route path="/BodyFat" element={<BodyFat />} />
            <Route path="/Calorie" element={<Calorie />} />
            <Route path="/Weight" element={<Weight />} />
          </Routes>
        </Router>
        {/* <h1>app works!</h1> */}
      </div>
    </>
  );
}

export default App;
