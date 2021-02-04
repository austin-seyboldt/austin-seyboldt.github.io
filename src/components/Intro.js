import React from "react";
import "../css/Intro.css";
import me_img from "../assets/images/me.jpeg";

const Intro = () => {
  return (
    <section className="section" id="intro-section">
      <div className="section-container">
        <h2>get to know me</h2>
        <img src={me_img} alt="austin seyboldt portrait" id="me-portrait" />
        <p className="intro-blurb">
          Hello! Thanks for visiting my website! As you can probably tell by
          now, my name is Austin and I'm a senior at the University of
          California, Santa Cruz. I will be graduating with a Computer Science
          B.S. in June 2021 and I am currently looking for an entry level
          engineering position.
        </p>
        <p className="intro-blurb">
          I enjoy problem solving and designing programs and 2 of my most
          gratifying experiences in software development thus far have been in
          classes about software systems: one was a web server and the other was
          a distributed key-value store.
        </p>
        <p className="intro-blurb">
          In addition to software engineering, I am an anvid hiker, backpacker,
          and photographer. In fact, the image at the top of this page is one of
          my original pieces. I officially registered for a small business
          license last year and have since made several sales to individuals and
          businesses and plan to grow my business more in the future.
        </p>
      </div>
    </section>
  );
};

export default Intro;
