import React, { useState } from "react";
import "./Header.scss";

import Home from "../icons/Home.svg";
import Message from "../icons/Message.svg";
import Post from "../icons/Post.svg";
import Feed from "../icons/Feed.svg";
import Heart from "../icons/Heart.svg";

const Header = (props) => {
  return (
    <div className="Header">
      <div className="wrapper">
        <h1 className="logo">Instagram</h1>
        <div className="search-box">
          <input className="search" />
          <i className="bi bi-search"></i>
          <p>검색</p>
        </div>

        <ul className="nav-bar">
          <li>
            <img src={Home} alt="Home" />
          </li>
          <li>
            <img src={Message} alt="Message" />
          </li>
          <li>
            <img
              src={Post}
              alt="Post"
              onClick={() => {
                props.setUpload(!props.upload);
              }}
            />
          </li>
          <li>
            <img src={Feed} alt="Feed" />
          </li>
          <li>
            <img src={Heart} alt="Heart" />
          </li>
          <li>
            <img src={Heart} alt="Heart" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
