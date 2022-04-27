import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";

import './styles/app.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/" element={<WelcomePage/>} /> 
        </Routes>
    </BrowserRouter>
  );
};

export default App;
