# Supermercado Felipe — Sistema de Gestión de Inventario

Sitio web de gestión de inventario para un supermercado, desarrollado con **React** y **React Router** como una Single Page Application (SPA).

**Evaluación Formativa 1 — Desarrollo Frontend II (PFY2202), Semana 1**

## Descripción

La aplicación cuenta con una página principal para la gestión del inventario (listado de productos con control de stock) y un menú inferior que permite navegar sin recargar la página hacia las secciones informativas del sitio:

- **Inventario** (`/`): lista de productos con categoría, precio y stock, con botones para aumentar o disminuir unidades y alertas de stock bajo.
- **Quiénes somos** (`/quienes-somos`): misión, visión y valores del supermercado.
- **Nuestras tiendas** (`/nuestras-tiendas`): sucursales con dirección, ciudad y horario.
- **Contáctanos** (`/contactanos`): datos de contacto y formulario de mensajes.
- **Cómo comprar** (`/como-comprar`): pasos para realizar una compra.

## Tecnologías utilizadas

- React 19 (creado con [Create React App](https://github.com/facebook/create-react-app))
- React Router DOM (enrutamiento del lado del cliente)
- HTML, CSS y JavaScript

## Requisitos previos

- [Node.js](https://nodejs.org/) instalado (versión 18 o superior recomendada)

## Instalación y ejecución

En la carpeta del proyecto, ejecuta:

```bash
npm install
```

Para iniciar el servidor de desarrollo:

```bash
npm start
```

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000). Los cambios en el código se recargan automáticamente en el navegador.

## Otros comandos disponibles

### `npm test`

Inicia el ejecutor de pruebas en modo interactivo.

### `npm run build`

Genera la versión optimizada para producción en la carpeta `build`.

## Estructura del proyecto

```
src/
├── App.js                  # Configuración de React Router y layout principal
├── App.css                 # Estilos globales
├── components/
│   └── BottomNav.js        # Menú inferior de navegación
├── data/
│   └── products.js         # Datos iniciales del inventario
└── pages/
    ├── Home.js             # Página principal: gestión de inventario
    ├── QuienesSomos.js
    ├── NuestrasTiendas.js
    ├── Contactanos.js
    ├── ComoComprar.js
    └── NotFound.js         # Página para rutas no encontradas
```
