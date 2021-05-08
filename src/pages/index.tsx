import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { Container } from "../styles/home";
import Sidebar from "../components/Sidebar";
import { useSidebarContext } from "../contexts/SidebarContext";

export default function Home() {
  const { isOpenMobileMenu } = useSidebarContext()
  
  return (
    <>
      <motion.div animate={{ x: 0 }}  initial={{ x: -1000 }} transition={{ duration: 1 }}>
        <Header />
      </motion.div>
      { isOpenMobileMenu && (
        <motion.div animate={{ x: 0 }} initial={{ x: -500 }} transition={{ duration: 1 }} >
          <Sidebar />
        </motion.div>
      )}
      <Container id="home">
        <div>
          <div>
          <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1.3 }} >
            <h1>Hello! Eu sou o</h1>
          </motion.div>
          <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1.6 }} >
            <h1>Jonatha Gomes</h1>
          </motion.div>
          <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1.9 }} >
            <h2>E sou um <span>Fullstack Developer</span></h2>
          </motion.div>
          <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 2.2 }} >
            <div>
              <button type="button">Download CV</button>
              <a href="https://github.com/JonathaGomes" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
              <a href="https://www.linkedin.com/in/jonatha-gomes-99587a1ab/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </motion.div>
          </div>
          
        </div>
      </Container>
    </>
  );
}