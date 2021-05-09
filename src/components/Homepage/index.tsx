import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { 
 HomepageContainer,
 TextOrange,
 TextPurple
 } from "./styles";

export default function Homepage() {
 return (
  <HomepageContainer>
   <div>
    <h1>Hello! Eu sou o</h1>
    <TextOrange>Jonatha Gomes</TextOrange>
    <h2>E sou um <TextPurple>Fullstack Developer</TextPurple></h2>
    <div>
     <button type="button">Download CV</button>
     <a href="https://github.com/JonathaGomes" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
     <a href="https://www.linkedin.com/in/jonatha-gomes-99587a1ab/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
   </div>
  </HomepageContainer>
 );
}