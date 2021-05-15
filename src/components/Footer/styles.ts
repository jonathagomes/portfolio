import styled from "styled-components";

export const FooterContainer = styled.footer`
 width: 100%;
 background-image: url("bg.jpg");
`

export const FooterContent = styled.div`
 width: 90%;
 margin: auto;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 @media (max-width: 650px) {
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
   margin-top: 1.4rem;
  }
 }

 div h1 a {
  color: var(--white);
  transition: color 0.3s;

  :hover {
   color:var(--red);
  }

  span {
   color: var(--red);
  }
 }

 nav {
  padding: 3rem 0;
  ul {
   list-style: none;
   display: flex;
   gap: 2rem;
   li a {
    color: var(--white);
    transition: color 0.3s;
    font-size: 1rem;
    :hover {
     color:var(--red);
    }
   }
 } 
`

export const Copyright = styled.div`
 background-image: url("bg-body.jpeg");
 text-align: center;
 padding: 1rem;
 color: #9B9B9B;
`