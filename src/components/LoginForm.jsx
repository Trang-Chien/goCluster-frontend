import React from "react";
import { RiArrowGoBackLine} from "react-icons/ri";

const LoginForm = ({ logined, back }) => {
  return (
    <div className="form__wrapper form__wrapper--2">
      <div className="login-form">
        <button className="button button--back" onClick={(event)=>back(event)}>
          <RiArrowGoBackLine className="icon icon--back"/>
        </button>
        <div>
          <div className="form__title form__title--header">goCluster</div>
          <div className="form__title form__title--detail">
            Welcome you back to goCluster!
          </div>
        </div>

        <div className="input__wrapper">
          <input
            className="input input--medium"
            type="text"
            placeholder="username"
          ></input>
          <input
            className="input input--medium"
            type="password"
            placeholder="password"
          ></input>
        </div>

        <button
          className="button button--text button--1"
          onClick={(event) => logined(event)}
        >
          login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;

