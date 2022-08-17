import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./TagSection.css";
import { darkTheme, lightTheme } from "../../utilis/Theme";

const TagSection = () => {
   const [darkMode, setDarkMode] = useContext(ThemeContext);
   const background = {
      background: darkMode ? darkTheme.bg : lightTheme.bg,
      color: darkMode ? darkTheme.text : lightTheme.text,
   };
   const buttonColor = {
      background: darkMode ? darkTheme.bgLighter : lightTheme.bgLighter,
      color: darkMode ? darkTheme.text : lightTheme.text,
   };
   return (
      <div className="tag-section" style={background}>
         <button className="tag-btn active" style={buttonColor}>
            All
         </button>
         <button className="tag-btn" style={buttonColor}>
            Javascript
         </button>
         <button className="tag-btn" style={buttonColor}>
            Natok
         </button>
         <button className="tag-btn" style={buttonColor}>
            Music
         </button>
         <button className="tag-btn" style={buttonColor}>
            Movie
         </button>
         <button className="tag-btn" style={buttonColor}>
            Drama
         </button>
         <button className="tag-btn" style={buttonColor}>
            Programming
         </button>
         <button className="tag-btn" style={buttonColor}>
            Learning
         </button>
         <button className="tag-btn" style={buttonColor}>
            Bangla Natok
         </button>
         <button className="tag-btn" style={buttonColor}>
            CSS
         </button>
         <button className="tag-btn" style={buttonColor}>
            Mongodb
         </button>
         <button className="tag-btn" style={buttonColor}>
            Node
         </button>
      </div>
   );
};

export default TagSection;
