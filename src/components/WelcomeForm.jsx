import React from "react";

const WelcomeForm = ({ choice }) => {
  return (
    <div className="form__wrapper form__wrapper--1">
      <div className="welcome-form">
        <div>
          <div className="form__title form__title--header">
            goCluster
          </div>
        </div>

        <div className='form__options'>
          <button
            className="button button--text button--light"
            onClick={() => choice("login")}
          >
            login
          </button>
          <button
            className="button button--text button--light"
            onClick={() => choice("register")}
          >
            register
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeForm;
