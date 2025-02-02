import React from 'react';
import styles from './contact.module.css';
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <MdEmail className={styles.icon} /> 
            <a href="mailto:bouslahihiba55@gmail.com" className={styles.linkText}>bouslahihiba55@gmail.com</a>
          </li>
          <li className={styles.link}> 
            <BsLinkedin className={styles.icon} /> 
            <a href="https://www.linkedin.com/in/hiba-bouslahi-44b84b197/" className={styles.linkText}>linkedin.com/in/hiba-bouslahi</a>
          </li>
          <li className={styles.link}> 
            <FaGithub className={styles.icon} /> 
            <a href="https://github.com/hyba22" className={styles.linkText}>github.com/hyba22</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;