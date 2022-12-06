import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.navBar}>
        <Link href="./">
          <p className={styles.navBarText}>Profil</p>
        </Link>
        <Link href="./Skills">
          {" "}
          <p className={styles.navBarText}>Compétences</p>
        </Link>
        <Link href="./Projects">
          <p className={styles.navBarText}>Projets</p>
        </Link>
        <Link href="./Contact">
          {" "}
          <p className={styles.navBarText}>Contact</p>
        </Link>
      </div>
    </div>
  );
}
