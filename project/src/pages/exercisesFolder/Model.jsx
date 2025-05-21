
import  { useEffect } from 'react';
import './model.css';

export default function Model() {
        useEffect(() => {
          const modelViewer = document.querySelector('#hotspot-camera-view-demo');
      
          const annotationClicked = (annotation) => {
            const dataset = annotation.dataset;
            modelViewer.cameraTarget = dataset.target;
            modelViewer.cameraOrbit = dataset.orbit;
            modelViewer.fieldOfView = '45deg';
          };
      
          modelViewer.querySelectorAll('button').forEach((hotspot) => {
            hotspot.addEventListener('click', () => annotationClicked(hotspot));
          });
      
          // Clean up listeners on unmount
          return () => {
            modelViewer.querySelectorAll('button').forEach((hotspot) => {
              hotspot.removeEventListener('click', () => annotationClicked(hotspot));
            });
          };
        }, []);
    return (
        <div className='model-container'>
        <model-viewer
        id="hotspot-camera-view-demo"
      src="afi.glb"
      alt="Human muscular model"
      ar
      auto-rotate
      camera-controls
      exposure="1"
      shadow-intensity="1"
      style={{width: "100vw", height: '100vh'}}
    >
      {[
        { label: 'upper abs', position: '-0.4m 2.6m 1m', normal: '-0.4m 2.6m 1m', orbit: '0deg 84.56856deg 0.0004000m', target: '0m 2.6m 1m' },
        { label: 'lower abs', position: '-0.1997m 0.11766m 0.0056m', normal: '-0.4421014m 0.04410423m 0.8958802m', orbit: '3.711166deg 92.3035deg 0.04335197m', target: '-0.1879433m 0.1157161m -0.01563221m' },
        { label: 'quadriceps', position: '0.0608m 0.0566m 0.0605m', normal: '0.2040984m 0.7985359m -0.56629m', orbit: '42.72974deg 84.74043deg 0.07104211m', target: '0.0757959m 0.04128428m 0.07109568m' },
        { label: 'calves', position: '0.1989m 0.16711m -0.0749m', normal: '0.7045857m 0.1997957m -0.6809117m', orbit: '-40.11996deg 88.17818deg 0.07090651m', target: '0.2011831m 0.1398312m -0.07917573m' },
        { label: 'hamsstrings', position: '0.0677m 0.18906m -0.0158m', normal: '-0.008245394m 0.6207898m 0.7839338m', orbit: '-118.8446deg 98.83521deg 0.06m', target: '0.06528695m 0.1753406m -0.01964653m' },
        { label: 'gluts', position: '-0.1418m -0.041m 0.174m', normal: '-0.4924125m 0.4698265m 0.7326617m', orbit: '-2.305313deg 110.1798deg 0.04504082m', target: '-0.1151219m -0.04192762m 0.1523764m' },
        { label: 'pectoralis major', position: '0.08414419m 0.134m -0.215m', normal: '0.03777227m 0.06876653m -0.9969176m', orbit: '-37.54149deg 82.16209deg 0.0468692m', target: '0.08566038m 0.1249514m -0.1939646m' },
        { label: 'forearm muscles ', position: '0.14598m 0.03177m -0.05945886m', normal: '-0.9392524m 0.2397608m -0.2456009m', orbit: '-142.3926deg 86.45934deg 0.06213665m', target: '0.1519967m 0.01904771m -0.05945886m' },
        { label: 'triceps', position: '0.0094m 0.0894m -0.15103m', normal: '-0.3878782m 0.4957891m -0.7770094m', orbit: '-118.6729deg 117.571deg 0.03905975m', target: '0.007600758m 0.06771782m -0.1386167m' },
        { label: 'biceps', position: '-0.0658m 0.1786m -0.0183m', normal: '0.7857152m 0.4059967m 0.46671m', orbit: '53.28236deg 95.91318deg 0.1102844m', target: '-0.07579391m 0.1393538m -0.00851791m' },
        { label: 'posterior deltoid', position: '0.02610224m 0.01458751m -0.004978945m', normal: '-0.602551m 0.7856147m -0.1405055m', orbit: '-78.89725deg 77.17752deg 0.08451112m', target: '0.02610223m 0.0145875m -0.004978945m' },
        { label: 'lateeral deltoid', position: '-0.1053838m 0.01610652m 0.1076345m', normal: '-0.624763m 0.5176854m 0.5845283m', orbit: '10.89188deg 119.9775deg 0.03543022m', target: '-0.1053838m 0.01610652m 0.1076345m' },
        { label: 'anterior deltiod', position: '-0.1053838m 0.01610652m 0.1076345m', normal: '-0.624763m 0.5176854m 0.5845283m', orbit: '10.89188deg 119.9775deg 0.03543022m', target: '-0.1053838m 0.01610652m 0.1076345m' },
        { label: 'trapezius', position: '-0.1053838m 0.01610652m 0.1076345m', normal: '-0.624763m 0.5176854m 0.5845283m', orbit: '10.89188deg 119.9775deg 0.03543022m', target: '-0.1053838m 0.01610652m 0.1076345m' },
        { label: 'latissimus ', position: '-0.1053838m 0.01610652m 0.1076345m', normal: '-0.624763m 0.5176854m 0.5845283m', orbit: '10.89188deg 119.9775deg 0.03543022m', target: '-0.1053838m 0.01610652m 0.1076345m' },
        { label: 'obliques ', position: '-0.1053838m 0.01610652m 0.1076345m', normal: '-0.624763m 0.5176854m 0.5845283m', orbit: '10.89188deg 119.9775deg 0.03543022m', target: '-0.1053838m 0.01610652m 0.1076345m' },
      ].map((hotspot, index) => (
        <button
          key={index}
          className="view-button"
          slot={`hotspot-${index}`}
          data-position={hotspot.position}
          data-normal={hotspot.normal}
          data-orbit={hotspot.orbit}
          data-target={hotspot.target}
        >
          {hotspot.label}
        </button>
      ))}
    </model-viewer>
    </div>
  );
}