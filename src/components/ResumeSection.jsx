// components/ResumeSection.js
import  React from 'react';
import styles from '../index.css';

const ResumeSection = () => {
  return (
    <div className={styles.resumeSection}>
      <p>
        <span className={styles.highlight}>Master of Biomedical Engineering</span> | <b>Imperial College London</b> | GPA: On track for 2:1 Second Upper Class
      </p>
      <br />
      <h1><b>Leadership Experience</b></h1>
      <p>
        🏢 Head of Portfolio Management & TMT | Imperial College Investment Society QT Capital Fund
        Managed a 20K GBP portfolio, leading a team of 9 sector heads and senior research analysts. Achieved 16% PnL in under 4 months. Utilized Excel VBA and Python for macro analysis strategy backtesting and weekly market updates.
      </p>
      <br />
      <h1><b>Let's Connect!</b></h1>
      <p>
        I'm open to exciting opportunities and collaborations in the intersection of Biomedical Engineering, Data Science, and Finance. Feel free to reach out via email or LinkedIn .
      </p>
    </div>
  );
};

export default ResumeSection;
