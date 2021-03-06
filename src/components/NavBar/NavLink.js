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

const NavLinks = ({ isOpen, toggle }) => {
  return (
    <>
      <MenuStyled>
        <motion.h1>
          <motion.span variants={HeaderAnimation}>E</motion.span>
          <motion.span variants={HeaderAnimation}>l</motion.span>
          <motion.span variants={HeaderAnimation}>e</motion.span>
          <motion.span variants={HeaderAnimation}>v</motion.span>
          <motion.span variants={HeaderAnimation}>a</motion.span>
          <motion.span variants={HeaderAnimation}>t</motion.span>
          <motion.span variants={HeaderAnimation}>e</motion.span>
        </motion.h1>
        <motion.ul
          variants={TitleAnimation}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <Hide>
            <motion.li variants={TitleAnimation} onClick={toggle}>
              <NavLink to="/">Home</NavLink>
            </motion.li>
          </Hide>
          <Hide>
            <motion.li variants={TitleAnimation} onClick={toggle}>
              <NavLink to="about">About us</NavLink>
            </motion.li>
          </Hide>
          <Hide>
            <motion.li variants={TitleAnimation} onClick={toggle}>
              <NavLink to="services">services</NavLink>
            </motion.li>
          </Hide>
          <Hide>
            <motion.li variants={TitleAnimation} onClick={toggle}>
              <NavLink to="our-team">our team</NavLink>
            </motion.li>
          </Hide>
          <Hide>
            <motion.li variants={TitleAnimation} onClick={toggle}>
              <NavLink to="contact">contact us</NavLink>
            </motion.li>
          </Hide>
        </motion.ul>
      </MenuStyled>
    </>
  );
};

const MenuStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--lightcolor);
  position: fixed;
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
    color: #55555555;
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
          color: var(--yellow);
        }
      }
    }
  }
`;
export default NavLinks;
