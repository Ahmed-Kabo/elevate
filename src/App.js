import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import OurTeam from "./Pages/OurTeam";
import Services from "./Pages/Services";
import { GlobalStyle } from "./Style/GlobalStyled";

function App() {
  // useEffect(() => {
  //   console.log(window.scrollY);
  // }, []);
  const ShowScroll = () => {
    if (window.scrollY > document.body.clientHeight / 2) {
      document.body.classList.add("kabo");
    } else {
      document.body.classList.remove("kabo");
    }
    // console.log();
  };
  window.addEventListener("scroll", ShowScroll);
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>
    </>
  );
}

export default App;
