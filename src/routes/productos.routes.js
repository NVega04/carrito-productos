import { Router } from "express";
import { listar_productos, buscar_productos, registrar_producto, buscar_producto_por_id, buscar_productos_por_categoria } from "../controllers/producto.controller.js";


const router = Router();

//Rutas GET
router.get("/listar", listar_productos);

router.get("/buscar/:nombre", buscar_productos);

router.post("/registrar", registrar_producto);

router.get("/:id", buscar_producto_por_id);

router.get("/categoria/:categoria", buscar_productos_por_categoria);

export default router;
