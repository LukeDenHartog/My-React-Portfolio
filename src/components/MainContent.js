import React, { useState } from "react";
import Nav from "./Nav";
import About from "./ContentFolder/About";
import Portfolio from "./ContentFolder/Portfolio";
import Contact from "./ContentFolder/Contact";
import Resume from "./ContentFolder/Resume";
import Footer from "./Footer";
import Header from './Header';

export default function MainContent() {
  const [currentContent, setCurrentContent] = useState("About");

  // conditional rendering based on the value of currentContent. If none of them, return Contact
  const contentSwitch = () => {
    if (currentContent === "About") {
      return <About/>;
    }
    if (currentContent === "Portfolio") {
      return <Portfolio/>;
    }
    if (currentContent === "Resume") {
      return <Resume/>;
    }
    else return <Contact/>;
  };

  const handleContentSwitch = (content) => setCurrentContent(content);

  return (
    <>
      <div>
        <Header>
            <Nav currentContent={currentContent} handleContentSwitch={handleContentSwitch}/>
        </Header>
        {contentSwitch()}
      </div>
      <Footer/>
    </>
  );
}