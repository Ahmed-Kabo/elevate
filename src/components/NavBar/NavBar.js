import { motion, useCycle } from "framer-motion";
import styled from "styled-components";
import { slideBar } from "../../Animation/Animation";
import MeunToggle from "./MeunToggle";
import LOGO from "../../Assets/Transparent.png";
import NavLinks from "./NavLink";

const NavBar = () => {
  const [isOpen, ToggleCycle] = useCycle(false, true);
  return (
    <NavStyled initial={false} animate={isOpen ? "open" : "closed"}>
      <div className="logo">
        <img src={LOGO} alt="/" />
      </div>
      <motion.div className="background" variants={slideBar} isOpen={isOpen}>
        <NavLinks isOpen={isOpen} />
      </motion.div>
      <MeunToggle toggle={() => ToggleCycle()} />
    </NavStyled>
  );
};

const NavStyled = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 10;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--dark);
    a {
      color: var(--lightcolor);
    }
  }

  .logo {
    width: 250px;
    overflow: hidden;
    position: absolute;
    top: 5%;
    left: 5%;
    transform: translate(-5%, -5%);
    z-index: 5;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default NavBar;
