import styles from "../styles/Contact.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link"
import { UilEnvelopeEdit} from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <h1 className={styles.contactTitle}>Comment me contacter ? </h1>
        <ul className={styles.contactList}>
          <li> <UilEnvelopeEdit className={styles.contactIcons} style={{color: 'orange'}}/> <span style={{borderBottom: '1px solid black'}}>Par mail :</span> anais.adji@orange.fr</li>
          <li> <UilLinkedin className={styles.contactIcons} style={{color: 'darkBlue'}}/> <span style={{borderBottom: '1px solid black'}}>Via mon profil LinkedIn :</span> <Link className={styles.links} href='https://www.linkedin.com/in/anais-adji/'>https://www.linkedin.com/in/anais-adji/</Link></li>
          <li> <UilGithub className={styles.contactIcons}/> <span style={{borderBottom: '1px solid black'}}>Via mon profil GitHub :</span>  <Link className={styles.links} href="https://github.com/Anais1805"> Anais1805</Link></li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
