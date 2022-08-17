import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyAVJNz0YLcTroDpoqNcIk0A9l3TgOtZJtA",
   authDomain: "clone-4b64f.firebaseapp.com",
   projectId: "clone-4b64f",
   storageBucket: "clone-4b64f.appspot.com",
   messagingSenderId: "330404960880",
   appId: "1:330404960880:web:4fd3b90f1277e32d3bb2b5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
