import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
// import config from "../../../helper/config";
import { getAllEventCards } from "../../../helper/event";
import { useUserContext } from '../../../context/UserContext';

const Card = (title: any) => {
    const [ nfts, setNfts ] = useState([]);
    const { userInfo } = useUserContext();

    const getAllCards = () => {
        const curTime = new Date().getTime() / 1000;
        getAllEventCards().then(res => {   
            if(res.success) {
                console.log("collected NFTS", res);
                setNfts(res.nfts.filter((nft: any) => (curTime-JSON.parse(nft.Meta_Data).saved_time) < 7*24*3600));
            }
        })
    }

    const onLoadError = (errorUrl: any) => {
        setNfts(nfts.map((nft: any) => nft.image_url == errorUrl
            ? {...nft, image_url: '/img/cover/slide2.jpg'} : nft) as never[])
    }

    useEffect(() => {
        // if(userInfo) {
            console.log('collected useeffect');
            getAllCards();
        // }
    }, [title]);

    const eventEle = () => {
        return userInfo ? nfts.map((nft: any, key: number) => (
            <>
                {nft.NFT_Address === userInfo.user.id ? 
                // <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="nft-item" key={key}>
                    <div className="card">
                        <Link to={`/nft/item/${nft.id}`} >
                            <div className="card items">
                                <div className="card-body">
                                    <div className="items-img position-relative">
                                        <img src={`${nft.image_url}`}
                                            onError={() => onLoadError(nft.image_url)}
                                            className="img-fluid rounded mb-3" alt="" />
                                        <img src={ nft.Blockchain == 0x01 ? "logo/ethereum-logo.png" :
                                            nft.Blockchain == 137 ? "logo/polygon-logo.png" :
                                            nft.Blockchain == 56 ? "logo/binance-logo.png" : "/images/avatar/1.jpg" }
                                            className="creator" width="60" alt="" />
                                    </div>
                                    <h4 className="card-title">{JSON.parse(nft.Meta_Data).title}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                : <></>
                } 
            </>
        )) : <></>
    }

    return (
        nfts.length > 0 ? <> { eventEle() } </> : ''
    )
}

export default Card;