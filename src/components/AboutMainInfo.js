import React from "react";
import styled from "styled-components";
import { Line, MainButton, SmallBox } from "./Halper";
import ImageAbout from "../Assets/about.jpg";
const AboutMainInfo = () => {
  return (
    <MainInfo>
      <div className="main-about">
        <div className="about">
          <p className="samll-heading">
            <SmallBox />
            FOUNDED IN SAN FRANCISCO, 1989
          </p>
          <h2 className="heading">
            Martin Building Company provides the opportunity to live and work in
            exceptional urban environments.
          </h2>
          <img src={ImageAbout} alt="/" />
        </div>
        <div className="data">
          <Line />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis
            id amet omnis doloribus enim, accusantium voluptatibus beatae illum
            perferendis debitis quo doloremque optio est error voluptas quas
            nemo quibusdam dolorum, quidem rerum magnam ullam. Consectetur sed
          </p>
          <MainButton>Get in touch</MainButton>
        </div>
      </div>
    </MainInfo>
  );
};

const MainInfo = styled.section`
  min-height: 100vh;
  padding: 4rem 12.5%;
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
  .main-about {
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
      flex-direction: column;
    }

    .about {
      flex: 1;
      padding: 1.5rem;
      p {
        display: flex;
        align-items: center;
        font-size: 0.7rem;
        font-family: var(--normalFont);
        letter-spacing: 4px;
        margin: 1rem 0;
      }
      .heading {
        font-size: 2.2rem;
        line-height: 1.2;
        margin: 2rem 0 3rem;
        padding: 0 2rem 0 0;
      }
      img {
        width: 100%;
      }
    }
    .data {
      flex: 1;
      padding: 1.5rem;
      font-family: var(--normalFont);
      p {
        font-weight: 200;
        color: var(--lightGray);
        letter-spacing: 1px;
        margin: 2rem 0;
        font-size: 0.9rem;
        line-height: 2;
      }
    }
  }
`;
export default AboutMainInfo;
