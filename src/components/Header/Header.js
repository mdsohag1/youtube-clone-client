import React, { useContext } from "react";
import "./Header.css";
import Voice from "@iconscout/react-unicons/icons/uil-microphone";
import Search from "@iconscout/react-unicons/icons/uil-search";
import Videos from "@iconscout/react-unicons/icons/uil-video-question";
import Notification from "@iconscout/react-unicons/icons/uil-bell";
import User from "@iconscout/react-unicons/icons/uil-user";
import { darkTheme, lightTheme } from "../../utilis/Theme";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//data
import logo from "../../img/logo.png";
import Bars from "@iconscout/react-unicons/icons/uil-bars";
import { ThemeContext } from "../../App";

const Header = () => {
   const [darkMode, setDarkMode] = useContext(ThemeContext);

   const background = {
      background: darkMode ? darkTheme.bg : lightTheme.bg,
      color: darkMode ? darkTheme.text : lightTheme.text,
   };
   const bgLighter = {
      background: darkMode ? darkTheme.bgLighter : lightTheme.bgLighter,
   };
   const iconColor = darkMode ? darkTheme.text : lightTheme.text;

   const { currentUser } = useSelector((state) => state.user);

   return (
      <div className="header" style={background}>
         <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="logo">
               <Bars color={iconColor} size={"1.5rem"} />
               <img src={logo} alt="" />
               <span>AliTube</span>
            </div>
         </Link>
         <div className="search-aria">
            <div className="search" style={background}>
               <Search color={iconColor} size={"1.2rem"} />
               <input style={background} type="text" placeholder="Search" />
            </div>
            <div className="icon-right" style={bgLighter}>
               <Search color={iconColor} size={"1.5rem"} />
            </div>
            <div className="voice">
               <Voice color={iconColor} size={"1.5rem"} />
            </div>
         </div>
         <div className="aria-right">
            <Videos color={iconColor} size={"1.8rem"} />
            <Notification color={iconColor} size={"1.8rem"} />
            {currentUser ? (
               <div className="d-flex">
                  <div className="user">
                     <img src="" alt="" />
                  </div>
                  <span>
                     <b>{currentUser.name}</b>
                  </span>
               </div>
            ) : (
               <Link
                  to={"/signin"}
                  style={{ textDecoration: "none", color: "inherit" }}
               >
                  <User color={iconColor} size={"1.8rem"} />
               </Link>
            )}
         </div>
      </div>
   );
};

export default Header;
