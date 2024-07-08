import React, { useContext } from "react";
import styles from "../Skills/Skills.module.css";
import SkiilsList from "../../common/SkiilsList";
import checkMarkdark from "../../assets/checkmark-dark.svg";
import checkMarklight from "../../assets/checkmark-light.svg";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarklight : checkMarkdark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">skills</h1>
      <div className={styles.skillList}>
        <SkiilsList src={checkMarkIcon} skill="HTML" />
        <SkiilsList src={checkMarkIcon} skill="CSS" />
        <SkiilsList src={checkMarkIcon} skill="Java Script" />
        <SkiilsList src={checkMarkIcon} skill="Type Script" />
        <SkiilsList src={checkMarkIcon} skill="Web APi" />
        <SkiilsList src={checkMarkIcon} skill="React, React Hooks" />
        <SkiilsList src={checkMarkIcon} skill="React Hooks" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkiilsList src={checkMarkIcon} skill="Node.js" />
        <SkiilsList src={checkMarkIcon} skill="Express" />
        <SkiilsList src={checkMarkIcon} skill="Mongo DB" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkiilsList src={checkMarkIcon} skill="Bootstrap" />
        <SkiilsList src={checkMarkIcon} skill="Material UI" />
        <SkiilsList src={checkMarkIcon} skill="Materialize" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkiilsList src={checkMarkIcon} skill="Git" />
        <SkiilsList src={checkMarkIcon} skill="GitHub" />
        <SkiilsList src={checkMarkIcon} skill="VS code" />
      </div>
    </section>
  );
}

export default Skills;
