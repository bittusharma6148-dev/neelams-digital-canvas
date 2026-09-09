// ==========================================================================
// NEELAM'S DIGITAL CANVAS — 3D ANIMATION & INTERACTIVITY ENGINE
// ==========================================================================

(function() {
  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', init3DExperience);

  function init3DExperience() {
    initThreeJSHero();
    init3DCardTilt();
    initMagneticButtons();
    initMarqueeInteractiveHover();
  }

  // 1. THREE.JS INTERACTIVE 3D HERO CANVAS
  function initThreeJSHero() {
    const canvas = document.getElementById('hero-3d-canvas');
    if (!canvas) return;

    if (typeof THREE === 'undefined') {
      // High-performance canvas fallback if Three.js CDN is unavailable
      initCanvas2DFallback(canvas);
      return;
    }

    try {
      const heroSection = document.getElementById('home') || canvas.parentElement;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, heroSection.clientWidth / heroSection.clientHeight, 0.1, 1000);
      camera.position.z = 24;

      const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
      renderer.setSize(heroSection.clientWidth, heroSection.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // 3D Geometric Sculptures
      // 1. Core Geometric Torus Knot (Wireframe)
      const knotGeo = new THREE.TorusKnotGeometry(6, 1.8, 120, 24, 2, 3);
      const knotMat = new THREE.MeshBasicMaterial({
        color: 0x6366f1,
        wireframe: true,
        transparent: true,
        opacity: 0.28
      });
      const torusKnot = new THREE.Mesh(knotGeo, knotMat);
      scene.add(torusKnot);

      // 2. Outer Floating Icosahedron Ring
      const icoGeo = new THREE.IcosahedronGeometry(11, 1);
      const icoMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.16
      });
      const icosahedron = new THREE.Mesh(icoGeo, icoMat);
      scene.add(icosahedron);

      // 3. Floating 3D Star / Particle Constellation
      const particleCount = 180;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 60;
        positions[i + 1] = (Math.random() - 0.5) * 50;
        positions[i + 2] = (Math.random() - 0.5) * 40;
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0x8b5cf6,
        size: 0.45,
        transparent: true,
        opacity: 0.65
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      // Interactive Mouse tracking
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        targetX = x * 0.8;
        targetY = y * 0.8;
      });

      // Resize listener
      window.addEventListener('resize', () => {
        if (!heroSection) return;
        camera.aspect = heroSection.clientWidth / heroSection.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(heroSection.clientWidth, heroSection.clientHeight);
      });

      // Render Loop with smooth lerp
      let clock = new THREE.Clock();
      function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Smooth mouse damping
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        // Auto 3D rotations + mouse influence
        torusKnot.rotation.x = elapsedTime * 0.18 + mouseY * 0.4;
        torusKnot.rotation.y = elapsedTime * 0.22 + mouseX * 0.4;

        icosahedron.rotation.x = -elapsedTime * 0.1 + mouseY * 0.2;
        icosahedron.rotation.y = -elapsedTime * 0.14 + mouseX * 0.2;

        particles.rotation.y = elapsedTime * 0.04;

        // Camera gentle float
        camera.position.x = mouseX * 2;
        camera.position.y = mouseY * 2;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      }
      animate();
    } catch (e) {
      console.warn("WebGL 3D initialized with fallback", e);
    }
  }

  // 2D Canvas Fallback for 3D Geometry
  function initCanvas2DFallback(canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    let angle = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';
      ctx.lineWidth = 1;

      // Draw rotating 3D illusion rings
      const cx = width * 0.8;
      const cy = height * 0.5;
      for (let r = 80; r < 240; r += 40) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, r * 0.4, angle, 0, Math.PI * 2);
        ctx.stroke();
      }
      angle += 0.005;
      requestAnimationFrame(draw);
    }
    draw();
  }

  // 2. 3D INTERACTIVE TILT FOR CARDS & PORTFOLIO
  function init3DCardTilt() {
    const selector = '.deck-card, .service-row, .marquee-slide-card, #work article, .glow-badge-3d, .about-glass-badge, .about-value-node, .about-connect-btn, .about-showcase-card-3d';
    const cards = document.querySelectorAll(selector);

    cards.forEach(card => {
      // Add tilt-3d class
      card.classList.add('tilt-3d');

      // Add dynamic glare layer if not present
      if (!card.querySelector('.tilt-3d-glare')) {
        const glare = document.createElement('div');
        glare.className = 'tilt-3d-glare';
        card.appendChild(glare);
      }

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / centerY) * 9; // max 9 deg
        const rotateY = ((x - centerX) / centerX) * 9;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;

        // Update glare position
        const glare = card.querySelector('.tilt-3d-glare');
        if (glare) {
          glare.style.background = `radial-gradient(circle at ${(x / rect.width * 100).toFixed(1)}% ${(y / rect.height * 100).toFixed(1)}%, rgba(255, 255, 255, 0.22) 0%, transparent 65%)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        const glare = card.querySelector('.tilt-3d-glare');
        if (glare) {
          glare.style.background = '';
        }
      });
    });
  }

  // 3. MAGNETIC 3D BUTTONS
  function initMagneticButtons() {
    const buttons = document.querySelectorAll('a[href^="#"], button, .deck-filter-btn');
    buttons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate3d(${(x * 0.18).toFixed(1)}px, ${(y * 0.18).toFixed(1)}px, 0)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate3d(0, 0, 0)';
      });
    });
  }

  // 4. MARQUEE HOVER PAUSE & TILT INTEGRATION
  function initMarqueeInteractiveHover() {
    // Re-bind 3D tilt whenever new marquee items or DOM updates occur
    setTimeout(init3DCardTilt, 600);
  }

  // Expose global re-init function for dynamic content
  window.reInit3DAnimations = function() {
    init3DCardTilt();
    initMagneticButtons();
  };
})();
