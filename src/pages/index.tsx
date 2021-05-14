import Header from "../components/Header";
import Homepage from "../components/Homepage";
import Sidebar from "../components/Sidebar";

import {
  Container
} from "../styles/index";

export default function Home() {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Homepage />
    </Container>
  );
}