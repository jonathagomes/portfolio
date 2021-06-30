import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HeaderContainer, HeaderContent, Logo, IconContainer } from "./styles";
import { useSidebarContext } from "../../contexts/SidebarContext";

export default function Header() {
  const { toggleVisibilitySidebar } = useSidebarContext();
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <h1>
            <Logo href="/">
              <span>JOHNNY</span>
              <span>DEV</span>
            </Logo>
          </h1>
        </div>
        <IconContainer>
          <span onClick={toggleVisibilitySidebar}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </IconContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
