import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { UilStar } from "@iconscout/react-unicons";
function Home() {
  const dev = "Développeuse Fullstack Junior Web & Mobile";
  return (
    <div className={styles.container}>
      <div className={styles.profilePictureInner}>
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
        <div className={styles.leftPicture}>
          <h1 className={styles.pictureText}>
            Anaïs <br />
            <span style={{ marginLeft: "5vw" }}>Adji</span>
          </h1>
        </div>
        <div
          className={styles.profilePictureBack}
          style={{
            backgroundSize: "115%",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "50%",
            
          }}
        ></div>
        <div className={styles.devp}>
          <div className={styles.starBox}>
            <div className={styles.starInner}>
              <div className={styles.star}>
                <UilStar style={{ width: "2vw", height: "2vw" }} />
              </div>
            </div>
          </div>
          <p> {dev.toUpperCase()} </p>
          <div className={styles.starBox}>
            <div className={styles.starInner}>
              <div className={styles.star}>
                <UilStar  style={{ width: "2vw", height: "2vw" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.subsection}>
        <h1 className={styles.cardTitles}>Qui je suis</h1>
        <div className={styles.aboutMe}>
          <p className={styles.Text}>
            Après avoir enseigné 4 ans en tant que professeur agrégé de
            Philosophie au sein de l'<i>Education Nationale</i>, j'ai décidé de
            tourner cette page de ma vie professionnelle et de me reconvertir
            afin de relever de nouveaux challenges. Après dicussions et
            recherches, mon dévolu s'est jeté sur une voie des plus
            passionnantes entre toutes car en perpétuelle évolution :
          </p>

          <p className={styles.dev}>Le développement web.</p>

          <p className={styles.Text}>
            Pour ce faire, je me suis initiée à mes premières lignes de code sur
            le site{" "}
            <Link href="https://www.codecademy.com/">
              <span className={styles.link}>Codecademy</span>
            </Link>{" "}
            puis j'ai suivi une formation intensive au coding bootcamp{" "}
            <Link href="https://www.lacapsule.academy/formation-developpeur-web/full-time?source=adwords&campaign=brand&k=la%20capsule&matchtype=b&ads=615960534476&device=c&utm_term=la%20capsule&utm_campaign=Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=5017504832&hsa_cam=18012104777&hsa_grp=141422185353&hsa_ad=615960534476&hsa_src=g&hsa_tgt=kwd-313058671169&hsa_kw=la%20capsule&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiA7bucBhCeARIsAIOwr--BB4Qm1nNzHO3YebvP5Ue_T6nYmdvAqnOQUNOVfSgGC7hBtMgROGsaAqfkEALw_wcB">
              <span className={styles.link}>La Capsule</span>
            </Link>{" "}
            à Paris. Celle-ci m'a permise de monter en{" "}
            <Link href="./Skills">
              <span className={styles.internalLinks}>compétences</span>
            </Link>
            , de réaliser des{" "}
            <Link href="./Projects">
              {" "}
              <span className={styles.internalLinks}>projets</span>
            </Link>{" "}
            et de me passionner pour divers langages comme React Native. A
            l'issue de ma formation en novembre 2022, j'ai obtenu un titre RNCP
            de niveau 6 de{" "}
            <strong>
              "Chef de projet de développement d'applications web & mobile".
            </strong>
            <br />
            <br />
            Je suis actuellement à la recherche d'une première expérience
            professionnelle en tant que{" "}
            <span style={{ fontWeight: "bold", color: "rgb(224, 148, 6)" }}>
              développeuse Fullstack Junior
            </span>{" "}
            .
          </p>
        </div>
        </div>
      </div>

      <div className={styles.section}>
        <h1 className={styles.cardTitles}>Mes valeurs</h1>
        <div className={styles.aboutMe}>
          <p className={styles.Text}>
            Je suis une personne <span className={styles.dev}>sérieuse</span> et{" "}
            <span className={styles.dev}>rigoureuse</span>,{" "}
            <span className={styles.dev}>honnête</span> et
            <span className={styles.dev}> droite</span> qui aime la technicité
            et le <span className={styles.dev}>dépassement de soi</span> qu’il
            soit physique ou intellectuel.
            <br />
            <br />
            Toujours <span className={styles.dev}>enthousiaste</span> à l'idée
            de découvrir de nouvelles choses, j'aime autant approfondir mes
            acquis que les
            <span className={styles.dev}> remettre en question</span>.
            <br />
            <br />
            J'ai également à coeur de concourir à la formation d'un monde{" "}
            <span className={styles.dev}>
              plus équitable et plus juste
            </span>{" "}
            pour les générations futures.
          </p>
        </div>
      </div>

      <div className={styles.section2}>
        <h1 className={styles.cardTitles}>Mes passions</h1>
        <div className={styles.aboutMe}>
          <div className={styles.Text2}>
            <p>
              L'<span className={styles.dev}>Athlétisme</span> de demi-fond, La
              <span className={styles.dev}> Paléographie, </span>
              <br />
              <br />
              L'Histoire de l'
              <span className={styles.dev}>Alpinisme, </span>
              Le <span className={styles.dev}>Violon, </span>
              <br />
              <br />
              Les <span className={styles.dev}>Langues Orientales </span>
              ... et bien d'autres choses !
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
