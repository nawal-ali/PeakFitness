import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../../assets/navFolder/Navbar";

//modal imports
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';

const Profile = () => {
      let isLogged = localStorage.getItem("islogged");
  const [user, setUser] = useState(null);
   const [islogged, setIsLogged] = useState(() => {
    return localStorage.getItem("islogged") === "true";
  });


  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        // optionally redirect to login if unauthorized
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <div>Loading profile...</div>;

  return (
    <div className=''>
        <Navbar islogged={islogged} setIsLogged={setIsLogged} />
        <div className="row">
            <div className="col-12 col-md-4 position-relative">
                <div className='position-absolute top-50 start-50 translate-middle text-white w-100 text-center'>
                    <h1 style={{fontSize:'4rem'}}>
                    Hey {user.username}
                    </h1>
                    <p className='fs-5 mt-4' style={{color:"#ffffffbd"}}>
                        Welcome to PeakFitness
                    </p>
                </div>
                <img src="./imgs/profile_img.png" alt="" className='w-100' /></div>
            <div className="col-12 col-md-8" style={{marginTop:"10%"}}>
                <h1 className='fw-bold text-black mb-5' style={{fontSize:"4rem"}}>Profile</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 style={{color:"#CB8778"}} className='mb-3'>User Name</h3>
                        <p className='rounded-4 p-3 w-75' style={{backgroundColor:"#EFEFEF"}}>{user.username}</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 style={{color:"#CB8778"}} className='mb-3'>Age</h3>
                        <p className='rounded-4 p-3 w-75' style={{backgroundColor:"#EFEFEF"}}>{user.age}</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 style={{color:"#CB8778"}} className='mb-3'>Email</h3>
                        <p className='rounded-4 p-3 w-75' style={{backgroundColor:"#EFEFEF"}}>{user.email}</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 style={{color:"#CB8778"}} className='mb-3'>weight (in kg)</h3>
                        <p className='rounded-4 p-3 w-75' style={{backgroundColor:"#EFEFEF"}}>{user.weight}</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 style={{color:"#CB8778"}} className='mb-3'>height (in cm)</h3>
                        <p className='rounded-4 p-3 w-75' style={{backgroundColor:"#EFEFEF"}}>{user.height}</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 style={{color:"#CB8778"}} className='mb-3'>User Name</h3>
                        <p className='rounded-4 p-3 w-75' style={{backgroundColor:"#EFEFEF"}}>{user.username}</p>
                    </div>
                </div>
                    <button className='btn btn-black text-white fw-bold'>Edit</button>
            </div>
    </div>
    </div>
  );
};

export default Profile;
