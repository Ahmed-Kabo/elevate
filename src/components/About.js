import styled from "styled-components";
import { Hide, SmallBox } from "./Halper";
import { UseScroll } from "./useScroll";
import { motion } from "framer-motion";
import { fadeIn, slideTop } from "../Animation/Animation";

const About = () => {
  const [element, controls] = UseScroll();
  return (
    <>
      <AboutUsStyled ref={element} animate={controls} initial="hidden">
        <div className="about-us">
          <motion.h3 variants={fadeIn}>
            <SmallBox />
            URBAN DESIGN & DEVELOPMENT SPECIALISTS
          </motion.h3>
          <motion.h2 variants={fadeIn}>
            Martin Building Company is a multidisciplinary design and
            development firm.
          </motion.h2>
          <div className="about-item">
            <div className="line">
              <span></span>
            </div>
            <Hide>
              <motion.p className="content" variants={slideTop}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                architecto odit nesciunt labore amet quia temporibus perferendis
                quidem eius, cupiditate, nulla laboriosam fugit consequatur
                error veniam totam exercitationem, harum tempora.
              </motion.p>
            </Hide>
          </div>
        </div>
      </AboutUsStyled>
    </>
  );
};

const AboutUsStyled = styled(motion.section)`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: var(--darkGray);
  .about-us {
    padding: 15rem 16.5%;
    color: #fff;

    h3 {
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      letter-spacing: 3px;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      @media screen and (max-width: 992px) {
        font-size: 0.7rem;
      }
    }
    h2 {
      margin: 3rem 0;
      font-size: 3.1rem;
      width: 80%;
      line-height: 1.3;
      text-transform: capitalize;
      @media screen and (max-width: 992px) {
        font-size: 1.5rem;
      }
    }
    .about-item {
      display: flex;
      font-family: "Poppins", sans-serif;
      margin: 2rem 0;
      width: 85%;
      @media screen and (max-width: 992px) {
        flex-direction: column;
      }
      .line {
        flex: 1;
        display: grid;
        place-items: start;
        margin: 1rem 0;

        span {
          display: block;
          width: 30%;
          height: 1px;
          background: var(--gray);
        }
      }
      .content {
        flex: 3;
        font-size: 0.9rem;
        letter-spacing: 1.3px;
        line-height: 1.6;
        font-weight: 200;
      }
    }
  }
`;
export default About;
