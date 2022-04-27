import axios from "axios";
import React, { useState } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";

//ADD URL HERE!!!!!
const LOGIN_URL = "";
const REGISTER_URL = "";

const RegisterForm = ({ registered, back }) => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [error, setError] = useState(null);

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

      await axios.post(LOGIN_URL, newUser);
      const loginRes = await axios.post(REGISTER_URL, { username, pwd });

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
          {/* <div className="input__item">
            <input className="input input--small" placeholder="first name" onChange={(e)=>setFirstName(e.target.value)}></input>
            <input className="input input--small" placeholder="last name" onChange={(e)=>setLastName(e.target.value)}></input>
          </div> */}
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

        {error!==null? <div className='error'>{error}</div>:null }

        <button
          className="button button--text button--light"
          onClick={(event) => {
            submit(event);
            // console.log(username);
            //
            // setData(firstname);
          }}
        >
          register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
