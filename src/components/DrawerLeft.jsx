import React, { useEffect, useRef } from "react";

import { AiOutlineDoubleLeft, AiFillSetting } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import { GoBell } from "react-icons/go";

import Notifications from "./Notifications";

const DrawerLeft = ({
  status,
  servers,
  currServer,
  // rightDrawerType,
  changeRightDrawerType,
  changeCurrServer,
  friends,
  currFriend,
  selectedFriend,
  openNotiList,
  changeOpenNotiList,
  openSettings,
  changeOpenSettings,
  // openProfile,
  changeOpenProfile,
  changeOpenCreateServerForm,
}) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (openNotiList && ref.current && !ref.current.contains(e.target)) {
        changeOpenNotiList(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openNotiList, changeOpenNotiList]);

  const renderedServers = () => {
    return Object.entries(servers).map(([key, value], i) => {
      return (
        <React.Fragment>
          <div
            className={`list__item ${
              key === currServer
                ? "list__item--selected"
                : "list__item--noselected"
            }`}
            key={key}
            onClick={() => {
              console.log(`selected ${key}`);
              changeCurrServer(key);
              changeRightDrawerType("list")
            }}
          >
            <img
              alt="avatar"
              className="avatar avatar--medium"
              src={`https://api.multiavatar.com/${key}.png`}
            />
            <div className="item__title">{key}</div>
          </div>
        </React.Fragment>
      );
    });
  };

  const renderedFriends = () => {
    return friends.map((f) => {
      return (
        <React.Fragment>
          <div
            className={`list__item ${
              f === currFriend
                ? "list__item--selected"
                : "list__item--noselected"
            }`}
            key={f}
            onClick={() => {
              console.log(`selected ${f}`);
              selectedFriend(f);
            }}
          >
            <img
              alt="avatar"
              className="avatar avatar--medium"
              src={`https://api.multiavatar.com/${f}.png`}
            />

            <div className="item__title">{f}</div>
            <div className="item__note">Apr 8th, 2022</div>
          </div>
          {/* <div className="line" /> */}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="drawer drawer--left">
      <div className="drawer__wrapper">
        <div className={`drawer__header drawer__header--left`}>
          <button
            className="button button--icon"
            onClick={(event) => status(event)}
          >
            <AiOutlineDoubleLeft className="icon icon--green" />
          </button>
          <button
            className={`button button--icon`}
            onClick={() => {
              changeOpenSettings(!openSettings);
            }}
          >
            <AiFillSetting className="icon icon--pink" />
          </button>

          <div className="" ref={ref}>
            <button
              className={`button button--icon ${
                openNotiList ? "button--noti-open" : ""
              }`}
              onClick={() => {
                changeOpenNotiList(!openNotiList);
              }}
            >
              <GoBell className="icon icon--yellow" />
            </button>
            {openNotiList ? (
              <Notifications
                changeOpenNotiList={changeOpenNotiList}
                openNotiList={openNotiList}
              />
            ) : null}
          </div>
        </div>
        <div className="drawer__body">
          <button
            className="button button--circle"
            onClick={() => changeOpenProfile(true)}
          >
            <img
              alt="avatar"
              className="avatar avatar--large"
              src={`https://api.multiavatar.com/chienbui.png`}
            />
          </button>

          <div className="list">
            <div className="list__title">
              server
              <button className="button button--icon" onClick={()=>{
                changeOpenCreateServerForm(true)
              }}>
                <HiPlus className="icon icon--small" />
              </button>
            </div>
            <div className="line" />
            <div className="list__items">{renderedServers()}</div>
          </div>
          <div className="list">
            <div className="list__title">friends</div>
            <div className="line" />
            <div className="list__items">{renderedFriends()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerLeft;
