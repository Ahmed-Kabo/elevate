import styled from "styled-components";
import BG from "../../Assets/bg.jpg";
import { Hide } from "../Halper";
import { motion } from "framer-motion";
import {
  slideLeft,
  fadeIn,
  slideTop,
  scaleOut,
} from "../../Animation/Animation";
const Header = (props) => {
  return (
    <HeaderStyled>
      <motion.header variants={scaleOut} initial="show" animate="hidden">
        <main className="main">
          <div className="main-flex">
            <div className="content">
              <Hide>
                <motion.h3 variants={fadeIn}>{props.h3} </motion.h3>
                <Hide>
                  <div>
                    <Hide>
                      <motion.h1 variants={slideTop}>{props.lineOne}</motion.h1>
                    </Hide>
                    <motion.h1 variants={slideTop}>{props.lineTwo}</motion.h1>
                    <motion.h1 variants={slideTop}>{props.lineThree}</motion.h1>
                  </div>
                </Hide>
                <Hide>
                  <motion.div className="line" variants={slideTop}></motion.div>
                </Hide>
              </Hide>
            </div>

            <Hide>
              <div className="img">
                <motion.img
                  variants={slideLeft}
                  src={props.image}
                  alt={props.h3}
                />
              </div>
            </Hide>
          </div>
        </main>
      </motion.header>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.section`
  overflow: hidden;
  header {
    width: 100%;
    background: url(${BG}) center center fixed no-repeat;
    background-size: cover;
    height: 100vh;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 0;
    }
    .main-flex {
      width: 70%;
      height: 100vh;
      margin: auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      overflow: hidden;
      @media screen and (max-width: 992px) {
        width: 90%;
      }
      .content {
        flex: 1 0 0;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        z-index: 3;
        h3 {
          font-size: 1.5rem;
          color: var(--lightcolor);
        }
        h1 {
          color: var(--lightcolor);

          font-size: 6.5rem;
          font-weight: bold;
          line-height: 1.1;
          @media screen and (max-width: 992px) {
            font-size: 3.5rem;
          }
        }
        .line {
          width: 100px;
          height: 2px;
          background: var(--lightcolor);
          margin: 2rem 0 0 0;
        }
      }
      .img {
        position: absolute;
        top: 50%;
        /* right: 0; */
        transform: translate(0, -50%);
        overflow: hidden;
        height: 650px;
        @media screen and (max-width: 992px) {
          display: none;
        }
        /* width: 100%; */
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
export default Header;
