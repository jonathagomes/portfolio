import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  background-image: url("bg-body.jpeg");
`;

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
    margin-bottom: 1rem;
  }
  a {
    color: var(--white);
    padding: 0.5rem 1rem;
    background-color: var(--red);
    border: 1px solid var(--red);
    border-radius: 5px;
    transition: 0.5s;

    :hover {
      background-color: transparent;
    }
  }
`;

export const Title = styled.div`
  h1 {
    font-size: 4rem;

    @media (max-width: 700px) {
      font-size: 3rem;
    }
  }
`;

export const TextRed = styled.span`
  color: var(--red);
`;
