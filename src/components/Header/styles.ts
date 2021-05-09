import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 90%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black);
  color: var(--white);
  margin: auto;

  ul {
    list-style: none;
  }
  }
`

export const LogoContainer = styled.div`
  h1 a {
    color: var(--white);
    font-size: 2rem;
    user-select: none;
    transition: color 0.3s;
  }

  h1 a:hover {
    color: var(--purple);
  }
`
export const MenuDesktop = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }

  ul a {
    color: var(--white);
    transition: color 0.3s;
    font-size: 1.5rem;
    :hover {
      color: var(--purple)
    }
  }

  @media (max-width: 700px) {
    display: none;
  }

`

export const IconMenuMobile = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;

    span {
      font-size: 2rem;
      cursor: pointer;
      transition: color 0.3s;

      :hover {
        color: var(--purple);
      }
    }
  }
`