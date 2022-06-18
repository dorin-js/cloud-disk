import React from "react";
import disk from "../assets/disk.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home df jcsb aic">
      <div className="home__left">
        <h1>What is cloud disk?</h1>
        <p>Personal data vault where your files are safe.</p>
      </div>
      <div className="home__right">
        <img className="home__right_img" src={disk} alt="cloud disk preview" />
      </div>
    </div>
  );
};

export default Home;
