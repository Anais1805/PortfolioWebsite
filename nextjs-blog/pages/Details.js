import styles from '../styles/Details.module.css'

export default function Details(props) {
    return (
        <div className={styles.main}>
        <div className={styles.firstContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.titles}>Résumé</h2>
          <p className={styles.resume}>
          {props.resume}
          </p>
          <h2 className={styles.titles}>Fonctionnalités</h2>
            <ul className={styles.itemList}>
         
           <li className={styles.items}> {props.funct1} </li>
            <li className={styles.items}> {props.funct2}</li>
            <li className={styles.items}> {props.funct3} </li>
            <li className={styles.items}> {props.funct4}</li>
            <li className={styles.items}> {props.funct5}</li>
            </ul>
          
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.image} src={props.img1}/>
          <img className={styles.image} src={props.img2}/>
          
          
        </div>
        </div>
        <div className={styles.imgContainer2}>
        <img className={styles.img} src={props.img3}/>
          <img className={styles.img} src={props.img4}/>
      </div>
      </div>
    )
}
