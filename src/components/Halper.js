import styled from "styled-components";

export const Hide = styled.div`
  overflow: hidden;
`;

export const MainButton = styled.button`
  min-width: 180px;
  border: 1px solid var(--yellow);
  padding: 1rem 2rem;
  color: var(--yellow);
  background: transparent;
  box-shadow: none;
  margin: 1rem 0;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 5.5px;
  font-size: 0.7rem;
  /* font-weight: bold; */
  transition: all 0.3s cubic-bezier(0.31, -0.25, 0.56, 0.87);
  position: relative;
  z-index: 2;
  font-family: "Poppins", sans-serif;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: var(--yellow);
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.31, -0.25, 0.56, 0.87);
  }
  &:hover {
    color: var(--lightcolor);
    &:after {
      height: 100%;
    }
  }
`;

export const SmallBox = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  margin-right: 1rem;
  background: var(--yellow);
`;

export const Line = styled.span`
  display: block;
  width: 55px;
  height: 1px;
  border-radius: 1rem;
  margin: 1rem 0 3rem;
  background: var(--gray);
`;

export const SmallTitle = styled.p`
  display: flex;
  align-items: center;
  margin: 0 0 2rem 0;
  font-size: 0.7rem;
  letter-spacing: 4px;
  font-family: var(--normalFont);
`;
