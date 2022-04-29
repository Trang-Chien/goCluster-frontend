import axios from "axios";
import React, { useContext, useState } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";

import ChatContext from "../context/ChatContext";

const RegisterForm = ({ registered, back }) => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [error, setError] = useState(null);

  const { setUserData } = useContext(ChatContext);

  const submit = async (e) => {
    
    e.preventDefault();

    if (username === "" || pwd === "" || confirmPwd === "") {
      setError("Not all fields have been entered !");
      return;
    }

    if (pwd !== confirmPwd) {
      setError("Enter the same password twice for verification.");
      return;
    }

    try {
      const newUser = {
        username,
        pwd,
      };

      await axios.post(`${process.env.MAIN_API}/register`, newUser);
      const loginRes = await axios.post(`${process.env.REACT_APP_API}/login`, {
        username,
        pwd,
      });

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      setError(null);

      registered();
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
            Welcome new friend!
          </div>
        </div>

        <div className="input__wrapper">
          <input
            id="username"
            className="input input--medium"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            id="pwd"
            className="input input--medium"
            placeholder="password"
            type="password"
            onChange={(e) => setPwd(e.target.value)}
          ></input>
          <input
            id="confirm-pwd"
            className="input input--medium"
            placeholder="confirm password"
            type="password"
            onChange={(e) => setConfirmPwd(e.target.value)}
          ></input>
        </div>

        {error !== null ? <div className="error">{error}</div> : null}

        <button
          className="button button--text button--light"
          onClick={(event) => {
            submit(event);
          }}
        >
          register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
