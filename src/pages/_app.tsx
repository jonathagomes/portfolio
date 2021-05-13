import GlobalStyles from "../styles/global";
import { Wrapper } from "../styles/app";

function MyApp({ Component, pageProps }) {
  return (
      <Wrapper>
        <main>
          <Component {...pageProps} />
          <GlobalStyles />
        </main>
      </Wrapper>
  )
}

export default MyApp
