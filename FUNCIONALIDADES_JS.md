# 🚀 Funcionalidades JavaScript Implementadas - PCT

## Experiencia Visual Impactante

El sitio web de PCT ahora cuenta con **10 funcionalidades JavaScript** que crean una experiencia visual moderna e impactante.

---

## 📋 Funcionalidades Activas

### 1. ✨ Smooth Scroll
**Descripción**: Navegación suave entre secciones  
**Uso**: Automático en todos los enlaces con `href="#..."`  
**Efecto**: Scroll animado en lugar de saltos bruscos

### 2. 🎬 Animaciones al Hacer Scroll
**Descripción**: Las secciones aparecen con animación fade-in al hacer scroll  
**Uso**: Automático en todas las `<section>`  
**Efecto**: Elementos aparecen desde abajo con fade-in

### 3. 🌊 Efecto Parallax
**Descripción**: Imágenes con movimiento parallax  
**Uso**: Agregar clase `parallax-img` y atributo `data-speed="0.5"`  
**Ejemplo**:
```html
<img src="img/foto.jpg" class="parallax-img" data-speed="0.3">
```

### 4. 🖼️ Galería Interactiva con Modal
**Descripción**: Click en cualquier imagen para verla en tamaño completo  
**Uso**: Automático en todas las imágenes  
**Excepción**: Agregar clase `no-modal` para desactivar  
**Características**:
- Modal con fondo oscuro
- Botón de cierre (X)
- Click fuera del modal para cerrar
- Caption de la imagen (atributo `alt`)

### 5. 🔢 Contadores Animados
**Descripción**: Números que cuentan desde 0 hasta el valor objetivo  
**Uso**: Agregar clase `counter` y atributo `data-target`  
**Ejemplo**:
```html
<div class="counter" data-target="17">0</div>
```
**Implementado en**: Sección hero (17 años, 4 estados, 100%)

### 6. ⌨️ Efecto de Escritura (Typing)
**Descripción**: Texto que se escribe letra por letra  
**Uso**: Agregar clase `typing-effect`  
**Ejemplo**:
```html
<h1 class="typing-effect">PCT - Proveedora...</h1>
```
**Implementado en**: Título principal

### 7. 📱 Navbar Inteligente
**Descripción**: Navbar que se oculta al hacer scroll hacia abajo y aparece al subir  
**Uso**: Automático  
**Características**:
- Se oculta después de 500px de scroll hacia abajo
- Aparece al hacer scroll hacia arriba
- Sombra dinámica según posición

### 8. ✨ Partículas de Fondo (Opcional)
**Descripción**: Animación de partículas conectadas en el fondo  
**Uso**: Descomentar `initParticles()` en script.js (línea 324)  
**Nota**: Desactivado por defecto para mejor rendimiento  
**Características**:
- 50 partículas naranjas
- Conexiones dinámicas entre partículas cercanas
- Canvas HTML5

### 9. 🖼️ Lazy Loading
**Descripción**: Carga diferida de imágenes  
**Uso**: Cambiar `src` por `data-src`  
**Ejemplo**:
```html
<img data-src="img/foto.jpg" alt="Descripción">
```
**Beneficio**: Mejora velocidad de carga inicial

### 10. 🎨 Estilos Dinámicos
**Descripción**: Estilos CSS inyectados dinámicamente  
**Uso**: Automático  
**Incluye**:
- Estilos del modal de imágenes
- Animación fade-in-up
- Efectos de transición

---

## 🎨 Efectos Visuales en CSS

### Galería de Imágenes
- **Grid responsive**: 3 columnas en desktop, 1 en móvil
- **Hover effect**: Elevación y sombra naranja
- **Zoom en hover**: Imagen se agranda 1.1x
- **Animación de entrada**: Cada imagen aparece con delay escalonado
- **Bordes redondeados**: 10px
- **Altura fija**: 250px con object-fit: cover

### Sección Hero
- **Gradiente naranja**: De #FF7B00 a #e66d00
- **Texto blanco**: Contraste perfecto
- **Contadores grandes**: 3em, negrita
- **Layout flexible**: Se adapta a móviles

