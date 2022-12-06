import styles from '../styles/Header.module.css'

export default function Header () {
    return (<div>
         <div className={styles.header}>
        <div className={styles.navBar}>
          <p className={styles.navBarText}>Profil</p>
          <p className={styles.navBarText}>Projets</p>
          <p className={styles.navBarText}>Compétences</p>
          <p className={styles.navBarText}>Contact</p>
        </div>
      </div>
    </div>)
}