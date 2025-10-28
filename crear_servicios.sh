#!/bin/bash

# Script para crear páginas de servicios

cd /home/anonimus/sites/pctmx/servicios

# Crear página de Carretes Espaciadores
cat > carretes-espaciadores.html << 'EOF'
<!DOCTYPE html>
<html lang="es-MX">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carretes Espaciadores - PCT</title>
    <link rel="icon" href="../img/logo.png" type="image/png">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="service-detail.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="../index.html#inicio">Inicio</a></li>
                <li><a href="../index.html#nosotros">Nosotros</a></li>
                <li><a href="../index.html#servicios">Servicios</a></li>
                <li><a href="../index.html#proyectos">Proyectos</a></li>
                <li><a href="../index.html#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <div class="service-detail">
        <div class="service-header">
            <div class="service-icon-large">⚙️</div>
            <h1>Carretes Espaciadores</h1>
            <p class="service-subtitle">Espaciadores de alta precisión para instalaciones petroleras</p>
        </div>

        <section class="features-section">
            <h2>Especificaciones Técnicas</h2>
            <div class="specs-grid">
                <div class="spec-card">
                    <h3>📏 Dimensiones</h3>
                    <ul class="spec-list">
                        <li>Diámetros: 2" hasta 60"</li>
                        <li>Longitudes variables</li>
                        <li>Diseño personalizado</li>
                        <li>Precisión milimétrica</li>
                    </ul>
                </div>
                
                <div class="spec-card">
                    <h3>🔩 Materiales</h3>
                    <ul class="spec-list">
                        <li>Acero al carbón grado API</li>
                        <li>Acero inoxidable</li>
                        <li>Aleaciones resistentes</li>
                        <li>Certificación completa</li>
                    </ul>
                </div>
                
                <div class="spec-card">
                    <h3>⚙️ Características</h3>
                    <ul class="spec-list">
                        <li>Conexiones bridadas</li>
                        <li>Resistencia a presión</li>
                        <li>Anticorrosión</li>
                        <li>Fácil instalación</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <h2>¿Necesitas más información?</h2>
            <p>Contáctanos para una cotización personalizada</p>
            <a href="../index.html#contacto" class="cta-button">Contactar ahora</a>
        </section>

        <div class="back-link-container">
            <a href="../index.html#servicios" class="back-button">← Volver a Servicios</a>
        </div>
    </div>

    <footer>
        <p>&copy; 2025 PCT - Proveedora y Comercializadora Tabasqueña S.A. de C.V.</p>
        <p>Servicios Oil and Gas | Desde 2008</p>
        <p><a href="../aviso.html">Aviso de Privacidad y Términos</a> | <a href="../sitemap.xml">Sitemap</a></p>
    </footer>
</body>
</html>
EOF

echo "✅ Páginas de servicios creadas en /servicios/"
echo "📝 Puedes personalizar cada una con contenido específico"
