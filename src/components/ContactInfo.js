import React from "react";
import styled from "styled-components";

const ContactInfo = () => {
  return (
    <ConatctStyled>
      <div className="flex-contact">
        <div className="content">
          <h2>General Enquiries</h2>
          <p>
            <a href="mailto:ahmed@og.com">ahmed@og.com</a>
            <a href="tel:01018518772">01018518772</a>
          </p>
        </div>
        <div className="content">
          <h2>General Enquiries</h2>
          <p>
            <a href="mailto:ahmed@og.com">ahmed@og.com</a>
            <a href="tel:01018518772">01018518772</a>
          </p>
        </div>
        <div className="content">
          <h2>General Enquiries</h2>
          <p>
            <a href="mailto:ahmed@og.com">ahmed@og.com</a>
            <a href="tel:01018518772">01018518772</a>
          </p>
        </div>
        <p className="address">
          1101 Sutter Street San Francisco California, 94109
        </p>
      </div>
    </ConatctStyled>
  );
};

const ConatctStyled = styled.section`
  min-height: 100vh;
  padding: 12rem 14.5%;
  .flex-contact {
    display: flex;
    flex-wrap: wrap;
    .address {
      font-size: 2.8rem;
      color: var(--yellow);
      font-weight: bold;
      line-height: 1;
      width: 48%;
      padding: 1rem 2rem 1rem 1rem;
      @media screen and(max-width:992px) {
        width: 90%;
      }
    }
    .content {
      width: 48%;
      padding: 1rem;
      @media screen and(max-width:992px) {
        width: 90%;
      }
      h2 {
        font-size: 2.3rem;
        margin-bottom: 2rem;
      }
      p {
        font-family: var(--normalFont);
        letter-spacing: 4px;
        font-size: 0.8rem;
        color: var(--gray);
        a {
          display: block;
          margin: 0.9rem 0;
        }
      }
    }
  }
`;

export default ContactInfo;
