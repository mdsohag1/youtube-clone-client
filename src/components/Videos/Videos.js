import React, { useEffect, useState } from "react";
import "./Videos.css";
import VideoCard from "../VideoCard/VideoCard";
import axios from "axios";
import { useSelector } from "react-redux";

const Videos = ({ type }) => {
   const { currentUser } = useSelector((state) => state.user);
   const [videosData, setVideosData] = useState([]);
   const apiURL = "http://localhost:5000/api";
   const authAxios = axios.create({
      baseURL: apiURL,
      headers: {
         Authorization: `Bearer ${currentUser ? currentUser.token : null}`,
      },
   });

   useEffect(() => {
      const fetchVideos = async () => {
         setVideosData([]);
         if (currentUser) {
            const res = await authAxios.get(`/videos/${type}`);
            setVideosData(res.data);
         } else {
            const res = await axios.get(`${apiURL}/videos/${type}`);
            setVideosData(res.data);
         }
      };
      fetchVideos();
   }, [type]);

   return (
      <div className="videos">
         {videosData.map((video) => (
            <VideoCard video={video} key={video._id} />
         ))}
      </div>
   );
};

export default Videos;
