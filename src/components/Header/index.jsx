import React from "react";
import {
  HeaderWrapper,
  Blurb,
  Name,
  Bio,
  Languages,
  PortfolioPicture,
  SocialButtons,
  ListWrapper,
  ListItem,
  Link,
  TopArea,
} from "./styles";
import Picture from "./assets/monroePortfolio.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <HeaderWrapper>
      <PortfolioPicture src={Picture} />
      <TopArea>
        <Name>Monroe Gollaher.</Name>
        <Bio>Software Developer // Photographer</Bio>
        <Blurb>
          Full-stack software developer with a passion for creativity and
          problem solving.
        </Blurb>
        <Languages>
          Javascript, C#, Dotnet Core, SQL, React, Vue.js, Node.js, MongoDB, Web
          API's, CSS/Bootstrap, HTML5 & more.
        </Languages>
      </TopArea>
      <SocialButtons>
        <ListWrapper>
          <ListItem>
            <Link href="https://rb.gy/kb8lcq">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://rb.gy/srpbts">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://rb.gy/hdiedb">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:mgollaher92@gmail.com?subject=Let's%20get%20in%20touch">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </ListItem>
        </ListWrapper>
      </SocialButtons>
    </HeaderWrapper>
  );
};

export default Header;
