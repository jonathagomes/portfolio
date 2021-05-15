import { useSidebarContext } from "../../contexts/SidebarContext";
import { SidebarContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export default function Sidebar() {
 const { toggleVisibilitySidebar } = useSidebarContext();
 return (
  <SidebarContainer>
   <nav>
   <span onClick={toggleVisibilitySidebar}><FontAwesomeIcon icon={faTimes} /></span>
    <ul>
     <li><a onClick={toggleVisibilitySidebar} href="#">Início</a></li>
     <li><a onClick={toggleVisibilitySidebar} href="#">Sobre</a></li>
     <li><a onClick={toggleVisibilitySidebar} href="#">Habilidades</a></li>
     <li><a onClick={toggleVisibilitySidebar} href="#">Projetos</a></li>
     <li></li>
    </ul>
   </nav>
  </SidebarContainer>
 );
}