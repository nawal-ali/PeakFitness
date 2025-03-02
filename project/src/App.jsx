import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homeFolder/Home";
import Exercises from "./pages/exercisesFolder/Exercises";
import Tips from "./pages/proTipsFolder/ProTips";
import Plans from "./pages/FoodPlansFolder/FoodPlans";
import About from "./pages/aboutFolder/About";
import Calculators from "./pages/calcsFolder/Calculators";

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
          </Routes>
        </Router>
        {/* <h1>app works!</h1> */}
      </div>
    </>
  );
}

export default App;
