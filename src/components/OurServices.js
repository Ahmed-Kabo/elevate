import React from "react";
import styled from "styled-components";
import ImageContent from "../Assets/bg.jpg";
import CardController from "../Layout/CardController";
import { MainButton, SmallBox, SmallTitle } from "./Halper";
const OurServices = () => {
  return (
    <ServicesStyled>
      <SmallTitle className="h2">
        <SmallBox /> Our Company’s Core Values
      </SmallTitle>
      <OurServicesGrid>
        <CardController
          className="card"
          image={ImageContent}
          name="Integrity"
          title="We commit to our ethical code and owning our behavior. we do what is right and we deliver what we promise. we believe that integrity is at the heart of our individual and corporate actions.
"
        />
        <CardController
          className="card"
          image={ImageContent}
          name="Client Focus"
          title="We strive to satisfy our clients who are our biggest assets. To us they are our number one success partners. Delivering to them excellence with passion is our ultimate target"
        />
        <CardController
          className="card"
          image={ImageContent}
          name="Professionalism"
          title="We use our skills and years of experience, together with our broad range of certifications to offer our clients the best service with prominent professional standards to achieve high quality results"
        />

        <CardController
          className="card"
          image={ImageContent}
          name="Confidentiality"
          title="We maintain the safety, security and confidentiality of our customers’ end-user and client’s data is our utmost priority"
        />
        <CardController
          className="card"
          image={ImageContent}
          name="Passion"
          title="We are a devoted powerful force. Our enthusiasm and passion lead us towards accomplishing success in everything we do"
        />
        <CardController
          className="card"
          image={ImageContent}
          name="Positive Work-Environment"
          title="We believe that a good environment should be safe, fun and inviting to everyone. We work hard and smart. We celebrate success by rewarding and recognizing our people"
        />
        <CardController
          className="card"
          image={ImageContent}
          name="Positive Work-Environment"
          title="We believe that a good environment should be safe, fun and inviting to everyone. We work hard and smart. We celebrate success by rewarding and recognizing our people"
        />
        <CardController
          className="card"
          image={ImageContent}
          name="Positive Work-Environment"
          title="We believe that a good environment should be safe, fun and inviting to everyone. We work hard and smart. We celebrate success by rewarding and recognizing our people"
        />
        <CardController
          className="card"
          image={ImageContent}
          name="Diversity and inclusion"
          title="We value and respect diversified people, ideas, and thoughts. We respect all differences whether in backgrounds, or interests. We strive to deliver valued services to all consumer segments"
        />
        <CardController
          className="card"
          image={ImageContent}
          name="Teamwork"
          title="We trust the power of a team and that together we can achieve extraordinary things. We empower the individual strength of our employees and encourage them to collaborate for attaining the best results"
        />
      </OurServicesGrid>
      <div className="button">
        <MainButton> contact with us</MainButton>
      </div>
    </ServicesStyled>
  );
};

const ServicesStyled = styled.section`
  min-height: 100vh;
  padding: 6rem 10.5%;
  .h2 {
    padding: 2rem 0 6rem 1rem;
    font-size: 1rem;
    text-transform: uppercase;
  }
  .button {
    margin: 3rem 0;
    text-align: center;
  }
`;

const OurServicesGrid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 2fr));
  gap: 2.5rem;
  .card {
    height: 400px;
    .title {
      text-align: left;
      .dec {
        font-weight: normal;
        margin: 1rem 0;
        font-size: 0.8rem;
        letter-spacing: 2px;
        font-weight: 900;
      }
    }
    &:hover {
      .name {
        color: var(--yellow);
        text-shadow: none;
      }
      /* .dec {
        color: var(--yellow);
        font-weight: bold;
      } */
    }
  }
  /* grid-template-rows: 550px;
  /* min-height: 50vh;
  /* display: flex;
  width: 100%;
  min-height: 100vh; */
`;
export default OurServices;
