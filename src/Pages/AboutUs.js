import React from "react";
import Header from "../components/Header/Header";
import ImageHeader from "../Assets/about.jpg";
import AboutMainInfo from "../components/AboutMainInfo";
import PortfolioAbout from "../components/PortfolioAbout";
import AboutOurTeam from "../components/AboutOurTeam";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { PageTransition } from "../Animation/Animation";

const AboutUs = () => {
  return (
    <motion.div variants={PageTransition} initial="hidden" animate="show">
      <Header
        h3="Elevate"
        lineOne="line one"
        lineTwo="line two"
        lineThree="line Three"
        image={ImageHeader}
      />
      <AboutMainInfo />
      <PortfolioAbout />
      <AboutOurTeam />
      <Footer />
    </motion.div>
  );
};

export default AboutUs;
