import styled from "styled-components";

export const HeaderContainer = styled.header`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 width: 90%;
 height: 5rem;
 margin: auto;
 border-left: 1px solid rgba(255, 255, 255, 0.06);

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
`
