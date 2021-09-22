import React from "react";
import {
  HeaderWrapper,
  Blurb,
  Name,
  Bio,
  Languages,
  PortfolioPicture,
} from "./styles";
import Picture from "./assets/monroePortfolio.jpg";

const Header = () => {
  return (
    <HeaderWrapper>
      <PortfolioPicture src={Picture} />
      <Name>Monroe Gollaher.</Name>
      <Bio>Software Developer // Photographer</Bio>
      <Blurb>
        Full-stack software developer with a passion for creativity and problem
        solving.
      </Blurb>
      <Languages>
        Javascript, C#, Dotnet Core, SQL, React, Vue.js, Node.js, MongoDB, Web
        API's, CSS/Bootstrap, HTML5 & more.
      </Languages>
    </HeaderWrapper>
  );
};

export default Header;
