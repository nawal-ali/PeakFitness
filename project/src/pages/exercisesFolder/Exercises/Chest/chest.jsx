import  { useState } from 'react';
import ReactPlayer from 'react-player';
import Navbar from '../../../../assets/navFolder/Navbar';
import Footer from '../../../../assets/footerFolder/Footer';
// import video from '../../../../../public/ExerciseVideos/Chest/male-Machine-machine-pec-fly-front.mp4'
import './chest.css';

const Card = ({ title, level, steps, children }) => {
  return (
    <div className="card">
      <div className="header">
        <h2>{title}</h2>
        <span className={level.toLowerCase()}>{level}</span>
      </div>
      <div className="video-container">
        {children}
      </div>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-number">{index + 1}</div>
            <div className="step-text">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EquipmentPanel = () => {
  const [selectedEquipment, setSelectedEquipment] = useState('featured');

  const handleCheckboxChange = (event) => {
    setSelectedEquipment(event.target.id);
  };

  const equipmentOptions = [
    'medicine-ball',
    'kettlebells',
    'cables',
    'plate',
    'yoga',
    'vitruvian',
    'smith-machine',
    'stretches',
    'band',
    'trx',
    'bosu-ball',
    'cardio',
    'recovery',
  ];

  return (
    <div className="equipment-panel">
      <h3>Equipment</h3>
      {equipmentOptions.map((option) => (
        <div className="equipment-item" key={option}>
          <input
            type="checkbox"
            id={option}
            name="equipment"
            checked={selectedEquipment === option}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={option}>
            {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
          </label>
        </div>
      ))}
    </div>
  );
};

function Chest() {
  const [islogged, setIsLogged] = useState(false);

  return (
    <>
      <Navbar islogged={islogged} setIsLogged={setIsLogged} showBackground={true} isExpanded={false} darkmenu="white" />
      <div className="container full-width">
        <div className="cards">
          <Card
            title="Plate Deficit Pushup"
            level="Advanced"
            steps={[
              "Start in a pushup position with both hands on a plate. This will extend your range of motion.",
              "Break at the elbows and shoulders until your upper arm travels behind the body slightly.",
              "Then press back into the original position.",
            ]}
          >
            <ReactPlayer
  url={'./ExerciseVideos/Chest/male-Machine-machine-pec-fly-front.mp4'}
  playing={false}
  loop={true}
  controls={true}
  width="100%"
  height="auto"
/>
            {/* <ReactPlayer
              url="./ExerciseVideos/Chest/plate-deficit-pushup-front.mp4"
              playing={false}
              loop={true}
              className="video-player"
              width="100%"
              height="auto"
              controls={true}
            /> */}
            {/* <video
              src="./ExerciseVideos/Chest/plate-deficit-pushup-front.mp4"
              loop={true}
              className="video-player"
              // width="100%"
              // height="auto"
              controls={true}
            ></video> */}
          </Card>
          {/* الكاردز التانية متجمدةش لحد ما نحل المشكلة */}
        </div>
        {/* <EquipmentPanel /> */}
      </div>
      <div className="margin-top-10">
        <Footer />
      </div>
    </>
  );
}

export default Chest;