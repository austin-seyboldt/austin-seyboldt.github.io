import React from "react";
import "../css/Intro.css";
import me_img from "../assets/images/me.jpeg";

const Intro = () => {
  return (
    <section className="section" id="intro-section">
      <div className="section-container">
        <h2>get to know me</h2>
        <div className="intro-container">
          <img src={me_img} alt="austin seyboldt portrait" id="me-portrait" />
          <div className="intro-paragraphs-container">
            <p className="intro-blurb">
              Hello! Thanks for visiting my website! As you can probably tell by
              now, my name is Austin and I'm a senior at the University of
              California, Santa Cruz. I will be graduating with a Computer
              Science B.S. in June 2021 and I am currently looking for an entry
              level engineering position.
            </p>
            <p className="intro-blurb">
              I'm interested primarily in backend engineering, with a particular
              interest in distributed systems, though I am also currently
              learning web development with React.
            </p>
            <p className="intro-blurb">
              In addition to software engineering, I am an anvid hiker,
              backpacker, and photographer. In fact, the image at the top of
              this page is one of my original pieces. I officially registered
              for a small business license last year and have since made several
              sales to individuals and businesses and plan to grow my business
              more in the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
