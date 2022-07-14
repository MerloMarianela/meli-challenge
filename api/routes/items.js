const express = require("express");
const axios = require("axios");
const author = require("../utils/author");
const validConditions = require("../utils/validConditions");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const product = req.query.q;
  if (!product)
    return res
      .status(301)
      .json("Escribí en el buscador lo que querés encontrar.");

  try {
    const itemsData = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${product}&limit=4`
    );

    const { results, filters, available_filters } = itemsData.data;
    if (!results.length)
      return res
        .status(404)
        .json("No hay publicaciones que coincidan con tu búsqueda.");

    const items = results.map(
      ({
        id,
        title,
        price,
        currency_id,
        thumbnail,
        thumbnail_id,
        condition,
        shipping: { free_shipping },
        address,
      }) => {
        return {
          id,
          title,
          price: {
            currency: currency_id,
            amount: Math.trunc(price),
            decimals: +price.toString().split(".")[1] || 0,
          },
          thumbnail,
          picture: `http://http2.mlstatic.com/D_${thumbnail_id}-L.jpg`,
          condition: validConditions[condition],
          free_shipping,
          address,
        };
      }
    );

    let itemCategories;

    if (filters.length) {
      itemCategories = filters[0].values[0].path_from_root.map(
        (category) => category.name
      );
    } else {
      let firstCategory = available_filters[0]?.values;

      firstCategory.sort((a, b) => {
        return b.results - a.results;
      });

      firstCategory = firstCategory[0].id;

      itemCategories = await axios.get(
        `https://api.mercadolibre.com/categories/${firstCategory}`
      );

      itemCategories = itemCategories.data.path_from_root.map(
        (category) => category.name
      );

      itemCategories =
        itemCategories.length > 5 ? itemCategories.slice(-5) : itemCategories;
    }

    const data = {
      author,
      categories: itemCategories,
      items,
    };

    res.status(200);
    res.send(data);
  } catch (error) {
    return res.status(500).json("Ocurrió un error.");
  }
});

routes.get("/:id", async (req, res) => {
  const itemId = req.params.id;

  try {
    const itemData = await axios.get(
      `https://api.mercadolibre.com/items/${itemId}`
    );
    const itemDescription = await axios.get(
      `https://api.mercadolibre.com/items/${itemId}/description`
    );

    const {
      id,
      title,
      price,
      currency_id,
      pictures,
      condition,
      shipping: { free_shipping },
      sold_quantity,
      category_id,
    } = itemData.data;

    let itemCategory = await axios.get(
      `https://api.mercadolibre.com/categories/${category_id}`
    );

    itemCategory = itemCategory.data.path_from_root.map(
      (category) => category.name
    );

    const data = {
      author,
      item: {
        id,
        title,
        price: {
          currency: currency_id,
          amount: Math.trunc(price),
          decimals: +price.toString().split(".")[1] || 0,
        },
        picture: pictures[0].secure_url,
        condition: validConditions[condition],
        free_shipping,
        sold_quantity,
        description: itemDescription.data.plain_text,
        categories: itemCategory,
      },
    };

    res.send(data);
  } catch (error) {
    console.error(error);
    if (error.message.endsWith("404")) {
      return res
        .status(404)
        .json("No hay publicaciones que coincidan con tu búsqueda.");
    }
    return res.status(500).json("Ocurrió un error.");
  }
});

module.exports = routes;
