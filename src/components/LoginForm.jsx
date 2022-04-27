import React, { useState } from "react";
import axios from "axios";

import { RiArrowGoBackLine } from "react-icons/ri";

const REGISTER_URL = "";

const LoginForm = ({ logined, back }) => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    if (username === "" || pwd === "") {
      setError("Not all fields have been entered !");
      return;
    }

    try {
      const loginRes = await axios.post(REGISTER_URL, { username, pwd });

      localStorage.setItem("auth-token", loginRes.data.token);
      setError(null);
      logined();
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="form__wrapper form__wrapper--2">
      <div className="login-form">
        <button
          className="button button--back"
          onClick={(event) => back(event)}
        >
          <RiArrowGoBackLine className="icon icon--back" />
        </button>
        <div>
          <div className="form__title form__title--header">goCluster</div>
          <div className="form__title form__title--detail">
            Welcome you back to goCluster!
          </div>
        </div>

        <div className="input__wrapper">
          <input
            id="username"
            className="input input--medium"
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            id="password"
            className="input input--medium"
            type="password"
            placeholder="password"
            onChange={(e) => setPwd(e.target.value)}
          ></input>
        </div>

        {error !== null ? <div className="error">{error}</div> : null}

        <button
          className="button button--text button--light"
          onClick={(event) => submit(event)}
        >
          login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
