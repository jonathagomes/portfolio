import { useEffect, useState } from "react";
import GlobalStyles from "../styles/global";
import { Wrapper, Loading } from "../styles/app";
import { SidebarContextProvider } from "../contexts/SidebarContext";
import BarLoader from "react-spinners/BarLoader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, [])
  return (
      <SidebarContextProvider>
              <Wrapper>
                <main>
                { loading ? (
                  <Loading>
                    <h1>
                      <span>JOHNNY</span>
                      <span>DEV</span>
                    </h1>
                    <BarLoader height={8} width={250} color={"#F13F3F"} loading={loading} />
                  </Loading>
                ) : (
                  <Component {...pageProps} />
                ) }
                <GlobalStyles />
                </main>
              </Wrapper>
      </SidebarContextProvider>
  )
}

export default MyApp
