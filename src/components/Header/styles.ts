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

  .logo h1 a {
    color: var(--white);
    font-size: 2rem;
    user-select: none;
    transition: color 0.3s;
  }

  .logo h1 a:hover {
    color: var(--purple);
  }

  nav.icon-menu-mobile {
    display: none;
  }

  nav.menu-desktop ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }

  nav.menu-desktop ul a {
    color: var(--white);
    transition: color 0.3s;
    font-size: 1.5rem;
    :hover {
      color: var(--purple)
    }
  }

  @media (max-width: 700px) {
    nav.icon-menu-mobile {
      display: block;
    }
    
    nav.icon-menu-mobile span {
      font-size: 2rem;
      cursor: pointer;
      transition: color 0.3s;

      :hover {
        color: var(--purple);
      }
    }

    nav.menu-desktop {
      display: none;
    }

    div.menu-mobile ul {
      list-style: none;
    }
  }
`

// .container {
//   .content {
//     width: 90%;
//     .navbar {
//       margin-top: 2rem;
//       display: flex;
//       flex-direction: row;
//       justify-content: space-between;
//       align-items: center;

//       .logo {
//         h1 {
//           a {
//             color: var(--white);
//             user-select: none;
//           }
//         }
//       }

//       ul {
//         list-style: none;

//         li {
//           a {
//             color: var(--white);
//             font-size: 1.5rem;
//             transition: color 0.3s;

//             &:hover {
//               color: var(--purple);
//             }
//           }
//         }
//       }
//     }
//   }
// }
