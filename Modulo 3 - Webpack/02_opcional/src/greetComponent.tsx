import React from "react";
import classes from "./greetComponentStyles.scss";
import logoImg from "./content/logo_1.png";

export const GreetComponent : React.FC = () => {
  
  return (
    <div>
      <h1 className={classes.titleBackground}>Módulo 3. Bundling</h1>
      <div className={classes.imgContainer}><img src={logoImg} alt="Logo" /></div>
      <p>Hellow World from <br /><span className={classes.usernameClass}>React DOM</span></p>
    </div>
  );
};
