import styles from "../styles/Projects.module.css";
import Header from "./Header";
import Footer from "./Footer";
import ProjectsCards from "./ProjectsCards";
import { lastProject, projectsSchoolData, persoProject } from "../data/projectsData";


export default function Projects() {
  const projectData = projectsSchoolData.map((data, i) => {
    return (
      console.log( 'DATA', data.reff),
      <ProjectsCards
        key={i}
        titleFront={data.titleFront}
        titleBack={data.titleBack}
        desc={data.text}
        technos={data.technos}
        tech={data.tech}
        infos={data.infos}
        reff={data?.reff}
      />
    );
  });

  const theLastProject = lastProject.map((data, i) => {
    
    return( 
      console.log( 'DATA1', data.reff),
    <ProjectsCards
    
      key={i}  
      titleFront={data.titleFront}
      titleBack={data.titleBack}
      desc={data.text}
      technos={data.technos}
      tech={data.tech}
      infos={data.infos}
      reff={data?.reff}
      />)
  })

  const myProjects = persoProject.map((data, i) => {
    return (
      console.log( 'DATA2', data.reff),
    <ProjectsCards
      key={i}  
      titleFront={data.titleFront}
      titleBack={data.titleBack}
      desc={data.text}
      technos={data.technos}
      tech={data.tech}
      infos={data.infos}
      reff={data?.reff}
      />)
  })
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <h2 className={styles.sectionTitles}>Projet de formation <br/>La Capsule</h2>
        <div className={styles.schoolProjects}>{projectData}</div>
        <h2 className={styles.sectionTitles}>Projet de fin de batch</h2>
        <div className={styles.schoolProjects}>{theLastProject}</div>
        <h2 className={styles.sectionTitles}>Projets personnels</h2>
        <div className={styles.schoolProjects}>{myProjects}</div>
      </div>
      <Footer />
    </div>
  );
}
