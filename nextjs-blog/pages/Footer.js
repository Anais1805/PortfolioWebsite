import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { UilGithub } from "@iconscout/react-unicons";

export default function Footer() {
  var today = new Date();
  const weekday = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>
        {" "}
        Fait par{" "}
        <Link className={styles.gitHubLink} href="https://github.com/Anais1805">
          Anais1805{" "}
        </Link>
      </p>
      <UilGithub
        style={{ width: "3vw", height: "3vh", marginBottom: "0.5vh" }}
      ></UilGithub>
      <p className={styles.footerText}>
        {" "}
        - Nous sommes le {weekday[today.getDay()]} {today.getDate()}/
        {today.getMonth()}/{today.getFullYear()} - {today.getHours()}:
        {today.getMinutes()}
      </p>
    </div>
  );
}
