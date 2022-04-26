import React from "react";

import Avatar from "react-avatar";

const notis = {
  "01": {
    sender: "chien bui",
    recipient: "trang nguyen",
    conversation: "channel 1",
    server: "learning chinese",
  },
  "02": {
    sender: "do thien",
    recipient: "trang nguyen",
    conversation: "channel 2",
    server: "react",
  },
  "03": {
    sender: "nguyen ha",
    recipient: "trang nguyen",
    conversation: "channel 1",
    server: "gamming team",
  },
  "04": {
    sender: "nguyen ha",
    recipient: "trang nguyen",
    conversation: "channel 1",
    server: "gamming team",
  },
  "05": {
    sender: "nguyen ha",
    recipient: "trang nguyen",
    conversation: "channel 1",
    server: "gamming team",
  },
};

const Notifications = ({ changeOpenNotiList, OpenNotiList }) => {

  const renderedNotis = () => {
    return Object.entries(notis).map(([id, value], i) => {
      return (
        <React.Fragment>
          <div
            className="more__option"
            key={id}
            onClick={() => {
              changeOpenNotiList(!OpenNotiList);
            }}
          >
            <Avatar
              name={id["sender"]}
              className="avatar avatar--medium"
              size="10"
              textSizeRatio="3"
            ></Avatar>
            <div className="item__title">
              <span className="mentioned">{`@${id["sender"]}`}</span> mentioned
              in Chael of serve that i con nk
            </div>
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="noti__wrapper">
      <div className="list--noti">
        <div className="more__options">{renderedNotis()}</div>
      </div>
    </div>
  );
};

export default Notifications;
