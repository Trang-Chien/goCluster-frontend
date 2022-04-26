import React from "react";

import Flags from 'country-flag-icons/react/3x2'
import { IoIosClose, IoIosSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

const Settings = ({ openSettings, changeOpenSettings }) => {
  
  return (
    <div className="template__wrapper">
      <div className="template__header">
        <div className="template__title">Settings</div>
        <button
          className="button button--icon button--close"
          onClick={() => {
            changeOpenSettings(false);
          }}
        >
          <IoIosClose className="icon icon--close" />
        </button>
      </div>

      <div className="template__body--setting">

        <div className="box-item__item box-item__item--pair">
          <div className="box-item box-item--selected">
            <div className="box-item__part">
              <div className="box-item__title">darkmode</div>
              <div className="box-item__detail">with dark color</div>
            </div>
            <div className="box-item__part">
              <MdDarkMode className="icon icon--luna" />
            </div>
          </div>
          <div className="box-item box-item--noselected">
            <div className="box-item__part">
              <div className="box-item__title">lightmode</div>
              <div className="box-item__detail">with blight color</div>
            </div>
            <div className="box-item__part">
              <IoIosSunny className="icon icon--sun" />
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="box-item__item">
          <div className="box-item box-item--selected">
            <div className="box-item__part">
              <div className="box-item__title">English</div>
              <div className="box-item__detail">change to English</div>
            </div>
            <div className="box-item__part">
              <Flags.US title="United States" className="icon box-item__icon"/>
            </div>
          </div>
          <div className="box-item box-item--noselected">
            <div className="box-item__part">
              <div className="box-item__title">Vienamese</div>
              <div className="box-item__detail">change to Vietnamese</div>
            </div>
            <div className="box-item__part">
            <Flags.VN title="Vietnam" className="icon box-item__icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
