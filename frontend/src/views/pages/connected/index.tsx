import React, { useState, useEffect } from 'react';
import Card from './card';
import { Link } from 'react-router-dom';
import HeaderLogo, { HeaderFooter } from '../../../components/HeaderLogo';
import { useUserContext } from "../../../context/UserContext";
import Footer from '../footer';

const Connected = () => {
    const { userInfo } = useUserContext();
    const [token_ID, setTokenID] = useState<any>('');

    useEffect(() => {        
        if (userInfo) {
            if (userInfo.accessToken) {
                setTokenID(userInfo.accessToken);
            }
        }
    }, [userInfo])

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
            <div id="main-wrapper" className="front">
                <HeaderLogo
                    onPress={themeToggle}
                />
                <div className="profile-page">
                    <div className="container">
                        <div className="row">
                            <HeaderFooter title={"connected"} />
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h4 className="card-title mb-3">My Connections</h4>
                                <div className="row card-container">
                                    {Card()}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default Connected;