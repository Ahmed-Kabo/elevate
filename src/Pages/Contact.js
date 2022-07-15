import React from "react";
import Header from "../components/Header/Header";
import ImageRight from "../Assets/head.jpg";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";
import { motion } from "framer-motion";
import { PageTransition } from "../Animation/Animation";

const Contact = () => {
  return (
    <motion.div variants={PageTransition} initial="hidden" animate="show">
      <Header
        image={ImageRight}
        h3="Elevate"
        lineOne="Get in touch"
        lineTwo="with our team "
      />
      <ContactInfo />
      <Footer />
    </motion.div>
  );
};

export default Contact;
