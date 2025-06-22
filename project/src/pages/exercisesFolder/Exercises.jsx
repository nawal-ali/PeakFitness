import Navbar from "../../assets/navFolder/Navbar";
import Model from "./Model";
import Footer from "../../assets/footerFolder/Footer";
import ReactPlayer from 'react-player';
import "./exer.css";
import content from "./Content";
import { useState } from "react";

export default function Exercises() {
  const [clickedOn, setClickedOn] = useState("lowerAbs");
  const [currentTab, setCurrentTab] = useState(0); // 0 for tab1, 1 for tab2
  const [islogged, setIsLogged] = useState(() => {
    return localStorage.getItem("islogged") === "true";
  });

  const tabNames = ["More Exercises", "More Exercises"];

  const Card = ({ title, level, steps, children }) => {
    return (
      <div className="mb-5 exercise-card">
        <div className="header">
          <h2>{title}</h2>
          <span className={`level-badge ${level.toLowerCase()}`}>{level}</span>
        </div>
        <div className="video-wrapper ">
          {children}
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step my-4" key={index}>
              <div className="step-number fs-5">{index + 1}</div>
              <div className="step-text fs-5">{step}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const TabNavigation = ({ currentTab, setCurrentTab, tabNames }) => {
    return (
      <div className="d-flex justify-content-center gap-4 align-items-center mb-4 bg-black p-3">
        
        <h1 className="text-center mb-0 text-light">
          {tabNames[currentTab]}
        </h1>
        <button 
          className="btn btn-outline-light"
          onClick={() => setCurrentTab(prev => Math.max(0, prev - 1))}
          disabled={currentTab === 0}
        >
          Previous
        </button>
        <button 
          className="btn btn-outline-light"
          onClick={() => setCurrentTab(prev => Math.min(tabNames.length - 1, prev + 1))}
          disabled={currentTab === tabNames.length - 1}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <>
      <Navbar islogged={islogged} setIsLogged={setIsLogged} showBackground={true} isExpanded={false} darkmenu={"white"}/>
      
      <div className="row">
        <div className="col-12 col-md-6 p-5 order-2 order-md-1">
          <h1 style={{fontSize:"4rem", marginTop:"15rem", color:"#CB8778",marginBottom:"2rem"}}>To reach your goal </h1>
          <h1 style={{fontSize:"3rem"}}> you need to understand your body and choose the right exercise for the right muscle</h1>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2">
          <img src="./imgs/exer_main_img.png" alt="" style={{width:"100%"}}/>
        </div>
      </div>
      
      <div className="row ps-3 mt-5">
        <div className="col-12 col-md-4">
          <h1 style={{fontSize:"3rem",marginBottom:'2rem'}}>Pick the muscle </h1>
          <div className="d-flex justify-content-center align-items-center p-3 gap-2 rounded-3 mb-4" style={{backgroundColor:"#D9D9D9"}}>
            <img src={content[clickedOn].sec1.image} alt="" className="w-25"/>
            <h1>{content[clickedOn].sec1.title} </h1>
          </div>
          <div className="d-flex justify-content-center align-items-center p-3 gap-2 rounded-3 mb-4" style={{backgroundColor:"#D9D9D9"}}>
            <h3 className="text-center" style={{color:"#CB8778"}}>{content[clickedOn].sec1.colored_description} </h3>
          </div>
          <div className="d-flex justify-content-center align-items-center p-3 gap-2 rounded-3 mb-4" style={{backgroundColor:"#D9D9D9"}}>
            <h3 className="text-center">{content[clickedOn].sec1.description} </h3>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <Model setClickedOn={setClickedOn} onLabelClick={setClickedOn}/>
        </div>
            


            <div style={{margin:"10rem 0 "}}>
          <div className="text-center mb-5">
            <h1 className="mb-5" style={{fontSize:"4rem"}}>Stretching Exercises</h1>
            <h4 style={{color:"#CB8778"}}>Training isn&apos;t complete without stretching!</h4>
            <h4 className="w-75 m-auto">Stretching improves flexibility, reduces the risk of injury, and helps your muscles relax and recover properly</h4>
          </div>
          <div className="row p-3 mb-5">
            <div className="col-12 col-md-4">
              {/* href={content[clickedOn].sec3.link1} */}
              <a href='https://www.youtube.com/watch?v=hVM6VG8uzPw' target='_blank'>
                <div className="p-5 rounded-3 m-auto my-4 my-md-0" style={{width: "18rem",backgroundColor:"#EAEAEA", height:"100%"}}>
                  {/* <img src="./imgs/exer_stretch_img1.png" className="card-img-top" alt="..."></img> */}
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{color:"#CB8778"}}>{content[clickedOn].sec3.card_t1}</h5>
                    <p className="card-text">{content[clickedOn].sec3.card_d1}</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4">
              {/* href={content[clickedOn].sec3.link2} */}
              <a href='https://www.youtube.com/watch?v=Hmec1bQBQOE' target='_blank'>
                <div className="p-5 rounded-3 m-auto my-4 my-md-0" style={{width: "18rem",backgroundColor:"#EAEAEA", height:"100%"}}>
                  {/* <img src="./imgs/exer_stretch_img2.png" className="card-img-top" alt="..."></img> */}
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{color:"#CB8778"}}>{content[clickedOn].sec3.card_t2}</h5>
                    <p className="card-text">{content[clickedOn].sec3.card_d2}</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4">
              {/* href={content[clickedOn].sec3.link3} */}
              <a href='https://www.youtube.com/watch?v=oJX8EKF3TqM' target='_blank'>
                <div className="p-5 rounded-3 m-auto my-4 my-md-0" style={{width: "18rem",backgroundColor:"#EAEAEA", height:"100%"}}>
                  {/* <img src="./imgs/exer_stretch_img3.png" className="card-img-top" alt="..."></img> */}
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{color:"#CB8778"}}>{content[clickedOn].sec3.card_t3}</h5>
                    <p className="card-text">{content[clickedOn].sec3.card_d3}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="row ps-5" style={{marginBottom:"10rem"}}>
          <div className="col-12 col-lg-6 pe-5">
            <div className="d-flex justify-content-center align-items-start gap-3 p-3" style={{border:"3px dashed black", borderLeft:"none"}}>
              <div style={{backgroundColor:"#CB8778"}} className="rounded-circle p-3 fs-3 text-light align-self-center">01</div>
              <div className="fs-3">
                {/* href={content[clickedOn].sec2.link1} */}
                <a href='https://www.youtube.com/watch?v=Cwuxy8eo7iw' target='_blank' style={{ color:"#CB8778",marginBottom:"0"}}>{content[clickedOn].sec2.title1}</a>
                <p>{content[clickedOn].sec2.desc1}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-start gap-3 p-3" style={{borderLeft:"3px dashed black"}}>
              <div className="fs-3">
                {/* content[clickedOn].sec2.link2} */}
                <a href='https://www.youtube.com/watch?v=TJO19eOmax0' target='_blank' style={{ color:"#CB8778",marginBottom:"0"}} className="text-end">{content[clickedOn].sec2.title2}</a>
                <p>{content[clickedOn].sec2.desc2}</p>
              </div>
              <div style={{backgroundColor:"#CB8778"}} className="rounded-circle p-3 fs-3 text-light align-self-center">02</div>
            </div>
            <div className="d-flex justify-content-center align-items-start gap-3 p-3" style={{border:"3px dashed black", borderLeft:"none"}}>
              <div style={{backgroundColor:"#CB8778"}} className="rounded-circle p-3 fs-3 text-light align-self-center">03</div>
              <div className="fs-3">
                {/* href={content[clickedOn].sec2.link3} */}
                <a href='https://www.youtube.com/watch?v=7LmA4zSitc4' target='_blank' style={{ color:"#CB8778",marginBottom:"0"}}>{content[clickedOn].sec2.title3}</a>
                <p>{content[clickedOn].sec2.desc3}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ps-3" style={{borderLeft:"6px solid black"}}>
            <div className="d-flex justify-content-center align-items-center flex-column p-5" style={{height:"100%"}}>
              <h1 className="best-exercises-title">Best Exercises</h1>
              <h3>
                <span style={{color:"#CB8778"}}>Not every exercise gives the same results!</span><br />
                Here you&apos;ll find the best workouts that truly target the muscle and give you maximum benefit
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <TabNavigation 
            currentTab={currentTab} 
            setCurrentTab={setCurrentTab}
            tabNames={tabNames}
          />
          {content[clickedOn].sec5[`tab${currentTab + 1}`].map((exercise, index) => (
          <div className="col-12 col-md-6" key={index}>
            <Card
              
              title={exercise.title}
              level={exercise.level}
              steps={exercise.steps}
            >
              <ReactPlayer
                url={exercise.videoPath}
                playing={false}
                loop={true}
                controls={true}
                width="100%"
                height="auto"
              />
            </Card>
        </div>
          ))}
        </div>
        
        
        <div className="row" style={{margin:"10rem 0"}}>
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