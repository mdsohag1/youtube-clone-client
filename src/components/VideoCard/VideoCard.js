import React, { useEffect, useState } from "react";
import "./VideoCard.css";
import { Link, useNavigate } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";
import basicLogo from "../../img/images.png";

const VideoCard = ({ video }) => {
   const navigate = useNavigate();
   const handleClick = () => {
      navigate(`/video/${video._id}`);
   };

   const [channel, setChannel] = useState({});
   useEffect(() => {
      const fetchChannel = async () => {
         const res = await axios.get(
            `http://localhost:5000/api/users/find/${video.userId}`
         );
         setChannel(res.data);
      };
      fetchChannel();
   }, [video.userId]);

   return (
      <div className="video">
         <img src={video.imgUrl} alt="" onClick={handleClick} />
         <div className="logo-text">
            <Link to={`/profile/${video.userId}`}>
               <img src={channel.img ? channel.img : basicLogo} alt="" />
            </Link>
            <h5>{video.tittle}</h5>
         </div>
         <b>
            <p className="channelname">{channel.name}</p>
         </b>
         <div className="view-date">
            <p>{video.views} views .</p>
            <p>{format(video.createdAt)}</p>
         </div>
      </div>
   );
};

export default VideoCard;
