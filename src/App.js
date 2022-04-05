import React from "react";
import { Signup } from "./Components/Loginpage/Signup";
import { Landingpage } from "./Components/Landingpage/Landingpage";
import { Login } from "./Components/Loginpage/Login";
const App = () => {
  return (
    <div>
      <Login />
      <Landingpage />
    </div>
  );
};

export default App;
