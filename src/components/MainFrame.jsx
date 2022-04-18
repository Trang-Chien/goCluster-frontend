import React, { useEffect, useState } from "react";

import Dropdown from "./Dropdown";
import TextArea from "./TextArea";
import ChatBody from "./ChatBody";

const MainFrame = ({
  drawerLeft,
  drawerRight,
  isServer,
  currServer,
  setDrawerLeft,
  setDrawerRight,
  channels,
  currChannel,
  changeChannel,
  currFriend,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    setOpenDropdown(false);
  }, [currServer]);

  const onChangeStatus = () => {
    setOpenDropdown(!openDropdown);
  };

  const onChangeDrawerLeftStatus = () => {
    setDrawerLeft(!drawerLeft);
  };

  const onChangeDrawerRightStatus = () => {
    setDrawerRight(true);
  };

  return (
    <div className="chat__wrapper">
      {isServer ? (
        <Dropdown
          isServer={isServer}
          currChannel={currChannel}
          changeCurrchannel={changeChannel}
          currServer={currServer}
          channels={channels}
          status={openDropdown}
          changeStatus={onChangeStatus}
          drawerLeftStatus={drawerLeft}
          drawerRightStatus={drawerRight}
          changeDrawerLeftStatus={onChangeDrawerLeftStatus}
          changeDrawerRightStatus={onChangeDrawerRightStatus}
        />
      ) : (
        <Dropdown
          isServer={isServer}
          friend={currFriend}
          drawerLeftStatus={drawerLeft}
          drawerRightStatus={drawerRight}
          changeDrawerLeftStatus={onChangeDrawerLeftStatus}
          changeDrawerRightStatus={onChangeDrawerRightStatus}
        />
      )}

      <ChatBody />

      <TextArea />
    </div>
  );
};

export default MainFrame;
