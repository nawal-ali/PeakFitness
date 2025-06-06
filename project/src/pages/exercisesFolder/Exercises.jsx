import Navbar from "../../assets/navFolder/Navbar";
import Model from "./Model";
import Footer from "../../assets/footerFolder/Footer";
import "./exer.css";
import content from "./Content";
import { useState } from "react";
export default function exercises() {

  const [clickedOn, setClickedOn] = useState("lowerAbs");
    const [islogged, setIsLogged] = useState(() => {
    return localStorage.getItem("islogged") === "true";
  });
  return (
    <>
        <Navbar islogged={islogged} setIsLogged={setIsLogged}  showBackground={true} isExpanded={false}/>
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
            {/* <img src="./imgs/exer_img1.png" alt="" className="w-25"/>
            <h3>To start your journey with a smart step based on real understanding </h3> */}
            <img src="./imgs/lower_abs.png" alt="" className="w-25"/>
            <h1>{content[clickedOn].sec1.title} </h1>
          </div>
          <div className="d-flex justify-content-center align-items-center p-3 gap-2 rounded-3 mb-4" style={{backgroundColor:"#D9D9D9"}}>
            {/* <img src="./imgs/exer_img2.png" alt="" className="w-25"/>
            <h3>To start your journey with a smart step based on real understanding </h3> */}
            <h3 className="text-center" style={{color:"#CB8778"}}>{content[clickedOn].sec1.colored_description} </h3>
          </div>
          <div className="d-flex justify-content-center align-items-center p-3 gap-2 rounded-3 mb-4" style={{backgroundColor:"#D9D9D9"}}>
            {/* <img src="./imgs/exer_img3.png" alt="" className="w-25"/>
            <h3>To start your journey with a smart step based on real understanding </h3> */}
            <h3 className="text-center">{content[clickedOn].sec1.description} </h3>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <Model setClickedOn={setClickedOn} onLabelClick={setClickedOn}/>
        </div>
        <div className="p-5 rounded-3 w-75" style={{backgroundColor:"#D9D9D9", margin:"10rem auto"}}>
          <div className="row">
            <div className="col-12 col-md-6 p-3">
                <h1 style={{fontSize:"4rem"}}>{content[clickedOn].sec1.title}</h1>
                <p className="fs-3 mt-5">
                <span style={{color:"#CB8778"}}>{content[clickedOn].sec1.colored_description}</span><br /> {content[clickedOn].sec1.description}
                </p>
            </div>
            <div className="col-12 col-md-6">
              <img src="./imgs/lower_abs.png" alt="" className="w-100" />
            </div>
          </div>
        </div>
        <div className="row ps-5" style={{marginBottom:"10rem"}}>
          <div className="col-12 col-lg-6 pe-5">
            <div className="d-flex justify-content-center align-items-start gap-3 p-3" style={{border:"3px dashed black", borderLeft:"none"}}>
              <div style={{backgroundColor:"#CB8778"}} className="rounded-circle p-3 fs-3 text-light align-self-center">01</div>
              <div className="fs-3">
              <p style={{ color:"#CB8778",marginBottom:"0"}}>{content[clickedOn].sec2.title1}</p>
              <p>{content[clickedOn].sec2.desc1}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-start gap-3 p-3" style={{borderLeft:"3px dashed black", }}>
              <div className="fs-3">
              <p style={{ color:"#CB8778",marginBottom:"0"}} className="text-end">{content[clickedOn].sec2.title2}</p>
              <p>{content[clickedOn].sec2.desc2}</p>
              </div>
              <div style={{backgroundColor:"#CB8778"}} className="rounded-circle p-3 fs-3 text-light align-self-center">02</div>
            </div>
            <div className="d-flex justify-content-center align-items-start gap-3 p-3" style={{border:"3px dashed black", borderLeft:"none"}}>
              <div style={{backgroundColor:"#CB8778"}} className="rounded-circle p-3 fs-3 text-light align-self-center">03</div>
              <div className="fs-3">
              <p style={{ color:"#CB8778",marginBottom:"0"}}>{content[clickedOn].sec2.title3}</p>
              <p>{content[clickedOn].sec2.desc3}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ps-3" style={{borderLeft:"6px solid black"}}>
            <div className="d-flex justify-content-center align-items-center flex-column p-5" style={{height:"100%"}}>
            <h1 className="best-exercises-title" >Best Exercises</h1>
            {/* style={{fontSize:"4rem"}} */}
            <h3><span style={{color:"#CB8778"}}>Not every exercise gives the same results!</span><br />
            Here you&apos;ll find the best workouts that truly target the muscle and give you maximum benefit</h3>
            </div>
          </div>
        </div>
        <div style={{marginBottom:"10rem"}}>
          <div className="text-center mb-5">
          <h1 className="mb-5" style={{fontSize:"4rem"}}>
            Stretching Exercises
          </h1>
          <h4 style={{color:"#CB8778"}}>Training isn’t complete without stretching!</h4>
          <h4 className="w-75 m-auto">Stretching improves flexibility, reduces the risk of injury, and helps your muscles relax and recover properly</h4>
          </div>
          <div className="row p-3 mb-5">
            <div className="col-12 col-md-4">
              <div className="card m-auto my-4 my-md-0" style={{width: "18rem",backgroundColor:"#EAEAEA", height:"100%"}}>
                <img src="./imgs/exer_stretch_img1.png" className="card-img-top" alt="..."></img>
                <div className="card-body text-center">
                    <h5 className="card-title" style={{color:"#CB8778"}}>{content[clickedOn].sec3.card_t1}</h5>
                    <p className="card-text">{content[clickedOn].sec3.card_d1}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card m-auto my-4 my-md-0" style={{width: "18rem",backgroundColor:"#EAEAEA", height:"100%"}}>
                <img src="./imgs/exer_stretch_img2.png" className="card-img-top" alt="..."></img>
                <div className="card-body text-center">
                    <h5 className="card-title" style={{color:"#CB8778"}}>{content[clickedOn].sec3.card_t2}</h5>
                    <p className="card-text">{content[clickedOn].sec3.card_d2}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card m-auto my-4 my-md-0" style={{width: "18rem",backgroundColor:"#EAEAEA", height:"100%"}}>
                <img src="./imgs/exer_stretch_img3.png" className="card-img-top" alt="..."></img>
                <div className="card-body text-center">
                    <h5 className="card-title" style={{color:"#CB8778"}}>{content[clickedOn].sec3.card_t3}</h5>
                    <p className="card-text">{content[clickedOn].sec3.card_d3}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{marginBottom:"10rem"}}>
          <div className="col-12 col-md-6">
            <h1 className="fw-bold ps-4 mb-5" style={{borderLeft:"10px solid #CB8778"}}>Common Mistakes</h1>
            <ul className="fs-3 ps-4">
              <li className="fw-bold" style={{color:"#CB8778"}}>{content[clickedOn].sec4.colored1}</li> {content[clickedOn].sec4.desc1}<br /><br />
              <li className="fw-bold" style={{color:"#CB8778"}}>{content[clickedOn].sec4.colored2}</li> {content[clickedOn].sec4.desc2}<br /><br />
              <li className="fw-bold" style={{color:"#CB8778"}}>{content[clickedOn].sec4.colored3}</li> {content[clickedOn].sec4.desc3} </ul>
          </div>
          <div className="col-12 col-md-6">
            <img src="./imgs/exer_mistake_img.png" className="w-100" alt="" />
          </div>
        </div>
      </div>
      <div className="margin-top-10">
        <Footer />
      </div>
    </>
  );
}
