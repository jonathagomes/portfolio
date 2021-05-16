import styled from "styled-components";

export const Wrapper = styled.div`
 display: flex;

 main {
   flex: 1;
 }
`

export const Loading = styled.div`
background-color: var(--black);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
h1 {
  margin-bottom: 1rem;
}

h1 span:nth-child(2) {
  color: var(--red);
}
`