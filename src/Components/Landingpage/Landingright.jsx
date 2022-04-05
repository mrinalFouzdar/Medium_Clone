import React from "react";
import styles from "../../styles/Landingpage.module.css";

export const Landingright = () => {
  let topics = [
    "self",
    "Relationship",
    "Data Science",
    "Programming",
    "Productvity",
    "JavaScript",
    "Machine Learning",
    "Poltics",
    "Health",
  ];
  return (
    <div className={styles.landingPageBottom_div_right}>
      <h5>DISCOVER MORE OF WHAT MATTERS TO YOU</h5>
      <div className={styles.landingPageBottom_div_right_bottom}>
        {topics.map((item, idx) => {
          return (
            <div className={styles.topic_right} key={idx}>
              {item}
            </div>
          );
        })}
      </div>
      <div className={styles.footer_landing}>
        <p>Help</p>
        <p>Status</p>
        <p>Writers</p>
        <p>Blog</p>
        <p>Careers</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>About</p>
        <p>Knowledge</p>
      </div>
    </div>
  );
};
