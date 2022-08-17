import React, { useContext, useEffect, useState } from "react";
import "./Videos.css";
import VideoCard from "../VideoCard/VideoCard";
import { darkTheme } from "../../utilis/Theme";
import axios from "axios";

import { ThemeContext } from "../../App";

const Videos = ({ type }) => {
   const [darkMode, setDarkMode] = useContext(ThemeContext);

   const bgLighter = {
      background: darkMode ? darkTheme.bgLighter : "rgb(246, 246, 246)",
   };

   const [videosData, setVideosData] = useState([]);
   useEffect(() => {
      const fetchVideos = async () => {
         const res = await axios.get(
            `http://localhost:5000/api/videos/${type}`
         );
         setVideosData(res.data);
      };
      fetchVideos();
   }, [type]);

   return (
      <div className="videos" style={bgLighter}>
         {videosData.map((video) => (
            <VideoCard video={video} key={video._id} />
         ))}
      </div>
   );
};

export default Videos;
