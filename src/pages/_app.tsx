import GlobalStyles from "../styles/global";
import { Wrapper } from "../styles/app";
import { SidebarContextProvider } from "../contexts/SidebarContext";

function MyApp({ Component, pageProps }) {
  return (
    <SidebarContextProvider>
      <Wrapper>
        <main>
          <Component {...pageProps} />
          <GlobalStyles />
        </main>
      </Wrapper>
    </SidebarContextProvider>
  )
}

export default MyApp
