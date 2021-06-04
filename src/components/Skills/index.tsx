import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
 faJsSquare,
 faReact,
 faNodeJs
 } from "@fortawesome/free-brands-svg-icons";

import {
 SkillsContainer,
 SkillsContent,
 TextRed,
 Title,
 Subtitle,
 TechnologyContainer
} from "./styles";
export default function Skills() {
 return(
  <SkillsContainer id="skills">
   <SkillsContent>
    <div>
      <Title>
       <h1>MINHAS HABILIDADES</h1>
      </Title>
      <p>Um breve resumo das <TextRed>tecnologias</TextRed> que eu estou <TextRed>aprendendo</TextRed> e<br/>
      me <TextRed>aperfeiçoando</TextRed> todo dia.</p>
      <TechnologyContainer>
       <div>
        <Subtitle>
         <TextRed><FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon></TextRed>
         JavaScript
        </Subtitle>
        <p>Uma linguagem <TextRed>simplesmente incrível</TextRed>,<br/>
         sou apaixonado por essa linguagem e<br/>
         quero me tornar um <TextRed>Fullstack</TextRed> utilizando<br/>
         essa linguagem</p>
       </div>
       <div>
        <Subtitle>
         <TextRed><img src="/typescript.svg"/></TextRed>
         TypeScript
        </Subtitle>
        <p>TypeScript é um <TextRed>superset</TextRed> do JS. adicionando<br/>
        tipagem estática e outras funcionalidades<br/>
        Uma tecnologia <TextRed>sensacional</TextRed></p>
       </div>
      </TechnologyContainer>
      <TechnologyContainer>
       <div>
        <Subtitle>
         <TextRed><FontAwesomeIcon icon={faReact}></FontAwesomeIcon></TextRed>
         React
        </Subtitle>
        <p>Uma <TextRed>biblioteca JS</TextRed> com foco em <br/>
        desenvolvimento de <TextRed>interfaces</TextRed> uma <br/>
        tecnologia que está em <TextRed>alta no mercado</TextRed></p>
       </div>
       <div>
        <Subtitle>
         <TextRed><FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon></TextRed>
         NodeJS
        </Subtitle>
        <p>Uma aplicação para <TextRed>compilar códigos JS</TextRed> <br/>
         essa tecnologia vem sendo atualmente um <br/>
         <TextRed>fenômeno no mercado</TextRed></p>
       </div>
      </TechnologyContainer>
    </div>
    <div></div>
   </SkillsContent>
  </SkillsContainer>
 );
}