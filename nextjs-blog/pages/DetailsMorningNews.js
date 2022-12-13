import styles from "../styles/ProjectsDetails.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

export default function DetailsMorningNews() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.firstContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.titles}>Résumé</h2>
            <p className={styles.resume}>
              MorningNews est une app web qui permet de consulter l'ensemble des
              grands titres
              des derniers articles sortis de la revue <i>The Verge</i>,
              articles fournis via une API. Le site permet également un système
              d'inscription et de connexion afin de pouvoir
              sauvegarder en favoris les articles soulevant un intérêt pour le
              lecteur.
            </p>
            <h2 className={styles.titles}>Fonctionnalités</h2>
            <ul className={styles.itemList}>
              <li className={styles.items}>
                {" "}
                - Afficher les grands titres des articles du journal{" "}
                <i>The Verge</i> à l'aide des données fournies par une API
                (requête GET),{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - S'inscrire et se connecter (requêtes POST),{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Sauvegarder ou supprimer les grands titres des articles dans
                ses favoris via le store et Redux ,{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Masquer ou voir certains articles au clic sur l'icône oeil.{" "}
              </li>
            </ul>
            <div className={styles.APIandDeploy}>
              <div className={styles.API}>
                <h2 className={styles.titles} style={{ marginTop: "0vw" }}>
                  API utilisée
                </h2>
                <Link className={styles.link} href="https://newsapi.org">
                  https://newsapi.org
                </Link>
              </div>
              <div className={styles.API}>
                <h2 className={styles.titles} style={{ marginTop: "0vw" }}>
                  Site déployé
                </h2>
                <Link
                  className={styles.link}
                  href="https://morningnewsfront-anais1805.vercel.app"
                >
                  https://morningnewsfront-anais1805.vercel.app
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img className={styles.image} src="../MorningNews1.png" />
            <img className={styles.image} src="../MorningNews2.png" />
          </div>
        </div>
        <div className={styles.imgContainer2}>
          <img className={styles.img} src="../MorningNews3.png" />
          <img className={styles.img} src="../MorningNews4.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
