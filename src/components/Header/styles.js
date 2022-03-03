import styled from "styled-components";

export const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 900px;
  text-align: center;

  @media (max-width: 576px) {
    padding: 0 15px;
  }
`;

export const PortfolioPicture = styled.img`
  border-radius: 50%;
  height: 200px;
  object-fit: cover;
  width: 200px;

  @media (max-width: 576px) {
    height: 150px;
    width: 150px;
  }
`;

export const TopArea = styled.div`
  margin-bottom: 0;
`;

export const Name = styled.h2`
  font-size: 28px;
`;

export const Bio = styled.h2`
  font-size: 20px;
`;

export const Blurb = styled.p`
  font-size: 20px;
  font-style: italic;
`;

export const Languages = styled.p`
  font-size: 20px;
`;

export const SocialButtons = styled.div`
  width: 300px;
  font-size: 30px;
`;

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  text-align: center;
`;

export const ListItem = styled.li``;

export const Link = styled.a`
  color: black;
`;
