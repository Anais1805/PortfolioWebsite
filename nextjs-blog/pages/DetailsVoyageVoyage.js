import styles from "../styles/ProjectsDetails.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

import React from "react";
import ReactPlayer from "react-player";

export default function DetailsVoyageVoyage() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.firstContainer}>
          <div className={styles.textContainer} >
            <h2 className={styles.titles}>Résumé</h2>
            <p className={styles.resume} style={{'marginTop': '1vh'}}>
              VoyageVoyage est l'application que j'ai développée from scratch en
              fin de formation avec 3 camarades. Il s'agit d'une
              application mobile développée en React Native. Celle-ci a pour but
              de répondre à un manque et à un besoin : celui d'organiser
              nos journées de vacances. En effet, souvent nous
              manquons de temps pour nous y consacrer en amont et passons à côté
              de beaucoup de choses. VoyageVoyage permet de générer des journées
              pré-organisées
            </p>
            <h2 className={styles.titles}>Fonctionnalités</h2>
            <ul className={styles.itemList} style={{'marginTop': '3vh'}}>
              <li className={styles.items}>
                {" "}
                - Consulter les activités, restaurants et randonnées sur une
                destination saisie (informations récupérées via l'API),{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - S'inscrire de manière sécurisée (token, hashage du mdp) en
                renseignant ses préférences comme son budget, mode de
                déplacement, etc., puis se connecter avec son profil.{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Générer une journée organisée sur une destination avec une ou deux
                activités et deux restaurants. Possibilité de réactualiser la
                recherche pour générer une nouvelle journée,{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Enregistrer une journée dans ses réservations (store,
                AsyncStorage), la planifier sur une date puis l'enregistrer en base de données.{" "}
              </li>

            </ul>

            <div
              className={styles.API}
              style={{ textAlign: "center", marginBottom: "6vh" }}
            >
              <h2 className={styles.titles} style={{ marginTop: "0vw" }}>
                API utilisée
              </h2>
              <Link
                className={styles.link}
                href="https://opentripmap.io/product"
              >
                https://opentripmap.io/product
              </Link>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <ReactPlayer
              url="https://res.cloudinary.com/anais1805/video/upload/v1671011457/Voyage2c-1_dtml44.mov"
              controls
              width={360} height={500} style={{marginTop: '2vh', marginBottom: '2vh', marginLeft: 'auto', marginRight: 'auto'}}
            />
          </div>
        </div>

        <div className={styles.imgContainer2}>
          <img className={styles.img}  src="./VoyageBDD1.png" />
          <img className={styles.img}  src="./VoyageVoyage4.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
