import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeForm from "../components/WelcomeForm";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import TextArea from "../components/TextArea";
import { BackGroundWelcome } from "../components/UtilsForm";
import ChatContext from '../context/ChatContext'

const WelcomePage = (props) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showWelcomeForm, setShowWelcomeForm] = useState(true);
  const [showForms, setShowForms] = useState(false);
  const {login} = useContext(ChatContext)
  const [isLogin, setIsLogin]=login;

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) navigate("/home");
    if (!isLogin) setShowWelcomeForm(true);
    const timer = setTimeout(() => setShowForms(true), 6500);
    return () => clearTimeout(timer);
  }, [isLogin, navigate]);

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
    setIsLogin(true);
  };

  const onRegister = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
    setShowWelcomeForm(false);
    setIsLogin(true);
  };

  const onBack = (event) => {
    event.preventDefault();

    setShowLoginForm(false);
    setShowRegisterForm(false);
    setShowWelcomeForm(true);
    setIsLogin(false);
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
          {/* <BackGroundWelcome /> */}
          {showWelcomeForm ? <WelcomeForm choice={onChosing} /> : null}
          {showLoginForm ? <LoginForm logined={onLogin} back={onBack} /> : null}
          {showRegisterForm ? (
            <RegisterForm
              registered={onRegister}
              back={onBack}
              // setDate={setData}
            />
          ) : null}
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default WelcomePage;
