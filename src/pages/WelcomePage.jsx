import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeForm from "../components/WelcomeForm";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const WelcomePage = (props) => {
  const [isLoggined, setIsLoggined] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showWelcomeForm, setShowWelcomeForm] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggined) navigate("/");
    if (!isLoggined) setShowWelcomeForm(true);
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

  const onBack=(event)=>{
    event.preventDefault();

    setShowLoginForm(false);
    setShowRegisterForm(false);
    setShowWelcomeForm(true);
    setIsLoggined(false);
  }

  const setData=(firstName, lastName, username)=>{
    console.log('set data works')
    localStorage.setItem('firstName', JSON.stringify(firstName))
    localStorage.setItem('lastName', JSON.stringify(lastName))
    localStorage.setItem('username', JSON.stringify(username))
    localStorage.setItem('avatar', JSON.stringify(`${process.env.API_AVATAR}${username}`))
  }

  return (
    <div className="bg">
      {showWelcomeForm ? <WelcomeForm choice={onChosing} /> : null}
      {showLoginForm ? <LoginForm logined={onLogin} back={onBack} /> : null}
      {showRegisterForm ? <RegisterForm registered={onRegister} back={onBack} setDate={setData} /> : null}
    </div>
  );
};

export default WelcomePage;
