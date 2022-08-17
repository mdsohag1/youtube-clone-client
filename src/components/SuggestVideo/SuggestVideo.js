import React from "react";
import "./SuggestVideo.css";

const SuggestVideo = ({ video }) => {
   return (
      <div className="suggestVideo">
         <img src={video.thumble} alt="" />
         <div className="text">
            <h5>{video.title}</h5>
            <h6>{video.channelName}</h6>
            <p>
               {video.views} views. {video.date}
            </p>
         </div>
      </div>
   );
};

export default SuggestVideo;
