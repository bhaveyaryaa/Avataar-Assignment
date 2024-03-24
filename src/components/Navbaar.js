import React from "react";
import "./Navbaar.css";
import { FaSearch } from "react-icons/fa";

export default function Navbaar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./avataarimages/logo.png" alt="" />
        <span>E-COMM</span>
      </div>

      <div className="rightbar">
        <ul className="list">
          <li className="listt">
            <a href="#">HOME</a>
          </li>
          <li className="listt">
            <a href="/">ELECTRONICS</a>
          </li>
          <li className="listt">
            <a href="/">BOOKS</a>
          </li>
          <li className="listt">
            <a href="/">MUSIC</a>
          </li>
          <li className="listt">
            <a href="/">MOVIES</a>
          </li>
          <li className="listt">
            <a href="/">CLOTHING</a>
          </li>
          <li className="listt">
            <a href="/">GAMES</a>
          </li>
          <li className="listt">
            <a href="/">MORE+</a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  FURNITURE
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  ELECTRONICS
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  TRAVEL
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  BOTANICAL
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  CATEGORY NAME
                </a>
              </li>
            </ul>
          </li>
          <div className="searchbar">
            <FaSearch style={{ color: "white", marginRight: "10px" }} />
            <input
              placeholder="Search something"
              style={{
                backgroundColor: "#2F302C",
                color: "white",
                border: "none",
                outline: "none",
              }}
            />
          </div>
        </ul>
      </div>
    </div>
  );
}
