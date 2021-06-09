import { useSidebarContext } from "../../contexts/SidebarContext";
import { SidebarContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export default function Sidebar() {
 const { toggleVisibilitySidebar, isVisible } = useSidebarContext();
 return (
  <SidebarContainer style={isVisible == true ? {opacity: 1} : {opacity: 0}}>
   <nav>
   <span onClick={toggleVisibilitySidebar}><FontAwesomeIcon icon={faTimes} /></span>
    <ul>
     <li><a onClick={toggleVisibilitySidebar} href="#home">Início</a></li>
     <li><a onClick={toggleVisibilitySidebar} href="#about">Sobre</a></li>
     <li><a onClick={toggleVisibilitySidebar} href="#skills">Habilidades</a></li>
     <li><a onClick={toggleVisibilitySidebar} href="#projects">Projetos</a></li>
     <li></li>
    </ul>
   </nav>
  </SidebarContainer>
 );
}