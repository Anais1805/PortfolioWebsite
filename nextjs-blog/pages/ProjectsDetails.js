import styles from "../styles/ProjectsDetails.module.css";
import Header from './Header'
import Footer from './Footer'

export default function ProjectsDetails() {
  return (
    <div className={styles.container}>
    <Header/>
      <div className={styles.main}>
        <div className={styles.textContainer}>

        </div>
        <div className={styles.imgContainer}>
            
        </div>
      </div>
      <Footer/>
    </div>
  );
}
