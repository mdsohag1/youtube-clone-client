import React, { useEffect, useState } from "react";
import "./SingleProfile.css";
import Search from "@iconscout/react-unicons/icons/uil-search";
import Edit from "@iconscout/react-unicons/icons/uil-edit-alt";
import ProfileVideo from "../ProfileVideo/ProfileVideo";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { subscription } from "../../redux/userSlice";
import basicLogo from "../../img/images.png";
import basicBanner from "../../img/jn8jyih8obj71.webp";
import EditProfile from "../EditProfile/EditProfile";

const SingleProfile = () => {
   const { profileId } = useParams();
   const [channel, setChannel] = useState({});
   const [channelVideo, setChannelVideo] = useState([]);
   const { currentUser } = useSelector((state) => state.user);
   const dispatch = useDispatch();
   const baseUrl = "http://localhost:5000/api";
   const authAxios = axios.create({
      baseURL: baseUrl,
      headers: {
         Authorization: `Bearer ${currentUser ? currentUser.token : null}`,
      },
   });
   const [open, setOpen] = useState(false);

   useEffect(() => {
      const fetchProfile = async () => {
         const res = await axios.get(
            `http://localhost:5000/api/users/find/${profileId}`
         );
         const allVideo = await axios.get(
            `http://localhost:5000/api/videos/find/channelvideo/${profileId}`
         );
         setChannel(res.data);
         setChannelVideo(allVideo.data);
      };
      fetchProfile();
   }, [profileId]);

   const handleSubscribe = () => {
      currentUser.subscribedUsers.includes(profileId)
         ? authAxios.put(`/users/unsub/${profileId}`)
         : authAxios.put(`/users/sub/${profileId}`);
      dispatch(subscription(profileId));
   };

   return (
      <>
         <div className="SingleProfile">
            <div className="cover">
               <img
                  src={channel.coverImg ? channel.coverImg : basicBanner}
                  alt=""
               />
            </div>
            <div className="p-div">
               <div className="prifileLogo">
                  <div className="d-flex">
                     <div className="p-logo">
                        <img
                           src={channel.img ? channel.img : basicLogo}
                           alt=""
                        />
                     </div>
                     <div className="">
                        <h5>{channel.name}</h5>
                        <p>{channel.subscriber} subscribers.</p>
                     </div>
                  </div>
                  <div>
                     {currentUser._id === profileId ? (
                        <button
                           className="btn btn-primary"
                           style={{ fontWeight: "bold" }}
                        >
                           CUSTOMIZE CHANNEL
                        </button>
                     ) : (
                        <button
                           onClick={handleSubscribe}
                           className={
                              currentUser.subscribedUsers.includes(profileId)
                                 ? "subscribed"
                                 : "sub"
                           }
                        >
                           {currentUser.subscribedUsers.includes(profileId)
                              ? "SUBSCRIBED"
                              : "SUBSCRIBE"}
                        </button>
                     )}
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
                  {currentUser._id === profileId && (
                     <span
                        onClick={() => setOpen(true)}
                        className="editProfile"
                     >
                        <Edit color="" size={"1.6rem"} />
                     </span>
                  )}
               </div>
            </div>
            <div className="p-videos">
               <div className="pv">
                  {channelVideo.map((video) => (
                     <ProfileVideo key={video._id} video={video} />
                  ))}
               </div>
            </div>
         </div>
         {open && <EditProfile setOpen={setOpen} />}
      </>
   );
};

export default SingleProfile;
