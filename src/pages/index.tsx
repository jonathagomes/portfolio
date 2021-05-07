import styles from "../styles/home.module.scss";

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <h1>Hello! Eu sou o</h1>
          <h1 className={styles.textOrange}>Jonatha Gomes</h1>
          <h2>E sou um <span className={styles.textGreen}>Fullstack Developer</span></h2>
          <div className={styles.links}>
            <button type="button">
            Download CV
            </button>
            <a className={styles.icon} href="https://github.com/JonathaGomes" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
            <a className={styles.icon} href="https://www.linkedin.com/in/jonatha-gomes-99587a1ab/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}