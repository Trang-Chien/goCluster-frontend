import { useEffect, useState, createContext, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import ChatContext from './context/ChatContext';
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";

import "./styles/app.scss";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    console.log("url "+process.env.REACT_APP_AUTH_TOKEN)
    const checkedLoggin = async () => {
      let token = localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN);
      if (token === null) {
        localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN, "");
        token = "";
      }

      const tokenRes = await axios.post(
        `${process.env.REACT_APP_API}/tokenIsValid`,
        null,
        { headers: { "auth-token": token } }
      );
      if (tokenRes.data) {
        console.log("token data" + token.data);
        const userRes = await axios.get(`${process.env.REACT_APP_API}/user`, {
          headers: { "auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkedLoggin();
  }, []);

  return (
    <BrowserRouter>
      <ChatContext.Provider value={{ userData, setUserData }}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </ChatContext.Provider>
    </BrowserRouter>
  );
};

export default App;
