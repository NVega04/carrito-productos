import { Get_Productos, Buscar_Productos, Filtrar_Productos, Calcular_Total_Carrito, Add_Producto, Buscar_Productos_id } from "../services/productos.service.js";

export const listar_productos = (req,res) => {
    const consulta = Get_Productos();

    res.json(consulta);
}

export const buscar_productos = (req,res) =>{

    
    const {nombre} = req.params;

    if(nombre != "" || nombre != undefined)
    {
       const consulta = Buscar_Productos(nombre);

       res.status(200).json({
            mensaje: "Ok",
            data: consulta
       });
    }
    else
    {
        return res.status(400).json({
            mensaje: "parametros incorrectos"
        });
    }
}

export const registrar_producto = (req, res) => {
    const { nombre, precio, stock, categoria, marca } = req.body;

    if (!nombre || !precio || precio <= 0 || stock == null || stock < 0 || !categoria || !marca) {
        return res.status(400).json({ mensaje: "Datos inválidos" });
    }

    const nuevo = Add_Producto({ nombre, precio, stock, categoria, marca });

    res.status(201).json(nuevo);
};


export const buscar_producto_por_id = (req, res) => {
    const { id } = req.params;

    if (!id || isNaN(id)) {
        return res.status(400).json({ mensaje: "parametros incorrectos" });
    }

    const consulta = Buscar_Productos_id(Number(id));

    if (!consulta) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.status(200).json(consulta);
};

