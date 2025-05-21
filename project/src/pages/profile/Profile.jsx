import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../assets/navFolder/Navbar";

// Bootstrap Modal
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [islogged, setIsLogged] = useState(() => {
    return localStorage.getItem("islogged") === "true";
  });

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    email: "",
    weight: "",
    height: "",
    gender: ""
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if(!token){
        navigate("/"); 
        return;
      }
      try {
        const response = await axios.get("http://localhost:5000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        setFormData(response.data); // Pre-fill form
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleLogOut = () => {
    localStorage.setItem("islogged", "false");
    localStorage.removeItem("token")
    setIsLogged(false);
    navigate("/");
  };

  const handleEditChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put("http://localhost:5000/api/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data.user);
      setShowModal(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  if (!user) return <div>Loading profile...</div>;

  return (
    <div className="">
      <Navbar islogged={islogged} setIsLogged={setIsLogged} />
      <div className="row">
        <div className="col-12 col-md-4 position-relative">
          <div className="position-absolute top-50 start-50 translate-middle text-white w-100 text-center">
            <h1 style={{ fontSize: "4rem" }}>Hey {user.username}</h1>
            <p className="fs-5 mt-4" style={{ color: "#ffffffbd" }}>
              Welcome to PeakFitness
            </p>
          </div>
          <img src="./imgs/profile_img.png" alt="" className="w-100" />
        </div>

        <div className="col-12 col-md-8 text-center text-md-start" style={{ marginTop: "10%" }}>
          <h1 className="fw-bold text-black mb-5" style={{ fontSize: "4rem" }}>
            Profile
          </h1>
          <div className="row">
            {[
              { label: "User Name", value: user.username },
              { label: "Age", value: user.age },
              { label: "Email", value: user.email },
              { label: "weight (in kg)", value: user.weight },
              { label: "height (in cm)", value: user.height },
              { label: "Gender", value: user.gender }
            ].map((item, index) => (
              <div key={index} className="col-12 col-md-6">
                <h3 style={{ color: "#CB8778" }} className="mb-3">{item.label}</h3>
                <p className="rounded-4 p-3 w-75 m-auto mb-4 m-md-0 mb-md-4" style={{ backgroundColor: "#EFEFEF" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 d-flex justify-content-center me-0 me-md-5 gap-5">
            <button
              className="btn btn-dark text-dark fw-bold px-5 mx-2 fs-4"
              style={{ backgroundColor: "#CB8778" }}
              onClick={() => setShowModal(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-dark text-white px-4 fw-bold mx-2 fs-4"
              onClick={handleLogOut}
            >
              Log out
            </button>
          </div>
        </div>
      </div>

      {/* EDIT PROFILE MODAL */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {["username", "age", "weight", "height", "gender"].map((field) => (
            <div className="mb-3" key={field}>
              <label className="form-label text-capitalize">{field}</label>
              <input
                type={field === "age" || field === "weight" || field === "height" ? "number" : "text"}
                name={field}
                className="form-control"
                value={formData[field] || ""}
                onChange={handleEditChange}
              />
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
