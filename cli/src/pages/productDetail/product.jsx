import style from "./product.module.scss";

const formatDecimals = (number) => {
  if (number === 0) return "00";
  if (number < 10) return 0 + "" + number;
  return number + "";
};

export const Product = ({ product }) => {
  const { condition, sold_quantity, title, price, description, picture } =
    product;

  return (
    <main className={style.productContainer}>
      <div className={style.flexContainer}>
        <div className={style.product__image}>
          <img src={picture} alt={title} />
        </div>
        <div className={style.product__info}>
          <p className={style.product__condition}>
            {condition} - {sold_quantity || "0"}{" "}
            {sold_quantity === 1 ? "vendido" : "vendidos"}
          </p>
          <h2 className={style.product__title}>{title}</h2>
          <p className={style.product__price}>
            ${price.amount.toLocaleString("es-AR")}
            <span>{formatDecimals(price.decimals)}</span>
          </p>
          <button className={style.button}>Comprar</button>
        </div>
      </div>

      <div className={style.product__description}>
        <h3>Descripción del producto</h3>
        <p className={style.p}>{description}</p>
      </div>
    </main>
  );
};
