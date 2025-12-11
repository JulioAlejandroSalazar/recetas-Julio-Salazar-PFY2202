# 🍽️ Recetas App

Aplicación web desarrollada con **React + Vite** que permite explorar recetas mediante una API REST mock y ver sus detalles gracias a una API GraphQL mock.  
Incluye **pruebas unitarias con Jest + React Testing Library + MSW** y **pruebas E2E con Cypress**.

---

## 📌 Características principales

- Listado de recetas consumiendo un endpoint estático / JSON servido desde **GitHub Pages**.
- Detalle de una receta utilizando una **API GraphQL** mock manejada por MSW en desarrollo/pruebas.
- Navegación mediante **React Router**.  
- Componentes reutilizables y diseño responsivo con **TailwindCSS**.  
- Pruebas unitarias con:
  - **Vitest** (estilo Jest)
  - **React Testing Library**
  - **MSW** (Mock Service Worker)
- Pruebas E2E reales con **Cypress**.

---

## 🗂️ Tecnologías utilizadas

### **Frontend**
- React  
- Vite  
- TailwindCSS  
- React Router  

### **Testing**
- Vitest  
- React Testing Library  
- MSW  
- Cypress  

---

## 🚀 Instalación

Clonar el repositorio e instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:
```bash
npm run dev
```

La app estará disponible en:
http://localhost:5173

---

## 🧪 Pruebas unitarias

Ejecutar las pruebas:
```bash
npm run test
```

Generar reporte de cobertura:
```bash
npm run coverage
```

Los reportes estarán en:

/coverage

---

## 🧪 Mock APIs (MSW)

Este proyecto utiliza Mock Service Worker (MSW) para interceptar llamadas HTTP y GraphQL durante las pruebas.

Se mockean:

✔ API REST

- GET /recipes.json (mock porque GH Pages no permite rutas tipo /api)

✔ API GraphQL

- query RecipeDetail

Esto garantiza que las pruebas unitarias sean determinísticas y reproducibles.

---

## 🧪 Pruebas End-to-End (Cypress)

Para ejecutar Cypress:
```bash
npx cypress open
```

Las pruebas E2E validan:

- Carga de la página principal
- Visualización de recetas
- Apertura del detalle de una receta
- Navegación entre rutas