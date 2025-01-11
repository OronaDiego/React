# 📦 ImporTainer

### Un e-commerce para importar productos de todo tipo con tan solo un clic 🚢📦

---

## ✨ **Descripción del Proyecto**
ImporTainer es una aplicación e-commerce diseñada para reforzar las bases de **React** mediante la implementación de funcionalidades clave en el desarrollo web moderno. Inspirada en la facilidad de importar productos de manera eficiente, la app permite explorar diversas categorías de productos y gestionar compras desde un carrito interactivo.

### **Rubro**
Importación de productos.  
El nombre surge de la combinación de **Import** (importar) y **Container** (contenedores de mercancías).

### **Propósito**
Reforzar los conocimientos en React mediante un proyecto académico, integrando buenas prácticas, hooks, y diseño estilizado con Chakra UI.

---

## 🚀 **Tecnologías Utilizadas**
- **Frontend:** React (React Router DOM, Hooks: `useState`, `useEffect`, `useContext`).
- **Librerías:** Axios, Chakra UI.
- **Firebase** Carga de productos y categorias. 
- **API:** [DummyJSON](https://dummyjson.com) (para simular productos y categorías).

---

## 📂 **Estructura del Proyecto**
El proyecto sigue una arquitectura modular, dividiendo las responsabilidades en carpetas específicas dentro de `src`:

```
src/
├── components/         # Componentes reutilizables
├── context/            # Proveedores y contexto de la aplicación
├── firebase/           # Configuración de Firebase (comentado actualmente)
├── hooks/              # Custom hooks
├── layout/             # Componentes de diseño base (como headers o footers)
├── pages/              # Vistas principales
├── routes/             # Configuración de rutas
├── services/           # Servicios externos (APIs, Axios)
```

---

## 🛠️ **Instalación**
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/importainer.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## 🛒 **Funcionalidades Principales**

### **Catálogo**
- Explora productos organizados por categorías:
  ```json
  [
    "beauty", "fragrances", "furniture", "groceries", "home-decoration",
    "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes",
    "womens-bags", "womens-dresses", "womens-jewellery", "smartphones", etc.
  ]
  ```
- Filtra y selecciona productos fácilmente.

### **Detalle del Producto**
- Muestra:
  - Título, precio y garantía.
  - Información general del producto.
  - Políticas de envío y devoluciones.
  - Imagen principal y botón para agregar al carrito (con selector de cantidad).

### **Carrito**
- Detalles por producto (nombre, cantidad, total parcial).
- Valor total de todos los productos.
- Próximamente: integración con pasarela de pago.

---

## 📏 **Reglas de Colaboración**
1. **Estilo de Código:**
   - Sigue las convenciones de JavaScript (ES6+).
   - Usa nombres de variables y funciones descriptivos.
   - Exporta componentes y funciones reutilizables mediante archivos barriles.

2. **Commits:**
   - Escribe mensajes claros, siguiendo el formato:

3. **Colaboración:**
   - Utiliza issues para proponer nuevas características o reportar problemas.
   - Las sugerencias de diseño o funcionalidad son bienvenidas.

---

## 🎨 **Diseño**
- **Estilos:** Chakra UI (por ahora) para un diseño limpio y accesible.
- **Futuras Mejoras:**
  - Incorporar **TailwindCSS** para mayor flexibilidad.
  - Integrar animaciones y transiciones personalizadas.

### Vista Previa
![ImporTainer en acción](https://media.giphy.com/media/3o6MbnP2PYDzRT0jlO/giphy.gif)

---

## 🔮 **Futuras Mejoras**
- Implementar pasarela de pago.
- Refactorizar código para mayor modularidad.
- Mejorar diseño y usabilidad general.

---

## 📄 **Licencia**
Este proyecto es de código abierto y se desarrolla con fines educativos. Puedes contribuir respetando las reglas de colaboración.

---

## 📬 **Contacto**
Para dudas o sugerencias:  
[Diego](mailto:diegosebastianorona@gmail.com) 
