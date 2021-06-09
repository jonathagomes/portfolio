import styled from "styled-components";

export const SidebarContainer = styled.div`
 position: fixed;
 top: 0;
 right: 0;
 width: 20rem;
 height: 100vh;
 background-color: #202020;
 box-shadow: 0 0 70px rgba(0, 0, 0, 0.45);
 z-index: 10;
 transition: 0.5s;

 span {
  display: block;
  color: var(--red);
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
  cursor: pointer;
  animation-name: spin;
  animation-duration: 1.5s;

  @keyframes spin {
   from {
    transform: rotate(0);
   }
   to {
    transform: rotate(360deg);
   }
  }
 }

 nav ul {
  list-style: none;
  text-align: center;
  margin-top: 5rem;

  li {
   border-top: 1px solid rgba(255, 255, 255, 0.06);
   padding: 1rem 0;

   a {
    color: var(--white);
    font-size: 1.2rem;
    transition: color 0.3s;

    :hover {
     color: var(--red);
    }
   }
  }
 }
`