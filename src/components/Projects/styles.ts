import styled from "styled-components";

type ImageContainerProp = {
 background: string;
}

export const ProjectsContainer = styled.div`
width: 100%;
background-image: url("bg-body.jpeg");
`

export const ProjectsContent = styled.div`
width: 90%;
height: calc(65vh - 5rem);
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: auto;
border-left: 1px solid rgba(255, 255, 255, 0.06);
border-right: 1px solid rgba(255, 255, 255, 0.06);
p {
 color: var(--white);
 font-size: 1.2rem;
 line-height: 1.5;
}
a {
 color: var(--white);
}
a:before {
content: 'VEJA TODOS';
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
width:110px;
content: 'VEJA TODOS';
@media (max-width: 500px) {
 width:90px;
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

export const CarouselContainer = styled.div`
width: 90%;
margin: 0 auto;
`

export const Item = styled.div`
 width: 100%;
 margin: 1rem;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.45);
 transition: all 1s;
 transform: scale(0.9);

 :hover {
  transform: scale(1);
 }

 div:nth-child(2) {
  height: 5rem;
  background-color: #1D1D1D;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
 }
}
`
export const ImageContainer = styled.div.attrs((props: ImageContainerProp) => ({
 background: props.background,
}))<ImageContainerProp>`
background-image: url("${(props) => props.background}");
height: 20rem;
background-size: cover;
background-position: center;
`