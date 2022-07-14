import React from "react";
import Header from "../components/Header/Header";
import IamgeHeading from "../Assets/about.jpg";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <Header
        h3="Elevate"
        lineOne="our"
        lineTwo="Services"
        image={IamgeHeading}
      />
      <OurServices />
      <Footer />
    </>
  );
};

export default Services;
