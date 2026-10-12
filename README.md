# 📱 SmartCell Commerce Platform - Landing Page

[![Static Site](https://img.shields.io/badge/Deploy-Render%20Static%20Site-46E3B7?style=flat&logo=render&logoColor=white)](https://render.com)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)](https://pages.github.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

> **Slogan:** *La plataforma integral de E-Commerce y ERP ligero para la comercialización inteligente de celulares y accesorios.*

---

## 🚀 1. Visión y Propuesta de Valor del Proyecto

**SmartCell Commerce Platform** resuelve la falta de trazabilidad en el comercio de telefonía móvil unificando una tienda virtual moderna con el control riguroso de inventarios por código **IMEI** (International Mobile Equipment Identity), la logística de entrega a domicilio y la gestión automatizada de cobranzas.

### 🌟 Propuesta de Valor Clave
* **📉 Reducción del 40% en pérdidas por descuadres de stock** gracias al registro único por IMEI de cada equipo que ingresa a bodega.
* **⚡ Tiempo de respuesta menor a 2 segundos (< 2s)** y disponibilidad garantizada del **99.5%** en la nube.
* **🔄 Integración nativa** entre el catálogo digital para clientes finales y el panel de administración (Backoffice ERP) para control de bodegas y motorizados.

---

## 📁 2. Estructura del Proyecto

El proyecto está diseñado con arquitectura modular limpia y sin compiladores requeridos, permitiendo su ejecución inmediata tanto en local como en la nube:

```text
LandingPage_Lab8/
├── index.html          # Punto de entrada raíz (Compatible con Render y GitHub Pages)
├── css/
│   └── styles.css      # Sistema de diseño, tokens, glassmorphism y animaciones
├── js/
│   └── main.js         # Lógica interactiva en Vanilla JS (sin dependencias pesadas)
└── README.md           # Documentación técnica y guía de despliegue
```

---

## 💻 3. Secciones y Componentes Implementados

1. **Header / Navbar:** Logotipo de SmartCell, enlaces con Smooth Scroll, botón de Demo del Panel, CTA directo a tienda y menú hamburguesa responsive.
2. **Hero Section:** Badge flotante de impacto, propuesta de valor, botones CTA y **Mockup Interactivo** con pestañas para alternar entre *Vista Tienda E-Commerce* y *Vista Backoffice ERP*.
3. **Visión del Proyecto (`#vision`):** Análisis del problema del comercio tradicional vs solución SmartCell, con **contadores numéricos animados** (40%, < 2s, 99.5%, 100%).
4. **Características y Beneficios (`#caracteristicas`):** 6 módulos detallados con iconos vectoriales y efectos hover. Incluye el **Simulador de Catálogo en Vivo** con filtros por marca (Samsung, Apple, Xiaomi, Google, Motorola), buscador en tiempo real y modal de ficha IMEI.
5. **Cómo Funciona (`#como-funciona`):** Flujo de 4 pasos interactivos: Carga de IMEIs, Publicación en tienda, Venta con reserva instantánea y Despacho con conciliación.
6. **Testimonios y Casos de Uso (`#testimonios`):** Casos de éxito con estrellas (5/5) para Cliente Final, Auxiliar de Bodega, Encargado de Logística y Dueño de Tienda.
7. **Planes y Precios (`#planes`):** Toggle interactivo para alternar entre facturación Mensual y Anual (-20% de descuento) con 3 niveles (Emprendedor, Pro Business, Enterprise).
8. **Call to Action Final (`#contacto`):** Banner de alta conversión con formulario de suscripción/demo con validación y notificaciones Toast flotantes.
9. **Footer Completo:** Datos institucionales de ingeniería de software, enlaces legales, redes sociales, estado de servidores y sellos de despliegue.

---

## 🛠️ 4. Guía de Inicialización con Git

Para inicializar tu repositorio y subir los cambios a **GitHub**, ejecuta los siguientes comandos en tu terminal de Git Bash o PowerShell:

```bash
# 1. Inicializar el repositorio Git local
git init

# 2. Agregar todos los archivos al área de preparación (Staging)
git add .

# 3. Realizar el primer commit
git commit -m "feat: landing page completa SmartCell Commerce Platform"

# 4. Establecer la rama principal como 'main'
git branch -M main

# 5. Vincular el repositorio remoto de GitHub (Reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/smartcell-landing.git

# 6. Subir el proyecto a GitHub
git push -u origin main
```

---

## 🌐 5. Despliegue en Render (Static Site)

SmartCell está 100% optimizado para el servicio gratuito y ultra rápido **Static Site** de [Render](https://render.com):

1. Inicia sesión en tu cuenta de [Render Dashboard](https://dashboard.render.com).
2. Haz clic en el botón **New +** y selecciona **Static Site**.
3. Conecta tu cuenta de **GitHub** y selecciona el repositorio de `smartcell-landing`.
4. Configura los campos del formulario con los siguientes valores:
   * **Name:** `smartcell-commerce` *(o el nombre que elijas)*
   * **Branch:** `main`
   * **Root Directory:** *(Dejar vacío o colocar `./`)*
   * **Build Command:** *(Dejar completamente vacío, no requiere comando de compilación)*
   * **Publish Directory:** `./` *(o dejar vacío si index.html está en la raíz)*
5. Haz clic en **Create Static Site**.
6. En menos de 30 segundos, Render te proporcionará una URL pública segura con SSL gratuito: `https://smartcell-commerce.onrender.com`.

---

## 📄 6. Despliegue Alternativo en GitHub Pages

Si deseas activarlo directamente en **GitHub Pages**:

1. Ingresa a tu repositorio en GitHub.
2. Ve a la pestaña **Settings** (Configuración) > sección **Pages** (menú izquierdo).
3. En **Build and deployment > Source**, selecciona **Deploy from a branch**.
4. En **Branch**, selecciona `main` y en la carpeta elige `/ (root)`.
5. Haz clic en **Save**.
6. En 1 minuto tendrás tu enlace disponible en: `https://TU_USUARIO.github.io/smartcell-landing/`.

---

## 🎨 7. Paleta de Colores y Tecnologías

| Token de Color | Valor Hexadecimal | Uso Principal |
| :--- | :--- | :--- |
| **Dark Base** | `#0F172A` | Fondos oscuros corporativos, headers y tablas de auditoría |
| **Surface Dark** | `#1E293B` | Contenedores secundarios y modales oscuros |
| **Cobalt Accent** | `#2563EB` | Botones de acción (CTAs), badges principales y bordes activos |
| **Cyan Tech** | `#06B6D4` | Detalles tecnológicos, gradientes y tags de verificación |
| **Light BG** | `#F8FAFC` | Fondo general de lectura de alta legibilidad |
| **White Card** | `#FFFFFF` | Tarjetas de características, productos y precios |

* **Fuentes:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Títulos y marcas) e [Inter](https://fonts.google.com/specimen/Inter) (Cuerpo de texto y métricas).
* **Iconografía:** [Font Awesome 6.5.1](https://fontawesome.com/) vía CDN.

---

## 👨‍💻 Créditos
**SmartCell Commerce Platform** — Desarrollado con los más altos estándares de UX/UI y rendimiento web para proyectos de Ingeniería de Software y Comercio Electrónico. © 2026.
