# AGENTS.md

## Estructura del proyecto
- El único proyecto es `clase2/`. Todos los comandos (`npm install`, `npm start`) deben ejecutarse desde `clase2/`, no desde la raíz del repositorio.

## Entorno de ejecución
- **Módulos ES** — `package.json` define `"type": "module"`. Usar `import`/`export`. Los imports relativos deben incluir la extensión `.js`.
- **Express 5** — `^5.2.1` (no Express 4). Cambios importantes: distinta firma del middleware de errores; `req.query` tiene parseo distinto; algunas APIs eliminadas.
- **Sin base de datos** — los datos están en memoria en `src/data/carrito.data.js` como un array mutable a nivel de módulo. Reiniciar el servidor borra todo el estado.
- **Puerto** — fijo en `3000` dentro de `src/app.js`.

## Comandos
```bash
# Iniciar el servidor
npm start        # ejecuta: node src/app.js
```

## Rutas de la API
| Método | Ruta                          | Descripción                  |
|--------|-------------------------------|------------------------------|
| GET    | `/api/productos`              | Listar todos los productos   |
| GET    | `/api/productos/buscar/:nombre` | Buscar producto por nombre |
| GET    | `/api/empleados`              | Listar todos los empleados   |
| POST   | `/api/empleados/add`          | Agregar empleado (body: `{nombre, cargo, salario}`) |

## Pruebas y calidad
- `npm test` es un placeholder (`echo "Error: no test specified"`). No hay framework de pruebas configurado.
- No hay linter, formateador, type-checker ni CI configurados.
