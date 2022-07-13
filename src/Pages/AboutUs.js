import React from "react";
import Header from "../components/Header/Header";
import ImageHeader from "../Assets/about.jpg";
import AboutMainInfo from "../components/AboutMainInfo";
import PortfolioAbout from "../components/PortfolioAbout";
import AboutOurTeam from "../components/AboutOurTeam";
import Footer from "../components/Footer";
const AboutUs = () => {
  return (
    <>
      <Header
        h3="About us"
        lineOne="line one"
        lineTwo="line two"
        lineThree="line Three"
        image={ImageHeader}
      />
      <AboutMainInfo />
      <PortfolioAbout />
      <AboutOurTeam />
      <Footer />
    </>
  );
};

export default AboutUs;
