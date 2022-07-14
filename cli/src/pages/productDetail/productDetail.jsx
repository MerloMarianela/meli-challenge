/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../../components/breadcrumb/breadcrumbs";
import { Seo } from "../../components/helmet/seo";
import axios from "axios";
import { Product } from "./product";
import { Errors } from "../../components/errors/errors";

export const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      //TODO: hide the URL for security
      url: `http://localhost:3003/api/items/${id}`,
    })
      .then(({ data }) => {
        setItem(data.item);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.status);
      });
  }, [id]);

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
      {item && <Seo title={`${item.title}`} />}
      {loading && <h6>Cargando...</h6>}
      {item.categories && (
        <Breadcrumbs categories={item.categories} title={item.title} />
      )}
      {item.id && <Product product={item} />}
    </>
  );
};
