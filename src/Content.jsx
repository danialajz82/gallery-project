import React, { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainContext } from "./context/MainContext";
import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import Users from "./users/Users";
import AddUser from "./users/AddUser";
import { faL } from "@fortawesome/free-solid-svg-icons";
import WithAlert2 from "./HOC/WithAlert2";
import { Alert } from "bootstrap";

const Content = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);
  const { isUser, setIsUser } = useState(true);

  const handleShowMenu = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };

  const renderUser = (Confrim, Alert) => (
    <Users Confrim={Confrim} Alert={Alert} />
  );

  return (
    <div
      className={style.content_section}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <i
        className={`${style.menu_button} fas fa-bars text-dark m-2 pointer d-md-none`}
        onClick={handleShowMenu}
      ></i>
      {/* <BrowserRouter> */}
      <Routes>
        <Route
          //   path="/"
          //   element={ <Navigate replace to="/posts" />}
          path="/user"
          element={
            <WithAlert2
              render={(Confrim, Alert) => (
                <Users Confrim={Confrim} Alert={Alert} />
              )}
            />
          }
        />

        <Route path="/user/add/" element={<AddUser />}>
          <Route path=":userId" />
        </Route>

        <Route path="/post" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<Todos />} />
        <Route path="*" element={<WithAlert2 render={renderUser} />} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default Content;
