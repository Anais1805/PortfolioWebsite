import styles from "../styles/ProjectsDetails.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

export default function DetailsSpeakerShop() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.firstContainer} >
          <div className={styles.textContainer} style={{'height': '70vh'}}>
            <h2 className={styles.titles}>Résumé</h2>
            <p className={styles.resume}>
              SpeakerShop est une application React web frontend qui reproduit
              la page d'acceuil du site Devialet. Son intérêt consistait surtout
              à tester ma capacité à reproduire fidèlement la maquette fournie
              d'un site web.
            </p>
            <h2 className={styles.titles}></h2>
            {/* <ul className={styles.itemList}>
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
            </ul> */}
              <div
              className={styles.titlesDeploy}
              style={{ textAlign: "center", marginBottom: "6vh" }}
            >
              <h2 className={styles.titles} style={{ marginTop: "-2vw", marginBottom: '2vh' }}>
                Site déployé
              </h2>
              <Link style={{fontSize: '18px'}} className={styles.link} href="https://speaker-shop-react-front-ckdg.vercel.app/">
              https://speaker-shop-react-front-ckdg.vercel.app/
              </Link>
            </div>
       
          </div>
          <div className={styles.imgContainer}>
            <img className={styles.image} src="../SpeakerShop1.png" />
            <img
              className={styles.image}
             
              src="../SpeakerShop2.png"
            />
          </div>
        </div>
        <div
          className={styles.imgContainer2}
          
        >
          <img
            className={styles.img}
           
            src="../SpeakerShop3.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
