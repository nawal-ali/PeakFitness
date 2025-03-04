import Navbar from "../../../assets/navFolder/Navbar";
import "./body.css";

export default function BodyFat() {
  return (
    <>
      <Navbar />
      {/* write all code within this div because nav has fixed position
       and content will be placed bahind it if it does not have margin top */}
      <div style={{ marginTop: "9%" }}>
        <p>body works</p>
      </div>
    </>
  );
}
