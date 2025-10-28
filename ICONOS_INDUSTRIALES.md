# ⚙ Íconos Industriales Oscuros - PCT

## 🎨 Transformación de Íconos

Se han reemplazado todos los íconos coloridos por símbolos **industriales, oscuros y pesados** acorde al sector Oil & Gas y la personalidad del cliente.

---

## 🔧 Íconos Implementados

### **Servicios** (Sección Oscura)

| Servicio | Antes | Ahora | Significado |
|----------|-------|-------|-------------|
| Carretes Adaptadores | 🔧 | **⚙** | Engranaje industrial |
| Carretes Espaciadores | ⚙️ | **⚒** | Martillo y pico (pesado) |
| Bridas Adaptadoras | 🔩 | **⛓** | Cadenas (conexión fuerte) |
| Líneas Superficiales | 🛢️ | **⚡** | Energía/potencia |
| Presas Ecológicas | 💧 | **⛽** | Combustible/petróleo |
| Lavado de Presas | 🧹 | **⚗** | Alambique (químico) |

### **Compromiso**

| Valor | Antes | Ahora | Significado |
|-------|-------|-------|-------------|
| Excelencia | ⭐ | **⚡** | Poder/energía |
| Integridad | 🤝 | **⚖** | Balanza/justicia |
| Confianza | 💼 | **⚓** | Ancla (estabilidad) |
| Medio Ambiente | 🌱 | **⛰** | Montaña (solidez) |

### **Contacto**

| Tipo | Antes | Ahora | Significado |
|------|-------|-------|-------------|
| Teléfono | 📞 | **☎** | Teléfono clásico |
| Email | 📧 | **✉** | Sobre tradicional |
| Ubicación | 📍 | **⚓** | Ancla (puerto) |

---

## 🎨 Efectos Visuales Aplicados

### **Apariencia Metálica Oscura**

```css
color: #666;  /* Gris oscuro metálico */
text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8),      /* Sombra profunda */
    -1px -1px 2px rgba(255, 255, 255, 0.1); /* Brillo metálico */
filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5)); /* Sombra externa */
```

### **Efecto Hover - Fuego Naranja**

```css
.service-card:hover .service-icon {
    color: #FF7B00;  /* Naranja fuego */
    text-shadow: 
        0 0 20px rgba(255, 123, 0, 0.8),  /* Resplandor naranja */
        0 0 40px rgba(255, 123, 0, 0.4),  /* Halo externo */
        2px 2px 4px rgba(0, 0, 0, 0.8);   /* Sombra oscura */
    transform: scale(1.15) rotate(5deg);
    filter: drop-shadow(0 0 20px rgba(255, 123, 0, 0.6));
}
```

### **Ícono Grande (Páginas de Detalle)**

```css
.service-icon-large {
    font-size: 5em;
    color: #444;  /* Gris muy oscuro */
    animation: 
        float 3s ease-in-out infinite,      /* Flotación */
        glow 2s ease-in-out infinite alternate; /* Pulsación de brillo */
}
```

---

## 🔥 Paleta de Colores

### **Estado Normal (Frío/Metálico)**
- **Color base**: #666 (gris oscuro)
- **Sombra**: rgba(0, 0, 0, 0.8) (negro profundo)
- **Brillo**: rgba(255, 255, 255, 0.1) (destello metálico)

### **Estado Hover (Fuego/Energía)**
- **Color activo**: #FF7B00 (naranja fuego)
- **Resplandor 1**: rgba(255, 123, 0, 0.8) (intenso)
- **Resplandor 2**: rgba(255, 123, 0, 0.4) (halo)
- **Sombra**: rgba(0, 0, 0, 0.8) (contraste)

---

## ⚡ Animaciones

### **1. Efecto Metálico → Fuego**
- **Duración**: 0.4s
- **Transición**: Gris oscuro → Naranja brillante
- **Escala**: 1.0 → 1.15
- **Rotación**: 0deg → 5deg

### **2. Glow Pulsante (Páginas de Detalle)**
```css
@keyframes glow {
    0% { 
        /* Brillo suave */
        text-shadow: 0 0 20px rgba(255, 123, 0, 0.3);
    }
    100% { 
        /* Brillo intenso */
        text-shadow: 
            0 0 40px rgba(255, 123, 0, 0.6),
            0 0 60px rgba(255, 123, 0, 0.3);
    }
}
```

