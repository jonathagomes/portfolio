import styles from "./styles.module.scss";

export default function Header() {
 return (
  <div className={styles.container}>
   <div className={styles.content}>
   <div className={styles.navbar}>
     <div className={styles.logo}>
       <h1><a href="/">JG</a></h1>
     </div>
     <div className={styles.navItems}>
       <ul>
         <li><a href="#home">Inicio</a></li>
         <li><a href="#">Sobre</a></li>
         <li><a href="#">Habilidades</a></li>
         <li><a href="#">Projetos</a></li>
       </ul>
     </div>
   </div>
 </div>
  </div>
 );
}