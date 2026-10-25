# Supermercado Felipe — Sistema de Gestión de Inventario

Sitio web de gestión de inventario para un supermercado, desarrollado con **React** y **React Router** como una Single Page Application (SPA).

**Evaluación Formativa 1 — Desarrollo Frontend II (PFY2202), Semana 1**

## Sitio en línea

La aplicación está desplegada en GitHub Pages y disponible públicamente en:

**https://pipolio1.github.io/Supermercado-Felipe-Gennari-Exp1S1/**

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
- GitHub Pages (despliegue)

## Desarrollo local

Para trabajar en el proyecto en tu propio computador necesitas [Node.js](https://nodejs.org/) instalado (versión 18 o superior).

En la carpeta del proyecto, instala las dependencias:

```bash
npm install
```

Luego inicia el servidor de desarrollo:

```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000). Esta es una versión local solo para desarrollo: los cambios en el código se recargan automáticamente en el navegador. El sitio público en GitHub Pages no se ve afectado hasta que se publique una nueva versión (ver sección siguiente).

## Publicar cambios en GitHub Pages

Después de hacer cambios en el código, actualiza el sitio en línea con:

```bash
git add -A
git commit -m "descripción del cambio"
git push
npm run deploy
```

`npm run deploy` compila el proyecto y publica la carpeta `build` en la rama `gh-pages`, actualizando el sitio en GitHub Pages.

> **Nota:** el proyecto usa `HashRouter` de React Router para que la navegación funcione correctamente en GitHub Pages, donde no es posible configurar el servidor para rutas de una SPA.

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
