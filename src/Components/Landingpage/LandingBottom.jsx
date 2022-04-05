import React from "react";
import { Landingright } from "./Landingright";
// import { Landingtrending } from "./Landingtrending";
import styles from "../../styles/Landingpage.module.css";
import { Landingleft } from "./Landingleft";

export const LandingBottom = () => {
  return (
    <div className={styles.fake}>
      <Landingleft />
      <Landingright />
    </div>
  );
};
