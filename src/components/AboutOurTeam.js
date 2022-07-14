import React from "react";
import styled from "styled-components";
import ImageContent from "../Assets/bg.jpg";
import CardController from "../Layout/CardController";

const AboutOurTeam = () => {
  return (
    <OurTeamStyled>
      <h2>our Team</h2>
      <div className="our-team-flex">
        <div className="ourteam-group">
          <CardController
            image={ImageContent}
            name="Ahmed Kabo"
            title="front end developersss"
          />
          <CardController
            image={ImageContent}
            name="Ahmed Kabos"
            title="front end s"
          />
          <CardController
            image={ImageContent}
            name="Ahmed Kabos"
            title="front end s"
          />
          <CardController
            image={ImageContent}
            name="Ahmed Kabos"
            title="front end s"
          />
        </div>
        <div className="team-content">
          <h3 className="heading">
            Patrick <br /> McNerney
          </h3>
          <span>FOUNDER & CEO</span>
          <p>
            The President and visionary behind Martin Building Company, Patrick
            provides hands-on direction to its operations. Since founding the
            company in 1989, he has applied his 40 years of professional
            design-build experience and passion for outstanding design and
            construction to develop more than 30 historically significant
            buildings in San Francisco.{" "}
          </p>
          <p>
            The President and visionary behind Martin Building Company, Patrick
            provides hands-on direction to its operations. Since founding the
            company in 1989, he has applied his 40 years of professional
            design-build experience and passion for outstanding design and
            construction to develop more than 30 historically significant
            buildings in San Francisco.{" "}
          </p>
        </div>
      </div>
    </OurTeamStyled>
  );
};

const OurTeamStyled = styled.section`
  min-height: 100vh;
  padding: 4rem 12.5%;
  position: relative;
  h2 {
    position: absolute;
    transform: rotate(-90deg);
    top: 20%;
    left: -2%;
    font-size: 3.5rem;
    color: var(--yellow);
    @media screen and (max-width: 992px) {
      position: relative;
      transform: rotate(0deg);
      top: auto;
      left: auto;
    }
  }

  .our-team-flex {
    display: flex;

    @media screen and (max-width: 992px) {
      flex-direction: column;
    }

    .ourteam-group {
      flex: 4;
      display: grid;
      padding: 1rem;
      /* overflow: hidden; */
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      /* grid-template-rows: ; */
      gap: 2rem;
      img {
        width: 100%;
      }
    }
    .team-content {
      flex: 3;
      padding: 1rem;
      .heading {
        font-size: 3.5rem;
        color: var(--yellow);
        /* padding: 0 1rem; */
      }
      span {
        font-family: var(--normalFont);
        display: block;
        font-size: 0.7rem;
        letter-spacing: 4px;
        margin-bottom: 2rem;
      }
      P {
        font-family: var(--normalFont);
        margin-bottom: 2rem;
        font-weight: 200;
        font-size: 0.9rem;
        line-height: 1.8;
        letter-spacing: 1px;
      }
    }
  }
`;

export default AboutOurTeam;
