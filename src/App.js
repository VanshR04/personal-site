import './App.css';
import Top from './Top';
import Description from './Description';
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Contact from './Contact';
import { HashLoader } from 'react-spinners';
import Interests from './Interests';
import Certificates from './Certificates';

function App() {
  const [theme, setTheme] = useState("dark");
  const [showIntro, setShowIntro] = useState(true);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Show intro text for 6 seconds, then show loading screen
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setShowLoading(false);
    }, 6000);

    // Show loading screen for 3 seconds, then render main content
    const loadingTimer = setTimeout(() => {
      setShowLoading(true);
    }, 3000); // 6 seconds for intro + 3 seconds for loading

    return () => {
      clearTimeout(introTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div className="body">
      {/* Intro Screen */}
      {showIntro && (
        <motion.div
          className="intro-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 5 }}
        >
          <div className="intro-text">
            <TypeAnimation
              sequence={['<Vansh Rastogi/>', 3000]}
              wrapper="h1"
              speed={50}
              repeat={0}
            />
            {showLoading && (
              <div className="loading-screen">
                <HashLoader color="#ffffff" size={50} />
              </div>
            )}
          </div>
        </motion.div>
      )}


      {/* Main App Content */}
      {!showIntro && !showLoading && (
        <motion.div
          className="App"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          <Top toggleTheme={toggleTheme}/>
          <Description />
          <Interests />
          <Certificates />
          <Contact />
        </motion.div>
      )}
    </div>
  );
}

export default App;
