import React from "react";
import { Helmet } from "react-helmet-async";

export const Seo = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="../../assets/logo_ML.ico" />
      <meta
        name="description"
        content="Challenge Mercado Libre | Marianela S. Merlo"
      />
      <meta
        name="description"
        content="Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles."
      />
    </Helmet>
  );
};
