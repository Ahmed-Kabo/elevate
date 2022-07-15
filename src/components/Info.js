import { Link } from "react-router-dom";
import styled from "styled-components";
import IMAGE from "../Assets/head.jpg";
import CallCenter from "../Assets/call.jpg";
import { MainButton, SmallBox } from "./Halper";
const Info = () => {
  return (
    <InfoStyled>
      <div className="container">
        <div className="data">
          <div className="image">
            <img src={IMAGE} alt="/" />
          </div>
          <div className="heading">
            <h2>Stunning </h2>
            <h2>contemporary </h2>
            <h2>architecture</h2>
          </div>
        </div>
        <ServicesStyle>
          <p>
            {" "}
            <SmallBox />
            full service
          </p>
          <div className="main-service">
            <ul>
              <li>MULTIFAMILY RESIDENTIAL</li>
              <li>MULTIFAMILY RESIDENTIAL</li>
              <li>MULTIFAMILY RESIDENTIAL</li>
              <li>MULTIFAMILY RESIDENTIAL</li>
              <li>MULTIFAMILY RESIDENTIAL</li>
            </ul>
            <MainButton>
              <Link to="services">view more</Link>
            </MainButton>
          </div>
          <div className="image">
            <img src={CallCenter} alt="/" />
          </div>
        </ServicesStyle>
      </div>
    </InfoStyled>
  );
};

const InfoStyled = styled.section`
  min-height: 100vh;

  display: grid;
  place-content: center;
  place-items: center;
  width: 100%;

  padding: 3rem 12.5%;

  /* .container {
    width: 80%;
    height: 100vh;       
    margin: auto;
  } */
  .data {
    display: flex;
    width: 100%;
    align-items: center;
    @media screen and (max-width: 992px) {
      flex-direction: column;
    }
    .image {
      flex: 1;
      /* height: 650px; */
      width: 100%;
      overflow: hidden;
      @media screen and (max-width: 992px) {
        height: auto;
        /* height: 360px; */
        order: 2;
      }
      img {
        width: 100%;
        @media screen and (max-width: 992px) {
          height: 70vh;
          object-fit: contain;
        }
      }
    }
  }
  .heading {
    flex: 1;
    transform: rotate(-90deg) translate(35%, 35%);
    @media screen and (max-width: 992px) {
      order: 1;
      transform: rotate(-90deg) translate(0%, 35%);
    }

    h2 {
      font-size: 5rem;
      color: var(--yellow);
      line-height: 0.9;
      @media screen and (max-width: 992px) {
        font-size: 10vw;
      }
    }
  }
`;

export const ServicesStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
  p {
    display: flex;
    align-items: center;
    color: var(--lightcolor);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 0.8rem;
    transform: rotate(-90deg);
    position: absolute;

    top: 25%;
    left: -10%;
  }
  .main-service {
    width: 50%;
    align-items: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    ul {
      margin-bottom: 1.2rem;
      @media screen and (max-width: 992px) {
        margin: 1rem 0;
      }
      li {
        color: var(--lightcolor);
        margin: 1.2rem 0;
        letter-spacing: 3px;
        @media screen and (max-width: 992px) {
          margin: 0.5rem 0;
          font-size: 0.6rem;
        }
      }
    }
  }

  .image {
    width: 760px;
    overflow: hidden;
    @media screen and (max-width: 992px) {
      width: 120%;
    }

    margin: 0 -190px 0 0;
    img {
      width: 100%;
    }
  }
`;
export default Info;
