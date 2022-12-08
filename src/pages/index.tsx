import { About } from "src/components/About";
import { Header } from "src/components/Header";

export default function Home() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Header />
      <About />
    </main>
  );
}
