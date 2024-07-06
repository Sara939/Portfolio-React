import styles from "../ME/Me.module.css";
import meImg from "../../assets/me.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubdark from "../../assets/github-dark.svg";
import githublight from "../../assets/github-light.svg";
import linkdindark from "../../assets/linkedin-dark.svg";
import linkdinlight from "../../assets/linkedin-light.svg";
import facebooklight from "../../assets/facebook-light.svg";
import facebookdark from "../../assets/facebook-dark.svg";

import CV from "../../assets/Sara Likaount -  Web Developer.pdf";
import { useTheme } from "../../common/ThemeContext";

function Me() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  const linkdinIcon = theme === "light" ? linkdinlight : linkdindark;
  const githubIcon = theme === "light" ? githublight : githubdark;
  const facebookIcon = theme === "light" ? facebooklight : facebookdark;

  return (
    <section id="me" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.me} src={meImg} alt="profile picture of me" />
        <img
          src={themeIcon}
          alt="color mode icon"
          className={styles.colorMode}
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sara <br />
          Likaount
        </h1>
        <h2>Full-Stack Developer</h2>
        <span>
          <a href="www.linkdin/saralikaount" target="_blank">
            <img src={linkdinIcon} alt="linkdin icon" />
          </a>
          <a href="https://github.com/Sara939" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://www.facebook.com/sara.likaount" target="_blank">
            <img src={facebookIcon} alt="facebook icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about developing modern React web apps for commercial
          businesses & looking for learning new technologies and grow my
          skillset.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Me;
