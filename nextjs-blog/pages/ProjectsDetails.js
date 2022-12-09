import styles from "../styles/ProjectsDetails.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function ProjectsDetails() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.firstContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.titles}>Résumé</h2>
          <p className={styles.resume}>
          Premier project exécuté à la Capsule, il consistait à travailler
            uniquement le frontend. Quelques interactions sont possibles : 
          </p>
          <h2 className={styles.titles}>Fonctionnalités</h2>
            <ul className={styles.itemList}>
         
           <li className={styles.items}> - Rechercher un message en entrant le nom de l'expéditeur dans la
            barre de recherche, </li>
            <li className={styles.items}> - Ajouter un message en entrant celui-ci dans
            l'input à gauche de l'écran et en cliquant sur le bouton 'Add', </li>
            <li className={styles.items}>  - Le compteur de message se met à jour à chaque nouveau message entré, </li>
            <li className={styles.items}> - Le bouton en croix permet de supprimer un message, le compteur se
            met également à jour, </li>
            <li className={styles.items}> - La date s'affiche dans le footer</li>
            </ul>
          
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.image} src='../myMails1.png'/>
          <img className={styles.image}src='../myMails2.png'/>
          
          
        </div>
        </div>
        <div className={styles.imgContainer2}>
        <img className={styles.img} src='../myMails3.png'/>
          <img className={styles.img} src='../myMails4.png'/>
      </div>
      </div>
      <Footer />
    </div>
  );
}