### Navegación
- **Sticky header**: Se queda fijo al hacer scroll
- **Hover effect**: Fondo semi-transparente
- **Transiciones suaves**: 0.3s ease
- **Responsive**: Vertical en móviles

---

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 768px (3 columnas en galería)
- **Tablet**: 768px (navegación adaptada)
- **Móvil**: < 480px (1 columna, tamaños reducidos)

### Adaptaciones Móviles
- Navegación vertical
- Galería de 1 columna
- Imágenes de 200px de alto
- Fuentes más pequeñas
- Padding reducido

---

## 🎯 Cómo Usar las Funcionalidades

### Para agregar más imágenes a la galería:

```html
<div class="gallery-item">
    <img src="img/nueva-imagen.jpg" alt="Descripción" class="gallery-img">
    <p class="gallery-caption">Título de la imagen</p>
</div>
```

### Para agregar contador:

```html
<div class="counter" data-target="50">0</div>
<p>Proyectos Completados</p>
```

### Para efecto typing:

```html
<h2 class="typing-effect">Tu texto aquí</h2>
```

### Para parallax:

```html
<img src="img/fondo.jpg" class="parallax-img" data-speed="0.5">
```
*Speed: 0.1 (lento) a 1.0 (rápido)*

---

## 🔧 Personalización

### Cambiar velocidad de animaciones

**En script.js:**
```javascript
// Línea 171: Velocidad de typing
const speed = 50; // milisegundos por letra

// Línea 129: Duración de contadores
const duration = 2000; // milisegundos
```

### Cambiar colores

**En style.css:**
```css
/* Color principal */
#FF7B00 → Tu color

/* Color hover */
#e66d00 → Tu color oscuro
```

### Activar partículas

**En script.js (línea 324):**
```javascript
// Descomentar esta línea:
initParticles();
```

---

## ⚡ Rendimiento

### Optimizaciones Implementadas
- ✅ Intersection Observer para animaciones (no usa scroll event)
- ✅ RequestAnimationFrame para animaciones suaves
- ✅ Transiciones CSS en lugar de JavaScript cuando es posible
- ✅ Lazy loading disponible para imágenes
- ✅ Partículas desactivadas por defecto

### Recomendaciones
1. Comprimir imágenes antes de subir
2. Usar formatos modernos (WebP)
3. Activar lazy loading en imágenes pesadas
4. Mantener partículas desactivadas en producción

---

## 🌐 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### APIs Utilizadas
- Intersection Observer API
- Canvas API (partículas)
- RequestAnimationFrame
- CSS Grid
- CSS Transitions
- CSS Animations

---

## 📊 Métricas de Experiencia

### Efectos Visuales Activos
- **Animaciones**: 6 tipos diferentes
- **Transiciones**: Todas las interacciones
- **Contadores**: 3 estadísticas animadas
- **Galería**: 6 imágenes con efectos
- **Modal**: Lightbox completo

### Interactividad
- **Hover effects**: 10+ elementos
- **Click events**: Imágenes, navegación
- **Scroll events**: Navbar, animaciones
- **Keyboard**: Navegación accesible

---

## 🚀 Próximas Mejoras Sugeridas

1. **Carrusel de imágenes** en lugar de grid estático
2. **Filtros** para galería por categoría
3. **Formulario de contacto** con validación
4. **Mapa interactivo** de ubicación
5. **Testimonios** con slider
6. **Video background** en hero section
7. **Animación de logo** al cargar
8. **Progress bar** de scroll
9. **Botón "volver arriba"** flotante
10. **Dark mode** toggle

---

## 📝 Notas Importantes

- Todas las funcionalidades se inicializan automáticamente
- No requiere jQuery ni librerías externas
- JavaScript vanilla puro (415 líneas)
- CSS moderno con Grid y Flexbox
- Mobile-first approach
- Accesibilidad considerada

---

**Desarrollado para**: Proveedora y Comercializadora Tabasqueña S.A. de C.V.  
**Fecha**: 28 de octubre de 2025  
**Versión**: 1.0  
**Paleta de colores**: Naranja #FF7B00
