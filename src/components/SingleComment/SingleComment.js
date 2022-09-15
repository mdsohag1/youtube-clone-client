import React, { useEffect, useState } from "react";
import "./SingleComment.css";
import Logo from "../../img/profileImg.jpeg";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import basicLogo from "../../img/images.png";

const SingleComment = ({ comment }) => {
   const [channel, setChannel] = useState({});
   const baseUrl = "http://localhost:5000/api";

   useEffect(() => {
      const fetchingVideo = async () => {
         const resChannel = await axios.get(
            `${baseUrl}/users/find/${comment.userId}`
         );

         setChannel(resChannel.data);
      };
      fetchingVideo();
   }, [comment.userId]);

   return (
      <div className="singleComment">
         <div className="p-comment">
            <Link
               style={{ textDecoration: "none", color: "inherit" }}
               to={`/profile/${channel._id}`}
            >
               <img src={channel.img ? channel.img : basicLogo} alt="" />
            </Link>
            <div className="mx-3 mt-3">
               <div className="d-flex">
                  <h6>{channel.name}</h6>
                  <span className="mx-3">{format(comment.createdAt)}</span>
               </div>
               <i>
                  <p>{comment.desc}</p>
               </i>
            </div>
         </div>
      </div>
   );
};

export default SingleComment;
