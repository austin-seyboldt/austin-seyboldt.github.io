import React from "react";
import "../css/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Intro from "./Intro";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Landing />
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
