import React from "react";
import styled from "styled-components";
import User from "../Assets/call.jpg";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { PageTransition, TeamAnimation } from "../Animation/Animation";
import ScrollTop from "../components/ScrollTop";

const OurTeam = () => {
  return (
    <motion.div variants={PageTransition} initial="hidden" animate="show">
      <OurTeamStyled>
        <div className="ourteam">
          <h1 className="heading">Our Team</h1>
          <div className="teams">
            <OurTeamCard variants={TeamAnimation}>
              <a href="">
                <div className="image">
                  <img src={User} alt="/" />
                </div>
                <h3 className="title">Ahmed AbuElanag</h3>
                <h5>Ceo </h5>
              </a>
            </OurTeamCard>
            <OurTeamCard variants={TeamAnimation}>
              <a href="">
                <div className="image">
                  <img src={User} alt="/" />
                </div>
                <h3 className="title">Ahmed AbuElanag</h3>
                <h5>Ceo </h5>
              </a>
            </OurTeamCard>
            <OurTeamCard variants={TeamAnimation}>
              <a href="">
                <div className="image">
                  <img src={User} alt="/" />
                </div>
                <h3 className="title">Ahmed AbuElanag</h3>
                <h5>Ceo </h5>
              </a>
            </OurTeamCard>
            <OurTeamCard variants={TeamAnimation}>
              <a href="">
                <div className="image">
                  <img src={User} alt="/" />
                </div>
                <h3 className="title">Ahmed AbuElanag</h3>
                <h5>Ceo </h5>
              </a>
            </OurTeamCard>
            <OurTeamCard variants={TeamAnimation}>
              <a href="">
                <div className="image">
                  <img src={User} alt="/" />
                </div>
                <h3 className="title">Ahmed AbuElanag</h3>
                <h5>Ceo </h5>
              </a>
            </OurTeamCard>
            <OurTeamCard variants={TeamAnimation}>
              <a href="">
                <div className="image">
                  <img src={User} alt="/" />
                </div>
                <h3 className="title">Ahmed AbuElanag</h3>
                <h5>Ceo </h5>
              </a>
            </OurTeamCard>
            <OurTeamCard variants={TeamAnimation}>
              <a href="">
                <div className="image">
                  <img src={User} alt="/" />
                </div>
                <h3 className="title">Ahmed AbuElanag</h3>
                <h5>Ceo </h5>
              </a>
            </OurTeamCard>
            <OurTeamCard variants={TeamAnimation}>
              <a href="">
                <div className="image">
                  <img src={User} alt="/" />
                </div>
                <h3 className="title">Ahmed AbuElanag</h3>
                <h5>Ceo </h5>
              </a>
            </OurTeamCard>
            <OurTeamCard variants={TeamAnimation}>
              <a href="">
                <div className="image">
                  <img src={User} alt="/" />
                </div>
                <h3 className="title">Ahmed AbuElanag</h3>
                <h5>Ceo </h5>
              </a>
            </OurTeamCard>
            <OurTeamCard variants={TeamAnimation}>
              <a href="">
                <div className="image">
                  <img src={User} alt="/" />
                </div>
                <h3 className="title">Ahmed AbuElanag</h3>
                <h5>Ceo </h5>
              </a>
            </OurTeamCard>
            <OurTeamCard variants={TeamAnimation}>
              <a href="">
                <div className="image">
                  <img src={User} alt="/" />
                </div>
                <h3 className="title">Ahmed AbuElanag</h3>
                <h5>Ceo </h5>
              </a>
            </OurTeamCard>
            <OurTeamCard variants={TeamAnimation}>
              <a href="">
                <div className="image">
                  <img src={User} alt="/" />
                </div>
                <h3 className="title">Ahmed AbuElanag</h3>
                <h5>Ceo </h5>
              </a>
            </OurTeamCard>
          </div>
        </div>
      </OurTeamStyled>
      <Footer />
      <ScrollTop />
    </motion.div>
  );
};

const OurTeamStyled = styled.section`
  padding: 10rem 14.5%;
  position: relative;
  .heading {
    font-size: 2.9rem;
    margin-bottom: 2rem;
    color: var(--yellow);
  }
  .teams {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 2rem 0;
  }
`;

const OurTeamCard = styled(motion.div)`
  font-family: var(--normalFont);
  /* transition: all 0.3s; */
  /* border-radius: 0.5rem; */
  &:nth-child(odd) {
    margin-top: -35px;
  }

  overflow: hidden;
  .image {
    height: 160px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s;
      filter: grayscale(1);
    }
  }
  .title {
    margin: 0.5rem 0;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 0.9rem;
    text-align: center;
    color: var(--gray);
  }
  h5 {
    text-align: center;
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 0.8rem;
    color: var(--yellow);
  }
  &:hover {
    img {
      filter: grayscale(0);
    }
  }
`;

export default OurTeam;
