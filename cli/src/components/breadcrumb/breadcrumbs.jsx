import React from "react";
import style from "./breadcrumb.module.scss";

export const Breadcrumbs = ({ categories }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className={style.breadcrumbs}>
        {categories.map((category) => (
          <li key={category}>
            <a href="#0">{category}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
