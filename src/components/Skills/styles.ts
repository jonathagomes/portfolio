import styled from "styled-components";

export const SkillsContainer = styled.div`
width: 100%; 
background-image: url("bg.jpg");
`

export const SkillsContent = styled.div`
width: 90%; 
height: calc(100vh - 5rem);
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
`

export const TextRed = styled.span`
color: var(--red);
`

export const Title = styled.div`
h1 {
 font-size: 4rem;

 @media (max-width: 700px) {
  font-size: 3rem;
 }
}
`

export const Subtitle = styled.h2`
font-size: 3rem;
display: flex;
flex-direction: row;
align-items: center;
gap: 1rem;
cursor: pointer;
transition: color 0.3s;
:hover {
 color: var(--red);
}
`

export const TechnologyContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 gap: 5rem;
 margin-top: 1.5rem;
 margin-left: 2rem;

 @media (max-width: 650px) {
  flex-direction: column;
 }

 p {
  margin-top: 1rem;
  font-size: 1rem;
 }

 
`

