import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../App";
import "./VideoCard.css";
import { darkTheme, lightTheme } from "../../utilis/Theme";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";

const VideoCard = ({ video }) => {
   const [darkMode, setDarkMode] = useContext(ThemeContext);

   const background = {
      background: darkMode ? darkTheme.bgLighter : "rgb(246, 246, 246)",
      color: darkMode ? darkTheme.text : lightTheme.text,
   };
   const navigate = useNavigate();
   const handleClick = () => {
      navigate("/video");
   };

   const [channel, setChannel] = useState({});
   useEffect(() => {
      const fetchChannel = async () => {
         const res = await axios.get(
            `http://localhost:5000/api/users/${video.userId}`
         );
         setChannel(res.data);
      };
      fetchChannel();
   }, [video.userId]);

   return (
      <div className="video" style={background}>
         <img src={video.imgUrl} alt="" onClick={handleClick} />
         <div className="logo-text">
            <img src={channel.img} alt="" />
            <h5>{video.tittle}</h5>
         </div>
         <p className="channelname">{channel.name}</p>
         <div className="view-date">
            <p>{video.views} views .</p>
            <p>{format(video.createdAt)}</p>
         </div>
      </div>
   );
};

export default VideoCard;
