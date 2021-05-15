import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
 HeaderContainer,
 HeaderContent,
 Logo,
 
} from "./styles";
import { useSidebarContext } from "../../contexts/SidebarContext";

export default function Header() {
 const { toggleVisibilitySidebar, isVisible } = useSidebarContext()
 return (
  <HeaderContainer>
   <HeaderContent>
    <div>
     <h1>
      <Logo href="/">
       <span>JOHNNY</span>
       <span>DEV</span>
      </Logo></h1>
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