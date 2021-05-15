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

