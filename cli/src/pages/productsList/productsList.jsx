import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Seo } from "../../components/helmet/seo";
import { Breadcrumbs } from "../../components/breadcrumb/breadcrumbs";
import { ItemContainer } from "../productsList/itemContainter";
import { Errors } from "../../components/errors/errors";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(0);

  const params = new URLSearchParams(useLocation().search);
  const query = params.get("search");

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      //TODO: hide the URL for security
      url: `http://localhost:3003/api/items?q=${query}`,
    })
      .then(({ data }) => {
        setProducts(data.items);
        setCategory(data.categories);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.status);
      });
  }, [query]);

  if (error === 404) {
    return (
      <Errors text={"No hay publicaciones que coincidan con tu búsqueda."} />
    );
  }

  if (error === 301) {
    return <Errors text={"Escribí en el buscador lo que querés encontrar."} />;
  }

  return (
    <>
      {query && (
        <Seo
          title={`${query[0].toUpperCase() + query.slice(1)} | MercadoLibre 📦`}
        />
      )}
      {loading && <h6>Cargando...</h6>}
      {category && <Breadcrumbs categories={category} />}
      {products && <ItemContainer arrayProd={products} />}
    </>
  );
};
