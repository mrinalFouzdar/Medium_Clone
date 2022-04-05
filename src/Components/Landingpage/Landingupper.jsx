import React from "react";
import styles from "../../styles/Landingpage.module.css";

export const Landingupper = () => {
  // console.log(styled);
  // console.log(<Button />);
  return (
    <div className={styles.lu1}>
      <div className={styles.lu2}>
        <div className={styles.lu3}>
          <div>
            <h2 className={styles.lu411}>Stay curious</h2>
          </div>
          <div>
            <h3 className={styles.lu422}>
              Discover stories, thinking, and expertise from writers on any
              topic.
            </h3>
          </div>
          <div>
            <button className={styles.btn1}>Start Reading</button>
          </div>
        </div>
        <div className={styles.lu4}></div>
      </div>
    </div>
  );
};
