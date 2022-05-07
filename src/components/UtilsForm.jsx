import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AiTwotoneAudio } from "react-icons/ai";

import { IoIosClose } from "react-icons/io";
import ChatContext from "../context/ChatContext";
import { createChannelRoute, createServerRoute } from "../utils/APIRoutes";
import { DropdownList } from "./Dropdown";

const members = ["member 1", "member 2", "member 3", "member 4", "member 5"];

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

      <div className="template__body">
        <input
          className="input input--template"
          placeholder="your server name..."
        />

        <DropdownList barTitle="member list" options={members} />

        <button
          className="button button--text button--copy"
          onClick={() => changeOpenCreateRoleForm(false)}
        >
          create role
        </button>
      </div>
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

export const CreateServer = ({ changeOpenCreateServerForm }) => {
  const [error, setError] = useState(null);
  const [servername, setServername] = useState("");
  const { server } = useContext(ChatContext);
  const [servers, setServers] = server;

  const onCreateServer = async () => {
    if (servername === "") {
      setError("Not all fields have been entered !");
      return;
    }

    try {
      const createServerRes = await axios.post(createServerRoute, {
        workspaceName: servername,
      });
      setServers({ ...servers, ...createServerRes.data.workspace });

      changeOpenCreateServerForm(false);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="template__wrapper">
      <div className="template__header">
        <div className="template__title">create a new server</div>
        <button
          className="button button--icon button--close"
          onClick={() => {
            changeOpenCreateServerForm(false);
          }}
        >
          <IoIosClose className="icon icon--close" />
        </button>
      </div>

      <div className="template__body">
        <input
          className="input input--template"
          placeholder="your server name..."
          onChange={(e) => setServername(e.target.value)}
        />
        {error !== null ? <div className="error">{error}</div> : null}

        <button
          className="button button--text button--copy"
          onClick={() => {
            onCreateServer();
          }}
        >
          create server
        </button>
      </div>
    </div>
  );
};

export const CreateChannel = ({
  changeOpenCreateChannelForm,
  currServer,
  changeCurrServer,
}) => {
  const [typeChannel, setTypeChannel] = useState("public");
  const [error, setError] = useState(null);
  const [channelname, setChannelname] = useState("");
  const { server } = useContext(ChatContext);
  const [servers, setServers] = server;

  const onCreateChannel = async () => {
    if (channelname === "") {
      setError("Enter server name!");
      return;
    }

    try {
      const createChannelRes = await axios.post(createChannelRoute, {
        channelName: channelname,
        workspaceId: currServer.workspace_id,
        isPrivate: typeChannel === "public" ? false : true,
      });

      const newCurrServer = currServer;
      const newChannels = newCurrServer.channel;
      const newServers = [...servers];

      newChannels.push(createChannelRes.data.channel);
      newCurrServer.channel = newChannels;

      const index = newServers.indexOf(currServer);
      if (index !== -1) {
        newServers.splice(index, 1);
        newServers.push(newCurrServer);
        setServers(newServers);
      }

      changeCurrServer(newCurrServer);
      changeOpenCreateChannelForm(false);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="template__wrapper">
      <div className="template__header">
        <div className="template__title">create a new channel</div>
        <button
          className="button button--icon button--close"
          onClick={() => {
            changeOpenCreateChannelForm(false);
          }}
        >
          <IoIosClose className="icon icon--close" />
        </button>
      </div>

      <div className="template__body">
        <input
          className="input input--template"
          placeholder="channel name..."
          onChange={(e) => setChannelname(e.target.value)}
        />
        <div className="radio__wrapper">
          <div
            className="radio__option"
            onClick={() => {
              setTypeChannel("public");
            }}
          >
            <div
              className={`radio__dot ${
                typeChannel === "public"
                  ? "radio__dot--selected"
                  : "radio__dot--noselected"
              }`}
            ></div>
            <div className="radio__content">public</div>
          </div>
          <div
            className="radio__option"
            onClick={() => {
              setTypeChannel("private");
            }}
          >
            <div
              className={`radio__dot ${
                typeChannel === "private"
                  ? "radio__dot--selected"
                  : "radio__dot--noselected"
              }`}
            ></div>
            <div className="radio__content">private</div>
          </div>
        </div>
        {error !== null ? <div className="error">{error}</div> : null}

        <button
          className="button button--text button--copy"
          onClick={() => onCreateChannel()}
        >
          create channel
        </button>
      </div>
    </div>
  );
};

export const BackGroundWelcome = () => {
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  const renderedStar = () => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return number.map((n) => (
      <React.Fragment key={n}>
        <div
          className="star star--medium"
          style={{
            position: "absolute",
            top: `${getRandom(1, 98)}%`,
            left: `${getRandom(1, 98)}%`,
            borderRadius: `${getRandom(20, 70)}% ${getRandom(
              20,
              70
            )}% ${getRandom(20, 70)}% ${getRandom(20, 70)}% / ${getRandom(
              20,
              70
            )}% ${getRandom(20, 70)}% ${getRandom(20, 70)}% ${getRandom(
              20,
              70
            )}% `,
          }}
        ></div>
        <div
          className="star star--large"
          style={{
            position: "absolute",
            top: `${getRandom(2, 98)}%`,
            left: `${getRandom(2, 98)}%`,
            borderRadius: `${getRandom(20, 70)}% ${getRandom(
              20,
              70
            )}% ${getRandom(20, 70)}% ${getRandom(20, 70)}% / ${getRandom(
              20,
              70
            )}% ${getRandom(20, 70)}% ${getRandom(20, 70)}% ${getRandom(
              20,
              70
            )}% `,
          }}
        ></div>
        <div
          className="star star--small"
          style={{
            position: "absolute",
            top: `${getRandom(2, 98)}%`,
            left: `${getRandom(2, 98)}%`,
            borderRadius: `${getRandom(20, 70)}% ${getRandom(
              20,
              70
            )}% ${getRandom(20, 70)}% ${getRandom(20, 70)}% / ${getRandom(
              20,
              70
            )}% ${getRandom(20, 70)}% ${getRandom(20, 70)}% ${getRandom(
              20,
              70
            )}% `,
          }}
        ></div>
      </React.Fragment>
    ));
  };
  return (
    <div className="star__wrapper">
      <div className="star__container">{renderedStar()}</div>
    </div>
  );
};
