import React from "react";

import { IoMdSend } from "react-icons/io";

const TextArea = (props) => {
  return (
    <div className="textarea">
      <div className="textarea__wrapper">
        <textarea className="textarea__input" placeholder='Type a message...' ></textarea>
        <button className="button button--icon">
          <IoMdSend className="icon icon--green-light icon--large" />
        </button>
      </div>
    </div>
  );
};

export default TextArea;
