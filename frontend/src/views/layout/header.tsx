import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { withCookies } from "react-cookie";
import { useUserContext } from "../../context/UserContext";
import config from "../../helper/config";

const Header = (props: any) => {
  const { cookies } = props;
  const { userInfo, setUserInfo } = useUserContext();
  const navigate = useNavigate();

  const handleSignout = () => {
    cookies.remove("userInfo");
    setUserInfo(null);
    navigate("/");
  };

  useEffect(() => {}, [userInfo]);

  const themeToggle = () => {
    let element = document.body;
    element.classList.toggle("dark-theme");

    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark-theme") {
      localStorage.setItem("theme", "");
    } else {
      localStorage.setItem("theme", "dark-theme");
    }
  };

  return (
    <div className="header landing">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="navigation">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="brand-logo">
                  <a href="/">
                    <img
                      src="/images/logoi.png"
                      alt=""
                      className="logo-primary"
                    />
                    <img
                      src="/images/logow.png"
                      alt=""
                      className="logo-white"
                    />
                  </a>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                ></div>
                <div className="signin-btn d-flex align-items-center">
                  <div
                    className="dark-light-toggle theme-switch"
                    onClick={() => {
                      themeToggle();
                    }}
                  >
                    <span className="dark">
                      <i className="ri-moon-line"></i>
                    </span>
                    <span className="light">
                      <i className="ri-sun-line"></i>
                    </span>
                  </div>
                  <Link to="/connect">
                    <div
                      className="btn btn-primary"
                      style={{ cursor: "pointer" }}
                    >
                      Connect
                    </div>
                  </Link>
                  <Link to="/signin">
                    <div
                      className="btn btn-primary"
                      style={{ marginLeft: 5, cursor: "pointer" }}
                    >
                      Login
                    </div>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withCookies(Header);
