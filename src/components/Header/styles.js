import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  max-width: 900px;

  @media (max-width: 576px) {
    padding: 0 15px;
  }
`;

export const PortfolioPicture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 576px) {
    width: 150px;
    height: 150px;
  }
`;

export const Name = styled.h2`
  font-size: 28px;
`;

export const Bio = styled.h2`
  font-size: 20px;
`;

export const Blurb = styled.p`
  font-style: italic;
  font-size: 20px;
`;

export const Languages = styled.p`
  font-size: 20px;
`;
