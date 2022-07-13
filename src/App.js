import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import { GlobalStyle } from "./Style/GlobalStyled";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
