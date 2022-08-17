import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import PlayVideoPage from "./components/PlayVideoPage/PlayVideoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Profile from "./pages/Profile/Profile";
import SigninModal from "./components/SigninModal/SigninModal";

export const ThemeContext = createContext();

function App() {
   const [darkMode, setDarkMode] = useState(false);
   return (
      <div className="App">
         <ThemeContext.Provider value={[darkMode, setDarkMode]}>
            <BrowserRouter>
               <Header />
               <Routes>
                  <Route index element={<Home type={"random"} />} />
                  <Route path="/trend" element={<Home type={"trend"} />} />
                  <Route path="/subscription" element={<Home type={"sub"} />} />
                  <Route path="/video" element={<PlayVideoPage />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/signin" element={<SigninModal />} />
               </Routes>
            </BrowserRouter>
         </ThemeContext.Provider>
      </div>
   );
}

export default App;
