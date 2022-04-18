import React, { useEffect, useState } from "react";

import { IoIosClose } from "react-icons/io";

export const CreateRole = ({ changeOpenCreateRoleForm }) => {
  return (
    <div className="template__wrapper">
      <div className="template__header">
        <div className="template__title">create a new role</div>
        <button
          className="button button--icon button--close"
          onClick={() => {
            changeOpenCreateRoleForm(false);
          }}
        >
          <IoIosClose className="icon icon--close" />
        </button>
      </div>

      <div className="template__body"></div>
    </div>
  );
};

export const AddAdmin = ({ changeOpenAddAdminForm }) => {
  return (
    <div className="template__wrapper">
      <div className="template__header">
        <div className="template__title">Add Server Admin</div>
        <button
          className="button button--icon button--close"
          onClick={() => {
            changeOpenAddAdminForm(false);
          }}
        >
          <IoIosClose className="icon icon--close" />
        </button>
      </div>

      <div className="template__body"></div>
    </div>
  );
};

export const AddOnwer = ({ changeOpenAddOwnerForm }) => {
  return (
    <div className="template__wrapper">
      <div className="template__header">
        <div className="template__title">Add Server Owner</div>
        <button
          className="button button--icon button--close"
          onClick={() => {
            changeOpenAddOwnerForm(false);
          }}
        >
          <IoIosClose className="icon icon--close" />
        </button>
      </div>

      <div className="template__body"></div>
    </div>
  );
};

export const InvitePeople = ({ changeOpenInvitePeopleForm }) => {
  const [textButton, setTextButton] = useState("copy");
  return (
    <div className="template__wrapper">
      <div className="template__header">
        <div className="template__title">Invite People</div>
        <button
          className="button button--icon button--close"
          onClick={() => {
            changeOpenInvitePeopleForm(false);
          }}
        >
          <IoIosClose className="icon icon--close" />
        </button>
      </div>

      <div className="template__body">
        <div className="template__text">
          Send server invited link to friends
        </div>
        <input
          className="input input--template"
          placeholder="https://domain.com/uGsSqmYF"
        />
        <button
          className="button button--text button--copy"
          onClick={() => setTextButton("copied")}
        >
          {textButton}
        </button>
      </div>
    </div>
  );
};

export const AlertLeaveServer = ({ changeOpenAlertLeaveServer }) => {
    return (
      <div className="template__wrapper">
          <button
            className="button button--icon button--close"
            onClick={() => {
              changeOpenAlertLeaveServer(false);
            }}
          >
            <IoIosClose className="icon icon--close" />
          </button>
  
        <div className="template__body"></div>
      </div>
    );
  };
