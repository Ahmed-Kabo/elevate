import React from "react";
import styled from "styled-components";
import { Line, SmallBox, SmallTitle } from "./Halper";
import ImageAbout from "../Assets/bg.jpg";

const PortfolioAbout = () => {
  return (
    <PortfolioStyled>
      <div className="flex-portfolio">
        <SmallTitle className="title">
          <SmallBox />
          MARTIN BUILDING CO
        </SmallTitle>
        <div className="portfolio-data">
          <Line />
          <h3 className="heading">
            In our expanding portfolio you’ll find a wide range of new
            construction and renovations in diverse buildings and sites.
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
            laudantium vero error magni saepe animi eum voluptatum, quia,
            tempore consequuntur debitis culpa vel cumque sed ullam in, expedita
            repellat qui.
          </p>
        </div>
        <div className="design">
          <img src={ImageAbout} alt="/" />
          <p>Design & development specialisits</p>
        </div>
      </div>
    </PortfolioStyled>
  );
};

const PortfolioStyled = styled.section`
  min-height: 100vh;
  padding: 4rem 0 6rem 12.5%;
  position: relative;
  .flex-portfolio {
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media screen and (max-width: 992px) {
      flex-direction: column-reverse;
    }

    .title {
      transform: rotate(-90deg);
      position: absolute;
      top: 20%;
      left: 0;
    }
    .portfolio-data {
      padding: 2rem 3rem;
      flex: 1;
      .heading {
        font-size: 2.3rem;
        color: var(--yellow);
        margin-bottom: 3rem;
        @media screen and (max-width: 768px) {
          font-size: 1.8rem;
        }
      }
      p {
        font-family: var(--normalFont);
        color: var(--lightGray);
        line-height: 1.5;
        letter-spacing: 2px;
        @media screen and (max-width: 768px) {
          font-size: 0.8rem;
        }
      }
    }
    .design {
      flex: 1;
      position: relative;
      /* img {
        height: 650px;
        object-fit: cover;
      } */
      img {
        width: 100%;
        @media screen and (max-width: 992px) {
          width: 100%;
        }
      }
      p {
        font-size: 4.2rem;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: rotate(-90deg) translate(0, -50%);
        font-weight: bold;
        color: var(--yellow);
        line-height: 1.3;
        @media screen and (max-width: 768px) {
          font-size: 2.8rem;
        }
      }
    }
  }
`;

export default PortfolioAbout;
