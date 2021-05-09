import styled from "styled-components";

export const HomepageContainer = styled.div`
 width: 90%;
 height: calc(100vh - 6rem);
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin: auto;
 h1 {
  font-size: 3rem;
 }
 h2 {
  font-size: 2rem;
 }

 div div {
  display: flex;
  align-items: center;
  gap: 1rem;
 }

 button {
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  color: var(--white);
  padding: 0 2.5rem;
  height: 2.5rem;
  background-color: var(--purple);
  transition: filter 0.3s;

  :hover {
   filter: brightness(0.8);
  }
 }
 
 a {
  font-size: 2.5rem;
  color: var(--white);
  transition: color 0.3s;

  :hover {
   color: var(--purple);
  }
 }
`

export const TextOrange = styled.h1`
 color: var(--orange);
`

export const TextPurple = styled.span`
 color: var(--purple);
`