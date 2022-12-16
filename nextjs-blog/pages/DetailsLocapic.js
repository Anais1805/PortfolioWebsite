import styles from "../styles/ProjectsDetails.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

import React from 'react'
import ReactPlayer from 'react-player'

export default function DetailsLocapic() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.firstContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.titles}>Résumé</h2>
            <p className={styles.resume}>
              Locapic est une app mobile développée en React Native. Elle permet
              à la fois de se géolocaliser mais aussi d'enregistrer des lieux
              d'intérets en base de données et de les nommer en appliquant une
              simple pression sur l'écran à l'endroit voulu. Elle permet
              également de marquer des destinations via une recherche par nom de
              ville et d'en récupérer les coordonnées à l'aide d'une API.
            </p>
            <h2 className={styles.titles}>Fonctionnalités</h2>
            <ul className={styles.itemList}>
              <li className={styles.items}>
                {" "}
                - Se géolocaliser,{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Enregistrer en base de données des lieux d'intérêts en récupérant leur coordonnées, soit via une pression sur la carte à l'endroit désiré, soit en entrant le nom de la ville rechercher sur l'écran 'Places',{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Supprimer une destination enregistrée (icône de corbeille sur l'écran 'Places'),{" "}
              </li>
        
            </ul>

            <div
              className={styles.API}
              style={{ textAlign: "center", marginBottom: "6vh" }}
            >
              <h2 className={styles.titles} style={{ marginTop: "0vw" }}>
                API utilisée
              </h2>
              <Link className={styles.link} href="https://adresse.data.gouv.fr/api-doc/adresse">
              https://adresse.data.gouv.fr/api-doc/adresse
              </Link>
            </div>
          </div>
          <div className={styles.imgContainer}>
      
    <ReactPlayer className={styles.video} url='https://res.cloudinary.com/anais1805/video/upload/v1671024250/Locapic_zr1rxl.mp4' controls width={360} height={500} style={{marginTop: '2vh', marginBottom: '2vh', marginLeft: 'auto', marginRight: 'auto'}}/>
            
          </div>
        </div>
      
      </div>
      <Footer />
    </div>
  );
}
