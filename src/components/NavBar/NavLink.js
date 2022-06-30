import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  HeaderAnimation,
  scaleOut,
  slideBar,
  TitleAnimation,
} from "../../Animation/Animation";
import { Hide } from "../Halper";

const NavLinks = ({ isOpen }) => {
  return (
    <>
      <MenuStyled>
        <motion.h1>
          <motion.span variants={HeaderAnimation}>e</motion.span>
          <motion.span variants={HeaderAnimation}>l</motion.span>
          <motion.span variants={HeaderAnimation}>e</motion.span>
          <motion.span variants={HeaderAnimation}>v</motion.span>
          <motion.span variants={HeaderAnimation}>a</motion.span>
          <motion.span variants={HeaderAnimation}>t</motion.span>
          <motion.span variants={HeaderAnimation}>e</motion.span>
        </motion.h1>
        <motion.ul
          variants={slideBar}
          initial={false}
          animate={isOpen ? "open" : "close"}
        >
          <Hide>
            <motion.li variants={TitleAnimation}>
              <NavLink to="/">Home</NavLink>
            </motion.li>
          </Hide>
          <Hide>
            <motion.li variants={TitleAnimation}>
              <NavLink to="about">About us</NavLink>
            </motion.li>
          </Hide>
          <Hide>
            <motion.li variants={TitleAnimation}>
              <NavLink to="protfolio">protfolio</NavLink>
            </motion.li>
          </Hide>
          <Hide>
            <motion.li variants={TitleAnimation}>
              <NavLink to="out-team">our team</NavLink>
            </motion.li>
          </Hide>
          <Hide>
            <motion.li variants={TitleAnimation}>
              <NavLink to="contact-us">contact us</NavLink>
            </motion.li>
          </Hide>
        </motion.ul>
      </MenuStyled>
    </>
  );
};

const MenuStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--lightcolor);
  position: relative;
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Poppins", sans-serif;
    font-size: 20vw;
    letter-spacing: 10px;
    z-index: 1;
    font-weight: 800;
    //color: var(--darkGray);
    color: #f79d4330;
    pointer-events: none;
    display: flex;
    /* background: linear-gradient(to left, #f8a34288, #dd2c5a88);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    /* text-transform: uppercase; */
    span {
      display: inline;
    }
  }
  ul {
    z-index: 3;
    li {
      margin: 0.3rem 0;
      text-align: center;
      /* font-family: "Poppins", sans-serif; */
      a {
        font-size: 3.8vw;
        font-weight: 800;
        text-transform: capitalize;
        letter-spacing: 2px;
        text-align: center;
        transition: all 0.3s;
        &:hover,
        &.active {
          color: #f8a342;
        }
      }
    }
  }
`;
export default NavLinks;
