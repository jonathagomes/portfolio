import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
 HeaderContainer,
 HeaderContent
} from "./styles";
import { useSidebarContext } from "../../contexts/SidebarContext";

export default function Header() {
 const { toggleVisibilitySidebar, isVisible } = useSidebarContext()
 return (
  <HeaderContainer>
   <HeaderContent>
    <div>
     <h1><a href="/">JOHNNY<span>DEV</span></a></h1>
    </div>
    <div>
     { isVisible === true ? (
      <span id="cancel" style={{ marginRight: "20rem" }} onClick={toggleVisibilitySidebar}><FontAwesomeIcon icon={faTimes} /></span>
     ) : (
      <span onClick={toggleVisibilitySidebar}><FontAwesomeIcon icon={faBars} /></span>
     ) }
     
    </div>
   </HeaderContent>
  </HeaderContainer>
 );
}