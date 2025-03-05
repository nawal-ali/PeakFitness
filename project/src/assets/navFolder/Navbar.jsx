import "../navFolder/nav.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function navbar({ showSearch = true, showBackground = true }) {
  return (
    <>
      {/* fixed-top */}
      <nav
        className="navbar navbar-dark p-4 fixed-top w-100"
        style={
          showBackground
            ? { backgroundColor: "#202020", zIndex: 1050 }
            : { zIndex: 1050 }
        }

        // position-absolute top-0
      >
        <div className="container-fluid">
          <Link to="/" style={{ width: "10%" }}>
            <img
              src="/logoAndText.svg"
              alt="main logo"
              style={{ width: "90%" }}
            />
          </Link>
          {/* Conditionally render the search bar */}
          {showSearch && (
            <form className="d-none d-md-flex w-75" role="search">
              <input
                className="form-control me-2 w-100 rounded-pill "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
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
              <form className="d-flex mt-3 mb-3" role="search">
                <input
                  className="form-control me-2 rounded-pill"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                {/* <button
                  className="btn rounded-pill"
                  type="submit"
                  style={{ backgroundColor: "#EC7E4A" }}
                >
                  Search
                </button> */}
              </form>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ms-5">
                {/* start of nav body */}
                <li className="nav-item">
                  <NavLink
                    className="nav-link fs-4 custom-link-color mb-2"
                    to="/"
                  >
                    <img
                      src="/logo/homeLogo.svg"
                      width="30"
                      height="40"
                      className="me-3"
                    />
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fs-4 custom-link-color mb-2"
                    to="/exercises"
                  >
                    <img
                      src="/logo/exercisesLogo.svg"
                      width="30"
                      height="40"
                      className="me-3"
                    />
                    Exercises
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fs-4 custom-link-color mb-2"
                    to="/ProTips"
                  >
                    <img
                      src="/logo/tipsLogo.svg"
                      width="30"
                      height="40"
                      className="me-3"
                    />
                    Pro tips
                  </NavLink>
                </li>
                {/*--------------------- start of food plans dropdown ------------------- */}
                <li className="nav-item dropdown">
                  <NavLink
                    to="/FoodPlans"
                    className={"nav-link fs-4 custom-link-color"}
                  >
                    <img
                      src="/logo/foodLogo.svg"
                      width="30"
                      height="40"
                      className="me-3"
                    />
                    Food Plans
                  </NavLink>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Weight loss
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Gain weight
                      </a>
                    </li>
                  </ul>
                </li>
                {/* -------------------- end of foodplans dropdown ----------------------- */}
                <li className="nav-item">
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
                </li>
                {/*--------------------- start of Calculators dropdown ------------------- */}
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle fs-4 custom-link-color"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="/logo/calcLogo.svg"
                      alt="Logo"
                      width="30"
                      height="40"
                      className="d-inline-block align-text-top me-3 mb-2"
                    />
                    Calculators
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Calorie Calculator
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        BMI Calculator
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Ideal Weight Calculator
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Body fat percentage Calculator
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
                {/* -------------------- end of Calculators dropdown ----------------------- */}
                <li className="nav-item">
                  <NavLink
                    to="/About"
                    className={"nav-link fs-4 custom-link-color"}
                  >
                    <img
                      src="/logo/aboutLogo.svg"
                      width="30"
                      height="40"
                      className="me-3"
                    />
                    About us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
