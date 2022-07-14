import React from "react";
import Header from "../components/Header/Header";
import ImageRight from "../Assets/head.jpg";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <>
      <Header
        image={ImageRight}
        h3="Elevate"
        lineOne="Get in touch"
        lineTwo="with our team "
      />
      <ContactInfo />
      <Footer />
    </>
  );
};

export default Contact;
