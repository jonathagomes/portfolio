import Header from "../components/Header";
import Homepage from "../components/Homepage";

import {
  Container
} from "../styles/index";

export default function Home() {
  return (
    <Container>
      <Header />
      <Homepage />
    </Container>
  );
}