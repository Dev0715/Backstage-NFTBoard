import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNFTBalances } from 'react-moralis';
import { useMoralis } from 'react-moralis';
import { useAppContext } from "../../../context/AppContext";
import { saveNftItem } from '../../../helper/event';
import { useMoralisWeb3Api } from "react-moralis";
import { getAllEventCards } from "../../../helper/event";
import { useUserContext } from "../../../context/UserContext";

const Card = () => {
    const [ nfts, setNfts ] = useState([]);
    // const { getNFTBalances } = useNFTBalances();
    const { isAuthenticated }  = useMoralis();
    const { setParam } = useAppContext();
    const { userInfo } = useUserContext();
    const navigate = useNavigate();
    const chainId = (window as any).ethereum?.chainId;
    let nftArray:any[] = [];
    
    const Web3Api = useMoralisWeb3Api();

    const getAllCards = () => {
        getAllEventCards().then(res => {
            if(res.success) {
                const mine = res.nfts.filter((item: any) => 
                    item.NFT_Address == userInfo.user.id &&
                    item.Blockchain == chainId);
                console.log('MINE', mine);
                setNfts(mine);
                nftArray = [...mine];
            }
        })
    }

    useEffect(() => {
        if(userInfo) {
            console.log(userInfo);
            getAllCards();
        }
        // console.log('ChainId', userInfo.user.id);
        // console.log('ChainId', chainId);
    }, []);

    useEffect(()=>{
        if(isAuthenticated) {
            // const chainId = (window as any).ethereum.chainId;
            // getNFTBalances({params: {chain: chainId /*, address: '0xf53ff3f41a9327d12437297f2862b0813b066493' */ }} as any).then(data => {
            //     performNFTs(data);
            // })
            (Web3Api.account as any).getNFTs({
                chain: chainId,
                // address: '0xf53ff3f41a9327d12437297f2862b0813b066493'
            }).then((userEthNFTs: any) => {
                performNFTs(userEthNFTs);
            });
        }
    }, [isAuthenticated]);

    const onLoadError = (errorUrl: any) => {
        setNfts(nfts.map((nft: any) => nft.image_url == errorUrl
            ? {...nft, image_url: '/img/cover/slide2.jpg'} : nft) as never[])
    }

    const getTokenUrl = async (api : any) => {
        const res =  await fetch(api);
        const json = await res.json();
        return json;
    }

    const performNFTs = (data: any) => {
        if(data) {
            console.log('wdata', data);
            const result = data.result;
            if(result) {
                 console.log('NFTARRAY', nftArray);
                 result.map(async (item: any) => {
                    console.log('witem', item);
                    try {
                        const json = await getTokenUrl(item.token_uri);
                        let image_url = '';
                        let title = item.symbol + ' ' + item.token_id;
                        if(json.name.includes('.eth')) {
                            image_url = json.image_url;
                            title = json.name;
                        } else {
                            image_url = json.image;
                        }
                        const nft = {
                            ...item,
                            image_url,
                            title
                        };
                        if(nftArray.find((nItem: any) => nItem.Token_ID === nft.token_id) === undefined) {
                            nftArray.push(nft);
                            setNfts([...nftArray as never[]]);
                            if(userInfo) {
                                saveToDatabase(nft);
                            }
                        }
                    } catch(error) {
                        console.log(error);
                    }
                });
            }
        }
    };

    const saveToDatabase = (nft:any) => {
        // setLoading(true);
        saveNftItem({
            NFT_Address: userInfo.user.id,
            Blockchain: `${chainId}`,
            Token_ID: nft.token_id,
            IPFS_Address: nft.token_uri,
            Meta_Data: JSON.stringify({
                title: nft.title,
                saved_time: Math.floor(new Date().getTime() / 1000), 
            }),
            Number_of_like: nft.syncing,
            Privacy: 'true',
            Collection: nft.name,
            image_url: nft.image_url,
        }).then(res => {
            console.log("save nft", res);
            // setLoading(false);
            if(res.success) {
                console.log('success');
            } else {
                console.log('error');
            }
        }).catch(error => {
            console.log(error);
            // setLoading(false);
        })
    }

    const onTokenClick = (id:any) => {
        setParam(nfts[id]);
        navigate('/nft/connecteditem');
    }

    const eventEle = () => {
        return isAuthenticated ? nfts.map((nft: any, key: number) => (
            <>
                {/* {nft.NFT_Address === userInfo.user.id ?  */}
                    {/* <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6"> */}
                    <div className="nft-item" key={key}>
                        <div className="card">
                            <a onClick={() => onTokenClick(key)}>
                                <div className="card items">
                                    <div className="card-body">
                                        <div className="items-img position-relative">
                                            <img src={`${nft.image_url}`}
                                                onError={() => onLoadError(nft.image_url)}
                                                className="img-fluid rounded mb-3" alt="" />
                                            <img src={ chainId == 0x01 ? "logo/ethereum-logo.png" :
                                                        chainId == 137 ? "logo/polygon-logo.png" :
                                                        chainId == 56 ? "logo/binance-logo.png" : "/images/avatar/1.jpg" }
                                                className="creator" width="60" alt="" />
                                        </div>
                                        <h4 className="card-title">{nft.title ? nft.title : JSON.parse(nft.Meta_Data).title}</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                {/* : <></>} */}
            </>
        )) : <></>
    }

    return (
        nfts.length > 0 ? eventEle() : ''   
    )
}

export default Card;