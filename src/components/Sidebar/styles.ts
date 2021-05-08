import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 nav {
  width: 100%;
 }
 
 nav ul {
  list-style: none;
  width: 100%;
 }

 nav ul li {
  margin-top: 1rem;
  text-align: center;
 }

 nav ul li a {
  color: var(--white);
  transition: color 0.3s;
  font-size: 1.5rem;

  :hover {
   color: var(--purple);
  }
 }
`