import styles from "../styles/Home.module.css";

function Home() {
  var today = new Date();
  const weekday = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.navBar}>
          <p className={styles.navBarText}>Profil</p>
          <p className={styles.navBarText}>Projets</p>
          <p className={styles.navBarText}>Compétences</p>
          <p className={styles.navBarText}>Contact</p>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.firstSection}>
          <div className={styles.aboutMe}>
            <h1>Qui je suis</h1>
            <p className={styles.aboutMeText}>
              Après avoir enseigné 4 ans en tant que professeur agrégé de
              Philosophie au sein de l'<i>Education Nationale</i>, j'ai décidé de
              tourner cette page de ma vie professionnelle et de reconvertir
              afin de relever de nouveaux challenges. Après dicussions et
              recherches, mon dévolu s'est jeté sur une voie des plus
              passionnantes entre toutes car en perpétuelle évolution :
              <br />
              <strong>Le développement web.</strong>
              <br />
              <br />
              Pour ce faire, je me suis initiée à mes premières lignes de code
              sur le site <strong><i>Codecademy</i></strong>  puis j'ai suivi une formation intensive au
              coding bootcamp <strong><i>La Capsule</i></strong>  à Paris. Celle-ci m'a permise de monter
              en compétences et de me passionner pour divers langages comme
              React Native. A l'issue de ma formation en novembre 2022, j'ai
              obtenu un titre RNCP de niveau 6 de <strong>"Chef de projet de
              développement d'applications web & mobile".</strong> 
              <br />
              <br />
              Je suis actuellement à la recherche d'une première expérience
              professionnelle en tant que <strong>développeuse Fullstack Junior</strong> .
            </p>
          </div>
          <div className={styles.valuesAndPassions}>
          <div className={styles.myValues}>
            <h2>Mes valeurs</h2>
            <p className={styles.valuesText}>
              Je suis une personne sérieuse et rigoureuse, honnête et droite qui
              aime la technicité et le dépassement de soi qu’il soit physique ou
              intellectuel.
              <br />
              <br />
              Toujours enthousiaste à l'idée de découvrir de nouvelles choses,
              j'aime autant approfondir mes acquis que les remettre en question.
              <br />
              <br />
              J'ai également à coeur de concourir à la formation d'un monde plus
              équitable et plus juste pour les générations futures.
            </p>
          </div>
          <div className={styles.passionsSection}>
          <h2>Mes passions</h2>
          <ul className={styles.passionsText}>
            <li>L'Athlétisme de demi-fond</li>
            <li>La Paléographie</li>
            <li>L'Histoire de l'Alpinisme</li>
          </ul>
          <ul>
            <li>Le Violon</li>
            <li>Les Langues Orientales</li>
            <li>... et bien d'autres choses !</li>
          </ul>
        </div>
        </div>
          <div
            className={styles.profilePicture}
            style={{ backgroundImage: "url(/La-CAPSULE_07-09-2022-520HD.jpg)" }}
          ></div>
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.footerText}> Fait par Anais1805 - Nous sommes le {weekday[today.getDay()]} {today.getDate()}/{today.getMonth()}/{today.getFullYear()} - {today.getHours()}:{today.getMinutes()}</p>
      </div>
    </div>
  );
}

export default Home;
