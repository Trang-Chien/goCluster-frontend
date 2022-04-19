import React from "react";

const Message = ({ sender }) => {
  return (
    <div
      className={`message__wrapper ${
        sender !== "chien bui"
          ? "message__wrapper--left"
          : "message__wrapper--right"
      }`}
    >
      {sender !== "chien bui" ? (
        <div className="message__avatar">
          <img
              alt="avatar"
              className="avatar avatar--mini"
              src={`https://api.multiavatar.com/${sender}.png`}
            />
        </div>
      ) : null}

      <div className="message__body">
        {sender !== "chien bui" ? (
          <div className="message__header">
            <div className="message__sender">{sender}</div>
          </div>
        ) : null}
        <div className="message__content">this is message of {sender}</div>
      </div>
    </div>
  );
};

export default Message;
