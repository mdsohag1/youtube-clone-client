import React, { useState } from "react";
import "./SigninModal.css";
import User from "@iconscout/react-unicons/icons/uil-user";
import Email from "@iconscout/react-unicons/icons/uil-pen";
import Password from "@iconscout/react-unicons/icons/uil-key-skeleton";
import Google from "../../img/1534129544.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

const SigninModal = () => {
   const [newUser, setNewUser] = useState(true);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPass, setConfirmPass] = useState("");
   const [samePass, setSamePass] = useState("");

   const dispatch = useDispatch();

   const handleLogin = async (e) => {
      e.preventDefault();
      dispatch(loginStart());
      if (!newUser) {
         try {
            const res = await axios.post(
               "http://localhost:5000/api/auth/signin",
               { email, password }
            );
            dispatch(loginSuccess(res.data));
         } catch (error) {
            dispatch(loginFailure());
         }
      }
      if (newUser) {
         if (password !== confirmPass) {
            setSamePass("Please type the same password");
         } else {
            setSamePass("");
         }
         if (password === confirmPass) {
            try {
               await axios.post("http://localhost:5000/api/auth/signup", {
                  name,
                  email,
                  password,
               });
               setNewUser(false);
            } catch (error) {
               console.log(error);
            }
         }
      }
   };
   const handleGoogleLogin = async () => {
      dispatch(loginStart());
      signInWithPopup(auth, provider)
         .then((result) => {
            const user = result.user;
            axios
               .post("http://localhost:5000/api/auth/google", {
                  email: user.email,
                  name: user.displayName,
                  img: user.photoURL,
               })
               .then((res) => {
                  dispatch(loginSuccess(res.data));
               });
         })
         .catch((error) => {
            dispatch(loginSuccess());
         });
   };

   console.log();
   return (
      <div className="signin col-md mt-5">
         <form action="">
            <h3 className="text-center">{newUser ? "Sign Up" : "Login"}</h3>
            <div className="main-input">
               {newUser && (
                  <div className="input">
                     <Email color="" size={"1.5rem"} />
                     <input
                        type="text"
                        placeholder="channel name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                     />
                  </div>
               )}
               <div className="input">
                  <User color="" size={"1.5rem"} />
                  <input
                     type="email"
                     placeholder="username or email"
                     name="email"
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </div>
               <div className="input">
                  <Password color="" size={"1.5rem"} />
                  <input
                     type="password"
                     placeholder="password"
                     name="password"
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
               {newUser && (
                  <div className="input">
                     <Password color="" size={"1.5rem"} />
                     <input
                        type="password"
                        placeholder="confirm password"
                        name="confirmPass"
                        onChange={(e) => setConfirmPass(e.target.value)}
                     />
                  </div>
               )}
            </div>
            <p>{samePass}</p>
            <button onClick={handleLogin} className="signinBtn">
               {newUser ? "SignUp" : "signIn"}
            </button>
            <p onClick={() => setNewUser(!newUser)}>Already have an acount</p>
         </form>
         <h6 className="text-center">
            <b>OR</b>
         </h6>
         <hr />
         <div className="google" onClick={handleGoogleLogin}>
            <img src={Google} alt="" />
            <span>Continue with Google</span>
         </div>
      </div>
   );
};

export default SigninModal;
