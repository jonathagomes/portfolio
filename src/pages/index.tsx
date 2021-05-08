import styles from "../styles/home.module.scss";

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <motion.div animate={{ x: 0 }}  initial={{ x: -1000 }} transition={{ duration: 1 }}>
        <Header />
      </motion.div>
      <div id="home" className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
          <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1.3 }} >
            <h1>Hello! Eu sou o</h1>
          </motion.div>
          <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1.6 }} >
            <h1 className={styles.textOrange}>Jonatha Gomes</h1>
          </motion.div>
          <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 1.9 }} >
            <h2>E sou um <span className={styles.textGreen}>Fullstack Developer</span></h2>
          </motion.div>
          
            <div className={styles.links}>
              
                <button type="button">Download CV</button>
              
              <a className={styles.icon} href="https://github.com/JonathaGomes" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
              <a className={styles.icon} href="https://www.linkedin.com/in/jonatha-gomes-99587a1ab/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}