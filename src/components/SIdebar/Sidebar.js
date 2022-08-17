import React, { useContext, useState } from "react";
import "./Sidebar.css";
import Home from "@iconscout/react-unicons/icons/uil-home";
import Explore from "@iconscout/react-unicons/icons/uil-yen-circle";
import Shorts from "@iconscout/react-unicons/icons/uil-compass";
import Subscription from "@iconscout/react-unicons/icons/uil-money-insert";
import Library from "@iconscout/react-unicons/icons/uil-minus-path";
import History from "@iconscout/react-unicons/icons/uil-history";
import Videos from "@iconscout/react-unicons/icons/uil-video-question";
import WatchLater from "@iconscout/react-unicons/icons/uil-eye";
import Likes from "@iconscout/react-unicons/icons/uil-thumbs-up";
import BrowsChannel from "@iconscout/react-unicons/icons/uil-plus-circle";
import Gaming from "@iconscout/react-unicons/icons/uil-game-structure";
import Sports from "@iconscout/react-unicons/icons/uil-tennis-ball";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";
import User from "@iconscout/react-unicons/icons/uil-user";
import Darkmode from "@iconscout/react-unicons/icons/uil-venus";
import { darkTheme, lightTheme } from "../../utilis/Theme";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";

const Sidebar = () => {
   const [darkMode, setDarkMode] = useContext(ThemeContext);
   const iconColor = darkMode ? darkTheme.text : lightTheme.text;

   return (
      <div
         className="sidebar"
         style={{
            background: darkMode ? darkTheme.bg : lightTheme.bg,
            color: darkMode ? darkTheme.text : lightTheme.text,
         }}
      >
         <div className="sidebar-icons">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
               <div className="icon">
                  <Home color={iconColor} size={"1.5rem"} />
                  <span>Home</span>
               </div>
            </Link>
            <Link
               to={"/trend"}
               style={{ textDecoration: "none", color: "inherit" }}
            >
               <div className="icon">
                  <Explore color={iconColor} size={"1.5rem"} />
                  <span>Explore</span>
               </div>
            </Link>
            <div className="icon">
               <Shorts color={iconColor} size={"1.5rem"} />
               <span>Shorts</span>
            </div>
            <Link
               to={"/subscription"}
               style={{ textDecoration: "none", color: "inherit" }}
            >
               <div className="icon">
                  <Subscription color={iconColor} size={"1.5rem"} />
                  <span>Subscriptions</span>
               </div>
            </Link>
            <hr />
            <div className="icon">
               <Library color={iconColor} size={"1.5rem"} />
               <span>Library</span>
            </div>
            <div className="icon">
               <History color={iconColor} size={"1.5rem"} />
               <span>History</span>
            </div>
            <div className="icon">
               <Videos color={iconColor} size={"1.5rem"} />
               <span>Your videos</span>
            </div>
            <div className="icon">
               <WatchLater color={iconColor} size={"1.5rem"} />
               <span>Watch later</span>
            </div>
            <div className="icon">
               <Likes color={iconColor} size={"1.5rem"} />
               <span>Likes videos</span>
            </div>
            <hr />
            <h6>Subscriptions</h6>
            <Link
               to={"/signin"}
               style={{ textDecoration: "none", color: "inherit" }}
            >
               <div className="icon">
                  <User color={iconColor} size={"1.5rem"} />
                  <span>SignIn</span>
               </div>
            </Link>
            <div className="icon">
               <BrowsChannel color={iconColor} size={"1.5rem"} />
               <span>Browschannels</span>
            </div>
            <hr />
            <h6>Explore</h6>
            <div className="icon">
               <Gaming color={iconColor} size={"1.5rem"} />
               <span>Gaming</span>
            </div>
            <div className="icon">
               <Sports color={iconColor} size={"1.5rem"} />
               <span>Sports</span>
            </div>
            <hr />
            <h6>MORE FROM YOUTUBE</h6>
            <div className="icon">
               <Youtube color="red" size={"1.5rem"} />
               <span>Creator Studio</span>
            </div>
            <div className="icon">
               <Youtube color="red" size={"1.5rem"} />
               <span>Youtube Music</span>
            </div>
            <hr />
            <div className="icon" onClick={() => setDarkMode(!darkMode)}>
               <Darkmode color={iconColor} size={"1.5rem"} />
               <span>Dark mode</span>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
