import React from "react";
import styles from "./about.module.css";
import { SlCursor } from "react-icons/sl";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <SlCursor className={styles.itemIcon} />
            <div className={styles.itemText}>
              <h2>Frontend Developer</h2>
              <p>
                I am a passionate frontend developer with expertise in building responsive and user-friendly web applications.
                I specialize in modern JavaScript frameworks like React and Angular, and I have a strong understanding of HTML, CSS, and JavaScript.
                My goal is to create seamless and engaging user experiences that align with the latest design trends and best practices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <SlCursor className={styles.itemIcon} />
            <div className={styles.itemText}>
              <h2>Backend Developer</h2>
              <p>
                As a backend developer, I have extensive experience in designing and implementing robust server-side solutions.
                I am proficient in Node.js, Spring boot, and Java. I have worked with databases like MongoDB, MySQL, and PostgreSQL.
                I focus on writing clean, scalable, and efficient code to ensure optimal performance and security for web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <SlCursor className={styles.itemIcon} />
            <div className={styles.itemText}>
              <h2>UI Designer</h2>
              <p>
                I am a creative UI/UX designer with a passion for crafting intuitive and visually appealing interfaces.
                I have designed multiple landing pages, focusing on user-centered design principles.
                My expertise includes wireframing, prototyping, and using tools like Figma to bring ideas to life.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <SlCursor className={styles.itemIcon} />
            <div className={styles.itemText}>
              <h2>Full Stack Developer</h2>
              <p>
                I am a full-stack developer with a strong foundation in both frontend and backend technologies.
                I have experience building end-to-end web applications using frameworks like React and Angular.
                My ability to seamlessly integrate frontend and backend systems allows me to deliver comprehensive and efficient solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;