# 🚀 Diseño Visual IMPACTANTE - PCT

## ✨ Transformación Completa del Sitio

El sitio web de PCT ha sido completamente rediseñado con un enfoque visual **IMPACTANTE** usando las imágenes grandes como protagonistas con efectos parallax y transiciones cinematográficas.

---

## 🎨 Características Visuales Principales

### 1. **Hero Section Full Screen con Parallax**
- ✅ Imagen de fondo a pantalla completa (`Equipo instalado 1.png`)
- ✅ Efecto parallax con `background-attachment: fixed`
- ✅ Overlay con gradiente naranja a negro
- ✅ Título con efecto typing
- ✅ 3 contadores animados con glassmorphism
- ✅ Animaciones de entrada (fadeInDown, fadeInUp)

### 2. **Separadores Parallax Entre Secciones**
- ✅ **Separador 1**: `Instalacion Carrete 2.png` - "Equipos de Alta Tecnología"
- ✅ **Separador 2**: `Instalacion Carrete-0002.png` - "Instalaciones Profesionales"
- ✅ Altura de 60vh con parallax
- ✅ Texto con efecto pulse y glassmorphism
- ✅ Overlay oscuro para contraste

### 3. **Galería de Proyectos con Overlay Dinámico**
- ✅ 6 imágenes en grid responsive
- ✅ Hover: zoom 1.2x + overlay desde abajo
- ✅ Altura fija de 400px
- ✅ Bordes redondeados
- ✅ Animación zoom-in escalonada

---

## 🎯 Secciones del Sitio

### **Hero Section**
```
- Fondo: Equipo instalado 1.png (parallax)
- Altura: 100vh
- Contadores: 17 años, 4 estados, 100%
- Efecto: Glassmorphism en estadísticas
```

### **Quiénes Somos**
```
- Fondo: Blanco
- Cards: Misión y Visión con gradiente naranja
- Grid: 4 tarjetas de compromiso con hover 3D
- Animaciones: fade-up con delays
```

### **Separador Parallax 1**
```
- Fondo: Instalacion Carrete 2.png
- Altura: 60vh
- Texto: "Equipos de Alta Tecnología"
- Efecto: Pulse animation
```

### **Servicios**
```
- Fondo: Gradiente oscuro
- 6 tarjetas de servicios con iconos
- Hover: Elevación + escala + glow naranja
- Efecto: flip-left animation
```

### **Separador Parallax 2**
```
- Fondo: Instalacion Carrete-0002.png
- Altura: 60vh
- Texto: "Instalaciones Profesionales"
```

### **Proyectos**
```
- 6 imágenes en grid
- Hover: Zoom + overlay con info
- Imágenes: IMG_7731, IMG_7738, IMG_7742, etc.
- Altura: 400px por imagen
```

### **Contacto**
```
- Fondo: Oscuro
- 3 tarjetas con gradiente naranja
- Iconos: Teléfono, Email, Ubicación
- Hover: Elevación + glow
```

---

## 🎬 Efectos Visuales Implementados

### **Parallax**
- Hero section con `background-attachment: fixed`
- Separadores con parallax scroll
- JavaScript para movimiento dinámico

### **Glassmorphism**
- Estadísticas en hero
- Texto en separadores parallax
- Backdrop-filter: blur(10px)

### **Hover Effects**
- **Tarjetas**: translateY(-10px) + scale(1.05)
- **Imágenes**: scale(1.2) + brightness(0.7)
- **Servicios**: Glow naranja + rotación de iconos
- **Overlay**: Transición desde abajo

### **Animaciones CSS**
```css
- fadeInDown: Hero título
- fadeInUp: Hero estadísticas
- pulse: Texto parallax
- AOS animations: fade-up, zoom-in, flip-left
```

### **Transiciones**
- Todas: 0.3s - 0.6s ease
- Suaves y cinematográficas
- Sin saltos bruscos

---

## 🌈 Paleta de Colores

### **Principales**
- **Naranja**: #FF7B00 (color corporativo)
- **Naranja Oscuro**: #e66d00
- **Negro**: #000, #1a1a1a, #2d2d2d
- **Blanco**: #fff, #f5f5f5

### **Gradientes**
```css
/* Hero Overlay */
linear-gradient(135deg, rgba(255, 123, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 100%)

/* Servicios */
linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)

/* Misión/Visión */
linear-gradient(135deg, #FF7B00 0%, #e66d00 100%)

/* Footer */
linear-gradient(135deg, #1a1a1a 0%, #000 100%)
```

---

## 📐 Layout y Estructura

### **Grid Systems**
```css
/* Servicios: 3 columnas */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

/* Proyectos: 3 columnas */
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

/* Compromiso: 4 columnas */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

### **Espaciado**
- Padding secciones: 100px vertical
- Gap en grids: 30-40px
- Margin entre elementos: 20-50px

### **Tipografía**
```css
/* Hero H1 */
font-size: 4em;
font-weight: 900;
text-shadow: 3px 3px 10px rgba(0,0,0,0.5);

/* Secciones H2 */
font-size: 3em;
font-weight: 900;
color: #FF7B00;

