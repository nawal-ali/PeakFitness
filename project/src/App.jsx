import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CalorieAuthPanels from "./pages/Calculators/Calorie Calculator/Calorie";
// import BMRCalculator from "./pages/Calculators/BMI Calculator/BMI";
// import AuthForm from "./pages/Auth/Login/Login"; 
// import ForgetPassword from "./pages/Auth/Password/Forget-password/Forget";
// import Carousel from "./pages/Calculators/Slider/slider";
// import CalorieCalculator from "./pages/Calculators/Calorie Calculator/Calorie";
// import IdealWeightCalculator from "./pages/Calculators/IDEAL/IDEAL";
// import BMICalculator from "./pages/Calculators/BMI Calculator/BMI";
// import BodyFatCalc from "./pages/Calculators/BodyFat Calculator/Fat";
// import Slider_C from "./pages/Calculators/Slider/Slider_C";
// import Slider_PT from "./pages/Pro Tips/Slider/Slider-PT";
// import ForgetPassword from "./pages/Auth/Password/Forget-password/Forget";
// import NewPassword from "./pages/Auth/Password/New-Password/New";
// import BodyFatCalc from "./pages/Calculators/BodyFat Calculator/Fat";
import Slider_FP from "./pages/Food-Plan/Slider/Slider-FP";
import WeightGain from "./pages/Food-Plan/Weight-Gain/weight-Gain-FP";
// import test_FOFO from "./pages/Food-Plan/test/test_FOFO";
function App() {
  return (
    // <test_FOFO/>
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<AuthForm />} />
    //     <Route path="/Forget-password" element={<ForgetPassword/>} />
    //     {/* <Route path="/Calorie" element={<CalorieAuthPanels/>} /> */}
    //   </Routes>
    //  </Router>
    // <CalorieAuthPanels/>
    // <BMRCalculator/>
    // <IdealWeightCalculator/>
    // <BodyFatCalc/>
    // <Carousel/> 
    // <AuthForm/>
    // <Slider/>
    // <Router>
      // <Routes>
      //   <Route path="/Slider" element={<Slider_C />} />
      //   <Route path="/calorie" element={<CalorieCalculator />} />
      //   <Route path="/ideal-weight" element={<IdealWeightCalculator />} />
      //   <Route path="/bmi" element={<BMICalculator />} />
      //   <Route path="/body-fat" element={<BodyFatCalc />} />
      // </Routes>
    // </Router>
    // <Slider_PT/>
    // <Slider_C/>
    // <Slider_FP/>
    <Router>
    <Routes>
      <Route path="/" element={<Slider_FP />} />
      <Route path="/weight-gain-details" element={<WeightGain />} />
    </Routes>
  </Router>
    // <WeightGain/>
    // <CalorieCalculator/>
    // <AuthForm/>
  );
}

export default App;
