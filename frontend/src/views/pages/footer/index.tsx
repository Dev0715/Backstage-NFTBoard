import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* <div className="bottom section-padding triangle-top-dark triangle-bottom-dark"> */}
      <div className="bottom section-padding pb-2 triangle-top-dark triangle-bottom-dark">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8">
              <div className="bottom-logo">
                <img className="pb-3" src="/images/logoi.png" alt="" />
                <p>
                  NFT Dahaboard is a unique site where you can view your NFTs
                  across multiple blockchain. You can also view the NFT sent by
                  others to you
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 col-6"></div>
            <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 col-6"></div>
            {/* <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 col-6">
                                <div className="bottom-widget">
                                    <h4 className="widget-title">About us</h4>
                                    <ul>
                                        <li><a href="./explore.html">Explore</a></li>
                                        <li>
                                            <Link to="/item">
                                                <a href="./item.html">Item</a>
                                            </Link>
                                        </li>
                                        <li><a href="./collection.html">Collection</a></li>
                                        <li>
                                            <Link to="/connect">
                                                <a href="./connect.html">Connect</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
                                <div className="bottom-widget">
                                    <h4 className="widget-title">Settings</h4>
                                    <ul>
                                        <li><a href="./settings.html">Settings</a></li>
                                        <li><a href="./application.html">Application</a></li>
                                        <li><a href="./security.html">Security</a></li>
                                        <li><a href="./activity.html">Activity</a></li>
                                    </ul>
                                </div>
                            </div> */}
            <div className="col-xl-4 col-lg-4 col-md-8 col-sm-8">
              <div className="bottom-widget">
                {/* <h4 className="widget-title">Profile</h4> */}
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                    <ul>
                      <li>
                        <Link to="/connected">Connected</Link>
                      </li>
                      <li>
                        <Link to="/" className="active">
                          Collected
                        </Link>
                      </li>
                      <li>
                        <Link to="/recently_received" className="active">
                          Recently Received
                        </Link>
                      </li>
                      <li>
                        <Link to="/feed" className="active">
                          Feed
                        </Link>
                      </li>
                      <li>
                        <Link to="/profile" className="active">
                          Profile
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                            <ul>
                                                <li><a href="./onsale.html">On Sale</a></li>
                                                <li><a href="./liked.html">Liked</a></li>
                                                <li><a href="./following.html">Following</a></li>
                                                <li><a href="./followers.html">Followers</a></li>
                                            </ul>
                                        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="copyright">
                <p>
                  © Copyright 2022 <a href="#">NFT Dashboard test</a> All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="footer-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
