import About from "../components/About";
import Development from "../components/Development";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Info from "../components/Info";
import ImageHeader from "../Assets/head.jpg";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
