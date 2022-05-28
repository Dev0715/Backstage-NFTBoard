import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Setting_Profile = () => {

    const themeToggle = () => {
        let element = document.body;
        element.classList.toggle("dark-theme");

        let theme = localStorage.getItem("theme");
        if (theme && theme === "dark-theme") {
            localStorage.setItem("theme", "");
        } else {
            localStorage.setItem("theme", "dark-theme");
        }
    }
    return (
        <main className='main'>
            <div id="main-wrapper" className="admin">

                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="header-content">
                                    <div className="header-left">
                                        <div className="brand-logo">
                                            <a className="mini-logo" href="./">
                                                <img src="./images/logoi.png" alt="" width="40" /></a></div>
                                        <div className="search">
                                            <form action="#">
                                                <span><i className="ri-search-line"></i></span>
                                                <input type="text" placeholder="Search Here" /></form>
                                        </div>
                                    </div>
                                    <div className="header-right">

                                        <div className="dark-light-toggle theme-switch" onClick={() => themeToggle()}>
                                            <span className="dark"><i className="ri-moon-line"></i></span>
                                            <span className="light"><i className="ri-sun-line"></i></span>
                                        </div>


                                        <div className="nav-item dropdown notification dropdown">
                                            <div data-bs-toggle="dropdown">
                                                <div className="notify-bell icon-menu"><span><i className="ri-notification-2-line"></i></span>
                                                </div>
                                            </div>
                                            <div tabIndex={-1} className="dropdown-menu notification-list dropdown-menu dropdown-menu-end">
                                                <h4>Recent Notification</h4>
                                                <div className="lists">
                                                    <a className="" href="./#">
                                                        <div className="d-flex align-items-center"><span className="me-3 icon success"><i
                                                            className="ri-check-line"></i></span>
                                                            <div>
                                                                <p>Account created successfully</p><span>2020-11-04 12:00:23</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a className="" href="./#">
                                                        <div className="d-flex align-items-center"><span className="me-3 icon fail"><i
                                                            className="ri-close-line"></i></span>
                                                            <div>
                                                                <p>2FA verification failed</p><span>2020-11-04 12:00:23</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a className="" href="./#">
                                                        <div className="d-flex align-items-center"><span className="me-3 icon success"><i
                                                            className="ri-check-line"></i></span>
                                                            <div>
                                                                <p>Device confirmation completed</p><span>2020-11-04 12:00:23</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a className="" href="./#">
                                                        <div className="d-flex align-items-center"><span className="me-3 icon pending"><i
                                                            className="ri-question-mark"></i></span>
                                                            <div>
                                                                <p>xs verification pending</p><span>2020-11-04 12:00:23</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#">More<i className="ri-arrow-right-s-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown profile_log dropdown">
                                            <div data-bs-toggle="dropdown">
                                                <div className="user icon-menu active">
                                                    <span><img src="./images/avatar/9.jpg" alt="" /></span>
                                                </div>
                                            </div>
                                            <div tabIndex={-1} className="dropdown-menu dropdown-menu-end">
                                                <div className="user-email">
                                                    <div className="user">
                                                        <span className="thumb">
                                                            <img src="./images/profile/3.png" alt="" />
                                                        </span>
                                                        <div className="user-info">
                                                            <h5>Jannatul Maowa</h5>
                                                            <span>imsaifun@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link to="/profile" className='dropdown-item'>
                                                    <span><i className="ri-user-line"></i></span>Profile
                                                </Link>
                                                <a className="dropdown-item" href="./wallet.html">
                                                    <span><i className="ri-wallet-line"></i></span>Wallet
                                                </a>
                                                <Link to="/setting-profile" className='dropdown-item active'>
                                                    <span><i className="ri-settings-3-line"></i></span>Settings
                                                </Link>
                                                <a className="dropdown-item" href="./settings-activity.html">
                                                    <span><i className="ri-time-line"></i></span>Activity
                                                </a>
                                                <a className="dropdown-item" href="./lock.html">
                                                    <span><i className="ri-lock-line"></i></span>Lock
                                                </a>
                                                <Link to="/signin" className='dropdown-item logout'>
                                                    <i className="ri-logout-circle-line"></i>Logout
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="brand-logo">
                        <a className="full-logo" href="./dashboard.html">
                            <img src="./images/logoi.png" width={160} alt="" />
                        </a>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="./dashboard.html">
                                    <span><i className="ri-layout-grid-fill"></i></span>
                                    <span className="nav-text">Dashboard</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="./bids.html">
                                    <span><i className="ri-briefcase-line"></i></span>
                                    <span className="nav-text">Bids</span></a>
                            </li>
                            <li className="">
                                <a href="./saved.html">
                                    <span><i className="ri-heart-line"></i></span>
                                    <span className="nav-text">Saved</span></a>
                            </li>
                            <li className="">
                                <a href="./collection.html">
                                    <span><i className="ri-star-line"></i></span>
                                    <span className="nav-text">Collection</span></a>
                            </li>
                            <li className="">
                                <a href="./wallet.html">
                                    <span><i className="ri-wallet-line"></i></span>
                                    <span className="nav-text">Wallet</span></a>
                            </li>
                            <li className="">
                                <Link to="/profile">
                                    <span><i className="ri-account-box-line"></i></span>
                                    <span className="nav-text">Profile</span>
                                </Link>
                            </li>
                            <li className="active">
                                <Link to="setting-profile">
                                    <span><i className="ri-settings-3-line"></i></span>
                                    <span className="nav-text">Settings</span>
                                </Link>
                            </li>
                            <li className=" logout">
                                <Link to="/signin">
                                    <span><i className="ri-logout-circle-line"></i></span>
                                    <span className="nav-text">Signout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="content-body">
                    <div className="container">
                        <div className="page-title">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-6">
                                    <div className="page-title-content">
                                        <h3>Profile</h3>
                                        <p className="mb-2">Welcome Neftify Settings Profile page</p>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="breadcrumbs">
                                        <a href="#">Settings </a>
                                        <span>
                                            <i className="ri-arrow-right-s-line"></i>
                                        </span>
                                        <Link to="#">
                                            Profile
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="settings-menu">
                            <li className='active'>
                                <Link to="/setting-profile">Profile</Link>
                            </li>
                            <li className=""><a href="./settings-application.html">Application</a></li>
                            <li className=""><a href="./settings-security.html">Security</a></li>
                            <li className=""><a href="./settings-activity.html">Activity</a></li>
                            <li className=""><a href="./settings-payment-method.html">Payment Method</a></li>
                            <li className=""><a href="./settings-api.html">API</a></li>
                        </ul>
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <h4 className="card-title mb-3">User Profile</h4>
                                <div className="card">
                                    <div className="card-body">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-12 mb-3"><label className="form-label">Full Name</label>
                                                    <input name="fullName" type="text" className="form-control" /></div>
                                                <div className="col-xxl-12">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <img className="me-3 rounded-circle me-0 me-sm-3" src="/images/profile/3.png"
                                                            width="55" height="55" alt="" />
                                                        <div className="media-body">
                                                            <h4 className="mb-0">Jannatul Maowa</h4>
                                                            <p className="mb-0">Max file size is 20mb</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <input name="photo" type="file" className="" />
                                                </div>
                                            </div>
                                            <div className="mt-3"><button type="submit" className="btn btn-primary mr-2">Save</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <h4 className="card-title mb-3">Update Profile</h4>
                                <div className="card">
                                    <div className="card-body">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-12 mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input name="email"
                                                        type="text" className="form-control" />
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label className="form-label">Password</label>
                                                    <input
                                                        name="password" type="text" className="form-control" />

                                                </div>
                                            </div>
                                            <div className="mt-3"><button type="submit" className="btn btn-primary mr-2">Save</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-12">
                                <h4 className="card-title mb-3">Personal Information</h4>
                                <div className="card">
                                    <div className="card-body">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                                    <label className="form-label">Full Name</label>
                                                    <input name="fullName" type="text" className="form-control" />
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3"><label
                                                    className="form-label">Email</label>
                                                    <input name="email" type="text" className="form-control" />
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                                    <label className="form-label">Address</label>
                                                    <input name="address" type="text" className="form-control" /></div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                                    <label className="form-label">City</label>
                                                    <input name="city" type="text" className="form-control" /></div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3">
                                                    <label className="form-label">Post Code</label>
                                                    <input name="postal" type="text" className="form-control" />
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6 mb-3"><label
                                                    className="form-label">Country</label><select name="country"
                                                        className="form-control">
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="United States">United States</option>
                                                        <option value="United Kingdom">United Kingdom</option>
                                                    </select></div>
                                            </div>
                                            <div className="mt-3"><button type="submit" className="btn btn-primary mr-2">Save</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </main>
    )
}

export default Setting_Profile;