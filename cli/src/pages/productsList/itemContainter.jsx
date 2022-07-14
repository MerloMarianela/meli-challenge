import React from "react";
import { ProductContent } from "../../components/productContent/productContent";

export const ItemContainer = ({ arrayProd }) => {
  return (
    <main>
      {arrayProd.map((prod) => (
        <ProductContent key={prod.id} product={prod} />
      ))}
    </main>
  );
};
