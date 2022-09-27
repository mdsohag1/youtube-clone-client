import React, { useEffect, useState } from "react";
import "./PlayVideoPage.css";
import Like from "@iconscout/react-unicons/icons/uil-thumbs-up";
import Share from "@iconscout/react-unicons/icons/uil-share";
import Save from "@iconscout/react-unicons/icons/uil-save";
import Clip from "@iconscout/react-unicons/icons/uil-times";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { format } from "timeago.js";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import SuggestVideo from "../SuggestVideo/SuggestVideo";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { dislike, fetchSuccess, like } from "../../redux/videoSlice";
import { subscription } from "../../redux/userSlice";
import Comments from "../Comments/Comments";
import basicLogo from "../../img/images.png";

const PlayVideoPage = () => {
   const { videoId } = useParams();
   const dispatch = useDispatch();
   const baseUrl = "http://localhost:5000/api";

   const { currentUser } = useSelector((state) => state.user);
   const { currentVideo } = useSelector((state) => state.video);

   const [channel, setChannel] = useState({});
   const [suggestVideos, setSuggestVideos] = useState([]);

   const authAxios = axios.create({
      baseURL: baseUrl,
      headers: {
         Authorization: `Bearer ${currentUser ? currentUser.token : null}`,
      },
   });
   useEffect(() => {
      const fetchingVideo = async () => {
         const resVideo = await axios.get(`${baseUrl}/videos/find/${videoId}`);
         dispatch(fetchSuccess(resVideo.data));
         console.log(resVideo.data);
      };
      fetchingVideo();
   }, [videoId]);

   useEffect(() => {
      const fetchingChannel = async () => {
         const resChannel = await axios.get(
            `${baseUrl}/users/find/${currentVideo.userId}`
         );
         console.log(resChannel.data);
         setChannel(resChannel.data);
      };
      fetchingChannel();
   }, [currentVideo]);

   useEffect(() => {
      const fetchSuggest = async () => {
         const suggest = await axios.get(`${baseUrl}/videos/random`);
         setSuggestVideos(suggest.data);
         console.log(suggest.data);
      };
      fetchSuggest();
   }, []);

   const handleLike = async () => {
      authAxios.put(`/users/like/${currentVideo._id}`);
      dispatch(like(currentUser._id));
   };
   const handleDislike = () => {
      authAxios.put(`/users/dislike/${currentVideo._id}`);
      dispatch(dislike(currentUser._id));
   };
   const handleSubscribe = () => {
      currentUser.subscribedUsers.includes(channel._id)
         ? authAxios.put(`/users/unsub/${channel._id}`)
         : authAxios.put(`/users/sub/${channel._id}`);
      dispatch(subscription(channel._id));
   };

   console.log(currentVideo);

   return (
      <div className="playvideo">
         <div className="left">
            <video
               src={currentVideo ? currentVideo.videoUrl : ""}
               controls
            ></video>
            <div className="linkSection">
               <div className="title">
                  <h5>{currentVideo.tittle}</h5>
                  <div className="views">
                     <span>{currentVideo.views} views . </span>
                     <span> {format(currentVideo.createdAt)}</span>
                  </div>
               </div>
               <div className="linkIcons">
                  <div onClick={handleLike}>
                     {currentVideo.likes.includes(currentUser._id) ? (
                        <FaThumbsUp size={"1.4rem"} color="#000" />
                     ) : (
                        <Like color="#000" size={"1.5rem"} />
                     )}
                     <span>{currentVideo.likes?.length}</span>
                  </div>
                  <div onClick={handleDislike}>
                     {currentVideo.dislikes.includes(currentUser._id) ? (
                        <FaThumbsDown size={"1.4rem"} color="#000" />
                     ) : (
                        <FaThumbsDown
                           size={"1.4rem"}
                           color="rgb(145, 145, 145)"
                        />
                     )}
                     <span>DISLIKE</span>
                  </div>
                  <div>
                     <Share color="#000" size={"1.5rem"} />
                     <span>SHARE</span>
                  </div>
                  <div>
                     <Clip color="#000" size={"1.5rem"} />
                     <span>CLIP</span>
                  </div>
                  <div>
                     <Save color="#000" size={"1.5rem"} />
                     <span>SAVE</span>
                  </div>
               </div>
            </div>
            <hr />
            <div className="subscribe">
               <div className="d-flex">
                  <Link to={`/profile/${channel._id}`}>
                     <div className="videoLogo">
                        <img
                           src={channel.img ? channel.img : basicLogo}
                           alt=""
                        />
                     </div>
                  </Link>
                  <div className="des">
                     <h5>{channel.name}</h5>
                     <p>{channel.subscriber} Subscriber</p>
                     <div></div>
                  </div>
               </div>
               <div onClick={handleSubscribe}>
                  <button
                     className={
                        currentUser.subscribedUsers.includes(channel._id)
                           ? "subscribed"
                           : "sub"
                     }
                  >
                     {currentUser.subscribedUsers.includes(channel._id)
                        ? "SUBSCRIBED"
                        : "SUBSCRIBE"}
                  </button>
               </div>
            </div>
            <div>
               <p className="description">{currentVideo.desc}</p>
            </div>
            <hr />
            <Comments videoId={currentVideo._id} />
         </div>
         <div className="right">
            {suggestVideos.map((video) => (
               <SuggestVideo key={video._id} video={video} />
            ))}
         </div>
      </div>
   );
};

export default PlayVideoPage;
