import React, { useState } from "react";
import style from "./searchBar.module.scss";
import { Logo_ML } from "../../assets/index";
import { Search } from "../../assets/index";
import { Link, useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (ev) => {
    setQuery(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (query) {
      navigate(`/items?search=${query}`);
    }
    setQuery("");
  };

  return (
    <nav className={style.navbar}>
      <div className={style.div}>
        <div className={style.logoContainer}>
          <Link to="/">
            <img src={Logo_ML} alt="Mercado Libre" />
          </Link>
        </div>
        <form className={style.searchForm} onSubmit={handleSubmit}>
          <label>Buscar productos</label>
          <input
            value={query}
            onChange={handleChange}
            type="text"
            aria-label="Ingresá lo que quieras encontrar"
            placeholder="Nunca dejes de buscar"
            maxLength={120}
          />
          <button type="submit" aria-label="Buscar">
            <img src={Search} alt="Buscar" />
          </button>
        </form>
      </div>
    </nav>
  );
};
