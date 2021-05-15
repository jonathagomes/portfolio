import styled from "styled-components";

export const SidebarContainer = styled.div`
 position: fixed;
 top: 0;
 right: 0;
 width: 20rem;
 height: 100vh;
 background-color: #202020;
 box-shadow: 0 0 70px rgba(0, 0, 0, 0.45);
 -webkit-transition:width 0.2s;
 transition: width 0.2s;
 z-index: 10;

 span {
  display: none;
  color: var(--red);
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
  cursor: pointer;
  animation-name: rodar;
  animation-duration: 1.5s;
  


  @keyframes rodar {
   from {
    transform: rotate(0);
   }
   to {
    transform: rotate(360deg);
   }
 }
  
  @media (max-width: 500px) {
   display: block;
  }

  :before:hover {
   content: "";
   background-color: red;
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