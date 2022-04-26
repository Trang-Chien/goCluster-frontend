import React from "react";

import { IoMdSend } from "react-icons/io";
import {FcCursor} from 'react-icons/fc'

const TextArea = ({ page }) => {
  return (
    <div className={`${page === "welcome" ? "textarea--welcome" : "textarea"}`}>
      <div className="textarea__wrapper">
        {page === "welcome" ? (
          <React.Fragment>
            <FcCursor className='icon icon--cursor'/>
            <div className=''></div>
          <div className="typewrite">
            <div className="typewrite__content">goCluster</div>
          </div></React.Fragment>
        ) : (
          <textarea
            className={`textarea__input`}
            placeholder="Type a message..."
          ></textarea>
        )}

        <button className="button button--icon">
          <IoMdSend
            className={`icon icon--green-light ${
              page === "welcome" ? "icon--huge" : "icon--large"
            } `}
          />
        </button>
      </div>
    </div>
  );
};

export default TextArea;
