import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSidebarContext } from "../../contexts/SidebarContext";

import { 
  HeaderContainer,
  LogoContainer,
  MenuDesktop,
  IconMenuMobile,
 } from "./styles";

export default function Header() {
  const { isOpenMobileMenu ,toggleMobileMenu } = useSidebarContext();
  return (
  <HeaderContainer>
    <LogoContainer>
      <h1><a href="/">JG</a></h1>
    </LogoContainer>
    <MenuDesktop>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Habilidades</a></li>
        <li><a href="#">Projetos</a></li>
      </ul>
    </MenuDesktop>
    <IconMenuMobile>
      <span onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={ isOpenMobileMenu === false ? faBars : faTimes } />
      </span>
    </IconMenuMobile>
  </HeaderContainer>
 );
}