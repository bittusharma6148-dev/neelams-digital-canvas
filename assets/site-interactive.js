// ==========================================================================
// NEELAM'S DIGITAL CANVAS — COMPREHENSIVE INTERACTIVE SUITE
// ==========================================================================
(function() {
  if (window.__ndInteractiveInitialized) return;
  window.__ndInteractiveInitialized = true;

  function init() {
    initFAQAccordion();
    initVideoModal();
    initMobileNav();
    initPortfolioTriggers();
    initSmoothScroll();
    initDownloadCV();
  }

  // 1. INTERACTIVE FAQ ACCORDION
  function initFAQAccordion() {
    const faqButtons = document.querySelectorAll('section button[aria-expanded]');
    
    faqButtons.forEach(button => {
      if (button.__faqBound) return;
      button.__faqBound = true;

      const parent = button.parentElement;
      const content = parent ? parent.querySelector('p') : null;

      button.addEventListener('click', function(e) {
        e.preventDefault();
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        faqButtons.forEach(otherBtn => {
          if (otherBtn !== button) {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherSpan = otherBtn.querySelector('span');
            if (otherSpan) otherSpan.textContent = '+';
            const otherContent = otherBtn.parentElement ? otherBtn.parentElement.querySelector('p') : null;
            if (otherContent) {
              otherContent.style.height = '0px';
              otherContent.style.opacity = '0';
              otherContent.style.transition = 'height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease';
            }
          }
        });

        const nextState = !isExpanded;
        button.setAttribute('aria-expanded', nextState ? 'true' : 'false');
        const iconSpan = button.querySelector('span');
        if (iconSpan) iconSpan.textContent = nextState ? '−' : '+';

        if (content) {
          if (nextState) {
            content.style.height = 'auto';
            const naturalHeight = content.scrollHeight + 'px';
            content.style.height = '0px';
            content.style.opacity = '0';
            content.offsetHeight;
            content.style.transition = 'height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease';
            content.style.height = naturalHeight;
            content.style.opacity = '1';
          } else {
            content.style.transition = 'height 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease';
            content.style.height = '0px';
            content.style.opacity = '0';
          }
        }
      });
    });
  }

  // 2. LUXURY VIDEO STORY MODAL (WATCH MY STORY)
  function initVideoModal() {
    let modal = document.getElementById('nd-video-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'nd-video-modal';
      modal.className = 'fixed inset-0 z-[100000] hidden items-center justify-center bg-black/85 p-4 backdrop-blur-xl transition-all duration-300';
      modal.innerHTML = `
        <div class="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[#080d1a] shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_50px_rgba(139,92,246,0.3)]">
          <div class="flex items-center justify-between border-b border-white/10 bg-[#0c1224] px-6 py-4">
            <div class="flex items-center gap-3">
              <span class="flex h-3 w-3 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span class="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">NEELAM DESIGNER • STORY & REEL</span>
            </div>
            <button id="nd-video-close" class="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-colors" aria-label="Close modal">
              ✕
            </button>
          </div>
          
          <div class="relative aspect-video w-full bg-black">
            <video id="nd-modal-video" class="h-full w-full object-cover" controls playsinline poster="./assets/neelam-portrait.jpg">
              <source src="https://labs.google/fx/api/og-video/shared/6eabf7aa-acaa-417a-a021-5674fda1697b" type="video/mp4" />
            </video>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-[#0a0f20] px-6 py-4">
            <div>
              <h4 class="font-display text-sm font-semibold text-white">Creative Story & Digital Showcase</h4>
              <p class="font-sans text-xs text-muted-foreground">Turning bold ideas into engaging brands and high-converting websites.</p>
            </div>
            <div class="flex items-center gap-3">
              <a href="https://wa.me/917973773184?text=Hi%20Neelam%2C%20I%20saw%20your%20story%20and%20want%20to%20collaborate." target="_blank" rel="noopener noreferrer" class="btn-watch-story inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold text-white">
                Book a Project →
              </a>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      const closeBtn = modal.querySelector('#nd-video-close');
      const videoElem = modal.querySelector('#nd-modal-video');

      function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        if (videoElem) videoElem.pause();
        document.body.style.overflow = '';
      }

      if (closeBtn) closeBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
      });

      window.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeModal();
        }
      });
    }

    const watchButtons = document.querySelectorAll('.btn-watch-story, a[href="#work"]');
    watchButtons.forEach(btn => {
      if (btn.__videoBound) return;
      if (btn.textContent && btn.textContent.includes('Watch My Story')) {
        btn.__videoBound = true;
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const videoElem = modal.querySelector('#nd-modal-video');
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          document.body.style.overflow = 'hidden';
          if (videoElem) {
            videoElem.currentTime = 0;
            videoElem.play().catch(() => {});
          }
        });
      }
    });
  }

  // 3. MOBILE NAVIGATION DRAWER
  function initMobileNav() {
    const navToggle = document.querySelector('header button[aria-label="Toggle navigation"]');
    if (!navToggle || navToggle.__bound) return;
    navToggle.__bound = true;

    let drawer = document.getElementById('nd-mobile-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'nd-mobile-drawer';
      drawer.className = 'fixed inset-0 z-[99999] hidden flex-col justify-between bg-[#050811]/95 p-6 backdrop-blur-2xl transition-all duration-300 md:hidden';
      drawer.innerHTML = `
        <div class="flex items-center justify-between border-b border-white/10 pb-4">
          <a href="#home" class="font-display text-2xl font-bold text-white">ND<span class="text-primary">.</span></a>
          <button id="nd-mobile-close" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:bg-white/10 hover:text-white" aria-label="Close menu">
            ✕
          </button>
        </div>
        
        <nav class="my-auto flex flex-col gap-6 font-display text-2xl font-bold">
          <a href="#home" class="mobile-nav-link text-white/80 hover:text-cyan-400 transition-colors">01. Home</a>
          <a href="#work" class="mobile-nav-link text-white/80 hover:text-cyan-400 transition-colors">02. Selected Work</a>
          <a href="#skills" class="mobile-nav-link text-white/80 hover:text-cyan-400 transition-colors">03. Capabilities</a>
          <a href="#about" class="mobile-nav-link text-white/80 hover:text-cyan-400 transition-colors">04. Behind The Work</a>
          <a href="#ai-agents" class="mobile-nav-link text-white/80 hover:text-cyan-400 transition-colors">05. AI Agents</a>
          <a href="#teaching" class="mobile-nav-link text-white/80 hover:text-cyan-400 transition-colors">06. Teaching</a>
          <a href="#contact" class="mobile-nav-link text-white/80 hover:text-cyan-400 transition-colors">07. Contact</a>
        </nav>

        <div class="border-t border-white/10 pt-4 flex flex-col gap-3">
          <a href="https://wa.me/917973773184?text=Hi%20Neelam%2C%20I%20want%20to%20book%20a%20project." target="_blank" rel="noopener noreferrer" class="btn-watch-story flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white">
            WhatsApp · +91 79 7377 3184
          </a>
          <p class="text-center font-mono text-[10px] text-muted-foreground uppercase">© 2026 NEELAM DESIGNER • ALL RIGHTS RESERVED</p>
        </div>
      `;
      document.body.appendChild(drawer);

      const closeBtn = drawer.querySelector('#nd-mobile-close');
      function closeDrawer() {
        drawer.classList.add('hidden');
        drawer.classList.remove('flex');
        document.body.style.overflow = '';
      }

      if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
      drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeDrawer);
      });
    }

    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      drawer.classList.remove('hidden');
      drawer.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  }

  // 4. PORTFOLIO DECK MODAL TRIGGERS
  function initPortfolioTriggers() {
    document.querySelectorAll('button, a').forEach(btn => {
      const txt = (btn.textContent || '').toUpperCase();
      if (txt.includes('VIEW PORTFOLIO') || txt.includes('OPEN PORTFOLIO') || txt.includes('EXPLORE ALL')) {
        if (btn.__deckBound) return;
        btn.__deckBound = true;
        btn.addEventListener('click', function(e) {
          if (typeof window.openPortfolioDeck === 'function') {
            e.preventDefault();
            window.openPortfolioDeck(0);
          }
        });
      }
    });
  }

  // 5. SMOOTH SCROLL WITH HEADER OFFSET
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      if (anchor.__smoothBound) return;
      anchor.__smoothBound = true;
      anchor.addEventListener('click', function(e) {
        const hash = this.getAttribute('href');
        if (!hash || hash === '#' || hash.length <= 1) return;
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 70;
          const targetPos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // 6. RELIABLE DOWNLOAD CV HANDLER
  function initDownloadCV() {
    document.querySelectorAll('.btn-download-cv, a[download*="Portfolio"]').forEach(link => {
      if (link.__cvBound) return;
      link.__cvBound = true;
      link.setAttribute('href', './assets/Neelam-Designer-Portfolio-CV.pdf');
      link.setAttribute('download', 'Neelam-Designer-Portfolio-CV.pdf');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  let cycles = 0;
  const poll = setInterval(function() {
    init();
    cycles++;
    if (cycles > 25) clearInterval(poll);
  }, 400);

})();
