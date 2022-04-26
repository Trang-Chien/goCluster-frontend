import React, { useEffect, useState } from "react";

import otter1 from "../assets/images/otter-1.png";
import otter2 from "../assets/images/otter-2.png";
import otter3 from "../assets/images/otter-3.png";
import otter4 from "../assets/images/otter-4.png";

const random = Math.floor(Math.random() * (5 - 1) + 1);

const Blank = (props) => {
  const bg =
    random === 1
      ? otter1
      : random === 2
      ? otter2
      : random === 3
      ? otter3
      : otter4;

  return (
    <div className="chat__wrapper">
      <div className="blank__wrapper">
        <div
          className="blob"
          style={{
            background: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="blank__title">It's nice to chat with someone</div>
        <div className="blank__content">
          <p>Pick a person or server from left menu </p>
          <p>and start your conversation</p>
        </div>
      </div>
    </div>
  );
};

export default Blank;
