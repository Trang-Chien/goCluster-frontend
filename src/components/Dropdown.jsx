import React from "react";

import { BiSearchAlt2, BiInfoCircle, BiMenu } from "react-icons/bi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Dropdown = ({
  isServer,
  friend,
  currChannel,
  changeCurrchannel,
  currServer,
  channels,
  status,
  changeStatus,
  drawerLeftStatus,
  drawerRightStatus,
  changeDrawerLeftStatus,
  changeDrawerRightStatus,
}) => {
  const renderedOptions = () => {
    return (
      <div className="dropdown__options">
        {channels.map((o, i) => (
          <React.Fragment>
          <div
            className="dropdown__option"
            onClick={() => {
              changeCurrchannel(o);
              changeStatus(!status);
            }}
          >
            {o}
          </div>
          {(i+1===channels.length)?null:<div className='line'></div>}</React.Fragment>
        ))}
        
      </div>
    );
  };
  return (
    <div className="dropdown">
      {isServer ? (
        <React.Fragment>
          <div className="dropdown__bar" onClick={() => changeStatus(!status)}>
            {drawerLeftStatus ? null : (
              <button className="button button--icon bar-elm-1">
                <BiMenu
                  className="icon icon--white"
                  onClick={(e) => {
                    e.stopPropagation();
                    changeDrawerLeftStatus();
                  }}
                />
              </button>
            )}
            <div className="dropdown__default bar-elm-2">{currChannel}</div>
            <div className="icon-group bar-elm-3">
              <button className="button button--icon">
                <BiSearchAlt2 className="icon icon--white" />
              </button>
              <button className="button button--icon">
                {status ? (
                  <BsChevronUp className="icon icon--white" />
                ) : (
                  <BsChevronDown className="icon icon--white" />
                )}
              </button>
              {drawerRightStatus ? null : (
                <button className="button button--icon">
                  <BiInfoCircle
                    className="icon icon--white"
                    onClick={(e) => {
                      e.stopPropagation();
                      changeDrawerRightStatus();
                    }}
                  />
                </button>
              )}
            </div>
          </div>

          {status ? renderedOptions() : null}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="dropdown__bar">
            {drawerLeftStatus ? null : (
              <button className="button button--icon bar-elm-1">
                <BiMenu
                  className="icon icon--white"
                  onClick={(e) => {
                    changeDrawerLeftStatus();
                  }}
                />
              </button>
            )}
            <div className="dropdown__default bar-elm-2">{friend}</div>
            <div className="icon-group bar-elm-3">
              <button className="button button--icon">
                <BiSearchAlt2 className="icon icon--white" />
              </button>
              {drawerRightStatus ? null : (
                <button className="button button--icon">
                  <BiInfoCircle
                    className="icon icon--white"
                    onClick={(e) => {
                      changeDrawerRightStatus();
                    }}
                  />
                </button>
              )}
            </div>
          </div>

          {status ? renderedOptions() : null}
        </React.Fragment>
      )}
    </div>
  );
};

export default Dropdown;
