import React from "react";
import { Link } from "react-router-dom";
import { Shipping } from "../../assets/index";
import style from "./productContent.module.scss";

export const ProductContent = ({ product }) => {
  const { picture, title, price, free_shipping, address, id } = product;
  return (
    <div className={style.productCard}>
      <div className={style.imgContainer}>
        <img src={picture} alt={title} />
      </div>
      <div className={style.productInfo__container}>
        <div className={style.productInfo}>
          <p className={style.product__price}>
            ${price.amount.toLocaleString("es-AR")}
          </p>
          {free_shipping && (
            <span className={style.product__shipping}>
              <img src={Shipping} alt="Envío gratis" />
            </span>
          )}
          <h2 className={style.product__title}>
            <Link to={`/items/${id}`}>{title}</Link>
          </h2>
        </div>
        <p className={style.product__address}>{address.city_name}</p>
      </div>
    </div>
  );
};
