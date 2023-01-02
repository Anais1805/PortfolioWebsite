import styles from "../styles/ProjectsDetails.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

export default function DetailsMyMoviz() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.firstContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.titles}>Résumé</h2>
            <p className={styles.resume}>
              MyMoviz est une app web qui permet de consulter les dernières
              sorties cinémas renseignées à l'aide d'une API, de voir la moyenne
              de leurs évaluations, de les noter, les liker et les déplacer dans
              une wishlist.
            </p>
            <h2 className={styles.titles}>Fonctionnalités</h2>
            <ul className={styles.itemList}>
              <li className={styles.items}>
                {" "}
                - Afficher les dernières sorties cinématographiques à l'aide des
                données fournies par une API, notamment la note moyenne (étoiles
                jaunes) reçue par ce film depuis sa sortie par les spectateurs
                (requête GET),{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Noter le film en question (ligne des étoiles bleues),{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Indiquer si vous avez déjà vu le film ou non en cliquant sur
                l'icône de la caméra,{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Liker le film avec l'icône en forme de coeur, ce qui place le
                film dans votre wishlist{" "}
              </li>
            </ul>
            <div className={styles.APIandDeploy}>
              <div className={styles.API} >
                <h2 className={styles.titles}>
                  API utilisée
                </h2>
                <Link
                  className={styles.link}
                  href="https://www.themoviedb.org/movie"
                >
                  https://www.themoviedb.org/movie
                </Link>
              </div>
              <div className={styles.titlesDeploy}>
                <h2 className={styles.titles} >
                  Site déployé
                </h2>
                <Link
                  className={styles.link}
                  href="https://mymovizfront-u4o2-n6zaji8l6-anais1805.vercel.app"
                >
                  https://mymovizfront-u4o2-n6zaji8l6-anais1805.vercel.app
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img className={styles.image} src="../MyMoviz1.png" />
            <img
              className={styles.image}
              style={{ width: "35%", height: "45%" }}
              src="../MyMoviz2.png"
            />
          </div>
        </div>
        <div className={styles.imgContainer2}>
          <img className={styles.img} src="../MyMoviz3.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
