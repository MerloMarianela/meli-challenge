require("dotenv").config();
const app = require("./app");

app.listen(app.get("port"));
console.log(`Servidor corriendo en ${process.env.PORT}`);
