import React, { useRef, useEffect } from "react";

import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { RiArrowGoBackLine } from "react-icons/ri";
import { BiMessageRoundedDots } from "react-icons/bi";
import { RiUserSettingsLine } from "react-icons/ri";

import More from "./More";

const DrawerRight = ({
  status,
  type,
  changeType,
  isServer,
  currFriend,
  openMore,
  changeOpenMore,
  changeOpenAddAdminForm,
  changeOpenAddOwnerForm,
  changeOpenInvitePeopleForm,
  changeOpenCreateRoleForm,
  changeOpenALertLeaveServer
}) => {
  const ref = useRef();

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

  const renderedMembers = (group) => {
    return (
      <React.Fragment>
        <div className="list__items">
          <div className="list__item" onClick={() => changeType("profile")}>
            <div className="avatar avatar--medium"></div>
            <div className="item__title">server 2</div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const renderedGroups = () => {
    return (
      <React.Fragment>
        <div className="list__title">group 1</div>
        {renderedMembers("group 1")}
      </React.Fragment>
    );
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
              <div className="avatar avatar--large"></div>
              <div className="profile__name">Bui Hong Chien</div>
            </div>
            <div className="line" />
            {isServer ? (
              <div className="profile__part">
                <div className="profile__detail">
                  <RiUserSettingsLine className="icon icon--green" />
                  <div className="item item__title">group 1 leader</div>
                </div>
                <div className="profile__detail">
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
