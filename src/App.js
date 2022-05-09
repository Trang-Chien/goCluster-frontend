import { useEffect, useState, createContext, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import ChatContext from './context/ChatContext';
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import {checkTokenRoute, getUserInfoRoute} from './utils/APIRoutes'

import "./styles/app.scss";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const App = () => {
  const [userData, setUserData] = useState(null);

  const [servers, setServers] = useState(null)
  const [directMessage, setDirectMessage] = useState(null)
  const [isLogin, setIsLogin] = useState(false)

  // useEffect(() => {
  //   const checkedLoggin = async () => {
  //     let token = localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN);
  //     if (token === null) {
  //       localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN, "");
  //       token = "";
  //     }

  //     const tokenRes = await axios.post(
  //       checkTokenRoute,
  //       null,
  //       { headers: { "auth-token": token } }
  //     );
  //     if (tokenRes.data) {
  //       const userRes = await axios.get(getUserInfoRoute, {
  //         headers: { "auth-token": token },
  //       });
  //       setUserData({
  //         token,
  //         user: userRes.data,
  //       });
  //       setIsLogin(true)
  //     }
  //   };

  //   checkedLoggin();
  // }, []);

  return (
    <BrowserRouter>
      <ChatContext.Provider value={{ user: [userData, setUserData], server: [servers, setServers], directmsg: [directMessage, setDirectMessage], login:[isLogin, setIsLogin]  }}>
        <Routes>
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
        </Routes>
      </ChatContext.Provider>
    </BrowserRouter>
  );
};

export default App;
