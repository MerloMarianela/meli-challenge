# meli-challenge

## Stack Tecnológico:

### API:

- Node
- Express

### CLI:

- HTML
- JS - React
- Css -Sass

Clonar repositorio: git@github.com:MerloMarianela/meli-challenge.git

Entrar al repositorio ---> cd meli-challenge

## Configuración del proyecto

### Instalar dependencias

Luego de haber clonado el repositorio situarse en

- api
  > npm i
- cli
  > npm i

## Levantar la aplicación

### Levantar server

> node index.js

### Levanar client

> npm start


### Descripción funcional de la aplicación

En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y al enviar el formulario navegar a
la vista de Resultados de búsqueda, visualizando solo 4 productos. Luego, al hacer clic sobre uno de ellos,
debería navegar a la vista de Detalle de Producto.
● Dado un id de producto, debería poder ingresar directamente a la vista de detalle de producto.

## Las vistas son navegables de manera independiente y cuentan con su propia url:
  - Caja de Búsqueda: “/”
  - Resultados de la búsqueda:“/items?search=”
  - Detalle del producto: “/items/:id”
  
 ## Se construyen los endpoints:
 
 -  /api/items?q=:**query**
 -  /api/items/:**id**
 

### Demo:

https://user-images.githubusercontent.com/71108973/178907068-f36a7c5b-6fc5-4f24-89b5-8c26d2a029a5.mp4


 
