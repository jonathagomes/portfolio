import { HeaderContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSidebarContext } from "../../contexts/SidebarContext";

export default function Header() {
  const { isOpenMobileMenu ,toggleMobileMenu } = useSidebarContext();
  return (
  <HeaderContainer>
    <div className="logo">
      <h1><a href="/">JG</a></h1>
    </div>
    <nav className="menu-desktop">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Habilidades</a></li>
        <li><a href="#">Projetos</a></li>
      </ul>
    </nav>
    <nav className="icon-menu-mobile">
      <span onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={ isOpenMobileMenu === false ? faBars : faTimes } />
      </span>
    </nav>
  </HeaderContainer>
 );
}