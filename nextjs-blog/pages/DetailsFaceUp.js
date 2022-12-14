import styles from "../styles/ProjectsDetails.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

import React from "react";
import ReactPlayer from "react-player";

export default function DetailsFaceUp() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.firstContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.titles}>Résumé</h2>
            <p className={styles.resume} >
              FaceUp est une app mobile développée en React Native. Elle de se
              créer un profil grâce à son email et de prendre des photos
              (orientation front ou back, avec ou sans flash). Une fois prises,
              celles-ci sont sauvegardées à la fois sur la mémoire locale du
              téléphone et sur le CDN cloudinary.
            </p>
            <h2 className={styles.titles}>Fonctionnalités</h2>
            <ul className={styles.itemList} >
              <li className={styles.items}>
                {" "}
                - Prendre des photos à partir de son smartphone,{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Stocker dans le store ces photos via Redux et les conserver
                dans la mémoire locale du téléphone via AsyncStorage{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Les afficher dans l'écran 'gallery',{" "}
              </li>
              <li className={styles.items}>
                {" "}
                - Sauvegarder les photos prises sur le CDN Cloudinary,{" "}
              </li>
              <li className={styles.items}> - Supprimer ces photos, </li>
            </ul>
          </div>
          <div className={styles.imgContainer}>
            <ReactPlayer url="https://res.cloudinary.com/anais1805/video/upload/v1671010211/FaceUp_lprepd.mp4" controls width={650} height={635} />
          </div>
        </div>
        <div className={styles.imgContainer2} style={{height:'90vh', width: '90vw', margin: '0 auto' }}>
          <img className={styles.img} style={{height:'90vh', width: '90vw', marginBottom: '2vh'}} src="../Cloudinary.png" />
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
