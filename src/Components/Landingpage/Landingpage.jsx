import React from "react";
import { LandingBottom } from "./LandingBottom";
// import { Landingright } from "./Landingright";
import { Landingtrending } from "./Landingtrending";
import { Landingupper } from "./Landingupper";

export const Landingpage = () => {
  return (
    <div>
      <Landingupper />
      <Landingtrending />
      <LandingBottom />
    </div>
  );
};
