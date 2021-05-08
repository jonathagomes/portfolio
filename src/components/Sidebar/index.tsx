import { Container } from "./styles";

export default function Sidebar() {
 return (
  <Container>
    <nav>
     <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Habilidades</a></li>
      <li><a href="#">Projetos</a></li>
     </ul>
    </nav>
  </Container>
 );
}