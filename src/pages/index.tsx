import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Homepage from "../components/Homepage";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";

import { Container } from "../styles/index";

export default function Home() {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Homepage />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </Container>
  );
}
