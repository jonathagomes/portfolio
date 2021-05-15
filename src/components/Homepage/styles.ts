import styled from "styled-components";

export const HomepageContainer = styled.div`
 width: 100%; 
 background-image: url("bg-home.jpeg");
`

export const HomepageContent = styled.div`
 width: 90%;
 height: calc(100vh - 5rem);
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin: auto;
 border-left: 1px solid rgba(255, 255, 255, 0.06);
 border-right: 1px solid rgba(255, 255, 255, 0.06);
 h2 {
  font-size: 3rem;
 }

 p {
  font-size: 1rem;
  color: var(--gray);
 }
 a {
  color: var(--white);
 }
 a:before {
 margin-top: 2rem;
 content: 'VER PROJETOS';
 position: relative;
 background-color: var(--red);
 font-weight: normal;
 -webkit-transition:width 0.2s;
 transition: width 0.2s;
 padding:10px;
 width:75px;
 float:left;
 white-space: nowrap;
}
a:hover:before {
 width:130px;
 content: 'VER PROJETOS';
 @media (max-width: 500px) {
  width:110px;
 }
}
`

export const Title = styled.div`
display: flex;
justify-content: flex-start;
h1 {
 font-size: 6rem;
 color: var(--red);
 line-height: 1;

 @media (max-width: 500px) {
  font-size: 5rem;
 }
 @media (max-width: 400px) {
  font-size: 4rem;
 }
}
span {
 color: var(--white);
 transform: rotate(-90deg) !important;
 line-height: 1;
 font-size: 2rem;
 margin-left: 1.4rem;
 font-weight: bold;
 @media (max-width: 500px) {
  font-size: 1.5rem;
 }
 @media (max-width: 400px) {
  font-size: 1.2rem;
 }
}
`