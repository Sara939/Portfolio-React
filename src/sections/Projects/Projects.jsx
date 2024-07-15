import styles from "../Projects/Projects.module.css";
import ProjectsCard from "../../common/ProjectsCard";
import TechShare from "../../assets/TechShare1.png";
import GetInspired from "../../assets/GetInspired1.png";
import DreamyTrips from "../../assets/DreamyTrips1.png";
import CellRa from "../../assets/CellRa1.png";

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/* /*for each loop/* */}
        <ProjectsCard
          src={TechShare}
          link="https://github.com/Sara939/techshare"
          h3="TechShare"
          p="Channels Sharing Platform"
        />
        <ProjectsCard
          src={GetInspired}
          link="https://github.com/Sara939/Get-Inspired"
          h3="Get Inspired"
          p="Daily Inspirational quotes App"
        />
        <ProjectsCard
          src={DreamyTrips}
          link="https://github.com/Sara939/project-d-s-dreamy-trips"
          h3="Dreamy Trips"
          p="Guide App-must visit destinations around the world"
        />
        <ProjectsCard
          src={CellRa}
          link="https://github.com/Sara939/devices-project"
          h3="CellRa"
          p="Radiation from mobile devices"
        />
      </div>
    </section>
  );
}

export default Projects;
