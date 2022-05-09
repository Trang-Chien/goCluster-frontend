import React, { useEffect, useRef, useContext, useState } from "react";
import axios from "axios";

import { AiOutlineDoubleLeft, AiFillSetting } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import { GoBell } from "react-icons/go";

import Notifications from "./Notifications";
import ChatContext from "../context/ChatContext";

const DrawerLeft = ({
  status,
  currServer,
  changeRightDrawerType,
  changeCurrServer,
  currFriend,
  selectedFriend,
  openNotiList,
  changeOpenNotiList,
  openSettings,
  changeOpenSettings,
  changeOpenProfile,
  changeOpenCreateServerForm,
}) => {
  const ref = useRef();
  const { user, server, directmsg } = useContext(ChatContext);
  const [userData, setUserData]=user
  const [servers, setServers] = server
  const [directMessage, setDirectMessage] = directmsg

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
    console.log(servers)
    return servers.map((s) => {
      return (
        <React.Fragment>
          <div
            className={`list__item ${currServer===null?"list__item--noselected":
              s.workspace_id === currServer.workspace_id
                ? "list__item--selected"
                : "list__item--noselected"
            }`}
            key={s.workspace_id}
            onClick={() => {
              console.log(`selected ${s.workspace_name}`);
              changeCurrServer(s);
              changeRightDrawerType("list");
            }}
          >
            <img
              alt="avatar"
              className="avatar avatar--medium"
              src={`https://api.multiavatar.com/${s.workspace_name}.png`}
            />
            <div className="item__title">{s.workspace_name}</div>
          </div>
        </React.Fragment>
      );
    });
  };

  const renderedFriends = () => {
    console.log(directMessage)
    return directMessage.map((f) => {
      return (
        <React.Fragment>
          <div
            className={`list__item ${currFriend===null?"list__item--noselected":
              f.chat_id === currFriend.chat_id
                ? "list__item--selected"
                : "list__item--noselected"
            }`}
            key={f.chat_id}
            onClick={() => {
              console.log(`selected ${f.chat_id}`);
              selectedFriend(f);
            }}
          >
            <img
              alt="avatar"
              className="avatar avatar--medium"
              src={`https://api.multiavatar.com/${f.chat_id}.png`}
            />

            <div className="item__title">
              {f.participant.first===userData.user.user_id?f.participant.second:f.participant.first }
            </div>
            <div className="item__note">{f.last_message.sent_at}</div>
          </div>
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
              src={`https://api.multiavatar.com/${userData.user.username}.png`}
            />
          </button>

          <React.Fragment>
            <div className="list">
              <div className="list__title">
                server
                <button
                  className="button button--icon"
                  onClick={() => {
                    changeOpenCreateServerForm(true);
                  }}
                >
                  <HiPlus className="icon icon--small" />
                </button>
              </div>
              <div className="line" />
              {/* <div className="list__items">{renderedServers()}</div> */}
            </div>
            <div className="list">
              <div className="list__title">Messages</div>
              <div className="line" />
              {/* <div className="list__items">{renderedFriends()}</div> */}
            </div>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};

export default DrawerLeft;
