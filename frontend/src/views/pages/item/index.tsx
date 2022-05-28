import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import HeaderLogo, { HeaderFooter } from "../../../components/HeaderLogo";
import Footer from "../footer";
import { getNftItem, shareNftItem } from "../../../helper/event";
import { getChainTitle } from "../../../utils";

const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState<any>({
    image_url: "/img/cover/slide2.jpg",
    Collection: "",
    Blockchain: "",
    Token_ID: "",
    Meta_Data: "{}",
    Number_of_like: "",
  });
  const { addToast } = useToasts();

  const onLoadError = () => {
    setItem({ ...item, image_url: "/img/cover/slide2.jpg" });
  };

  const getItem = () => {
    getNftItem(id).then((res) => {
      if (res.success) {
        console.log("getNftItem", res);
        setItem(res.nft);
      } else {
        addToast(res.message);
      }
    });
  };

  const shareWithOthers = () => {
    shareNftItem({
      id: item.id,
      shared: !item.shared,
    }).then((res) => {
        addToast(item.shared? "Successfully unshared" : "Successfully shared");
      setItem({ ...item, shared: !item.shared });
    });
  };

  useEffect(() => {
    getItem();
  }, [id]);

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
    <main className="main">
      <div id="main-wrapper" className="front">
        <HeaderLogo
          onPress={() => {
            themeToggle();
          }}
        />
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
                        <img
                          src={`${item.image_url}`}
                          onError={onLoadError}
                          style={{ width: 600 }}
                          className="img-fluid rounded"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">{item.Collection}</h3>
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src="/images/avatar/1.jpg"
                            alt=""
                            className="me-3 avatar-img"
                          />
                          <div className="flex-grow-1">
                            <h5 className="mb-0">
                              {getChainTitle(item.Blockchain)}
                              <span className="circle bg-success"></span>
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mt-4 mb-4">
                          <div className="text-start">
                            <h4 className="mb-2">Token Id</h4>
                            <h5 className="text-muted">{item.Token_ID}</h5>
                          </div>
                          <div className="text-end">
                            <h4 className="mb-2">
                              Title :{" "}
                              <strong className="text-primary">
                                {JSON.parse(item.Meta_Data).title}
                              </strong>
                            </h4>
                            <h5 className="text-muted">
                              Number of Like: {item.Number_of_like}
                            </h5>
                            <h5 className="text-muted">
                              {item.shared
                                ? "This item is shared with others"
                                : "This item is not shared with others"}
                            </h5>
                          </div>
                        </div>
                        {/* <p className="mb-3">
                                                    Design not prepared yet, will be updated soon.
                                                </p>
                                                <h4 className="card-title mb-3">Latest Bids</h4>
                                                <div className="bid mb-3 card">
                                                    <div className="activity-content card-body py-0">
                                                        <ul>
                                                            <li className="d-flex justify-content-between align-items-center">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="activity-user-img me-3">
                                                                        <img src="/images/avatar/1.jpg" alt="" width="50" />
                                                                    </div>
                                                                    <div className="activity-info">
                                                                        <h5 className="mb-0">Papaya</h5>
                                                                        <p>0.05 ETH</p>
                                                                    </div>
                                                                </div>
                                                                <div className="text-end"><span className=" text-muted">12 min
                                                                    ago</span>
                                                                </div>
                                                            </li>
                                                            <li className="d-flex justify-content-between align-items-center">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="activity-user-img me-3">
                                                                        <img src="/images/avatar/2.jpg" alt="" width="50" />
                                                                    </div>
                                                                    <div className="activity-info">
                                                                        <h5 className="mb-0">Alex Maris</h5>
                                                                        <p>0.06 ETH</p>
                                                                    </div>
                                                                </div>
                                                                <div className="text-end"><span className=" text-muted">12 min
                                                                    ago</span>
                                                                </div>
                                                            </li>
                                                            <li className="d-flex justify-content-between align-items-center">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="activity-user-img me-3">
                                                                        <img src="/images/avatar/3.jpg" alt="" width="50" />
                                                                    </div>
                                                                    <div className="activity-info">
                                                                        <h5 className="mb-0">John Adams</h5>
                                                                        <p>0.06 ETH</p>
                                                                    </div>
                                                                </div>
                                                                <div className="text-end"><span className=" text-muted">12 min
                                                                    ago</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div> */}
                        <div className="d-flex">
                          <a href="#" className="btn btn-primary">
                            Place a Bid
                          </a>
                          <a
                            onClick={shareWithOthers}
                            className="btn btn-primary"
                          >
                            {item?.shared
                              ? "Unshare this item"
                              : "Share with others"}
                          </a>
                        </div>
                        <div className="d-flex"></div>
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
  );
};

export default Item;
