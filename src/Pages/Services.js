import React from "react";
import Header from "../components/Header/Header";
import IamgeHeading from "../Assets/about.jpg";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { PageTransition } from "../Animation/Animation";
import ScrollTop from "../components/ScrollTop";

const Services = () => {
  return (
    <motion.div variants={PageTransition} initial="hidden" animate="show">
      <Header
        h3="Elevate"
        lineOne="our"
        lineTwo="Services"
        image={IamgeHeading}
      />
      <OurServices />
      <Footer />
      <ScrollTop />
    </motion.div>
  );
};

export default Services;
