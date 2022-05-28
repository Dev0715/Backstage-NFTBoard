import React, { useState, useEffect } from 'react';
import Card from './card';
import { Link } from 'react-router-dom';
import HeaderLogo, { HeaderFooter } from '../../../components/HeaderLogo';
import { useUserContext } from "../../../context/UserContext";
import Footer from '../footer';
import { deleteNfts } from '../../../helper/event';

const RecentlyReceived = () => {

    const { userInfo } = useUserContext();
    const [ token_ID, setTokenID ] = useState<any>('');
    const [ state_changed, setChanged ] = useState('');

    useEffect(() => {        
        if (userInfo) {
            if (userInfo.accessToken) {
                setTokenID(userInfo.accessToken);
            }
        }
    }, [userInfo])

    // const deleteAllNFT = () => {
    //     deleteNfts({
    //         user_id: userInfo.user.id,
    //     }).then(res => {
    //         console.log(res);
    //         setChanged(state_changed + '_cha');
    //     });
    // }

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
                            <HeaderFooter title={"recently_received"} />
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex">
                                    <h4 className="card-title mb-3 pt-1">My Collection Received Recently</h4>
                                    {/* {userInfo
                                        ? <div className="d-flex mb-3 mx-3"><a onClick={deleteAllNFT} className="btn btn-primary">Delete all NFTs</a></div>
                                        : <></>
                                    } */}
                                </div>
                                <div className="row card-container">
                                    {Card(state_changed)}
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

export default RecentlyReceived;