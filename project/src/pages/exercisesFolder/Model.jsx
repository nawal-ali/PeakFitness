// import { useEffect } from 'react';
// import './model.css';

// export default function Model() {
//   useEffect(() => {
//     const modelViewer = document.querySelector('#hotspot-camera-view-demo');

//     const annotationClicked = (annotation) => {
//       const dataset = annotation.dataset;
//       modelViewer.cameraTarget = dataset.target;
//       modelViewer.cameraOrbit = dataset.orbit;
//       modelViewer.fieldOfView = '45deg';
//     };

//     modelViewer.querySelectorAll('button').forEach((hotspot) => {
//       hotspot.addEventListener('click', () => annotationClicked(hotspot));
//     });

    
//     return () => {
//       modelViewer.querySelectorAll('button').forEach((hotspot) => {
//         hotspot.removeEventListener('click', () => annotationClicked(hotspot));
//       });
//     };
//   }, []);

//   return (
//     <div className='model-container'>
//       <model-viewer
//         id="hotspot-camera-view-demo"
//         src="afi.glb"
//         alt="Human muscular model"
//         ar
//         auto-rotate
//         camera-controls
//         exposure="1"
//         shadow-intensity="1"
//       >
//         {[
//           { label: 'upper abs',
//             position: '0m 2.4m 0.1m',
//             normal: '0m 2.4m 0.1m',
//             orbit: '0deg 84.56856deg 0.0004000m',
//             target: '0m 2.2m -2.5m' },
//           { label: 'lower abs',
//             position: '0m 2.0m 0.1m', 
//             normal: '0m 2.0m 0.1m',
//             orbit: '0deg 84.56856deg 0.0004000m',
//             target: '0m 1.89m -2.5m' },
//           { label: 'quadriceps',
//             position: '-0.3m 1.6m 0.1m', 
//             normal: '-0.3m 1.6m 0.1m',
//             orbit: '0deg 84.74043deg 0.07104211m',
//             target: '0m 1.4m -1.8m' },
//           { label: 'calves',
//             position: '0.3m 0.5m 0.05m', 
//             normal: '0.3m 0.5m 0.05m',
//             orbit: '-180deg 88.17818deg 0.07090651m',
//             target: '0m 0.5m 1m' },
//           { label: 'hamstrings',
//             position: '0.3m 1.5m -0.1m', 
//             normal: '0.3m 1.5m -0.1m',
//             orbit: '-180deg 80.83521deg 0.07090651m',
//             target: '0m 1m 2m' },
//           { label: 'glutes',
//             position: '0m 2.0m -0.15m', 
//             normal: '0m 2.0m -0.15m',
//             orbit: '-180deg 90.1798deg 0.04504082m',
//             target: '0m 1.9m 2m' },
//           { label: 'pectoralis major',
//             position: '0m 2.8m 0.1m', 
//             normal: '0m 2.8m 0.1m',
//             orbit: '0deg 90.56856deg 0.0004000m',
//             target: '0m 3m -2.5m' },
//           { label: 'forearm muscles',
//             position: '-0.7m 2.2m 0.05m', 
//             normal: '-0.7m 2.2m 0.05m',
//             orbit: '18deg 100deg 1m',
//             target: '-1.5m 2.8m -2.5m' },
//           { label: 'triceps',
//             position: '-0.7m 2.7m -0.05m', 
//             normal: '-0.7m 2.7m -0.05m',
//             orbit: '-70deg 55deg 0.06213665m',
//             target: '1.7m 1m -0.8m' },
//           { label: 'biceps',
//             position: '0.7m 2.7m 0.05m', 
//             normal: '0.7m 2.7m 0.05m',
//             orbit: '-18deg 100deg 1m',
//             target: '1.5m 3.25m -2.5m' },
//           { label: 'posterior deltoid',
//             position: '-0.7m 2.9m -0.1m', 
//             normal: '-0.7m 2.9m -0.1m',
//             orbit: '-138deg 55.1798deg 0.04504082m',
//             target: '1.5m 0.98m 2m' },
//           { label: 'lateral deltoid',
//             position: '-0.8m 2.9m 0m', 
//             normal: '-0.8m 2.9m 0m',
//             orbit: '-67deg 55deg 0.06213665m',
//             target: '1.9m 1.1m -1.1m' },
//           { label: 'anterior deltoid',
//             position: '-0.7m 2.9m 0.1m', 
//             normal: '-0.7m 2.9m 0.1m',
//             orbit: '-48deg 55deg 0.06213665m',
//             target: '1.8m 0.9m -1.8m' },
//           { label: 'trapezius',
//             position: '0m 3.0m -0.1m', 
//             normal: '0m 3.0m -0.1m',
//             orbit: '-180deg 50deg 0.07090651m',
//             target: '0m 1.3m 1.9m' },
//           { label: 'latissimus',
//             position: '0.6m 2.5m -0.1m',
//             normal: '0.6m 2.5m -0.1m',
//             orbit: '-180deg 80deg 0.07090651m',
//             target: '0m 2.189m 2.05m' },
//           { label: 'obliques',
//             position: '0.4m 2.3m 0.05m', 
//             normal: '0.4m 2.3m 0.05m',
//             orbit: '45deg 84.56856deg 0.0004000m',
//             target: '-1.75m 2.2m -1.95m' }
//         ].map((hotspot, index) => (
//           <button
//             key={index}
//             className="view-button"
//             slot={`hotspot-${index}`}
//             data-position={hotspot.position}
//             data-normal={hotspot.normal}
//             data-orbit={hotspot.orbit}
//             data-target={hotspot.target}
//           >
//             {hotspot.label}
//           </button>
//         ))}
//       </model-viewer>
//     </div>
//   );
// }


