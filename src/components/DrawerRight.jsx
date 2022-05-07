import React, { useRef, useEffect, useContext, useState } from "react";

import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { RiArrowGoBackLine } from "react-icons/ri";
import { BiMessageRoundedDots } from "react-icons/bi";
import { RiUserSettingsLine } from "react-icons/ri";

import More from "./More";
import ChatContext from "../context/ChatContext";
import { createDirectMessageRoute } from "../utils/APIRoutes";
import axios from "axios";

const DrawerRight = ({
  status,
  type,
  changeType,
  isServer,
  currFriend,
  changeCurrFriend,
  currServer,
  openMore,
  changeOpenMore,
  changeOpenAddAdminForm,
  changeOpenAddOwnerForm,
  changeOpenInvitePeopleForm,
  changeOpenCreateRoleForm,
  changeOpenALertLeaveServer,
}) => {
  const ref = useRef();
  const { userData, directmsg } = useContext(ChatContext);
  const [directMessage, setDirectMessage] = directmsg;
  const [profileMember, setProfileMember] = useState(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (openMore && ref.current && !ref.current.contains(e.target)) {
        changeOpenMore(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openMore, changeOpenMore]);

  const openDirectMessage = async (e) => {
    e.preventDefault();
    let isDirectMsgExist = directMessage.find(
      (e) => e.participant.user_id === profileMember.user_id
    );
    if (isDirectMsgExist) changeCurrFriend(profileMember);
    if (!isDirectMsgExist) {
      const postNewDirectMessageRes = await axios.post(createDirectMessageRoute, {participant: [userData.user, profileMember] });
      setDirectMessage({...directMessage, ...postNewDirectMessageRes.data.personalChat})
    }
    changeCurrFriend(profileMember)
  };

  const renderedMembers = (group) => {
    return (
      <div className="list__items ">
        {currServer.member.map((m) => (
          <div
            className="list__item list__item--noselected"
            key={m.user_id}
            onClick={() => {
              changeType("profile");
              setProfileMember(m);
            }}
          >
            <img
              alt="avatar"
              className="avatar avatar--medium"
              src={`https://api.multiavatar.com/${m.user_id}.png`}
            />
            <div className="item__title">{m.username}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderedGroups = () => {
    return <React.Fragment>{renderedMembers("group 1")}</React.Fragment>;
  };

  const renderedList = () => {
    return (
      <div className="drawer__wrapper">
        <div className="drawer__header drawer__header--right">
          <input className="input input--tiny" placeholder="find someone..." />
          <div className="icon-group">
            <div className="" ref={ref}>
              {openMore ? (
                <More
                  changeOpenMore={changeOpenMore}
                  changeOpenAddAdminForm={changeOpenAddAdminForm}
                  changeOpenAddOwnerForm={changeOpenAddOwnerForm}
                  changeOpenInvitePeopleForm={changeOpenInvitePeopleForm}
                  changeOpenCreateRoleForm={changeOpenCreateRoleForm}
                  changeOpenALertLeaveServer={changeOpenALertLeaveServer}
                />
              ) : null}
              <button
                className={`button button--icon ${
                  openMore ? "button--noti-open" : ""
                }`}
                onClick={() => {
                  changeOpenMore(!openMore);
                }}
              >
                <BsThreeDots className="icon icon--yellow" />
              </button>
            </div>
            <button
              className="button button--icon"
              onClick={(event) => status(event)}
            >
              <AiOutlineDoubleRight className="icon icon--green" />
            </button>
          </div>
        </div>

        <div className="drawer__body">
          <div className="list">{renderedGroups()}</div>
        </div>
      </div>
    );
  };

  const renderedProfile = () => {
    return (
      <div className="drawer__wrapper">
        <div
          className={`drawer__header drawer__header--right ${
            isServer ? "" : "drawer__header--right-noserver"
          }`}
        >
          {isServer ? (
            <button
              className="button button--icon"
              onClick={() => changeType("list")}
            >
              <RiArrowGoBackLine className="icon icon--rotate icon--green" />
            </button>
          ) : null}
          <div className="icon-group">
            <div className="" ref={ref}>
              {isServer ? (
                <button
                  className={`button button--icon ${
                    openMore ? "button--noti-open" : ""
                  }`}
                  onClick={() => changeOpenMore(!openMore)}
                >
                  <BsThreeDots className="icon icon--pink" />
                </button>
              ) : null}
              {openMore ? (
                <More
                  changeOpenMore={changeOpenMore}
                  openMore={openMore}
                  changeOpenAddAdminForm={changeOpenAddAdminForm}
                  changeOpenAddOwnerForm={changeOpenAddOwnerForm}
                  changeOpenInvitePeopleForm={changeOpenInvitePeopleForm}
                  changeOpenCreateRoleForm={changeOpenCreateRoleForm}
                />
              ) : null}
            </div>
            <button
              className="button button--icon"
              onClick={(event) => status(event)}
            >
              <AiOutlineDoubleRight className="icon icon--green" />
            </button>
          </div>
        </div>
        <div className="drawer__body">
          <div className="profile">
            <div className="profile__part profile__part--top">
              <img
                alt="avatar"
                className="avatar avatar--large"
                src={`https://api.multiavatar.com/${profileMember.user_id}.png`}
              />
              <div className="profile__name">{profileMember.username}</div>
            </div>
            <div className="line" />
            {isServer ? (
              <div className="list__items">
                <div className="list__item list__item--noselected">
                  <RiUserSettingsLine className="icon icon--green" />
                  <div className="item item__title">{profileMember.role}</div>
                </div>
                <div
                  className="list__item list__item--noselected"
                  onClick={() => openDirectMessage()}
                >
                  <BiMessageRoundedDots className="icon icon--green" />
                  <div className="item item__title">message</div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="drawer drawer--right">
      {isServer
        ? type === "list"
          ? renderedList()
          : renderedProfile()
        : renderedProfile()}
    </div>
  );
};

export default DrawerRight;