/* Parallax Text */
font-size: 3.5em;
font-weight: 900;
```

---

## 📱 Responsive Design

### **Breakpoints**
- **Desktop**: > 768px
- **Tablet**: 768px
- **Mobile**: < 480px

### **Adaptaciones Móviles**
```css
/* Hero H1 */
Desktop: 4em → Mobile: 2em

/* Parallax */
Desktop: fixed → Mobile: scroll

/* Grid */
Desktop: 3 columnas → Mobile: 1 columna

/* Navbar */
Desktop: horizontal → Mobile: vertical
```

---

## 🚀 JavaScript Funcionalidades

### **Activas**
1. ✅ Smooth scroll en navegación
2. ✅ AOS animations (sistema manual)
3. ✅ Parallax scroll dinámico
4. ✅ Contadores animados
5. ✅ Efecto typing en título
6. ✅ Navbar inteligente (hide/show)
7. ✅ Galería con modal lightbox
8. ✅ Hover effects dinámicos

### **Parallax Scroll**
```javascript
// Movimiento dinámico de fondos
const yPos = -(scrolled * 0.5);
section.style.backgroundPositionY = `${yPos}px`;
```

---

## 🖼️ Imágenes Utilizadas

### **Hero Section**
- `Equipo instalado 1.png` (2.7 MB, 1366x1080)

### **Separadores Parallax**
- `Instalacion Carrete 2.png` (3.4 MB, 1366x1080)
- `Instalacion Carrete-0002.png` (3.1 MB, 1366x1080)

### **Galería de Proyectos**
- `IMG_7731.JPG` (187 KB, 960x720)
- `IMG_7738.JPG` (89 KB, 720x891)
- `IMG_7742.JPG` (95 KB, 307x960)
- `IMG_7727-0001.JPG` (62 KB, 750x563)
- `IMG_7728.JPG` (35 KB, 470x353)
- `IMG_7736.JPG` (71 KB, 480x991)

---

## ⚡ Rendimiento

### **Optimizaciones**
- ✅ Intersection Observer para animaciones
- ✅ RequestAnimationFrame para scroll
- ✅ CSS transitions en lugar de JS
- ✅ Lazy loading disponible
- ✅ Parallax solo en desktop

### **Consideraciones**
- ⚠️ Imágenes grandes (2-3 MB) - Comprimir recomendado
- ⚠️ Parallax fixed puede ser pesado en móviles
- ✅ Fallback a scroll normal en móviles

---

## 🎯 Experiencia de Usuario

### **Primera Impresión**
1. Hero full screen con imagen impactante
2. Título escribiéndose automáticamente
3. Contadores animados desde 0
4. Scroll suave hacia abajo

### **Navegación**
1. Navbar fijo con glassmorphism
2. Links con smooth scroll
3. Se oculta al bajar, aparece al subir

### **Interacción**
1. Hover en tarjetas: elevación + glow
2. Click en imágenes: modal lightbox
3. Scroll: parallax + animaciones AOS
4. Responsive: adaptación perfecta

---

## 📊 Métricas Visuales

### **Efectos Totales**
- **Parallax sections**: 3 (hero + 2 separadores)
- **Animaciones CSS**: 8 tipos
- **Hover effects**: 15+ elementos
- **Transiciones**: Todas suaves
- **Gradientes**: 6 diferentes
- **Glassmorphism**: 3 elementos

### **Impacto Visual**
- ⭐⭐⭐⭐⭐ Hero section
- ⭐⭐⭐⭐⭐ Separadores parallax
- ⭐⭐⭐⭐⭐ Galería de proyectos
- ⭐⭐⭐⭐ Tarjetas de servicios
- ⭐⭐⭐⭐ Efectos hover

---

## 🔧 Personalización Rápida

### **Cambiar velocidad parallax**
```javascript
// En initParallaxScroll()
const yPos = -(scrolled * 0.5); // 0.5 = velocidad
```

### **Cambiar duración animaciones**
```css
/* En style.css */
transition: all 0.3s ease; /* Cambiar 0.3s */
```

### **Agregar más separadores**
```html
<section class="parallax-divider" style="background-image: url('img/tu-imagen.png');">
    <div class="parallax-overlay">
        <h2 class="parallax-text">Tu Texto</h2>
    </div>
</section>
```

---

## ✅ Checklist de Implementación

- [x] Hero full screen con parallax
- [x] Separadores parallax entre secciones
- [x] Galería con overlay dinámico
- [x] Contadores animados
- [x] Efecto typing
- [x] Glassmorphism
- [x] Gradientes impactantes
- [x] Hover effects 3D
- [x] Smooth scroll
- [x] AOS animations
- [x] Responsive design
- [x] Navbar inteligente

---

## 🚀 Resultado Final

### **Antes**
- Diseño básico y plano
- Sin imágenes destacadas
- Texto estático
- Sin efectos visuales

### **Después**
- ✨ Diseño cinematográfico
- 🖼️ Imágenes grandes con parallax
- 🎬 Animaciones y transiciones
- 💎 Glassmorphism y gradientes
- 🎯 Experiencia visual IMPACTANTE

---

**Desarrollado para**: Proveedora y Comercializadora Tabasqueña S.A. de C.V.  
**Fecha**: 28 de octubre de 2025  
**Versión**: 2.0 - IMPACTANTE  
**Paleta**: Naranja #FF7B00 + Negro + Blanco
