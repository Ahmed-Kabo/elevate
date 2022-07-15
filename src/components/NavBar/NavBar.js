import { motion, useCycle } from "framer-motion";
import styled from "styled-components";
import { slideBar } from "../../Animation/Animation";
import MeunToggle from "./MeunToggle";
import LOGO from "../../Assets/Transparent.png";
import NavLinks from "./NavLink";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, ToggleCycle] = useCycle(false, true);
  return (
    <>
      <NavStyled
      // initial={false}
      // animate={isOpen ? "open" : "closed"}
      // className={isOpen ? "Z" : ""}
      >
        <LogoStyled>
          <Link to="/">
            <img src={LOGO} alt="/" />
          </Link>
        </LogoStyled>
        <motion.div
          className="background"
          initial={false}
          variants={slideBar}
          isOpen={isOpen}
          animate={isOpen ? "open" : "closed"}
        >
          <NavLinks isOpen={isOpen} toggle={() => ToggleCycle()} />
        </motion.div>
      </NavStyled>
      <MeunToggle toggle={() => ToggleCycle()} />
    </>
  );
};

const NavStyled = styled(motion.nav)`
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 10; */

  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: var(--dark);
    a {
      color: var(--lightcolor);
    }
  }
`;

const LogoStyled = styled.div`
  width: 200px;
  overflow: hidden;
  position: fixed;
  top: 5%;
  left: 5%;
  transform: translate(-5%, -5%);
  z-index: 15;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default NavBar;
