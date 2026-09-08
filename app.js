// Neelam's Digital Canvas - Client Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 3. Number Counters Animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  const runCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const step = Math.ceil(target / 40);

      const updateCount = () => {
        count += step;
        if (count < target) {
          if (target === 99) {
            counter.innerText = count + '%';
          } else {
            counter.innerText = count + '+';
          }
          setTimeout(updateCount, 30);
        } else {
          if (target === 99) {
            counter.innerText = target + '%';
          } else {
            counter.innerText = target + '+';
          }
        }
      };
      updateCount();
    });
  };

  // Run counters once on load
  runCounters();

  // 4. Interactive Live Drawing Canvas
  const canvas = document.getElementById('digitalCanvas');
  const canvasWrapper = document.getElementById('canvasWrapper');
  const brushColorInput = document.getElementById('brushColor');
  const brushSizeInput = document.getElementById('brushSize');
  const brushSizeVal = document.getElementById('brushSizeVal');
  const eraserBtn = document.getElementById('eraserBtn');
  const clearCanvasBtn = document.getElementById('clearCanvasBtn');
  const downloadCanvasBtn = document.getElementById('downloadCanvasBtn');
  const canvasEmptyHint = document.getElementById('canvasEmptyHint');
  const colorPresets = document.querySelectorAll('.color-preset');

  if (canvas && canvasWrapper) {
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let isEraser = false;
    let currentColor = brushColorInput ? brushColorInput.value : '#6366f1';
    let currentSize = brushSizeInput ? brushSizeInput.value : 5;

    // Resize canvas to fill wrapper
    const resizeCanvas = () => {
      const rect = canvasWrapper.getBoundingClientRect();
      // Save canvas state
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      if (canvas.width > 0 && canvas.height > 0) {
        tempCtx.drawImage(canvas, 0, 0);
      }

      canvas.width = rect.width;
      canvas.height = rect.height;

      // Fill background
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Restore
      if (tempCanvas.width > 0 && tempCanvas.height > 0) {
        ctx.drawImage(tempCanvas, 0, 0);
      }
    };

    // Initial resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Color picker
    if (brushColorInput) {
      brushColorInput.addEventListener('input', (e) => {
        currentColor = e.target.value;
        isEraser = false;
        if (eraserBtn) eraserBtn.classList.remove('bg-brand-600', 'text-white');
      });
    }

    // Color presets
    colorPresets.forEach(btn => {
      btn.addEventListener('click', () => {
        currentColor = btn.getAttribute('data-color');
        if (brushColorInput) brushColorInput.value = currentColor;
        isEraser = false;
        if (eraserBtn) eraserBtn.classList.remove('bg-brand-600', 'text-white');
      });
    });

    // Brush size
    if (brushSizeInput && brushSizeVal) {
      brushSizeInput.addEventListener('input', (e) => {
        currentSize = e.target.value;
        brushSizeVal.innerText = currentSize + 'px';
      });
    }

    // Eraser mode
    if (eraserBtn) {
      eraserBtn.addEventListener('click', () => {
        isEraser = !isEraser;
        if (isEraser) {
          eraserBtn.classList.add('bg-brand-600', 'text-white');
        } else {
          eraserBtn.classList.remove('bg-brand-600', 'text-white');
        }
      });
    }

    // Clear canvas
    if (clearCanvasBtn) {
      clearCanvasBtn.addEventListener('click', () => {
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (canvasEmptyHint) canvasEmptyHint.style.display = 'flex';
      });
    }

    // Download canvas artwork
    if (downloadCanvasBtn) {
      downloadCanvasBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = "Neelam-Digital-Canvas-Artwork.png";
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }

    // Pointer helper
    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const startDraw = (e) => {
      isDrawing = true;
      if (canvasEmptyHint) canvasEmptyHint.style.display = 'none';
      const pos = getPos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    };

    const draw = (e) => {
      if (!isDrawing) return;
      e.preventDefault();
      const pos = getPos(e);

      ctx.lineWidth = currentSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (isEraser) {
        ctx.strokeStyle = '#020617';
      } else {
        ctx.strokeStyle = currentColor;
      }

      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    };

    const stopDraw = () => {
      if (!isDrawing) return;
      isDrawing = false;
      ctx.closePath();
    };

    // Mouse Events
    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDraw);

    // Touch Events
    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    window.addEventListener('touchend', stopDraw);
  }

  // 5. Portfolio Filtering Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-brand-600', 'text-white');
        b.classList.add('bg-slate-900', 'text-slate-400');
      });

      btn.classList.add('active', 'bg-brand-600', 'text-white');
      btn.classList.remove('bg-slate-900', 'text-slate-400');

      const filterValue = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          card.classList.add('animate-fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Portfolio Detail Lightbox Modal
  const modal = document.getElementById('detailModal');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const closeModalBottomBtn = document.getElementById('closeModalBottomBtn');
  const detailButtons = document.querySelectorAll('.open-modal-btn');

  const openModal = (title, desc, tag) => {
    if (!modal) return;
    if (modalTitle) modalTitle.innerText = title;
    if (modalDesc) modalDesc.innerText = desc;
    if (modalTag) modalTag.innerText = tag;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  };

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title');
      const desc = btn.getAttribute('data-desc');
      const tag = btn.getAttribute('data-tag');
      openModal(title, desc, tag);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (closeModalBottomBtn) closeModalBottomBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // 7. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submitBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending Message...';
      }

      setTimeout(() => {
        contactForm.reset();
        formSuccess.classList.remove('hidden');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i data-lucide="send" class="w-4 h-4"></i><span>Submit Inquiry</span>';
          if (window.lucide) window.lucide.createIcons();
        }

        setTimeout(() => {
          formSuccess.classList.add('hidden');
        }, 6000);
      }, 700);
    });
  }
});
