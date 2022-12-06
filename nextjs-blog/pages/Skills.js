import styles from "../styles/Skills.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { UilHtml5 } from '@iconscout/react-unicons'
import { UilCss3Simple } from '@iconscout/react-unicons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-solid-svg-icons';
import {SiJavascript, SiHtml5, SiCss3, SiReact, SiRedux, SiTypescript, SiExpo, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si';
export default function Skills() {
  return (
  
     
      <div className={styles.container}>
      <Header/>
      <div className={styles.main}>
        <div className={styles.hardSkillsFront}>
            <h2>Hard Skills</h2>
            <h3>Frontend</h3>
            <h4 style={{margin: 0, marginBottom: '2vh'}}>Langages & Frameworks</h4>
            <ul>
                <li> <SiHtml5 style={{color: 'orange'}}/> HTML5</li>
                <li> <SiCss3 style={{color: 'blue'}}/> CSS3</li>
                <li><SiJavascript style={{color: 'gold'}}/> JavaScript</li>
                <li> <SiReact style={{color: 'lightblue'}}/> React</li>
                <li> <SiReact style={{color: 'lightblue'}}/> React Native</li>
                <li><SiNextdotjs/> NextJS</li>
                <li><SiRedux style={{color: 'purple'}}/> Redux</li>
                <li><SiTypescript style={{color: 'darkBlue'}}/> TypeScript (notions)</li>
                <li><SiExpo/> Expo</li>
            </ul>
        </div>
        <div className={styles.hardSkillsBack}>
            
            <h2 style={{marginBottom: '5vh'}}>Hard Skills</h2>
            <h3>Backend</h3>
            <h4 style={{margin: 0, marginBottom: '2vh'}}>Langages & Frameworks</h4>
            <ul>
                <li> <SiNodedotjs style={{color: 'darkGreen'}}/> NodeJS</li>
                <li><SiExpress/> Express</li> 
            </ul>
           
            <div style={{marginTop: '6vh'}}>
            <h3>Base de données</h3>
            <ul>
                <li><SiMongodb style={{color: 'green'}}/>MongoDB/noSQL</li>
            </ul>
            </div>
        </div>
        <div className={styles.softSkills}>
            <h2 style={{paddingBottom: '6vh' }}>Soft Skills</h2>
            <ul className={styles.softSkillsList}>
                <li>Fiabilité</li>
                <li>Sérieux</li>
                <li>Rigueur</li>
                <li>Sens de l'organisation</li>
                <li>Adaptabilité</li>
                <li>Avide d'apprentissage</li>
                <li>Haute capacité rédactionnelle</li>
                <li>Argumentation</li>
                <li>Ecoute active</li>
                <li> Prise de parole</li>
            </ul>
            
        </div>
      </div>
      <Footer/>
      </div>
     
  )
}
