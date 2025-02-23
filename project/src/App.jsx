import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homeFolder/Home";
import Exercises from "./pages/exercisesFolder/Exercises";
import Tips from "./pages/proTipsFolder/ProTips";
import Plans from "./pages/FoodPlansFolder/FoodPlans";

function App() {
  return (
    <>
      <Router>
        {/* <Home />
        <Exercises /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/ProTips" element={<Tips />} />
          <Route path="/FoodPlans" element={<Plans />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>

      {/* <h1>app works!</h1> */}
    </>
  );
}

export default App;
