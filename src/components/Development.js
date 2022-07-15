import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IMAGE from "../Assets/bulding.jpg";
import { MainButton } from "./Halper";

const Development = () => {
  return (
    <DevelopmentStyled>
      <div className="content">
        <div className="image">
          <img src={IMAGE} alt="/" />
        </div>
        <div className="heading">
          <h2>Contact Us</h2>
        </div>
        <div className="address">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            itaque!
          </p>
          <MainButton>
            <Link to="contact">contact</Link>
          </MainButton>
        </div>
      </div>
    </DevelopmentStyled>
  );
};

export const DevelopmentStyled = styled.section`
  padding: 6rem 12.5%;
  min-height: 100vh;
  .content {
    display: flex;
    align-items: center;
    position: relative;
    @media screen and (max-width: 992px) {
      flex-direction: column;
    }
    .image {
      width: 750px;

      height: 700px;
      overflow: hidden;
      @media screen and (max-width: 992px) {
        width: 100%;
        height: auto;
        order: 3;
      }
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .heading {
      position: absolute;
      right: 40%;
      top: 20%;
      transform: translate(40%, -20%);
      @media screen and (max-width: 992px) {
        order: 1;
        position: relative;
        top: auto;
        right: auto;
        transform: translate(0%, 0%);
        width: 100%;
      }
      h2 {
        font-size: 8vw;
        color: var(--yellow);
      }
    }
    .address {
      padding: 2rem;

      font-family: "Poppins", sans-serif;
      @media screen and (max-width: 992px) {
        padding: 0;
        order: 2;
      }
      p {
        color: var(--lightcolor);
        font-weight: 300;
        letter-spacing: 4px;
        font-size: 0.8rem;
        margin: 2rem 0;
        text-transform: uppercase;
      }
    }
  }
`;

export default Development;
