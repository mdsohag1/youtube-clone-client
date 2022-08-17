import React, { useContext } from "react";
import "./SingleProfile.css";
import Search from "@iconscout/react-unicons/icons/uil-search";
import { darkTheme, lightTheme } from "../../utilis/Theme";
import { ThemeContext } from "../../App";
//data
import thumble from "../../img/thumble.png";
import profile from "../../img/profileImg.jpeg";
import ProfileVideo from "../ProfileVideo/ProfileVideo";

const SingleProfile = () => {
   const [darkMode, setDarkMode] = useContext(ThemeContext);

   const background = {
      background: darkMode ? darkTheme.bg : lightTheme.bg,
      color: darkMode ? darkTheme.text : lightTheme.text,
   };
   const bgLighter = {
      background: darkMode ? darkTheme.bgLighter : "rgb(246, 246, 246)",
   };
   const iconColor = darkMode ? darkTheme.text : lightTheme.text;

   //data
   const data = {
      thumble: thumble,
      cover: thumble,
      logo: profile,
      title: "this is the similer of youtube websitetdfdf",
      channelName: "Polok Tube",
      views: "128k",
      date: "1 month ago",
   };
   const data1 = [
      {
         thumble: thumble,
         cover: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
      },
      {
         thumble: thumble,
         cover: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
      },
      {
         thumble: thumble,
         cover: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
      },
      {
         thumble: thumble,
         cover: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
      },
      {
         thumble: thumble,
         cover: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
      },
      {
         thumble: thumble,
         cover: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
      },
      {
         thumble: thumble,
         cover: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
      },
      {
         thumble: thumble,
         cover: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
      },
   ];

   return (
      <div className="SingleProfile" style={background}>
         <div className="cover">
            <img src={data.cover} alt="" />
         </div>
         <div className="p-div">
            <div className="prifileLogo">
               <div className="d-flex">
                  <div className="p-logo">
                     <img src={data.logo} alt="" />
                  </div>
                  <div className="">
                     <h5>{data.title}</h5>
                     <p>
                        {data.views} views. {data.date}
                     </p>
                  </div>
               </div>
               <div className="sub">
                  <button>SUBSCRIBE</button>
               </div>
            </div>
            <div className="menubar">
               <span>HOME</span>
               <span>VIDEOS</span>
               <span>PLAYLIST</span>
               <span>COMMUNITY</span>
               <span>CHANNELS</span>
               <span>ABOUT</span>
               <span>
                  <Search color="" size={"1.2rem"} />
               </span>
            </div>
         </div>
         <div className="p-videos" style={bgLighter}>
            <div className="pv">
               {data1.map((video) => (
                  <ProfileVideo video={video} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default SingleProfile;
