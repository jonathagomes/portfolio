import {
 ProjectsContainer,
 ProjectsContent,
 Title,
 TextRed
} from "./styles";

export default function Projects() {
 return(
  <ProjectsContainer>
   <ProjectsContent>
    <div>
      <Title>
       <h1>MEUS PROJETOS</h1>
      </Title>
      <p>Projetos que desenvolvi durante minha jornada.<br/>
       alguns em <TextRed>cursos</TextRed>, outros em <TextRed>eventos</TextRed> e alguns<br/>
       são projetos <TextRed>pessoais</TextRed></p>
       <a href="https://github.com/JonathaGomes" target="_blank"></a>
    </div>
    <div></div>
   </ProjectsContent>
  </ProjectsContainer>
 );
}