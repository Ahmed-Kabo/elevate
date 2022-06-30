import styled from "styled-components";

const MeunToggle = ({ toggle }) => {
  return (
    <>
      <ButtonStyled onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </ButtonStyled>
    </>
  );
};

const ButtonStyled = styled.button`
  width: 70px;
  height: 70px;
  /* background: var(--lightcolor); */
  position: absolute;
  top: 5%;
  right: 5%;
  transform: translate(-5%, -5%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.2rem;
  cursor: pointer;
  border: none;
  background: none;
  z-index: 20;
  span {
    width: 80%;
    height: 2px;
    border-radius: 0.2rem;
    background: var(--mainColor);
    margin: 0.4rem 0;
  }
`;

export default MeunToggle;
