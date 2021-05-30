import Carousel from 'react-elastic-carousel';
import Link from "next/link";
import {
 ProjectsContainer,
 ProjectsContent,
 Title,
 TextRed,
 CarouselContainer,
 ImageContainer,
 Item
} from "./styles";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Social Movies",
      img: "capa-social-movies.png",
      link: "https://github.com/JonathaGomes/social-movies"
    },
    {
      id: 2,
      title: "Podcastr",
      img: "capa-podcastr.png",
      link: "https://github.com/JonathaGomes/podcastr"
    },
    {
      id: 3,
      title: "Moveit",
      img: "capa-moveit.png",
      link: "https://github.com/JonathaGomes/move.it"
    },
    {
      id: 4,
      title: "NPS API",
      img: "capa-nps.png",
      link: "https://github.com/JonathaGomes/nps-api"
    },
    {
      id: 5,
      title: "Jobscalc",
      img: "capa-jobscalc.png",
      link: "https://github.com/JonathaGomes/jobscalc"
    },
    {
      id: 6,
      title: "Dev.Finances",
      img: "capa-dev-finances.png",
      link: "https://github.com/JonathaGomes/dev.finances"
    },
  ]
  const breakpoints = [
    { width: 550, itemsToShow: 1},
    { width: 800, itemsToShow: 2},
    { width: 968, itemsToShow: 3},
  ]
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
   <CarouselContainer>
        <Carousel isRTL={false} itemsToShow={3} itemsToScroll={1} breakPoints={breakpoints}>
          {projects.map(project => {
            return (
              <Item>
                <Link href={project.link}>
                  <a target="_blank">
                    <ImageContainer background={project.img}></ImageContainer>
                    <div>
                      {project.title}
                    </div>
                  </a>
                </Link>
              </Item>
            );
          })}
        </Carousel>
      </CarouselContainer>
  </ProjectsContainer>
 );
}