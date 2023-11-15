import React, { useContext } from "react";
import { MainContext } from "./context/MainContext";
import { Link, NavLink } from "react-router-dom";
import style from "./style.module.css";

const Sidebar = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);

  return (
    <div
      className={`${style.sidebar_section} bg-secondary`}
      style={showMenu ? { right: 0 } : {}}
    >
      <ul className={`${style.sidebar_list} m-0 p-0`}>
        <li className={style.sidebar_avatar}>
          <img src="../assets/images/photo_1402-05-31 11.53.24.jpeg" alt="" />
        </li>

        <NavLink
          className={({ isActive }) => {
            return isActive ? "active_nav" : "";
          }}
          to="/user"
        >
          <li>کاربران</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active_nav" : "";
          }}
          to="/post"
        >
          <li>پست ها</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active_nav" : "";
          }}
          to="/gallery"
        >
          <li>گالری</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active_nav" : "";
          }}
          to="/todo"
        >
          <li>کارها</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
