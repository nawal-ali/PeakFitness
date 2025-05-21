import Navbar from "../../assets/navFolder/Navbar";
import Model from "./Model";
export default function exercises() {
  return (
    <>
        <Navbar  showBackground={true} isExpanded={false}/>
      <div className="row">
        <div className="col-12 col-md-6 p-5">
          <h1 style={{fontSize:"4rem", marginTop:"15rem", color:"#CB8778",marginBottom:"2rem"}}>To reach your goal </h1>
          <h1 style={{fontSize:"3rem"}}> you need to understand your body and choose the right exercise for the right muscle</h1>
        </div>
        <div className="col-12 col-md-6">
          <img src="./imgs/exer_main_img.png" alt="" style={{width:"100%"}}/>
        </div>
      </div>
      <div className="row ps-3 mt-5">
        <div className="col-12 col-md-4">
          <h1 style={{fontSize:"3rem",marginBottom:'2rem'}}>Pick the muscle </h1>
          <div className="d-flex justify-content-center align-items-center p-3 gap-2 rounded-3 mb-4" style={{backgroundColor:"#D9D9D9"}}>
            <img src="./imgs/exer_img1.png" alt="" className="w-25"/>
            <h3>To start your journey with a smart step based on real understanding </h3>
          </div>
          <div className="d-flex justify-content-center align-items-center p-3 gap-2 rounded-3 mb-4" style={{backgroundColor:"#D9D9D9"}}>
            <img src="./imgs/exer_img2.png" alt="" className="w-25"/>
            <h3>To start your journey with a smart step based on real understanding </h3>
          </div>
          <div className="d-flex justify-content-center align-items-center p-3 gap-2 rounded-3 mb-4" style={{backgroundColor:"#D9D9D9"}}>
            <img src="./imgs/exer_img3.png" alt="" className="w-25"/>
            <h3>To start your journey with a smart step based on real understanding </h3>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <Model/>
        </div>
      </div>
    </>
  );
}
