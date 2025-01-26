import React from 'react';
import styles from './experience.module.css';
import skills from '../../data/skills.json';
import experiences from '../../data/experience.json';

const Experience = () => {
  return (
    <section id='experience' className={styles.container}>
      <h2 className={styles.title}>Experiences</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img className={styles.logo} src={skill.imageSrc} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {experiences.map((exp, id) => (
            <li key={id} className={styles.historyItem}>
              <img className={styles.logoHistory} src={exp.imageSrc} alt={`${exp.organisation} logo`} />
              <div className={styles.historyDetails}>
                <h3>{`${exp.role}, ${exp.organisation}`}</h3>
                <p>{`${exp.startDate} - ${exp.endDate}`}</p>
                <ul>
                  {exp.experiences.map((experience, id) => (
                    <li key={id} className={styles.historyItem}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;