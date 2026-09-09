// Neelam Designer — Interactive Portfolio Deck Engine (41 Pages)
(function() {
  if (window.__portfolioDeckInitialized) return;
  window.__portfolioDeckInitialized = true;

  var slides = [
    { p: 1, img: "/assets/portfolio-pages/page-01.png", cat: "intro", title: "Portfolio Cover", desc: "Showcasing Ideas • Creating Opportunities • Designing Digital Experiences That Matter" },
    { p: 2, img: "/assets/portfolio-pages/page-02.png", cat: "intro", title: "Hello, I'm Neelam", desc: "Creative Professional • 50+ Projects • 30+ Happy Clients • 3+ Years Experience" },
    { p: 3, img: "/assets/portfolio-pages/page-03.png", cat: "intro", title: "Editorial & Smartphone Mockup", desc: "Good Design Creates a Better Tomorrow • From Ideas to Impact" },
    { p: 4, img: "/assets/portfolio-pages/page-04.png", cat: "web", title: "Selected (Work)", desc: "Nexora, Lumière, Beyond Limits, SocialBoost, Neura" },
    { p: 5, img: "/assets/portfolio-pages/page-05.png", cat: "branding", title: "Design Identity & Color Palette", desc: "Ink #0B0F14, Ink Soft #15191E, Ink Light #1F2634, Paper #F4F1E8" },
    { p: 6, img: "/assets/portfolio-pages/page-06.png", cat: "intro", title: "Editorial Poster Showcase", desc: "Curated Digital Spaces — Where Ideas Meet Interface" },
    { p: 7, img: "/assets/portfolio-pages/page-07.png", cat: "intro", title: "Portfolio Overview Collage", desc: "Multi-Disciplinary Design, Development & Marketing Portfolio" },
    { p: 8, img: "/assets/portfolio-pages/page-08.png", cat: "about", title: "About Me — Personal Statement", desc: "Greetings ladies & gentlemen. Transforming ideas into engaging brands." },
    { p: 9, img: "/assets/portfolio-pages/page-09.png", cat: "intro", title: "Table of Contents (7 Disciplines)", desc: "01 Logo • 02 Branding • 03 Social • 04 Packaging • 05 Print • 06 UI/UX • 07 Web" },
    { p: 10, img: "/assets/portfolio-pages/page-10.png", cat: "logo", title: "01. Logo Folio — Ideas into Identities", desc: "Gulmohar Valley, GV Infra, Unison, Chhabra, Palm Village, Blue Hawk, KK Infra, Home 4 U, JustHR, SandBricks" },
    { p: 11, img: "/assets/portfolio-pages/page-11.png", cat: "logo", title: "Brand Marks & Minimalist Identities", desc: "CareLife, Nexora, Altura, Oceania, Vivanté, Skyline, Serenique, Brewster, EduVista, Lumière, Terralis, PawNest" },
    { p: 12, img: "/assets/portfolio-pages/page-12.png", cat: "branding", title: "02. Branding Design Overview", desc: "Impactful visual identifying marks communicating mission and business goals" },
    { p: 13, img: "/assets/portfolio-pages/page-13.png", cat: "branding", title: "Ourvita Full Branding — Identity & Digital", desc: "Nature for a Healthier You — Stationery, ID card, mobile website & packaging" },
    { p: 14, img: "/assets/portfolio-pages/page-14.png", cat: "branding", title: "Ourvita Guidelines & Color Palette", desc: "Target Audience 18-45, Color Swatches #0C5A32, Labora Font, Cosmetic Lineup" },
    { p: 15, img: "/assets/portfolio-pages/page-15.png", cat: "branding", title: "Ourvita Wordmark Logo Breakdown", desc: "Negative space leaf shape, rounded typography, green natural symbolism" },
    { p: 16, img: "/assets/portfolio-pages/page-16.png", cat: "social", title: "03. Social Media Design Hub", desc: "Visual content crafted for Instagram & Facebook — Engage, Connect, Grow" },
    { p: 17, img: "/assets/portfolio-pages/page-17.png", cat: "social", title: "Creatives That Connect", desc: "Scroll-stopping social designs for Sony, Arijit Singh, HP ProBook, Visit Malaysia" },
    { p: 18, img: "/assets/portfolio-pages/page-18.png", cat: "social", title: "Alishaanghar.com Social Media", desc: "Sivanta Square NH-64 commercial showrooms & real estate visual campaigns" },
    { p: 19, img: "/assets/portfolio-pages/page-19.png", cat: "social", title: "Unison Furniture Palace Social Media", desc: "Simple & modern furniture visual campaigns and luxury living promotions" },
    { p: 20, img: "/assets/portfolio-pages/page-20.png", cat: "social", title: "Krispy Kreme Social Media", desc: "We are sweet but she's the sweetest! #HappyMothersDay & Glazed Donuts" },
    { p: 21, img: "/assets/portfolio-pages/page-21.png", cat: "social", title: "Fit Kingdom Gym Social Media", desc: "Rs. 27 per day deal, Shape Your Body & Gym Anniversary campaigns" },
    { p: 22, img: "/assets/portfolio-pages/page-22.png", cat: "social", title: "FZ Gym Social Media", desc: "High-Tech Gym in Dhakoli, Pre-Launch 50% Off & Annual Membership" },
    { p: 23, img: "/assets/portfolio-pages/page-23.png", cat: "social", title: "Hermitage Centralis Social Media", desc: "Spacious Apartments or Opulent Penthouses — VIP Road Zirakpur" },
    { p: 24, img: "/assets/portfolio-pages/page-24.png", cat: "social", title: "Bella Green Social Media", desc: "Peace Makes The World A Happy Home — 1 BHK Ready to Move 17.20 Lacs" },
    { p: 25, img: "/assets/portfolio-pages/page-25.png", cat: "social", title: "Palm Village Social Media", desc: "Togetherness at Palm Village — 3BHK Luxurious Flats in Mohali" },
    { p: 26, img: "/assets/portfolio-pages/page-26.png", cat: "social", title: "SandBricks Realty Social Media", desc: "Your Castle for Perfect Bedtime Stories — Exotica Homez 2 BHK" },
    { p: 27, img: "/assets/portfolio-pages/page-27.png", cat: "social", title: "Portrait Instagram Feed Design", desc: "High-engagement aesthetic layout & mobile social storytelling" },
    { p: 28, img: "/assets/portfolio-pages/page-28.png", cat: "social", title: "The Diplomat Business Club / Danube", desc: "Business Opportunities Forum Dubai social media visual campaign" },
    { p: 29, img: "/assets/portfolio-pages/page-29.png", cat: "packaging", title: "04. Package Design — Creative & Strategic", desc: "Herbiva Skincare Face Serum, Pure Natural Tea, Bean Theory Coffee, Blush Beauty Soap" },
    { p: 30, img: "/assets/portfolio-pages/page-30.png", cat: "packaging", title: "FMCG & Consumer Product Packaging", desc: "Blueberry Ice Cream, Kashmiri Chilli, Gopal Banana Chips, Kissan Ketchup, Cree LED" },
    { p: 31, img: "/assets/portfolio-pages/page-31.png", cat: "print", title: "05. Print Media Design Overview", desc: "High-quality print designs crafted to enhance offline brand presence" },
    { p: 32, img: "/assets/portfolio-pages/page-32.png", cat: "print", title: "Livspace Interior Design Brochure", desc: "Multi-page luxury interior catalog — Living Room, Bedroom, Kitchen, Bathroom" },
    { p: 33, img: "/assets/portfolio-pages/page-33.png", cat: "print", title: "Roll-Up Standee Designs", desc: "Rameshwar Builders, Equinoxx Academy, Alimentos Banquet, Octant Pizza" },
    { p: 34, img: "/assets/portfolio-pages/page-34.png", cat: "print", title: "Outdoor Highway Billboard Designs", desc: "Rameshwar City Bungalow, Manglam Jewellers 25% Off, Rin Detergent" },
    { p: 35, img: "/assets/portfolio-pages/page-35.png", cat: "web", title: "06 & 07. Website Development — Build. Design. Grow.", desc: "Custom Development, Responsive Design, Fast & Secure, SEO Optimized" },
    { p: 36, img: "/assets/portfolio-pages/page-36.png", cat: "web", title: "Editorial Websites for Modern Brands", desc: "Creative portfolio and impactful digital experiences for creative businesses" },
    { p: 37, img: "/assets/portfolio-pages/page-37.png", cat: "web", title: "Vero Homes Luxury Real Estate Website", desc: "Living Better. Premium Homes — Architectural showcase & responsive design" },
    { p: 38, img: "/assets/portfolio-pages/page-38.png", cat: "web", title: "Debongo Shoes & Seven Dance School", desc: "Footwear e-commerce store (#GoWinTheWorld) & dynamic dance academy web portal" },
    { p: 39, img: "/assets/portfolio-pages/page-39.png", cat: "web", title: "Modern Websites for Bigger Brands — Nexa", desc: "Nexa Digital Marketing Agency web system — 120+ Clients, 98% Success Rate" },
    { p: 40, img: "/assets/portfolio-pages/page-40.png", cat: "contact", title: "(Contact) Start The Conversation", desc: "Have a project in mind? Let's turn ideas into reality — hello@neelam.design" },
    { p: 41, img: "/assets/portfolio-pages/page-41.png", cat: "contact", title: "Thanks For Watching", desc: "neelam.work@gmail.com • +91 7973773184 • Available for Freelance & Projects" }
  ];

  var currentSlideIdx = 0;
  var currentCategory = "all";
  var isZoomed = false;

  var categories = [
    { id: "all", label: "All 41 Slides", count: 41 },
    { id: "logo", label: "01. Logo Folio", count: 2 },
    { id: "branding", label: "02. Branding (Ourvita)", count: 4 },
    { id: "social", label: "03. Social Media", count: 13 },
    { id: "packaging", label: "04. Packaging", count: 2 },
    { id: "print", label: "05. Print Media", count: 4 },
    { id: "web", label: "06 & 07. Web & UI/UX", count: 5 },
    { id: "intro", label: "About & Intro", count: 11 }
  ];

  window.openSlideModal = function(pageIndex) {
    currentSlideIdx = pageIndex;
    isZoomed = false;
    createModal();
    var modal = document.getElementById("folio-lightbox-modal");
    updateModalContent();
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    }
  };

  window.closeSlideModal = function() {
    var modal = document.getElementById("folio-lightbox-modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    }
  };

  function nextSlide() {
    currentSlideIdx = (currentSlideIdx + 1) % slides.length;
    isZoomed = false;
    updateModalContent();
  }

  function prevSlide() {
    currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
    isZoomed = false;
    updateModalContent();
  }

  function toggleZoom() {
    isZoomed = !isZoomed;
    var img = document.getElementById("lightbox-image");
    var zoomBtn = document.getElementById("lightbox-zoom-btn");
    if (img) {
      if (isZoomed) {
        img.style.transform = "scale(1.65)";
        img.style.cursor = "zoom-out";
        if (zoomBtn) zoomBtn.innerText = "Zoom 1x";
      } else {
        img.style.transform = "scale(1)";
        img.style.cursor = "zoom-in";
        if (zoomBtn) zoomBtn.innerText = "Zoom 1.6x";
      }
    }
  }

  function updateModalContent() {
    var slide = slides[currentSlideIdx];
    if (!slide) return;
    var img = document.getElementById("lightbox-image");
    var counter = document.getElementById("lightbox-counter");
    var title = document.getElementById("lightbox-title");
    var desc = document.getElementById("lightbox-desc");
    var catBadge = document.getElementById("lightbox-cat");
    var waBtn = document.getElementById("lightbox-wa-btn");
    var zoomBtn = document.getElementById("lightbox-zoom-btn");

    if (img) {
      img.src = slide.img;
      img.alt = slide.title;
      img.style.transform = "scale(1)";
      img.style.cursor = "zoom-in";
    }
    if (counter) counter.innerText = "SLIDE " + String(slide.p).padStart(2, "0") + " / 41";
    if (title) title.innerText = slide.title;
    if (desc) desc.innerText = slide.desc;
    if (catBadge) catBadge.innerText = slide.cat.toUpperCase();
    if (zoomBtn) zoomBtn.innerText = "Zoom 1.6x";
    if (waBtn) {
      waBtn.href = "https://wa.me/917973773184?text=" + encodeURIComponent("Hi Neelam, I'm viewing slide " + slide.p + " (" + slide.title + ") from your portfolio and would like to discuss a project.");
    }
  }

  function createModal() {
    if (document.getElementById("folio-lightbox-modal")) return;
    var modal = document.createElement("div");
    modal.id = "folio-lightbox-modal";
    modal.className = "fixed inset-0 z-[9999] hidden items-center justify-center bg-black/95 backdrop-blur-xl p-2 md:p-6 transition-all";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    var inner = '<div class="relative flex flex-col h-full w-full max-w-[1600px] justify-between overflow-hidden">' +
      '<div class="flex items-center justify-between border-b border-white/10 pb-4 pt-2 px-3">' +
        '<div class="flex items-center gap-3">' +
          '<span id="lightbox-counter" class="font-mono text-xs px-2.5 py-1 bg-white/10 text-primary border border-primary/30 rounded">SLIDE 01 / 41</span>' +
          '<span id="lightbox-cat" class="font-mono text-[10px] uppercase text-muted-foreground hidden sm:inline">INTRO</span>' +
          '<div class="border-l border-white/10 pl-3 hidden md:block">' +
            '<h4 id="lightbox-title" class="font-display text-base text-white">Portfolio Cover</h4>' +
          '</div>' +
        '</div>' +
        '<div class="flex items-center gap-2">' +
          '<button id="lightbox-zoom-btn" class="px-3 py-1.5 font-mono text-xs border border-white/20 bg-white/5 text-white hover:bg-white/15 transition-colors">Zoom 1.6x</button>' +
          '<a href="/__l5e/assets-v1/88521fd6-0595-4ed1-9463-762c7f493264/neelam-portfolio.pdf" download="Neelam-Designer-Portfolio-41Pages.pdf" class="px-3 py-1.5 font-mono text-xs border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-black transition-colors hidden sm:inline-flex items-center gap-1.5">PDF (41 Pages)</a>' +
          '<button id="lightbox-close-btn" class="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white border border-white/20 bg-white/5 hover:bg-white/20 text-lg transition-colors" title="Close (Esc)">✕</button>' +
        '</div>' +
      '</div>' +
      '<div class="relative flex-1 flex items-center justify-center overflow-hidden my-3">' +
        '<button id="lightbox-prev-btn" class="absolute left-2 md:left-6 z-20 w-11 h-11 md:w-14 md:h-14 flex items-center justify-center bg-black/70 hover:bg-primary hover:text-black border border-white/20 text-white transition-all text-xl md:text-2xl shadow-2xl">❮</button>' +
        '<div class="w-full h-full flex items-center justify-center overflow-auto p-1">' +
          '<img id="lightbox-image" src="" alt="" class="max-h-full max-w-full object-contain transition-transform duration-300 shadow-2xl border border-white/10" style="transform: scale(1); cursor: zoom-in;" />' +
        '</div>' +
        '<button id="lightbox-next-btn" class="absolute right-2 md:right-6 z-20 w-11 h-11 md:w-14 md:h-14 flex items-center justify-center bg-black/70 hover:bg-primary hover:text-black border border-white/20 text-white transition-all text-xl md:text-2xl shadow-2xl">❯</button>' +
      '</div>' +
      '<div class="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-3 px-3 gap-3">' +
        '<p id="lightbox-desc" class="text-xs text-white/70 max-w-2xl text-center sm:text-left truncate sm:whitespace-normal font-sans"></p>' +
        '<div class="flex items-center gap-3">' +
          '<a id="lightbox-wa-btn" href="#" target="_blank" rel="noreferrer" class="px-4 py-2 font-mono text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-medium flex items-center gap-2 transition-colors">Chat on WhatsApp</a>' +
          '<a href="mailto:neelam.work@gmail.com?subject=Portfolio%20Inquiry" class="px-4 py-2 font-mono text-xs border border-white/20 hover:border-white text-white transition-colors">Email Neelam</a>' +
        '</div>' +
      '</div>' +
    '</div>';

    modal.innerHTML = inner;
    document.body.appendChild(modal);

    document.getElementById("lightbox-close-btn").addEventListener("click", closeSlideModal);
    document.getElementById("lightbox-next-btn").addEventListener("click", nextSlide);
    document.getElementById("lightbox-prev-btn").addEventListener("click", prevSlide);
    document.getElementById("lightbox-zoom-btn").addEventListener("click", toggleZoom);
    document.getElementById("lightbox-image").addEventListener("click", toggleZoom);

    modal.addEventListener("click", function(e) {
      if (e.target === modal) closeSlideModal();
    });

    window.addEventListener("keydown", function(e) {
      var modalElem = document.getElementById("folio-lightbox-modal");
      if (!modalElem || modalElem.classList.contains("hidden")) return;
      if (e.key === "Escape") closeSlideModal();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    });
  }

  function renderDeckSection() {
    var existing = document.getElementById("portfolio-deck");
    if (existing) return;

    var workSection = document.getElementById("work");
    if (!workSection) return;

    var sec = document.createElement("section");
    sec.id = "portfolio-deck";
    sec.className = "border-y border-border bg-[#0B0F14] py-24 md:py-36 px-5 md:px-12 text-foreground";

    var html = '<div class="mx-auto max-w-[1600px]">' +
      '<div class="reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">' +
        '<div>' +
          '<p class="mb-4 font-mono text-[10px] text-primary tracking-widest uppercase">03.5 — COMPLETE PORTFOLIO DECK & ARCHIVE</p>' +
          '<h2 class="font-display text-[clamp(2.35rem,5.5vw,5.5rem)] leading-[.92]">41 PAGES OF<br/><span class="text-outline">DIGITAL WORK.</span></h2>' +
        '</div>' +
        '<div class="flex flex-col items-start md:items-end gap-2">' +
          '<p class="font-mono text-[10px] text-muted-foreground">NEELAM DESIGNER • 2026 EDITION</p>' +
          '<div class="flex flex-wrap gap-2">' +
            '<a href="/__l5e/assets-v1/88521fd6-0595-4ed1-9463-762c7f493264/neelam-portfolio.pdf" download="Neelam-Designer-Portfolio-41Pages.pdf" class="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-black font-mono text-xs transition-colors">' +
              '<span>DOWNLOAD PDF (41 PAGES)</span>' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>' +
            '</a>' +
            '<a href="https://wa.me/917973773184?text=Hi%20Neelam,%20I%20would%20like%20to%20hire%20you%20for%20a%20project" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs transition-colors">' +
              '<span>WHATSAPP INQUIRY</span>' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<!-- 7 Core Disciplines Table of Contents -->' +
      '<div class="mb-16 border border-border bg-[#15191E]/60 p-6 md:p-10 backdrop-blur-sm">' +
        '<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6 mb-6">' +
          '<div>' +
            '<span class="font-mono text-[10px] text-primary uppercase">TABLE OF CONTENTS</span>' +
            '<h3 class="font-display text-2xl md:text-3xl text-white mt-1">7 Core Creative Disciplines</h3>' +
          '</div>' +
          '<p class="text-xs text-muted-foreground max-w-md font-sans">From bespoke logo folios and brand manuals to high-converting social campaigns, FMCG packaging, editorial brochures, and modern web architectures.</p>' +
        '</div>' +
        '<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">' +
          '<div class="p-3 border border-white/5 bg-black/40 hover:border-primary/40 transition-colors cursor-pointer deck-toc-btn" data-cat="logo">' +
            '<span class="font-mono text-[10px] text-primary">01</span>' +
            '<h4 class="font-display text-sm text-white mt-1">LOGO FOLIO</h4>' +
            '<p class="text-[10px] text-muted-foreground mt-1">23 Custom Logos</p>' +
          '</div>' +
          '<div class="p-3 border border-white/5 bg-black/40 hover:border-primary/40 transition-colors cursor-pointer deck-toc-btn" data-cat="branding">' +
            '<span class="font-mono text-[10px] text-primary">02</span>' +
            '<h4 class="font-display text-sm text-white mt-1">BRANDING</h4>' +
            '<p class="text-[10px] text-muted-foreground mt-1">Ourvita Case Study</p>' +
          '</div>' +
          '<div class="p-3 border border-white/5 bg-black/40 hover:border-primary/40 transition-colors cursor-pointer deck-toc-btn" data-cat="social">' +
            '<span class="font-mono text-[10px] text-primary">03</span>' +
            '<h4 class="font-display text-sm text-white mt-1">SOCIAL MEDIA</h4>' +
            '<p class="text-[10px] text-muted-foreground mt-1">13 Campaigns</p>' +
          '</div>' +
          '<div class="p-3 border border-white/5 bg-black/40 hover:border-primary/40 transition-colors cursor-pointer deck-toc-btn" data-cat="packaging">' +
            '<span class="font-mono text-[10px] text-primary">04</span>' +
            '<h4 class="font-display text-sm text-white mt-1">PACKAGING</h4>' +
            '<p class="text-[10px] text-muted-foreground mt-1">9 FMCG Products</p>' +
          '</div>' +
          '<div class="p-3 border border-white/5 bg-black/40 hover:border-primary/40 transition-colors cursor-pointer deck-toc-btn" data-cat="print">' +
            '<span class="font-mono text-[10px] text-primary">05</span>' +
            '<h4 class="font-display text-sm text-white mt-1">PRINT MEDIA</h4>' +
            '<p class="text-[10px] text-muted-foreground mt-1">Brochures & Billboards</p>' +
          '</div>' +
          '<div class="p-3 border border-white/5 bg-black/40 hover:border-primary/40 transition-colors cursor-pointer deck-toc-btn" data-cat="web">' +
            '<span class="font-mono text-[10px] text-primary">06</span>' +
            '<h4 class="font-display text-sm text-white mt-1">UI / UX DESIGN</h4>' +
            '<p class="text-[10px] text-muted-foreground mt-1">Digital Interfaces</p>' +
          '</div>' +
          '<div class="p-3 border border-white/5 bg-black/40 hover:border-primary/40 transition-colors cursor-pointer deck-toc-btn" data-cat="web">' +
            '<span class="font-mono text-[10px] text-primary">07</span>' +
            '<h4 class="font-display text-sm text-white mt-1">WEBSITE DEV</h4>' +
            '<p class="text-[10px] text-muted-foreground mt-1">Vero, Nexa & Debongo</p>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<!-- Interactive Filter Tabs -->' +
      '<div class="mb-10 flex flex-wrap items-center gap-2 border-b border-border pb-6" id="deck-filter-tabs">';

    categories.forEach(function(cat) {
      var activeClass = cat.id === currentCategory ? "bg-primary text-black font-semibold" : "bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10";
      html += '<button class="deck-filter-btn px-4 py-2 font-mono text-xs border border-white/10 rounded-none transition-all ' + activeClass + '" data-filter="' + cat.id + '">' +
        '<span>' + cat.label + '</span>' +
        '<span class="ml-1.5 opacity-60">(' + cat.count + ')</span>' +
      '</button>';
    });

    html += '</div><!-- 41-Slide Grid --><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="deck-gallery-grid">';

    slides.forEach(function(slide, idx) {
      html += '<article class="deck-card group relative flex flex-col border border-border bg-[#15191E] overflow-hidden transition-all hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1 cursor-pointer" data-cat="' + slide.cat + '" data-idx="' + idx + '">' +
        '<div class="relative aspect-[16/9] w-full bg-black/60 overflow-hidden">' +
          '<img src="' + slide.img + '" alt="' + slide.title + '" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />' +
          '<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>' +
          '<span class="absolute top-3 left-3 font-mono text-[9px] uppercase px-2 py-0.5 bg-black/80 text-primary border border-primary/30">' +
            'P. ' + String(slide.p).padStart(2, "0") + ' / 41' +
          '</span>' +
          '<span class="absolute top-3 right-3 font-mono text-[9px] uppercase px-2 py-0.5 bg-white/10 text-white/80 backdrop-blur-sm">' +
            slide.cat +
          '</span>' +
        '</div>' +
        '<div class="p-5 flex flex-col justify-between flex-1">' +
          '<div>' +
            '<h3 class="font-display text-lg text-white group-hover:text-primary transition-colors">' + slide.title + '</h3>' +
            '<p class="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed font-sans">' + slide.desc + '</p>' +
          '</div>' +
          '<div class="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">' +
            '<span class="font-mono text-[10px] uppercase text-primary flex items-center gap-1 group-hover:underline">' +
              '<span>VIEW SLIDE</span>' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>' +
            '</span>' +
            '<span class="font-mono text-[9px] text-white/40">SLIDE ' + slide.p + '</span>' +
          '</div>' +
        '</div>' +
      '</article>';
    });

    html += '</div>' +
      '<!-- Master PDF Download Banner -->' +
      '<div class="mt-16 border border-border bg-[#15191E] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">' +
        '<div class="max-w-2xl">' +
          '<span class="font-mono text-[10px] text-primary uppercase">FULL PORTFOLIO DOCUMENT</span>' +
          '<h3 class="font-display text-2xl md:text-4xl text-white mt-2">Download Master PDF Deck</h3>' +
          '<p class="text-sm text-muted-foreground mt-3 leading-relaxed font-sans">Save the complete 41-page high-resolution presentation including all 23 logos, full Ourvita brand guidelines, social media case studies, packaging dielines, print collateral, and website design blueprints.</p>' +
        '</div>' +
        '<div class="flex flex-wrap gap-4">' +
          '<a href="/__l5e/assets-v1/88521fd6-0595-4ed1-9463-762c7f493264/neelam-portfolio.pdf" target="_blank" rel="noreferrer" class="px-6 py-3 bg-white text-black font-mono text-xs uppercase font-medium hover:bg-primary transition-colors flex items-center gap-2">' +
            '<span>OPEN FULL PDF</span>' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>' +
          '</a>' +
          '<a href="/__l5e/assets-v1/88521fd6-0595-4ed1-9463-762c7f493264/neelam-portfolio.pdf" download="Neelam-Designer-Portfolio-41Pages.pdf" class="px-6 py-3 border border-white/30 text-white hover:border-primary hover:text-primary font-mono text-xs uppercase transition-colors flex items-center gap-2">' +
            '<span>DOWNLOAD FILE</span>' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>' +
          '</a>' +
        '</div>' +
      '</div>' +
    '</div>';

    sec.innerHTML = html;
    workSection.parentNode.insertBefore(sec, workSection.nextSibling);

    var filterBtns = sec.querySelectorAll(".deck-filter-btn");
    filterBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        var cat = btn.getAttribute("data-filter");
        currentCategory = cat;

        filterBtns.forEach(function(b) {
          b.className = "deck-filter-btn px-4 py-2 font-mono text-xs border border-white/10 rounded-none transition-all " +
            (b.getAttribute("data-filter") === cat ? "bg-primary text-black font-semibold" : "bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10");
        });

        var cards = sec.querySelectorAll(".deck-card");
        cards.forEach(function(card) {
          var cardCat = card.getAttribute("data-cat");
          if (cat === "all" || cardCat === cat) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });

    var tocBtns = sec.querySelectorAll(".deck-toc-btn");
    tocBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        var cat = btn.getAttribute("data-cat");
        var targetFilter = sec.querySelector('.deck-filter-btn[data-filter="' + cat + '"]');
        if (targetFilter) targetFilter.click();
      });
    });

    var cardElements = sec.querySelectorAll(".deck-card");
    cardElements.forEach(function(card) {
      card.addEventListener("click", function() {
        var idx = parseInt(card.getAttribute("data-idx"), 10);
        openSlideModal(idx);
      });
    });
  }

  window.openCustomArtworkModal = function(title, imgSrc, desc, tag) {
    createModal();
    var modal = document.getElementById("folio-lightbox-modal");
    var img = document.getElementById("lightbox-image");
    var counter = document.getElementById("lightbox-counter");
    var titleElem = document.getElementById("lightbox-title");
    var descElem = document.getElementById("lightbox-desc");
    var catBadge = document.getElementById("lightbox-cat");
    var waBtn = document.getElementById("lightbox-wa-btn");
    var zoomBtn = document.getElementById("lightbox-zoom-btn");

    if (img) {
      img.src = imgSrc;
      img.alt = title;
      img.style.transform = "scale(1)";
      img.style.cursor = "zoom-in";
    }
    if (counter) counter.innerText = "FEATURED SHOWCASE";
    if (titleElem) titleElem.innerText = title;
    if (descElem) descElem.innerText = desc;
    if (catBadge) catBadge.innerText = tag || "FEATURED";
    if (zoomBtn) zoomBtn.innerText = "Zoom 1.6x";
    if (waBtn) {
      waBtn.href = "https://wa.me/917973773184?text=" + encodeURIComponent("Hi Neelam, I saw your featured work: " + title + " and would like to discuss a project.");
    }
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    }
  };

  var featuredWorksData = [
    {
      id: "branding",
      tag: "01 // BRAND IDENTITY",
      title: "BRAND IDENTITY & STRATEGY",
      tagline: "Build | Design | Grow • Ideas That Make Brands Shine",
      desc: "Complete corporate identity systems including luxury logo mark, stationery suites, color hierarchy, and brand guidelines for market leadership.",
      img: "/assets/work/brand-identity.png",
      deliverables: ["Brand Strategy", "Visual Identity", "Brand Story", "Growth Assets"],
      badgeColor: "text-amber-300 border-amber-500/40 bg-amber-500/10"
    },
    {
      id: "video",
      tag: "02 // VIDEO EDITING",
      title: "CINEMATIC VIDEO EDITING & REELS",
      tagline: "Turn Your Ideas into Impact • Story . Style . Impact",
      desc: "High-retention social media reels, commercial brand promos, corporate showcase films, and dynamic motion graphics engineered for maximum engagement.",
      img: "/assets/work/video-editing.png",
      deliverables: ["Promo Videos", "Instagram Reels", "Corporate Videos", "Motion Graphics"],
      badgeColor: "text-orange-400 border-orange-500/40 bg-orange-500/10"
    },
    {
      id: "marketing",
      tag: "03 // DIGITAL MARKETING",
      title: "SOCIALBOOST DIGITAL MARKETING",
      tagline: "Grow Your Brand • Go Beyond • Strategic Growth",
      desc: "Data-driven performance marketing combining targeted Meta ads, conversion funnels, search engine optimization, and creative social campaigns for real results.",
      img: "/assets/work/digital-marketing.png",
      deliverables: ["Social Media Ads", "SEO Optimization", "Paid Advertising", "Content Creation"],
      badgeColor: "text-purple-400 border-purple-500/40 bg-purple-500/10"
    },
    {
      id: "ai",
      tag: "04 // AI AGENTS",
      title: "INTELLIGENT AI AGENTS & AUTOMATION",
      tagline: "Automate | Assist | Accelerate • Intelligence Beyond Limits",
      desc: "Custom 24/7 autonomous AI agents designed to qualify leads, handle instant customer support, eliminate manual tasks, and scale operations smoothly.",
      img: "/assets/work/ai-agents.png",
      deliverables: ["24/7 Customer Support", "AI Sales Agents", "Lead Qualification", "Workflow Automations"],
      badgeColor: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10"
    },
    {
      id: "web",
      tag: "05 // WEBSITE DEV",
      title: "MODERN WEB ARCHITECTURE & UI/UX",
      tagline: "Living Better • Modern Websites for Bigger Brands",
      desc: "Bespoke high-converting websites, luxury real estate digital experiences, portfolio platforms, and animated web apps with 100% responsive performance.",
      img: "/assets/portfolio-pages/page-37.png",
      deliverables: ["Modern UI/UX", "Mobile First", "3D Web Animations", "Fast & Secure"],
      badgeColor: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10"
    }
  ];

  function enhanceSelectedWork() {
    var workSection = document.getElementById("work");
    if (!workSection) return;
    if (workSection.getAttribute("data-showcase-enhanced") === "true") return;

    var container = workSection.querySelector(".overflow-x-auto > .flex");
    if (!container) return;

    var headerRow = workSection.querySelector(".reveal.mx-auto.mb-14");
    if (headerRow && !headerRow.querySelector(".work-nav-controls")) {
      var navControls = document.createElement("div");
      navControls.className = "work-nav-controls flex items-center gap-3 mt-4 md:mt-0";
      navControls.innerHTML = '<span class="font-mono text-[10px] text-muted-foreground uppercase hidden sm:inline">EXPLORE FLAGSHIP PROJECTS</span>' +
        '<button id="work-prev-btn" class="h-10 w-10 border border-white/20 hover:border-primary hover:bg-primary/10 rounded flex items-center justify-center text-white transition-colors cursor-pointer" title="Previous Work">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>' +
        '</button>' +
        '<button id="work-next-btn" class="h-10 w-10 border border-white/20 hover:border-primary hover:bg-primary/10 rounded flex items-center justify-center text-white transition-colors cursor-pointer" title="Next Work">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>' +
        '</button>';
      headerRow.appendChild(navControls);

      var scrollElem = workSection.querySelector(".overflow-x-auto");
      var prevBtn = headerRow.querySelector("#work-prev-btn");
      var nextBtn = headerRow.querySelector("#work-next-btn");
      if (prevBtn && scrollElem) {
        prevBtn.onclick = function() {
          scrollElem.scrollBy({ left: -640, behavior: "smooth" });
        };
      }
      if (nextBtn && scrollElem) {
        nextBtn.onclick = function() {
          scrollElem.scrollBy({ left: 640, behavior: "smooth" });
        };
      }
    }

    var html = "";
    featuredWorksData.forEach(function(item, idx) {
      var pillsHtml = item.deliverables.map(function(d) {
        return '<span class="font-mono text-[9px] uppercase px-2 py-0.5 bg-white/5 border border-white/10 text-white/75 rounded">' + d + '</span>';
      }).join("");

      html += '<article class="featured-work-card tilt-3d relative flex flex-col w-[85vw] max-w-[660px] md:w-[620px] shrink-0 border border-white/10 bg-[#0d1118]/95 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/60 hover:shadow-primary/20">' +
        '<!-- High-Res Artwork Banner -->' +
        '<div class="relative aspect-[16/9] w-full overflow-hidden bg-black/60 cursor-pointer group" onclick="openCustomArtworkModal(\'' + item.title.replace(/'/g, "\\'") + '\', \'' + item.img + '\', \'' + item.desc.replace(/'/g, "\\'") + '\', \'' + item.tag + '\')">' +
          '<img src="' + item.img + '" alt="' + item.title + '" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />' +
          '<div class="absolute inset-0 bg-gradient-to-t from-[#0d1118] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>' +
          '<span class="absolute top-4 left-4 font-mono text-[10px] uppercase px-3 py-1 border rounded backdrop-blur-md font-semibold ' + item.badgeColor + '">' + item.tag + '</span>' +
          '<span class="absolute bottom-3 right-3 font-mono text-[10px] text-white/90 px-3 py-1 bg-black/80 border border-white/20 rounded flex items-center gap-1.5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">' +
            '<span>EXPAND ARTWORK</span>' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>' +
          '</span>' +
        '</div>' +
        '<!-- Card Body -->' +
        '<div class="p-6 md:p-7 flex flex-col justify-between flex-1 bg-gradient-to-b from-[#0d1118] to-[#090d13]">' +
          '<div>' +
            '<h3 class="font-display text-xl md:text-2xl text-white font-bold tracking-tight">' + item.title + '</h3>' +
            '<p class="font-mono text-xs text-primary mt-1 font-medium">' + item.tagline + '</p>' +
            '<p class="text-xs md:text-sm text-muted-foreground mt-3 leading-relaxed font-sans line-clamp-2">' + item.desc + '</p>' +
          '</div>' +
          '<div class="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">' +
            '<div class="flex flex-wrap gap-1.5">' + pillsHtml + '</div>' +
            '<button class="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-white text-black font-mono text-xs uppercase font-bold transition-all rounded cursor-pointer" onclick="openCustomArtworkModal(\'' + item.title.replace(/'/g, "\\'") + '\', \'' + item.img + '\', \'' + item.desc.replace(/'/g, "\\'") + '\', \'' + item.tag + '\')">' +
              '<span>VIEW PROJECT</span>' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</article>';
    });

    container.innerHTML = html;
    workSection.setAttribute("data-showcase-enhanced", "true");

    if (window.reInit3DAnimations) {
      window.reInit3DAnimations();
    }
  }

  function enhanceNav() {
    var nav = document.querySelector("nav[aria-label='Primary navigation']");
    if (!nav) return;
    var linksContainer = nav.querySelector("div.hidden.lg\\:flex");
    if (linksContainer && !linksContainer.querySelector("a[href='#portfolio-deck']")) {
      var deckLink = document.createElement("a");
      deckLink.href = "#portfolio-deck";
      deckLink.className = "transition-colors hover:text-foreground text-primary font-semibold";
      deckLink.innerText = "Folio Deck";
      var workLink = linksContainer.querySelector("a[href='#work']");
      if (workLink && workLink.nextSibling) {
        linksContainer.insertBefore(deckLink, workLink.nextSibling);
      } else {
        linksContainer.appendChild(deckLink);
      }
    }
  }

  function enhanceAbout() {
    var aboutSec = document.getElementById("about");
    if (!aboutSec) return;
    var firstP = aboutSec.querySelector(".space-y-5 p:first-child");
    if (firstP && !firstP.getAttribute("data-updated")) {
      firstP.setAttribute("data-updated", "true");
      firstP.innerText = "Greetings ladies & gentlemen. I am Neelam — a creative and motivated Graphic Designer, Website Developer, Video Editor, and AI Agent builder. Known for my creative flair and ability to deliver visually powerful, result-driven designs, I transform ideas into engaging brands, websites, and digital campaigns that make a lasting impact.";
    }
  }

  function enhanceContact() {
    var contactSec = document.getElementById("contact");
    if (!contactSec) return;
    var contactP = contactSec.querySelector("p.max-w-2xl");
    if (contactP && !contactP.getAttribute("data-updated")) {
      contactP.setAttribute("data-updated", "true");
      contactP.innerHTML = 'Whether you need creative design, a powerful website, digital marketing, professional video content or AI automation — let\'s build something amazing.<br/><span class="block mt-3 font-mono text-xs text-primary">Direct Contact: neelam.work@gmail.com • +91 7973773184 • Available Worldwide</span>';
    }

    var startBtn = contactSec.querySelector("button");
    if (startBtn && !startBtn.getAttribute("data-enhanced")) {
      startBtn.setAttribute("data-enhanced", "true");
      startBtn.onclick = function() {
        window.open("https://wa.me/917973773184?text=Hi%20Neelam,%20I%20would%20like%20to%20start%20a%20project%20with%20you!", "_blank");
      };
    }
  }

  function renderPortfolioMarquee() {
    var deckSec = document.getElementById("portfolio-deck");
    if (!deckSec) return;
    if (document.getElementById("portfolio-slides-marquee-section")) return;

    var marqueeSection = document.createElement("div");
    marqueeSection.id = "portfolio-slides-marquee-section";
    marqueeSection.className = "mb-16 overflow-hidden border-y border-border/60 bg-[#070a0f]/80 py-8 backdrop-blur-md";

    var headerHtml = '<div class="mx-auto max-w-[1600px] mb-5 px-5 md:px-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">' +
      '<div class="flex items-center gap-3">' +
        '<span class="flex h-2.5 w-2.5 relative">' +
          '<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>' +
          '<span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>' +
        '</span>' +
        '<span class="font-mono text-xs text-primary font-semibold tracking-wider uppercase">INTERACTIVE PORTFOLIO GLIDE MARQUEE</span>' +
      '</div>' +
      '<span class="font-mono text-[10px] text-muted-foreground uppercase tracking-widest hidden sm:inline-block">HOVER ANY CARD TO PAUSE • CLICK TO EXPAND FULL SLIDE</span>' +
    '</div>';

    // Build cards for Marquee Track 1 (Left Glide)
    var cardsHtml1 = '';
    slides.forEach(function(slide, idx) {
      var padPage = String(slide.p).padStart(2, "0");
      cardsHtml1 += '<div class="marquee-slide-card tilt-3d" onclick="openSlideModal(' + idx + ')" title="' + slide.title + '">' +
        '<img src="' + slide.img + '" alt="' + slide.title + '" loading="lazy" />' +
        '<div class="marquee-slide-overlay">' +
          '<div class="flex items-center justify-between">' +
            '<span class="font-mono text-[9px] uppercase px-2 py-0.5 bg-black/80 text-primary border border-primary/30">P. ' + padPage + ' / 41</span>' +
            '<span class="font-mono text-[9px] uppercase px-2 py-0.5 bg-white/10 text-white/90 backdrop-blur-sm">' + slide.cat + '</span>' +
          '</div>' +
          '<div>' +
            '<h4 class="font-display text-sm font-semibold text-white truncate">' + slide.title + '</h4>' +
            '<p class="font-mono text-[9px] text-primary flex items-center gap-1 mt-1"><span>VIEW SLIDE</span> ↗</p>' +
          '</div>' +
        '</div>' +
      '</div>';
    });

    // Build cards for Marquee Track 2 (Right Glide - reversed order)
    var reversedSlides = slides.slice().reverse();
    var cardsHtml2 = '';
    reversedSlides.forEach(function(slide, rIdx) {
      var origIdx = slides.length - 1 - rIdx;
      var padPage = String(slide.p).padStart(2, "0");
      cardsHtml2 += '<div class="marquee-slide-card tilt-3d" onclick="openSlideModal(' + origIdx + ')" title="' + slide.title + '">' +
        '<img src="' + slide.img + '" alt="' + slide.title + '" loading="lazy" />' +
        '<div class="marquee-slide-overlay">' +
          '<div class="flex items-center justify-between">' +
            '<span class="font-mono text-[9px] uppercase px-2 py-0.5 bg-black/80 text-primary border border-primary/30">P. ' + padPage + ' / 41</span>' +
            '<span class="font-mono text-[9px] uppercase px-2 py-0.5 bg-white/10 text-white/90 backdrop-blur-sm">' + slide.cat + '</span>' +
          '</div>' +
          '<div>' +
            '<h4 class="font-display text-sm font-semibold text-white truncate">' + slide.title + '</h4>' +
            '<p class="font-mono text-[9px] text-cyan-400 flex items-center gap-1 mt-1"><span>VIEW SLIDE</span> ↗</p>' +
          '</div>' +
        '</div>' +
      '</div>';
    });

    var track1Html = '<div class="marquee-container mb-4"><div class="marquee-track">' + cardsHtml1 + cardsHtml1 + '</div></div>';
    var track2Html = '<div class="marquee-container"><div class="marquee-track marquee-track-reverse">' + cardsHtml2 + cardsHtml2 + '</div></div>';

    marqueeSection.innerHTML = headerHtml + track1Html + track2Html;

    var container = deckSec.querySelector(".mx-auto.max-w-\\[1600px\\]") || deckSec;
    var filterTabs = document.getElementById("deck-filter-tabs");
    if (filterTabs) {
      container.insertBefore(marqueeSection, filterTabs);
    } else {
      container.insertBefore(marqueeSection, container.firstChild);
    }

    if (window.reInit3DAnimations) {
      window.reInit3DAnimations();
    }
  }

  function initAll() {
    createModal();
    renderDeckSection();
    renderPortfolioMarquee();
    enhanceSelectedWork();
    enhanceNav();
    enhanceAbout();
    enhanceContact();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }

  var checkCount = 0;
  var timer = setInterval(function() {
    initAll();
    checkCount++;
    if (checkCount > 40) clearInterval(timer);
  }, 350);

})();