import { useEffect,useState } from 'react';
import './model.css';

export default function Model() {
 const [clickedon, setClickedon] = useState(null);

useEffect(() => {
  const modelViewer = document.querySelector('#hotspot-camera-view-demo');

  const annotationClicked = (annotation) => {
    const dataset = annotation.dataset;
    modelViewer.cameraTarget = dataset.target;
    modelViewer.cameraOrbit = dataset.orbit;
    modelViewer.fieldOfView = '45deg';

    modelViewer.querySelectorAll('.view-button').forEach(btn => btn.classList.remove('clicked'));
    annotation.classList.add('clicked');

    const label = dataset.label || null;
    setClickedon(label);
  };

  const buttons = modelViewer.querySelectorAll('.view-button');

  const listeners = [];

  buttons.forEach((hotspot) => {
    const listener = () => annotationClicked(hotspot);
    hotspot.addEventListener('click', listener);
    listeners.push({ hotspot, listener });
  });

  return () => {
    listeners.forEach(({ hotspot, listener }) => {
      hotspot.removeEventListener('click', listener);
    });
  };
}, []);



  const hotspots = [
    { label: 'upper abs', position: '0m 2.4m 0.1m', normal: '0m 2.4m 0.1m', orbit: '0deg 84.56856deg 0.0004000m', target: '0m 2.2m -2.5m' },
    { label: 'lower abs', position: '0m 2.0m 0.1m', normal: '0m 2.0m 0.1m', orbit: '0deg 84.56856deg 0.0004000m', target: '0m 1.89m -2.5m' },
    { label: 'quadriceps', position: '-0.3m 1.6m 0.1m', normal: '-0.3m 1.6m 0.1m', orbit: '0deg 84.74043deg 0.07104211m', target: '0m 1.4m -1.8m' },
    { label: 'calves', position: '0.3m 0.5m 0.05m', normal: '0.3m 0.5m 0.05m', orbit: '-180deg 88.17818deg 0.07090651m', target: '0m 0.5m 1m' },
    { label: 'hamstrings', position: '0.3m 1.5m -0.1m', normal: '0.3m 1.5m -0.1m', orbit: '-180deg 80.83521deg 0.07090651m', target: '0m 1m 2m' },
    { label: 'glutes', position: '0m 2.0m -0.15m', normal: '0m 2.0m -0.15m', orbit: '-180deg 90.1798deg 0.04504082m', target: '0m 1.9m 2m' },
    { label: 'pectoralis major', position: '0m 2.8m 0.1m', normal: '0m 2.8m 0.1m', orbit: '0deg 90.56856deg 0.0004000m', target: '0m 3m -2.5m' },
    { label: 'forearm muscles', position: '-0.7m 2.2m 0.05m', normal: '-0.7m 2.2m 0.05m', orbit: '18deg 100deg 1m', target: '-1.5m 2.8m -2.5m' },
    { label: 'triceps', position: '-0.7m 2.7m -0.05m', normal: '-0.7m 2.7m -0.05m', orbit: '-70deg 55deg 0.06213665m', target: '1.7m 1m -0.8m' },
    { label: 'biceps', position: '0.7m 2.7m 0.05m', normal: '0.7m 2.7m 0.05m', orbit: '-18deg 100deg 1m', target: '1.5m 3.25m -2.5m' },
    { label: 'posterior deltoid', position: '-0.7m 2.9m -0.1m', normal: '-0.7m 2.9m -0.1m', orbit: '-138deg 55.1798deg 0.04504082m', target: '1.5m 0.98m 2m' },
    { label: 'lateral deltoid', position: '-0.8m 2.9m 0m', normal: '-0.8m 2.9m 0m', orbit: '-67deg 55deg 0.06213665m', target: '1.9m 1.1m -1.1m' },
    { label: 'anterior deltoid', position: '-0.7m 2.9m 0.1m', normal: '-0.7m 2.9m 0.1m', orbit: '-48deg 55deg 0.06213665m', target: '1.8m 0.9m -1.8m' },
    { label: 'trapezius', position: '0m 3.0m -0.1m', normal: '0m 3.0m -0.1m', orbit: '-180deg 50deg 0.07090651m', target: '0m 1.3m 1.9m' },
    { label: 'latissimus', position: '0.6m 2.5m -0.1m', normal: '0.6m 2.5m -0.1m', orbit: '-180deg 80deg 0.07090651m', target: '0m 2.189m 2.05m' },
    { label: 'obliques', position: '0.4m 2.3m 0.05m', normal: '0.4m 2.3m 0.05m', orbit: '45deg 84.56856deg 0.0004000m', target: '-1.75m 2.2m -1.95m' }
  ];

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
      >
        {hotspots.map((hotspot, index) => (
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
            {/* <span className="label">{hotspot.label}</span> */}
          </button>
        ))}
      </model-viewer>
    </div>
  );
}
