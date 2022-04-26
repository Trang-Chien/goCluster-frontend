import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeForm from "../components/WelcomeForm";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import TextArea from "../components/TextArea";
import { BackGroundWelcome } from "../components/UtilsForm";

const WelcomePage = (props) => {
  const [isLoggined, setIsLoggined] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showWelcomeForm, setShowWelcomeForm] = useState(true);
  const navigate = useNavigate();
  const [showForms, setShowForms] = useState(false);

  useEffect(() => {
    if (isLoggined) navigate("/");
    if (!isLoggined) setShowWelcomeForm(true);
    const timer = setTimeout(() => setShowForms(true), 6500);
    return () => clearTimeout(timer);
  }, [isLoggined]);

  const onChosing = (clickedButton) => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
    setShowWelcomeForm(false);

    if (clickedButton === "login") {
      setShowLoginForm(true);
    }
    if (clickedButton === "register") {
      setShowRegisterForm(true);
    }
  };

  const onLogin = (event) => {
    event.preventDefault();
    setIsLoggined(true);
  };

  const onRegister = (event) => {
    event.preventDefault();

    setShowLoginForm(false);
    setShowRegisterForm(false);
    setShowWelcomeForm(false);
    setIsLoggined(true);
  };

  const onBack = (event) => {
    event.preventDefault();

    setShowLoginForm(false);
    setShowRegisterForm(false);
    setShowWelcomeForm(true);
    setIsLoggined(false);
  };

  const setData = (firstName, lastName, username) => {
    console.log("set data works");
    localStorage.setItem("firstName", JSON.stringify(firstName));
    localStorage.setItem("lastName", JSON.stringify(lastName));
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem(
      "avatar",
      JSON.stringify(`${process.env.API_AVATAR}${username}`)
    );
  };

  return (
    <div className="bg">
      {/* <div className="bg__message"> */}
      {/* <div className="bg__content">start goCluster</div>
        <div className="bg__status bg__status-1">seding...</div>
        <div className="bg__status bg__status-2">sent</div>
        <div className="bg__status bg__status-3">seen</div> */}
      {/* </div> */}
      <TextArea page="welcome" />
      {showForms ? (
        <React.Fragment>
          <BackGroundWelcome />
          {showWelcomeForm ? <WelcomeForm choice={onChosing} /> : null}
          {showLoginForm ? <LoginForm logined={onLogin} back={onBack} /> : null}
          {showRegisterForm ? (
            <RegisterForm
              registered={onRegister}
              back={onBack}
              setDate={setData}
            />
          ) : null}
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default WelcomePage;
