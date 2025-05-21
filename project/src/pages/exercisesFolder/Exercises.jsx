import Navbar from "../../assets/navFolder/Navbar";
export default function exercises() {
  return (
    <>
        <Navbar />
      <div className="row">
        <div className="col-12 col-md-6 p-5">
          <h1 style={{fontSize:"4rem", marginTop:"15rem", color:"#CB8778",marginBottom:"2rem"}}>To reach your goal </h1>
          <h1 style={{fontSize:"3rem"}}> you need to understand your body and choose the right exercise for the right muscle</h1>
        </div>
        <div className="col-12 col-md-6">
          <img src="./imgs/exer_main_img.png" alt="" style={{width:"100%"}}/>
        </div>
      </div>
    </>
  );
}
