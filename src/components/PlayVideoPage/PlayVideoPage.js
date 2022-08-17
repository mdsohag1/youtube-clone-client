import React, { useContext } from "react";
import "./PlayVideoPage.css";
import Like from "@iconscout/react-unicons/icons/uil-thumbs-up";
import DisLike from "@iconscout/react-unicons/icons/uil-thumbs-down";
import Share from "@iconscout/react-unicons/icons/uil-share";
import Save from "@iconscout/react-unicons/icons/uil-save";
import Clip from "@iconscout/react-unicons/icons/uil-times";
import { ThemeContext } from "../../App";
import { darkTheme, lightTheme } from "../../utilis/Theme";
import { Link } from "react-router-dom";

//fake data
import thumble from "../../img/thumble.png";
import profile from "../../img/profileImg.jpeg";
import SuggestVideo from "../SuggestVideo/SuggestVideo";

const PlayVideoPage = () => {
   const [darkMode, setDarkMode] = useContext(ThemeContext);

   const background = {
      background: darkMode ? darkTheme.bg : lightTheme.bg,
      color: darkMode ? darkTheme.text : lightTheme.text,
   };
   const iconColor = darkMode ? darkTheme.text : lightTheme.text;

   const data = {
      thumble: thumble,
      logo: profile,
      title: "this is the similer of youtube websitetdfdf",
      channelName: "Polok Tube",
      views: "128k",
      date: "1 month ago",
      subscriber: "125k",
      description:
         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
   };
   const suggest = [
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
      {
         thumble: thumble,
         logo: profile,
         title: "this is the similer of youtube websitetdfdf",
         channelName: "Polok Tube",
         views: "128k",
         date: "1 month ago",
         subscriber: "125k",
         description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, architecto cum cupiditate explicaboarchitecto cum cupiditate explicabo id ad quaerat beatae. Accusantium, aliquam velit.",
      },
   ];

   return (
      <div className="playvideo" style={background}>
         <div className="left">
            <img src={data.thumble} alt="" />
            <div className="linkSection">
               <div className="title">
                  <h5>{data.title}</h5>
                  <div className="views">
                     <span>{data.views} views .</span>
                     <span>{data.date}</span>
                  </div>
               </div>
               <div className="linkIcons">
                  <div>
                     <Like color={iconColor} size={"1.5rem"} />
                     <span>1k</span>
                  </div>
                  <div>
                     <DisLike color={iconColor} size={"1.5rem"} />
                     <span>DISLIKE</span>
                  </div>
                  <div>
                     <Share color={iconColor} size={"1.5rem"} />
                     <span>SHARE</span>
                  </div>
                  <div>
                     <Clip color={iconColor} size={"1.5rem"} />
                     <span>CLIP</span>
                  </div>
                  <div>
                     <Save color={iconColor} size={"1.5rem"} />
                     <span>SAVE</span>
                  </div>
               </div>
            </div>
            <hr />
            <div className="subscribe">
               <div className="d-flex">
                  <Link to={"/profile"}>
                     <div className="videoLogo">
                        <img src={data.logo} alt="" />
                     </div>
                  </Link>
                  <div className="des">
                     <h5>{data.channelName}</h5>
                     <p>{data.subscriber} Subscriber</p>
                     <div></div>
                  </div>
               </div>
               <div className="sub">
                  <button>SUBSCRIBE</button>
               </div>
            </div>
            <div>
               <p className="description">{data.description}</p>
            </div>
            <hr />
            <div className="comment d-flex">
               <div className="videoLogo">
                  <img src={data.logo} alt="" />
               </div>
               <input
                  style={background}
                  type="text"
                  placeholder="add a comment..."
               />
            </div>
         </div>
         <div className="right">
            {suggest.map((video) => (
               <SuggestVideo video={video} />
            ))}
         </div>
      </div>
   );
};

export default PlayVideoPage;
