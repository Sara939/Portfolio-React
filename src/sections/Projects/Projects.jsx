import React from "react";
import styles from "../Projects/Projects.module.css";
import ProjectsCard from "../../common/ProjectsCard";
import TechShare from "../../assets/TechShare.png";
import GetInspired from "../../assets/GetInspired.jpg";
import DreamyTrips from "../../assets/DreamyTrips.png";
import CellRa from "../../assets/CellRa.jpg";

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
          p="Guide App -must visit destinations around the world"
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
