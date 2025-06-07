import "../navFolder/nav.css";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify"; // Added for toast notification
import { FaBars } from 'react-icons/fa';
// eslint-disable-next-line react/prop-types
//{ showSearch = true, showBackground = true }
export default function Navbar({ islogged, setIsLogged,showBackground,isExpanded ,darkmenu }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      // Always show navbar at top of page
      if (currentScrollPos < 10) {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.setItem("islogged", "false");
    localStorage.removeItem("token")
    setIsLogged(false);
    toast.info("You have been logged out successfully!"); // Added toast notification
    setTimeout(() => {
      navigate("/");
    }, 1500); // Delay navigation to show toast
  };

  return (
    <>
      <nav
        className={`navbar navbar-dark p-4 fixed-top w-100 ${
          visible ? "nav-visible" : "nav-hidden"
        }  ${
          isExpanded ? " " : "navbar-expand-xl "
        }`}
        // style={{ backgroundColor: "#000000", zIndex: 1050 }}
        style={
          showBackground
            ? { backgroundColor: "#000000", zIndex: 1050 }
            : { zIndex: 1050 }
        }
      >
        <div className=" d-flex justify-content-around align-items-center w-100 px-3">
          <Link to="/" className="navbar-brand">
            <img
              src="/logoAndText.svg"
              alt="main logo"
              style={{ width: "50%" }}
            />
          </Link>
          {/* Conditionally render the search bar */}
          {/* {showSearch && (
            <form className="d-none d-md-flex w-75" role="search">
              <input
                className="form-control me-2 w-100 rounded-pill "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          )} */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            {/* <i className="fa-solid fa-bars text-dark">MENU</i>  */}
              {/* <button> */}
                <FaBars size={24} color={"black"} />
              {/* </button> */}
          </button>
          {/*  */}
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title text-center"
                id="offcanvasDarkNavbarLabel"
              >
                <img src="/logoAndText.svg" alt="" className="w-50" />
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 text-dark">
                {/* start of nav body */}
                <li className="nav-item">
                  <NavLink
                    className="nav-link fs-5 custom-link-color mb-2 mx-1"
                    to="/"
                  >
                    {/* <img
                      src="/logo/homeLogo.svg"
                      width="30"
                      height="40"
                      className="me-1"
                    /> */}
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fs-5 custom-link-color mb-2 mx-1"
                    to="/exercises"
                  >
                    {/* <img
                      src="/logo/exercisesLogo.svg"
                      width="30"
                      height="40"
                      className="me-1"
                    /> */}
                    Exercises
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fs-5 custom-link-color mb-2 mx-1"
                    to="/ProTips"
                  >
                    {/* <img
                      src="/logo/tipsLogo.svg"
                      width="30"
                      height="40"
                      className="me-1"
                    /> */}
                    Pro tips
                  </NavLink>
                </li>
                {/*--------------------- start of food plans dropdown ------------------- */}
                <li className="nav-item dropdown">
                  <NavLink
                    to="/FoodPlans"
                    className={
                      "nav-link dropdown-toggle fs-5 custom-link-color mx-1"
                    }
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {/* <img
                      src="/logo/foodLogo.svg"
                      width="30"
                      height="40"
                      className="me-1"
                    /> */}
                    Food Plans
                  </NavLink>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/weight-loss-details"
                      >
                        Weight loss
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/weight-gain-details"
                      >
                        Gain weight
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/muscle-gain-details"
                      >
                        Gain muscle
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/FoodPlans">
                        all plans
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* -------------------- end of foodplans dropdown ----------------------- */}
                {/* <li className="nav-item">
                  <NavLink
                    className="nav-link fs-4 custom-link-color mb-2"
                    to="/Calculators"
                  >
                    <img
                      src="/logo/calcLogo.svg"
                      alt="Logo"
                      width="30"
                      height="40"
                      className="d-inline-block align-text-top me-3 mb-2"
                    />
                    Calculators
                  </NavLink>
                </li> */}
                {/*--------------------- start of Calculators dropdown ------------------- */}
                <li className="nav-item dropdown">
                  <NavLink
                    to="/Calculators"
                    className="nav-link dropdown-toggle fs-5 custom-link-color mx-1"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {/* <img
                      src="/logo/calcLogo.svg"
                      alt="Logo"
                      width="30"
                      height="40"
                      className="d-inline-block align-text-top me-3 mb-2"
                    /> */}
                    Calculators
                  </NavLink>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <NavLink className="dropdown-item" to="/Calorie">
                        Calorie Calculator
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/BMI">
                        BMI Calculator
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Weight">
                        Ideal Weight Calculator
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/BodyFat">
                        Body fat percentage Calculator
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Calculators">
                        all calculators
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* -------------------- end of Calculators dropdown ----------------------- */}
                <li className="nav-item">
                  <NavLink
                    to="/About"
                    className={"nav-link fs-5 custom-link-color mb-2 mx-1"}
                  >
                    {/* <img
                      src="/logo/aboutLogo.svg"
                      width="30"
                      height="40"
                      className="me-3"
                    /> */}
                    About us
                  </NavLink>
                </li>
              </ul>
              {!islogged && (
                <div>
                  <NavLink to="/Login" className="btn btn-dark me-3 px-4">
                    Login
                  </NavLink>
                  <NavLink to="/signup" className="btn btn-light me-3 px-4">
                    Sign Up
                  </NavLink>
                </div>
              )}
              {islogged && (
                <div className="nav-item dropdown me-5">
                  <a
                    className="nav-link dropdown-toggle fs-5 custom-link-color mx-1"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Welcome
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <NavLink className="dropdown-item" to="/profile">
                        My Profile
                      </NavLink>
                    </li>
                    <li className="dropdown-item" onClick={handleLogOut}>
                      Log Out
                    </li>
                  </ul>
                </div>
              )}
              {/* <form className="d-flex mt-3 mb-3" role="search">
                <input
                  className="form-control me-2 rounded-pill"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}