import { Router } from "express";
import { listar_productos, buscar_productos, registrar_producto, buscar_producto_por_id } from "../controllers/producto.controller.js";


const router = Router();

//Rutas GET
router.get("/listar", listar_productos);

router.get("/buscar/:nombre", buscar_productos);

router.post("/registrar", registrar_producto);

router.get("/:id", buscar_producto_por_id);

export default router;
