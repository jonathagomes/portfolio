import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
 HeaderContainer,
 HeaderContent
} from "./styles";

export default function Header() {
 return (
  <HeaderContainer>
   <HeaderContent>
    <div>
     <h1><a href="/">JOHNNY<span>DEV</span></a></h1>
    </div>
    <div>
     <span><FontAwesomeIcon icon={faBars} /></span>
    </div>
   </HeaderContent>
  </HeaderContainer>
 );
}