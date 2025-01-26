import React from "react";
import styles from "./body.module.css";
import hyba2 from "../../../public/assets/myPic/hyba2.jpeg";
import ReactTypingEffect from "react-typing-effect";

const Body = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hiba</h1>
        <div className={styles.textEffect}>
          <ReactTypingEffect
            speed={200}
            typingDelay={500}
            eraseDelay={2000}
            eraseSpeed={100}
            text={[
              "I am a",
              "Software Engineer",
              "Decision Maker",
              "Web Developer",
              
            ]} 
          />
        </div>
        <a className={styles.contactBtn} href="mailto:bouslahihiba55@gmail.com">
          Contact me
        </a>
      </div>

      <div>
        <img className={styles.bodyImg} src={hyba2} alt="Hiba" />
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Body;
