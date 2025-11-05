// ============================================
// PCT - JavaScript para Experiencia Visual
// ============================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Inicializar todas las funciones
    initSmoothScroll();
    initAOSAnimations();
    initParallaxEffect();
    initImageGallery();
    initCounterAnimation();
    initTypingEffect();
    initNavbarScroll();
    initParallaxScroll();
    initServiceCards();
    initStatCountersClick();
    setHeaderHeightVar();
    window.addEventListener('resize', setHeaderHeightVar);
    window.addEventListener('load', setHeaderHeightVar);
    
});

// ============================================
// 1. SMOOTH SCROLL para navegación
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// 2. AOS - Animate On Scroll (Sistema Manual)
// ============================================
function initAOSAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observar todos los elementos con data-aos
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// 6B. Ajustar variable CSS con la altura real del header
// ============================================
function setHeaderHeightVar() {
    const header = document.querySelector('header');
    if (!header) return;
    const h = header.offsetHeight;
    document.documentElement.style.setProperty('--header-h', h + 'px');
}

// ============================================
// 2B. PARALLAX SCROLL para secciones grandes
// ============================================
function initParallaxScroll() {
    const parallaxSections = document.querySelectorAll('.hero-parallax, .parallax-divider');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            
            if (scrollPercent >= 0 && scrollPercent <= 1) {
                const yPos = -(scrolled * 0.5);
                section.style.backgroundPositionY = `${yPos}px`;
            }
        });
    });
}

// ============================================
// 3. EFECTO PARALLAX en imágenes
// ============================================
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax-img');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ============================================
// 4. GALERÍA DE IMÁGENES INTERACTIVA
// ============================================
function initImageGallery() {
    // Crear modal para galería
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img class="modal-image" src="" alt="">
            <div class="modal-caption"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // Agregar evento click a todas las imágenes
    document.querySelectorAll('img').forEach(img => {
        if (!img.classList.contains('no-modal')) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                modal.querySelector('.modal-image').src = this.src;
                modal.querySelector('.modal-caption').textContent = this.alt || '';
                modal.classList.add('active');
            });
        }
    });

    // Cerrar modal
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// ============================================
// 5. CONTADOR ANIMADO para estadísticas
// ============================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// ============================================
// 6. EFECTO DE ESCRITURA (Typing Effect)
// ============================================
function initTypingEffect() {
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        // Reservar altura final para evitar saltos de layout
        const original = text;
        element.textContent = original;
        const reservedHeight = element.getBoundingClientRect().height;
        element.style.minHeight = reservedHeight + 'px';
        element.textContent = '';
        element.style.borderRight = '2px solid #FF7B00';
        element.style.paddingRight = '5px';
        
        let index = 0;
        const speed = 50; // velocidad de escritura

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                // Efecto de cursor parpadeante
                setInterval(() => {
                    element.style.borderRight = 
                        element.style.borderRight === '2px solid transparent' 
                        ? '2px solid #FF7B00' 
                        : '2px solid transparent';
                }, 500);
            }
        }

        // Iniciar cuando el elemento sea visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    type();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(element);
    });
}

// ============================================
// 7. NAVBAR que cambia al hacer scroll
// ============================================
function initNavbarScroll() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Agregar sombra al hacer scroll
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }

        // Ocultar/mostrar navbar al hacer scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // Transición suave
    header.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
}

// ============================================
// 8. PARTÍCULAS DE FONDO (Canvas Animation)
// ============================================
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 123, 0, 0.3)';
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Conectar partículas cercanas
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 123, 0, ${0.2 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();

    // Redimensionar canvas
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Inicializar partículas (opcional, comentar si es muy pesado)
// initParticles();

// ============================================
// 9. LAZY LOADING de imágenes
// ============================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// 10. UTILIDADES
// ============================================

// Agregar clase fade-in-up cuando sea visible
const style = document.createElement('style');
style.textContent = `
    .fade-in-up {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

    .image-modal {
        display: none;
        position: fixed;
        z-index: 10000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .image-modal.active {
        display: flex;
        opacity: 1;
        align-items: center;
        justify-content: center;
    }

    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }

    .modal-image {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 8px;
    }

    .modal-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
        transition: color 0.3s;
    }

    .modal-close:hover {
        color: #FF7B00;
    }

    .modal-caption {
        color: white;
        text-align: center;
        padding: 10px;
        font-size: 1.2em;
    }
`;
document.head.appendChild(style);

// ============================================
// 11. SERVICE CARDS - Click para especificaciones
// ============================================
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.dataset.service;
            if (serviceName) {
                // Redirigir a la página de especificaciones
                window.location.href = `servicios/${serviceName}.html`;
            }
        });
        
        // Agregar efecto de ripple al click
        card.addEventListener('mousedown', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Agregar estilos para el efecto ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple-effect {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(255, 123, 0, 0.6);
        transform: translate(-50%, -50%);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ============================================
// 12. STAT COUNTERS CLICK - Scroll tipo tobogán
// ============================================
function initStatCountersClick() {
    const statItems = document.querySelectorAll('.stat-clickable');
    
    statItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.dataset.scrollTo;
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Efecto de tobogán suave con easing personalizado
                const startPosition = window.pageYOffset;
                const targetPosition = targetSection.offsetTop - 80; // 80px para el header
                const distance = targetPosition - startPosition;
                const duration = 2000; // 2 segundos para efecto tobogán
                let startTime = null;
                
                // Función de easing para efecto tobogán (ease-in-out-cubic)
                function easeInOutCubic(t) {
                    return t < 0.5 
                        ? 4 * t * t * t 
                        : 1 - Math.pow(-2 * t + 2, 3) / 2;
                }
                
                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    const ease = easeInOutCubic(progress);
                    
                    window.scrollTo(0, startPosition + (distance * ease));
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }
                
                requestAnimationFrame(animation);
                
                // Efecto visual en la tarjeta
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            }
        });
        
        // Efecto de pulsación en hover
        item.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse-stat 0.6s ease-in-out';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
}

// Agregar animación de pulsación
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse-stat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(pulseStyle);

console.log('🚀 PCT - Experiencia visual cargada correctamente');