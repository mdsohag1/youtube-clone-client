import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import PlayVideoPage from "./components/PlayVideoPage/PlayVideoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import SigninModal from "./components/SigninModal/SigninModal";
import { useSelector } from "react-redux";
import Search from "./components/Search/Search";

function App() {
   const { currentUser } = useSelector((state) => state.user);
   return (
      <div className="App">
         <BrowserRouter>
            <Header />
            <Routes>
               <Route index element={<Home type={"random"} />} />
               <Route path="/trend" element={<Home type={"trend"} />} />
               <Route path="/search" element={<Search />} />
               <Route
                  path="/subscription"
                  element={
                     currentUser ? <Home type={"sub"} /> : <SigninModal />
                  }
               />
               <Route path="/video/:videoId" element={<PlayVideoPage />} />
               <Route path="/profile/:profileId" element={<Profile />} />
               <Route path="/signin" element={<SigninModal />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
