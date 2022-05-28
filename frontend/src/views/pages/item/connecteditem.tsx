import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import HeaderLogo, { HeaderFooter } from '../../../components/HeaderLogo';
import Footer from '../footer';
import { getNftItem } from '../../../helper/event';
import { useAppContext } from '../../../context/AppContext';
import { getChainTitle } from '../../../utils';

const ConnectedItem = () => {
    const { addToast } = useToasts();
    const { param, setLoading } = useAppContext();
    const nft = param;
    const chainId = (window as any).ethereum?.chainId;
    const [ image_url, setImageUrl ] = useState(nft.image_url);

    useEffect(() => {
        try {
            console.log('UserEffect of Connected Item');
        } catch (error) {
            console.log(error);
        }
    }, []);

    const onLoadError = () => {
        setImageUrl('/img/cover/slide2.jpg');
    }

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
                <HeaderLogo onPress={() => { themeToggle() }} />
                <div className="profile-page">
                    <div className="container">
                        <div className="row">
                            <HeaderFooter title={"item"} />
                        </div>
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="top-bid">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src={image_url}
                                                    onError={onLoadError}
                                                    style={{width:600}} className="img-fluid rounded" alt="..." />
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="mb-3">{nft.name ? nft.name : nft.Collection}</h3>
                                                <div className="d-flex align-items-center mb-3">
                                                    <img src="/images/avatar/1.jpg" alt="" className="me-3 avatar-img" />
                                                    <div className="flex-grow-1">
                                                        <h5 className="mb-0">{getChainTitle(chainId)}<span className="circle bg-success"></span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-4 mb-4">
                                                    <div className="text-start">
                                                        <h4 className="mb-2">Token ID</h4>
                                                        <h5 className="text-muted">
                                                            {nft.token_id ? nft.token_id : nft.Token_ID}
                                                        </h5>
                                                    </div>
                                                    <div className="text-end">
                                                        <h4 className="mb-2">Title : <strong className="text-primary">
                                                            {nft.title ? nft.title : JSON.parse(nft.Meta_Data).title}</strong></h4>
                                                        <h5 className="text-muted">Number of Like: {nft.Number_of_like?nft.Number_of_like:nft.syncing}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default ConnectedItem;