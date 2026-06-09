import express from "express";
import router from "./routes/productos.routes.js";
const app = express();

app.use(express.json());

const PORT = 3000;

app.use("/" , router);  // retiro el prefijo de productos, para delimitar la necesidad de ruta

app.listen(PORT, () => {

    console.log(`Servidor corriendo en puerto ${PORT}`);

});