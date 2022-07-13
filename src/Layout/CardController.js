import React from "react";
import styled from "styled-components";

const CardController = (props) => {
  return (
    <CardStyled>
      <div className="img">
        <img src={props.image} alt="/" />
        {/* <div className="overlay"></div> */}
      </div>
      <div className="title">
        <h4 className="name">{props.name}</h4>
        <p className="dec">{props.title}</p>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  position: relative;
  width: 100%;
  min-height: 220px;
  overflow: hidden;
  transition: all 0.5s;
  &:nth-child(2n + 1) {
    top: -60px;
  }

  .img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    /* .overlay {
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 5;
      width: 100%;
      height: 100%;
    } */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s;
      filter: grayscale(1);
    }
  }
  .title {
    position: absolute;
    z-index: 3;
    padding: 0.5rem;
    bottom: 0;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    text-align: center;
    width: 100%;

    .name {
      font-size: 2rem;
      text-shadow: 0px 4px 13px #3f3f3f;
    }
    .dec {
      font-size: 1.2rem;
      font-family: var(--normalFont);
      text-shadow: 0px 4px 13px #000000;
      text-transform: uppercase;
      font-size: 0.7rem;
      letter-spacing: 3px;
      font-weight: bold;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
      filter: grayscale(0);
    }
  }
`;

export default CardController;
