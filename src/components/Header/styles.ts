import styled from "styled-components";

export const HeaderContainer = styled.header`
 width: 100%;
`

export const HeaderContent = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin: auto;
 width: 90%;
 height: 5rem;
 a {
  color: var(--white);
  transition: color 0.3s;

  :hover {
   color: var(--red);
  }
 }

 span {
  color: var(--red);
 }

 div:nth-child(2) span {
  font-size: 2rem;
  cursor: pointer;
 }

 @media (max-width: 500px) {
  #cancel {
   display: none;
  }
 }

`

export const Logo = styled.a`
:hover span:nth-child(1) {
 color: var(--red);
}
:hover span:nth-child(2) {
 color: var(--white);
}
span:nth-child(1) {
 color:var(--white);
 transition: 0.5s;
}
span:nth-child(2) {
 color:var(--red);
 transition: 0.5s;
}
`