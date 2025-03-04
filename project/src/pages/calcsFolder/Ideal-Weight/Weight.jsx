import Navbar from "../../../assets/navFolder/Navbar";
import "./weight.css";

export default function Weight() {
  return (
    <>
      <Navbar />
      {/* write all code within this div because nav has fixed position
       and content will be placed bahind it if it does not have margin top */}
      <div style={{ marginTop: "9%" }}>
        <p>Weight works</p>
      </div>
    </>
  );
}
