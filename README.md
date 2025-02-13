# Prueba Técnica - Febrero 2025

Este proyecto consiste en una aplicación con un frontend desarrollado en Next.js y un backend en Node.js con Express.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos en tu sistema:

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- [Git](https://git-scm.com/)

## Instalación y ejecución

### 1. Clonar el repositorio

Abre una terminal y ejecuta el siguiente comando para clonar el repositorio en tu máquina local:

```bash
git clone https://github.com/mariormolano/pruebatecnica-feb25.git
```

Luego, entra en la carpeta del proyecto:

```bash
cd pruebatecnica-feb25
```

### 2. Configurar el frontend

Accede a la carpeta del frontend e instala las dependencias:

```bash
cd frontend
npm install
```

Para ejecutar el frontend en modo desarrollo:

```bash
npm run dev
```

Por defecto, la aplicación estará disponible en `http://localhost:3000/`.

### 3. Configurar el backend

Accede a la carpeta del backend e instala las dependencias:

```bash
cd ../backend
npm install
```

Para ejecutar el backend en modo desarrollo:

```bash
npm run dev
```

Por defecto, el backend se ejecutará en `http://localhost:3001/`.

## API Endpoints

### Productos

- `GET /products` - Listado de productos

**Cart endpoints**

- `GET /cart` - Devuelve los elementos en el carrito
- `POST /cart` - Agrega un nuevo elemento al carrito
- `DELETE /cart/:id` - Elimina un elemento específico del carrito

## Tecnologías utilizadas

- **Frontend:** Next.js, React, TailwindCSS
- **Backend:** Node.js, Express

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama con tu nueva funcionalidad (`git checkout -b feature-nueva`).
3. Realiza los cambios y haz un commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo `LICENSE`.
