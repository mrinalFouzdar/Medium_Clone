import React from "react";
import styles from "../../styles/Landingpage.module.css";
import ti1 from "../../styles/Image/t1.jpeg";
import ti2 from "../../styles/Image/t2.jpeg";
import ti3 from "../../styles/Image/t4.png";
import ti4 from "../../styles/Image/t3.jpeg";
import ti5 from "../../styles/Image/t5.jpeg";

import ti6 from "../../styles/Image/t6.jpeg";

export const Landingtrending = () => {
  var tim = [ti1, ti2, ti3, ti4, ti5, ti6];
  let trending = [
    {
      id: 1,
      img: tim[0],
      name: "Tim wise",
      des: "Will Smith, Chris Rock, and What You’re Missing About That Slap",
      time: "Mar 30 . 7 min read ",
    },
    {
      id: 2,
      img: tim[1],
      name: "Sanjiva Weerawarana",
      des: "Next steps for Sri Lanka — What is the change we want (and can have)?",
      time: "Apr 1 · 1 min read",
    },
    {
      id: 3,
      img: tim[2],
      name: "Arthur Hayes",
      des: "Five Ducking Digits",
      time: "Apr 1·24 min read",
    },
    {
      id: 4,
      img: tim[3],
      name: "Lak Lakshmanan",
      des: "Why I left Google",
      time: "Apr 3 · 6 min read",
    },
    {
      id: 5,
      img: tim[4],
      name: "Ming",
      des: "7 tools for visualizing a codebase",
      time: "Apr 3 · 4 min read",
    },
    {
      id: 6,
      img: tim[5],
      name: "Tom Cooper",
      des: "Ukraine War, 26–27 March, 2022",
      time: "Mar 29 · 8 min read",
    },
  ];

  // ḥ; // console.log(trending);
  return (
    <div className={styles.t}>
      <div className={styles.t1}>
        <div className={styles.t2}>
          <div className={styles.t3}>
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none">
              <path fill="#fff" d="M0 .8h28v28H0z"></path>
              <g opacity="0.8" clipPath="url(#trending_svg__clip0)">
                <path fill="#fff" d="M4 4.8h20v20H4z"></path>
                <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
                <path
                  d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
                  stroke="#000"
                  strokeLinecap="round"
                ></path>
              </g>
              <defs>
                <clipPath>
                  <path
                    fill="#fff"
                    transform="translate(4 4.8)"
                    d="M0 0h20v20H0z"
                  ></path>
                </clipPath>
              </defs>
            </svg>
            <h5>Trending on Medium</h5>
          </div>

          <div className={styles.t4}>
            {trending.map((each) => (
              <div className={styles.t5} key={each.id}>
                <div className={styles.t58}>
                  <div className={styles.t6}>
                    <span className={styles.t7}>0{each.id}</span>
                  </div>

                  <div className={styles.t8}>
                    <div className={styles.t9}>
                      <div className={styles.t10}>
                        <img src={each.img} alt=""></img>
                      </div>
                      <div className={styles.t11}>
                        <h2>{each.name}</h2>
                      </div>
                    </div>
                    <div className={styles.t59}>
                      <h2>{each.des}</h2>
                    </div>
                    <div className={styles.t60}>
                      <p>{each.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
