import React from "react";

import { IoIosClose } from "react-icons/io";

const Profile = ({ openProfile, changeOpenProfile, changeIsLogin }) => {
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
          src={`https://api.multiavatar.com/chienbui.png`}
        />
      </div>
      <div className="profile__name template__username">Bui Hong Chien</div>
      <div className="line"></div>

      <div className="template__body">
        <div className="box-item__item">
          {renderedBoxItem("roles", "your roles", "3")}
          {renderedBoxItem("roles", "your roles", "3")}
          {renderedBoxItem("server", "serveres you are in", "2")}
          {renderedBoxItem("owner", "servered you created", "1")}
        </div>
      </div>

      <div className='template__footer'>
      <button
          className="button button--text button--text-secondary"
          onClick={() => {
            changeIsLogin(false);
          }}
        >logout
        </button></div>
    </div>
  );
};

export default Profile;