### **3. Float (Flotación)**
```css
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}
```

---

## 🎯 Filosofía de Diseño

### **Inspiración**
- **Barcos grandes y pesados**: Anclas ⚓, cadenas ⛓
- **Fuego**: Resplandor naranja en hover
- **Tormenta**: Rayos ⚡, oscuridad
- **Industrial**: Engranajes ⚙, herramientas ⚒
- **Petróleo**: Combustible ⛽, energía

### **Características**
- ✅ **Oscuro**: Grises profundos (#444, #555, #666)
- ✅ **Pesado**: Sombras intensas y múltiples capas
- ✅ **Metálico**: Brillos sutiles que simulan metal
- ✅ **Fuego**: Resplandor naranja al interactuar
- ✅ **Industrial**: Símbolos de maquinaria pesada

---

## 📊 Comparación Antes/Después

### **Antes**
- ❌ Íconos coloridos y alegres (🔧🎯💼🌱)
- ❌ Apariencia ligera y amigable
- ❌ Filtro grayscale simple
- ❌ Sin profundidad visual

### **Después**
- ✅ Íconos industriales oscuros (⚙⚒⛓⚡)
- ✅ Apariencia pesada y profesional
- ✅ Efectos metálicos con sombras múltiples
- ✅ Profundidad con drop-shadow y text-shadow
- ✅ Transformación fuego en hover

---

## 🔧 Personalización

### **Cambiar intensidad del metal**
```css
.service-icon {
    color: #666;  /* Más claro: #888, Más oscuro: #444 */
}
```

### **Cambiar intensidad del fuego**
```css
.service-card:hover .service-icon {
    text-shadow: 
        0 0 20px rgba(255, 123, 0, 0.8),  /* Aumentar 0.8 para más brillo */
        0 0 40px rgba(255, 123, 0, 0.4);
}
```

### **Cambiar velocidad de animaciones**
```css
.service-icon {
    transition: all 0.4s ease;  /* Cambiar 0.4s */
}

.service-icon-large {
    animation: 
        float 3s ease-in-out infinite,  /* Cambiar 3s */
        glow 2s ease-in-out infinite;   /* Cambiar 2s */
}
```

---

## 🎨 Símbolos Alternativos

Si se desean cambiar los íconos, aquí hay alternativas industriales:

### **Servicios**
- **Engranajes**: ⚙ ⚒ ⛏ 🔨
- **Conexiones**: ⛓ 🔗 ⚡ ⚠
- **Petróleo**: ⛽ 🛢 ⚗ 🏭
- **Herramientas**: ⚒ 🔧 🔩 ⚙

### **Valores**
- **Poder**: ⚡ ⚠ 💥 🔥
- **Estabilidad**: ⚓ ⛰ 🏔 ⚖
- **Fuerza**: 💪 ⚒ 🔨 ⛏

### **Contacto**
- **Comunicación**: ☎ ✉ 📠 📡
- **Ubicación**: ⚓ 🗺 🧭 📍

---

## ✅ Archivos Modificados

1. **index.html**
   - Servicios: 6 íconos cambiados
   - Compromiso: 4 íconos cambiados
   - Contacto: 3 íconos cambiados

2. **style.css**
   - `.service-icon`: Efectos metálicos + fuego
   - `.commitment-icon`: Efectos metálicos
   - `.contact-icon`: Efectos metálicos en blanco

3. **servicios/carretes-adaptadores.html**
   - Ícono principal: 🔧 → ⚙

4. **servicios/service-detail.css**
   - `.service-icon-large`: Animación glow + float

---

## 🚀 Resultado Final

### **Experiencia Visual**
1. Usuario ve íconos oscuros y metálicos (frío)
2. Hover: Íconos se iluminan con fuego naranja (calor)
3. Transformación: Metal frío → Fuego ardiente
4. Sensación: Industrial, pesado, poderoso

### **Identidad**
- ⚓ **Barcos**: Anclas y cadenas
- 🔥 **Fuego**: Resplandor naranja
- ⛈ **Tormenta**: Oscuridad y poder
- ⚙ **Industrial**: Maquinaria pesada
- 🛢 **Petróleo**: Energía y fuerza

---

**Desarrollado para**: Cliente con gusto por lo oscuro y pesado  
**Fecha**: 28 de octubre de 2025  
**Versión**: 2.2 - Íconos Industriales  
**Tema**: Metal oscuro + Fuego naranja
