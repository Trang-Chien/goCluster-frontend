import React, { useState } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";

const RegisterForm = ({ registered, back, setData }) => {
  const [firstname, setFirstName]=useState('')
  const [lastname, setLastName]=useState('');
  const [username, SetUsername]=useState('');

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
          <div className="input__item">
            <input className="input input--small" placeholder="first name" onChange={(e)=>setFirstName(e.target.value)}></input>
            <input className="input input--small" placeholder="last name" onChange={(e)=>setLastName(e.target.value)}></input>
          </div>
          <input className="input input--medium" placeholder="username" onChange={(e)=>SetUsername(e.target.value)}></input>
          <input className="input input--medium" placeholder="password" type='password'></input>
          <input className="input input--medium" placeholder="confirm password" type='password'></input>
        </div>

        <button
          className="button button--text button--light"
          onClick={(event) => {console.log(username);registered(event); setData(firstname)}}
        >
          register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
