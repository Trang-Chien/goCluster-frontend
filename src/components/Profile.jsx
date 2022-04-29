import React, { useContext } from "react";
import { BiLogOut } from "react-icons/bi";

import { IoIosClose } from "react-icons/io";

import ChatContext from "../context/ChatContext";

const Profile = ({ changeOpenProfile, changeIsLogin }) => {
  const {userData, setUserData } = useContext(ChatContext);

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN, "");
    changeIsLogin(false);
  };

  const renderedBoxItem = (title, detail, number) => {
    return (
      <div className="box-item box-item--noselected">
        <div className="box-item__part">
          <div className="box-item__title">{title}</div>
          <div className="box-item__detail">{detail}</div>
        </div>
        <div className="box-item__part">
          <div className="box-item__number">{number}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="template__wrapper">
      <div className="template__header template__header--profile">
        <button
          className="button button--icon button--close-profile"
          onClick={() => {
            changeOpenProfile(false);
          }}
        >
          <IoIosClose className="icon icon--close" />
        </button>
        <img
          alt="avatar"
          className="avatar avatar--large avatar--profile"
          src={`${process.env.REACT_APP_API_AVATAR}/${userData.username}.png`}
        />
      </div>
      <div className="profile__name template__username">Bui Hong Chien</div>
      <div className="line"></div>

      <div className="template__body">
        <div className="box-item__item">
          {renderedBoxItem("roles", "your roles", `${userData.role.length}`)}
          {renderedBoxItem("roles", "your roles", "3")}
          {renderedBoxItem("server", "serveres you are in", "2")}
          {renderedBoxItem("owner", "servered you created", "1")}
        </div>
      </div>

      <div className="template__footer">
        <button
          className="button button--text button--text-secondary"
          onClick={(e) => {
            logout(e);
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
