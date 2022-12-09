import styles from '../styles/ProjectsCards.module.css'
import Link from 'next/link'


export default function ProjectsCards(props) {
  return (
    <div className={styles.projectCards}>
      <div className={styles.projects}>
        <div className={styles.projectsInner}>
          <div className={styles.projectsFront}>
            <h2>{props.titleFront}</h2>
          </div>
          <div className={styles.projectsBack}>
            <p className={styles.titleBack}>{props.titleBack}</p>
            <p className={styles.desc}>{props.desc}</p>
            <p className={styles.tech}><span className={styles.titleBack}>{props.technos}</span>{props.tech}</p>
            <Link href={props?.reff}><p className={styles.infos}>{props.infos}</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
