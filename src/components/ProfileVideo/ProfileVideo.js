import React from "react";
import "./ProfileVideo.css";

const ProfileVideo = ({ video }) => {
   return (
      <div className="profileVideo">
         <div className="videoCard">
            <img src={video.thumble} alt="" />
            <h6>{video.title}</h6>
            <p>
               {video.views} views . {video.date}
            </p>
         </div>
      </div>
   );
};

export default ProfileVideo;
