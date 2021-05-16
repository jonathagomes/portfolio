import styled from "styled-components";

export const AboutContainer = styled.section`
 width: 100%; 
 background-image: url("bg-body.jpeg");
`

export const AboutContent = styled.div`
width: 90%; 
height: calc(100vh - 5rem);
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: auto;
border-left: 1px solid rgba(255, 255, 255, 0.06);
border-right: 1px solid rgba(255, 255, 255, 0.06);
img {
 margin-left: 5rem;
 width: 30rem;

 @media (max-width: 1000px) {
  display: none;
 }
}
p {
 color: var(--white);
 font-size: 1.2rem;
 line-height: 1.5;
}
a {
 color: var(--white);
}
a:before {
 margin-top: 2rem;
 content: 'VER MEU CURRÍCULO';
 position: relative;
 background-color: var(--red);
 font-weight: normal;
 -webkit-transition:width 0.2s;
 transition: width 0.2s;
 padding:10px;
 width:100px;
 float:left;
 white-space: nowrap;
}
a:hover:before {
 width:180px;
 content: 'VER MEU CURRÍCULO';

 @media (max-width: 500px) {
  width:150px;
 }
}
`

export const Title = styled.div`
 h1 {
  font-size: 4rem;

  @media (max-width: 700px) {
   font-size: 3rem;
  }
 }
`

export const TextRed = styled.span`
 color: var(--red);
`