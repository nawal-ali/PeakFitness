import Navbar from "../../assets/navFolder/Navbar";
import "./calc.css";
import { Link } from "react-router-dom";

export default function Calculators() {
  return (
    <>
      <Navbar showSearch={false} />
      {/* if u want to keep the search bar just delete  showSearch={false}*/}

      {/* write all code within this div because nav has fixed position
       and content will be placed bahind it if it does not have margin top */}
      <div style={{ marginTop: "9%" }}>
        {/* here are all the calulators routes */}
        <Link to="/BMI">
          <button style={{ backgroundColor: "red" }}>to BMI</button>
        </Link>
        <Link to="/BodyFat">
          <button style={{ backgroundColor: "red" }}>to body fat</button>
        </Link>
        <Link to="/Calorie">
          <button style={{ backgroundColor: "red" }}>to Calorie</button>
        </Link>
        <Link to="/Weight">
          <button style={{ backgroundColor: "red" }}>to weight</button>
        </Link>
      </div>
    </>
  );
}
