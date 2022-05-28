import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderLogo, { HeaderFooter } from '../../../components/HeaderLogo';
import { useUserContext } from "../../../context/UserContext";
import { useToasts } from 'react-toast-notifications'
import Footer from '../footer';
import config from "../../../helper/config";

const Profile = () => {

    const { userInfo } = useUserContext();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        twitter: '',
        medium: '',
        facebook: '',
        instagram: '',
        opensea: '',
        image_url: ''
    });

    useEffect(() => {
        if (userInfo) {
            setValues({
                id: userInfo ? userInfo.user.id: '',
                name: userInfo ? userInfo.user.name : '',
                email: userInfo ? userInfo.user.email : '',
                phone: userInfo ? userInfo.user.phone : '',
                twitter: userInfo ? userInfo.user.twitter : '',
                medium: userInfo ? userInfo.user.mediu : '',
                facebook: userInfo ? userInfo.user.facebook : '',
                instagram: userInfo ? userInfo.user.instagram : '',
                opensea: userInfo ? userInfo.user.opensea : '',
                image_url: userInfo ? `${config.API_BASE_URL}/api/upload/get_file?path=${userInfo.user.avatar}` : ''
            })
        }
    }, [userInfo])

    const themeToggle = () => {
       
        let element = document.body;
        element.classList.toggle("dark-theme");

        let theme = localStorage.getItem("theme");
        if (theme || theme === "dark-theme") {
            localStorage.setItem("theme", "");
        } else {
            localStorage.setItem("theme", "dark-theme");
        }
    }

    return (
        <main className='main'>
            <div id="main-wrapper" className="front">
                <HeaderLogo onPress={themeToggle} />
                {userInfo ?
                    <div className="profile-page">
                        <div className="container">
                        <div className="row">
                                    <HeaderFooter title={"profile"} />
                                </div>
                            <div className="row">
                                <div className="col-xl-3 col-sm-6">
                                    <div className="stat-widget d-flex align-items-center">
                                        <div className="widget-icon me-3 bg-primary"><span><i className="ri-file-copy-2-line"></i></span>
                                        </div>
                                        <div className="widget-content">
                                            <h3>24K</h3>
                                            <p>Artworks</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="stat-widget d-flex align-items-center">
                                        <div className="widget-icon me-3 bg-success"><span><i className="ri-file-list-3-line"></i></span>
                                        </div>
                                        <div className="widget-content">
                                            <h3>82K</h3>
                                            <p>Auction</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="stat-widget d-flex align-items-center">
                                        <div className="widget-icon me-3 bg-warning"><span><i className="ri-file-paper-line"></i></span>
                                        </div>
                                        <div className="widget-content">
                                            <h3>200</h3>
                                            <p>Creators</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="stat-widget d-flex align-items-center">
                                        <div className="widget-icon me-3 bg-danger"><span><i className="ri-file-paper-2-line"></i></span>
                                        </div>
                                        <div className="widget-content">
                                            <h3>89</h3>
                                            <p>Canceled</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-12">
                                    <div className="card welcome-profile">
                                        <div className="card-body">
                                            <img src={values.image_url} alt="" />
                                            <h4>Welcome, {values.name}</h4>
                                            <p>Looks like you are not verified yet. Verify yourself to use the full potential of
                                                Xtrader.</p>
                                            <ul>
                                                <li><a href="#"><span className="verified"><i className="ri-check-line"></i></span>Verify
                                                    account</a></li>
                                                <li><a href="#"><span className="not-verified"><i
                                                    className="ri-shield-check-line"></i></span>Two-factor authentication
                                                    (2FA)</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4">
                                    <div className="card card-fluid">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h6 className="text-sm mb-0"><i className="bi bi-facebook me-2"></i>Facebook</h6>
                                                </div>
                                                {values.facebook != null || '' ? <div className="col-auto"><a href={values.facebook} className="text-sm">Connect</a></div>: <div className="col-auto"><span className="text-sm">imsaifun</span></div>}
                                                
                                            </div>
                                            <hr className="my-3" />
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h6 className="text-sm mb-0"><i className="bi bi-instagram me-2"></i>Instagram</h6>
                                                </div>
                                                {values.instagram != null || '' ? <div className="col-auto"><a href={values.instagram} className="text-sm">Connect</a></div>: <div className="col-auto"><span className="text-sm">imsaifun</span></div>}
                                            </div>
                                            <hr className="my-3" />
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h6 className="text-sm mb-0"><i className="bi bi-linkedin me-2"></i>Twitter</h6>
                                                </div>
                                                {values.twitter != null || '' ? <div className="col-auto"><a href={values.twitter} className="text-sm">Connect</a></div>: <div className="col-auto"><span className="text-sm">imsaifun</span></div>}
                                            </div>
                                            <hr className="my-3" />
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h6 className="text-sm mb-0"><i className="bi bi-linkedin me-2"></i>Medium</h6>
                                                </div>
                                                {values.medium != null || '' ? <div className="col-auto"><a href={values.medium} className="text-sm">Connect</a></div>: <div className="col-auto"><span className="text-sm">imsaifun</span></div>}
                                            </div>
                                            <hr className="my-3" />
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h6 className="text-sm mb-0"><i className="bi bi-linkedin me-2"></i>Opensea</h6>
                                                </div>
                                                {values.opensea != null || '' ? <div className="col-auto"><a href={values.opensea} className="text-sm">Connect</a></div>: <div className="col-auto"><span className="text-sm">imsaifun</span></div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">VERIFY &amp; UPGRADE </h4>
                                        </div>
                                        <div className="card-body">
                                            <h5>Account Status : <span className="text-warning">Pending <i
                                                className="icofont-warning"></i></span> </h5>
                                            <p>Your account is unverified. Get verified to enable funding, trading, and withdrawal.
                                            </p>
                                            <a href="#" className="btn btn-primary"> Get Verified</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-12">
                                    <div className="card-header px-0">
                                        <h4 className="card-title">Information </h4>
                                        <Link to="/setting-profile" className='btn btn-primary'>Edit</Link>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <form className="row">
                                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                                    <div className="user-info"><span>USER ID</span>
                                                        <h4>{values.id}</h4>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                                    <div className="user-info"><span>EMAIL ADDRESS</span>
                                                        <h4>{values.email}</h4>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                                    <div className="user-info"><span>COUNTRY OF RESIDENCE</span>
                                                        <h4>Bangladesh</h4>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                                    <div className="user-info"><span>JOINED SINCE</span>
                                                        <h4>20/10/2020</h4>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                                    <div className="user-info"><span>TYPE</span>
                                                        <h4>Personal</h4>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <>
                        {navigate('/')}
                    </>
                }

              <Footer />

            </div>
        </main>
    )
}

export default Profile;