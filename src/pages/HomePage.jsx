import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainFrame from "../components/MainFrame";
import DrawerLeft from "../components/DrawerLeft";
import DrawerRight from "../components/DrawerRight";
import Notifications from "../components/Notifications";
import Settings from "../components/Settings";
import Profile from "../components/Profile";
import {
  CreateRole,
  AddAdmin,
  AddOnwer,
  InvitePeople,
  AlertLeaveServer
} from "../components/UtilsForm";

const servers = {
  ReactJS: ["ReactJS channel 1", "ReactJS channel 2"],
  "Gamming team": ["Gamming team channel 1", "Gamming team channel 2"],
  "learning chinese": [
    "learning chinese channel 1",
    "learning chinese channel 2",
  ],
};

const friends = ["chien bui", "do thien", "nguyen ha"];

const HomePage = () => {
  const [showLeftDrawer, setShowLeftDrawer] = useState(true);
  const [showRightDrawer, setShowRightDrawer] = useState(false);

  const [isServer, setIsServer] = useState(true);
  const [currServer, setCurrServer] = useState(null);
  const [currFriend, setCurrFriend] = useState(null);

  const [currChannel, setCurrChannel] = useState(null);
  const [channels, setChannels] = useState(null);

  const [rightDrawerType, setRightDrawerType] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);

  const [isLogin, setIsLogin] = useState(true);

  const [openMore, setOpenMore] = useState(false);
  const [openNotiList, setOpenNotiList] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const [openInvitePeopleForm, setOpenInvitePeopleForm] = useState(false);
  const [openAddAdminForm, setOpenAddAdminForm] = useState(false);
  const [openAddOwnerForm, setOpenAddOwnerForm] = useState(false);
  const [openCreateRoleForm, setOpenCreateRoleForm] = useState(false);
  const [openAlertLeaveServer, setOpenAlertLeaveServer] = useState(false);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // setFirstName(JSON.parse(localStorage.getItem("firstName")));
    // setLastName(JSON.parse(localStorage.getItem("lastName")));
    // setUsername(JSON.parse(localStorage.getItem("avatar")));
    if (!isLogin) navigate("/welcome");
    // if (!isLoggin) setShowWelcomeForm(true);
  }, [isLogin, navigate]);

  const handleLeftDrawerStatus = (event) => {
    setShowLeftDrawer(!showLeftDrawer);
  };

  const handleRightDrawerStatus = (event) => {
    setShowRightDrawer(!showRightDrawer);
  };

  const onChangeType = (type) => {
    setRightDrawerType(type);
  };

  const onChangeCurrServer = (server) => {
    setCurrServer(server);
    setIsServer(true);
    setCurrFriend(null);
    setChannels(servers[server]);
    setCurrChannel(servers[server][0]);
  };

  const onChangeCurrChannel = (channel) => {
    setCurrChannel(channel);
  };

  const onChangeOpenNotiList = (status) => {
    setOpenNotiList(status);
  };

  const onChangeOpenMore = (status) => {
    setOpenMore(status);
  };

  const onChangeOpenSettings = (status) => {
    setOpenSettings(status);
  };

  const onChangeOpenAddAdminForm = (status) => {
    setOpenAddAdminForm(status);
  };

  const onChangeOpenAddOwnerForm = (status) => {
    setOpenAddOwnerForm(status);
  };

  const onChangeOpenALertLeaveServer = (status) => {
    console.log(status)
    setOpenAlertLeaveServer(status);
  };

  const onChangeOpenCreateRoleForm = (status) => {
    setOpenCreateRoleForm(status);
  };

  const onChangeOpenInvitePeopleForm = (status) => {
    setOpenInvitePeopleForm(status);
  };

  const onChangeOpenProfile = (status) => {
    setOpenProfile(status);
  };

  const onChangeIsLogin = (status) => {
    setIsLogin(status);
  };

  const onChangeCurrFriend = (friend) => {
    setCurrFriend(friend);
    setIsServer(false);
    setCurrServer(null);
    setCurrChannel(null);
    setChannels(null);
  };

  return (
    <div className="home__wrapper">
      {openCreateRoleForm ? (
        <React.Fragment>
          <div className="bg-blur"></div>
          <CreateRole changeOpenCreateRoleForm={onChangeOpenCreateRoleForm} />
        </React.Fragment>
      ) : null}

      {openInvitePeopleForm ? (
        <React.Fragment>
          <div className="bg-blur"></div>
          <InvitePeople
            changeOpenInvitePeopleForm={onChangeOpenInvitePeopleForm}
          />
        </React.Fragment>
      ) : null}

      {openAddOwnerForm ? (
        <React.Fragment>
          <div className="bg-blur"></div>
          <AddOnwer changeOpenAddOwnerForm={onChangeOpenAddOwnerForm} />
        </React.Fragment>
      ) : null}

      {openAddAdminForm ? (
        <React.Fragment>
          <div className="bg-blur"></div>
          <AddAdmin changeOpenAddAdminForm={onChangeOpenAddAdminForm} />
        </React.Fragment>
      ) : null}

      {openAlertLeaveServer ? (
        <React.Fragment>
          <div className="bg-blur"></div>
          <AlertLeaveServer changeOpenAlertLeaveServer={onChangeOpenALertLeaveServer} />
        </React.Fragment>
      ) : null}

      {openSettings ? (
        <React.Fragment>
          <div className="bg-blur"></div>
          <Settings
            openSettings={openSettings}
            changeOpenSettings={onChangeOpenSettings}
          />
        </React.Fragment>
      ) : null}

      {openProfile ? (
        <React.Fragment>
          <div className="bg-blur"></div>
          <Profile
            openProfile={openProfile}
            changeOpenProfile={onChangeOpenProfile}
            changeIsLogin={onChangeIsLogin}
          />
        </React.Fragment>
      ) : null}

      {showLeftDrawer ? (
        <DrawerLeft
          status={handleLeftDrawerStatus}
          servers={servers}
          currServer={currServer}
          changeCurrServer={onChangeCurrServer}
          friends={friends}
          currFriend={currFriend}
          selectedFriend={onChangeCurrFriend}
          openNotiList={openNotiList}
          changeOpenNotiList={onChangeOpenNotiList}
          openSettings={openSettings}
          changeOpenSettings={onChangeOpenSettings}
          openProfile={openProfile}
          changeOpenProfile={onChangeOpenProfile}
        />
      ) : null}
      {currServer || currFriend ? (
        isServer ? (
          <MainFrame
            drawerLeft={showLeftDrawer}
            drawerRight={showRightDrawer}
            isServer={isServer}
            setDrawerLeft={handleLeftDrawerStatus}
            setDrawerRight={handleRightDrawerStatus}
            currServer={currServer}
            channels={channels}
            currChannel={currChannel}
            changeChannel={onChangeCurrChannel}
          />
        ) : (
          <MainFrame
            drawerLeft={showLeftDrawer}
            drawerRight={showRightDrawer}
            isServer={isServer}
            setDrawerLeft={handleLeftDrawerStatus}
            setDrawerRight={handleRightDrawerStatus}
            currFriend={currFriend}
          />
        )
      ) : null}

      {showRightDrawer ? (
        <DrawerRight
          status={handleRightDrawerStatus}
          type={rightDrawerType}
          changeType={onChangeType}
          isServer={isServer}
          currFriend={currFriend}
          openMore={openMore}
          changeOpenMore={onChangeOpenMore}
          changeOpenAddAdminForm={onChangeOpenAddAdminForm}
          changeOpenAddOwnerForm={onChangeOpenAddOwnerForm}
          changeOpenInvitePeopleForm={onChangeOpenInvitePeopleForm}
          changeOpenCreateRoleForm={onChangeOpenCreateRoleForm}
          changeOpenAlertLeaveServer={onChangeOpenALertLeaveServer}
        />
      ) : null}
    </div>
  );
};

export default HomePage;
