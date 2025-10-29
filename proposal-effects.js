// Proposal effects: confetti + applause on CTA click
(function(){
  function createConfetti(durationMs = 5000) {
    let canvas = document.getElementById('confetti-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'confetti-canvas';
      document.body.appendChild(canvas);
    }
    const ctx = canvas.getContext('2d');
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    function resize() {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(1,0,0,1,0,0);
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#FF7B00', '#ffffff', '#ffd8b2', '#ffa64d', '#333333'];
    const pieces = [];
    const COUNT = Math.min(250, Math.floor(window.innerWidth / 4));
    for (let i = 0; i < COUNT; i++) {
      pieces.push({
        x: Math.random() * window.innerWidth,
        y: -10 - Math.random() * window.innerHeight,
        r: 4 + Math.random() * 6,
        w: 6 + Math.random() * 10,
        h: 8 + Math.random() * 14,
        tilt: Math.random() * Math.PI,
        tiltSpeed: (Math.random() * 0.1) + 0.02,
        fall: 1 + Math.random() * 2.5,
        sway: (Math.random() * 2 - 1) * 0.8,
        color: colors[(Math.random() * colors.length)|0],
        shape: Math.random() < 0.5 ? 'rect' : 'circle'
      });
    }

    let running = true;
    const start = performance.now();
    function draw(t) {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      for (const p of pieces) {
        p.tilt += p.tiltSpeed;
        p.x += Math.sin(p.tilt) * p.sway;
        p.y += p.fall;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.tilt);
        ctx.fillStyle = p.color;
        if (p.shape === 'rect') {
          ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
        if (p.y > window.innerHeight + 20) {
          p.y = -20;
          p.x = Math.random() * window.innerWidth;
        }
      }
      const elapsed = t - start;
      if (elapsed < durationMs) {
        requestAnimationFrame(draw);
      } else {
        running = false;
        setTimeout(() => {
          if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
        }, 300);
      }
    }
    requestAnimationFrame(draw);
  }

  // Simple applause using Web Audio API (short noise bursts)
  function playApplause() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const master = ctx.createGain();
      master.gain.value = 0.2;
      master.connect(ctx.destination);

      const duration = 1.0; // seconds (shorter, crisper)
      const bufferSize = Math.floor(ctx.sampleRate * duration);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        // Pink-ish noise envelope to emulate distant claps
        const t = i / ctx.sampleRate;
        const env = Math.pow(1 - t / duration, 2);
        data[i] = (Math.random()*2 - 1) * 0.6 * env;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const band = ctx.createBiquadFilter();
      band.type = 'bandpass';
      band.frequency.value = 1800;
      band.Q.value = 1.2;
      noise.connect(band);
      band.connect(master);
      noise.start();

      // Add a few transient "clap" ticks
      for (let n = 0; n < 4; n++) {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'square';
        osc.frequency.value = 1000 + Math.random()*300;
        g.gain.setValueAtTime(0.0001, ctx.currentTime + 0.06*n);
        g.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.06*n + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06*n + 0.1);
        osc.connect(g);
        g.connect(master);
        osc.start(ctx.currentTime + 0.06*n);
        osc.stop(ctx.currentTime + 0.06*n + 0.12);
      }

      // Stop context later to free resources
      setTimeout(() => { try { ctx.close(); } catch(e){} }, 1500);
    } catch (e) {
      // Fail silently
    }
  }

  function attachCTA() {
    const acceptBtn = document.getElementById('proposal-accept-btn');
    const modal = document.getElementById('proposal-modal');
    const msg = document.getElementById('proposal-message');
    const confirm = document.getElementById('proposal-confirm');
    const header = document.getElementById('proposal-header');
    const title = document.getElementById('proposal-title');
    const badge = document.getElementById('proposal-badge');
    const badgeDate = document.getElementById('proposal-approved-at');
    const downloadBtn = document.getElementById('proposal-download');
    if (!acceptBtn || !modal || !msg || !confirm) return;

    const defaultBody = `Estoy de acuerdo en general con el proyecto y se harán las modificaciones correspondientes.\n\nAgradezco procedan con la implementación en el dominio pc-t.mx.\n\nAtentamente,\nIng. José Avram López Cámara Zurita`;

    function openModal() {
      modal.setAttribute('aria-hidden', 'false');
      msg.value = defaultBody;
      msg.focus();
    }
    function closeModal() {
      modal.setAttribute('aria-hidden', 'true');
    }

    // Load approved state from localStorage
    function applyApproved(ts) {
      try {
        if (header) header.classList.add('approved');
        if (title) title.textContent = 'Propuesta de Sitio Web Profesional — Aprobada';
        if (badge) {
          badge.removeAttribute('hidden');
          if (badgeDate) {
            const d = ts ? new Date(ts) : new Date();
            badgeDate.textContent = ` · ${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
          }
        }
        // Disable accept button
        if (acceptBtn) {
          acceptBtn.setAttribute('disabled', 'true');
          acceptBtn.classList.add('is-disabled');
          acceptBtn.textContent = 'Aprobada';
        }
      } catch(_){}
    }

    const saved = localStorage.getItem('pct_proposal_approved_at');
    if (saved) {
      applyApproved(Number(saved));
    }

    acceptBtn.addEventListener('click', function(e){
      e.preventDefault();
      openModal();
    });

    modal.addEventListener('click', (ev)=>{
      if (ev.target && ev.target.hasAttribute && ev.target.hasAttribute('data-close-modal')) {
        closeModal();
      }
    });
    document.addEventListener('keydown', (ev)=>{
      if (modal.getAttribute('aria-hidden') === 'false' && ev.key === 'Escape') closeModal();
    });

    confirm.addEventListener('click', ()=>{
      // Celebration first
      createConfetti(3500);
      playApplause();
      // Persist approval
      const now = Date.now();
      localStorage.setItem('pct_proposal_approved_at', String(now));
      applyApproved(now);
      // Close modal
      closeModal();
    });

    // Download PDF = print flow
    if (downloadBtn) {
      downloadBtn.addEventListener('click', ()=>{
        window.print();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachCTA);
  } else {
    attachCTA();
  }
})();
