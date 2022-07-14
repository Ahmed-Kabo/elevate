import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import { GlobalStyle } from "./Style/GlobalStyled";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
