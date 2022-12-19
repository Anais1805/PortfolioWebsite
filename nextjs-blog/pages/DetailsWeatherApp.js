import styles from "../styles/ProjectsDetails.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Link from 'next/link'

export default function DetailsWeatherApp() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.firstContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.titles}>Résumé</h2>
            <p className={styles.resume}>
              WeatherApp est une app web permettant d'afficher des cards
              météorologiques à la demande, grâce aux données collectées auprès
              d'une API. Lorsqu'une ville est ajoutée, elle est sauvegardée en
              base de données avec le temps qu'il y fait ainsi que les
              températures max et min :
            </p>
            <h2 className={styles.titles}>Fonctionnalités</h2>
            <ul className={styles.itemList}>
              <li className={styles.items}>
                {" "}
                - Ajouter la card d'une ville à l'aide de la barre de recherche
                et des données collectées auprès del'API à cette occasion, la
                ville et ses informations sont sauvegardées en base de données à
                cet instant (requête POST),{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Afficher cette nouvelle card (requête GET),{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Supprimer une card à l'aide du bouton Delete (requête DELETE),{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Intégration des fonctionnalités JS à l'aide du DOM{" "}
              </li>
            </ul>
   
<div className={styles.API} style={{textAlign: 'center', marginBottom: '6vh'}} >
            <h2 className={styles.titles} style={{marginTop: '0vw'}}>API utilisée</h2>
            <Link className={styles.link} href='https://openweathermap.org/'>https://openweathermap.org</Link>
            </div>

          </div>
          <div className={styles.imgContainer}>
            <img className={styles.image} src="../WeatherApp1.png" />
            <img className={styles.image} src="../WeatherApp1b.png" />
          </div>
        </div>
        <div className={styles.imgContainer2}>
          <img className={styles.img} src="../WeatherApp2.png" />
          <img className={styles.img} src="../WeatherApp3.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
