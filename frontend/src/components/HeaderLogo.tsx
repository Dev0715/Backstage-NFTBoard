import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { withCookies } from "react-cookie";
import { useUserContext } from "../context/UserContext";
import { useMoralis } from "react-moralis";

export const HeaderFooter = (object: any, props: any) => {
  const { userInfo } = useUserContext();

  return (
    <div className="row">
      <div className="col-12">
        <ul className="settings-menu pt-0 mb-3">
          {/* <li className={object.title == "created" ? "active" : ""}><a href="/created.html">Created</a></li> */}
          <li className={object.title == "collected" ? "active" : ""}>
            <Link to="/">Collected</Link>
          </li>
          <li className={object.title == "connected" ? "active" : ""}>
            <Link to="/connected">Connected</Link>
          </li>
          {/* <li className={object.title === "activity" ? "active" : ""}><a href="/activity.html">Activity</a></li> */}
          <li className={object.title === "recently_received" ? "active" : ""}>
            <Link to="/recently_received">Recently Received</Link>
          </li>
          <li className={object.title === "feed" ? "active" : ""}>
            <Link to="/feed">Feed</Link>
          </li>
          {/* <li className={object.title === "onsale" ? "active" : ""}><a href="/onsale.html">On Sale</a></li> */}
          {/* <li className={object.title === "liked" ? "active" : ""}><a href="/liked.html">Liked</a></li> */}
          {/* <li className={object.title === "following" ? "active" : ""}><a href="/following.html">Following</a></li> */}
          {/* <li className={object.title === "followers" ? "active" : ""}><a href="/followers.html">Followers</a></li> */}
          <li className={object.title === "profile" ? "active" : ""}>
            {userInfo ? <Link to="/profile">Profile</Link> : <></>}
            {/* <Link to="/profile">Profile</Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

const HeaderLogo = (object: any) => {
  const { cookies } = object;
  const { isAuthenticated, user, logout } = useMoralis();
  const { userInfo } = useUserContext();

  useEffect(() => {}, [userInfo]);

  const shortWalletAddress = () => {
    const userInfo = user?.attributes;
    console.log(userInfo);
    const wallet = userInfo?.accounts[0];
    const len = wallet.length;
    return wallet.substring(0, 6) + "..." + wallet.substring(len - 3, len);
  };

  const handleSignout = () => {
    cookies.remove("userInfo");
  };

  const onClickWallet = () => {
    logout();
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
                      src="/images/logoi-mobile.png"
                      alt=""
                      className="logo-primary-mobile"
                    />
                    <img
                      src="/images/logow.png"
                      alt=""
                      className="logo-white"
                    />
                  </a>
                </div>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button> */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                ></div>
                <div className="signin-btn d-flex align-items-center">
                  <div
                    className="dark-light-toggle theme-switch"
                    onClick={object.onPress}
                  >
                    <span className="dark">
                      <i className="ri-moon-line"></i>
                    </span>
                    <span className="light">
                      <i className="ri-sun-line"></i>
                    </span>
                  </div>
                  {isAuthenticated ? (
                    <a className="btn btn-primary" onClick={onClickWallet}>
                      {shortWalletAddress()}
                    </a>
                  ) : (
                    <Link to="/connect">
                      <div
                        className="btn btn-primary"
                        style={{ cursor: "pointer" }}
                      >
                        Connect
                      </div>
                    </Link>
                  )}
                  {userInfo ? (
                    <a
                      className="btn btn-primary"
                      style={{ marginLeft: 10 }}
                      onClick={handleSignout}
                    >
                      Logout
                    </a>
                  ) : (
                    <Link to="/signin">
                      <div
                        className="btn btn-primary"
                        style={{ marginLeft: 10, cursor: "pointer" }}
                      >
                        Login
                      </div>
                    </Link>
                  )}
                  {/* <Link to="/signin">
                                        <a className="btn btn-primary" href="/signin.html" style={{ marginLeft: 10 }}>Login</a>
                                    </Link> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withCookies(HeaderLogo);
