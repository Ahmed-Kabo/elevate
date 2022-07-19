import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LOGO from "../Assets/Transparent.png";

const Footer = () => {
  return (
    <FooterStyled>
      <h2>Elevate</h2>
      <div className="content">
        <p className="intro">
          <span>Where </span>
          <span>outstanding </span>
          <span>design gets </span>
          <span>built. </span>
        </p>
        <div className="menu">
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="location">
        <div className="address">
          <p>1101 SUTTER STREET, SAN FRANCISCO, CALIFORNIA 94109</p>
          <address>
            <a href="tel:01018518772"> T : 01018518772</a>
            <a href="mailto:am2202174@gmail.com">E : AHmedKabo13@hotmail.com</a>
          </address>
        </div>
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.section`
  min-height: 100vh;
  padding: 3rem 12.5%;
  overflow: hidden;
  background: var(--dark);
  h2 {
    text-align: center;
    margin: 2rem 0;
    font-size: 2.8rem;
    letter-spacing: 5px;
    color: #fff;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
    @media screen and (max-width: 768px) {
      /* flex-direction: column; */
    }
    .intro {
      font-size: 4rem;
      font-weight: bold;
      line-height: 1.2;
      color: #fff;
      @media screen and (max-width: 768px) {
        font-size: 2.5rem;
      }
      span {
        display: block;
      }
    }
    .menu {
      ul {
        li {
          margin: 0.8rem 0;
          font-size: 1rem;
          color: var(--gray);
          transition: all 0.3s;
          font-family: "Poppins", sans-serif;
          letter-spacing: 3px;
          @media screen and (max-width: 768px) {
            font-size: 0.8rem;
          }
          &:hover {
            color: var(--yellow);
          }
        }
      }
    }
  }
  .location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Poppins", sans-serif;
    .address {
      color: var(--gray);
      letter-spacing: 3px;
      font-size: 0.8rem;
      @media screen and (max-width: 768px) {
        font-size: 0.5rem;
      }
      a {
        font-style: normal;
        margin: 0 1rem 0 0;
        font-weight: bold;
        font-size: 0.7rem;
        @media screen and (max-width: 768px) {
          font-size: 0.5rem;
        }
      }
    }
    .logo {
      width: 150px;
      img {
        width: 100%;
      }
    }
  }
`;
export default Footer;
