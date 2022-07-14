import React from "react";

import style from "./home.module.scss";

export const Home = () => {
  return (
    <main className={style.flex}>
      <div className={style.flexContainer}>
        <div>
          <h1>Escribí en el buscador lo que querés encontrar.</h1>
        </div>
      </div>
    </main>
  );
};
