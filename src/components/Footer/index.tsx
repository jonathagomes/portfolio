import { 
 FooterContainer,
 FooterContent,
 Copyright,
 Logo
 } from "./styles";

export default function Footer() {
 return(
  <>
   <FooterContainer>
    <FooterContent>
     <div>
       <h1>
          <Logo href="#">
           <span>JOHNNY</span>
           <span>DEV</span>
          </Logo>
        </h1>
     </div>
     <nav>
      <ul>
       <li><a href="#">Início</a></li>
       <li><a href="#">Sobre</a></li>
       <li><a href="#">Habilidades</a></li>
       <li><a href="#">Projetos</a></li>
      </ul>
     </nav>
    </FooterContent>
   </FooterContainer>
   <Copyright>
    <p>&copy; 2021 All Rights Reserved</p>
   </Copyright>
  </>
 );
}