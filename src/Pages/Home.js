import About from "../components/About";
import Development from "../components/Development";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Info from "../components/Info";
import ImageHeader from "../Assets/head.jpg";
import { motion } from "framer-motion";
import { PageTransition } from "../Animation/Animation";

const Home = () => {
  return (
    <motion.div variants={PageTransition} initial="hidden" animate="show">
      <Header
        h3="Elevate"
        lineOne="Exceptional"
        lineTwo="Urban"
        lineThree="Environments"
        image={ImageHeader}
      />
      <About />
      <Info />
      <Development />
      <Footer />
    </motion.div>
  );
};

export default Home;
