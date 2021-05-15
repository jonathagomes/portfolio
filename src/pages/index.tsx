import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Homepage from "../components/Homepage";
import Sidebar from "../components/Sidebar";
import { useSidebarContext } from "../contexts/SidebarContext";

import {
  Container
} from "../styles/index";

export default function Home() {
  const { isVisible } = useSidebarContext()
  return (
    <Container>
      <Header/>
      {isVisible && (
        <Sidebar />
      )}
      <Homepage />
      <About />
      <Footer />
    </Container>
  );
}