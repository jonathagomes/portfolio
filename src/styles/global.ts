import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FEFEFE;
    --red: #F13F3E;
    --gray: #9B9B9B;
    --black: #1E1E1E;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  }
  
  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }
  
  @media (max-width: 1366px) {
    html {
      max-width: 1366px;
      font-size: 80%;
    }
  }

  body,
input,
textarea,
button {
  font: 500 1rem "Montserrat", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  color: #fff;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

main {
  background-color: var(--black);
}
`
