const storageKeys = {
  cart: 'stackly-cart',
  wishlist: 'stackly-wishlist'
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const formatCurrency = (value) => `₹${Number(value).toLocaleString('en-IN')}`;

const initPageLoader = () => {
  if (document.getElementById('page-loader')) return;

  const loader = document.createElement('div');
  loader.id = 'page-loader';
  loader.setAttribute('aria-live', 'polite');
  loader.innerHTML = `
    <div class="loader-shell">
      <div class="loader-brand">
        <img src="assets/images/logo/logo-stackly.png" alt="Stackly" class="loader-logo" />
      </div>
      <div class="loader-tagline">POWERING INDUSTRY. BUILDING THE FUTURE.</div>
      <div class="loader-progress-wrap">
        <div class="loader-progress-bar"></div>
      </div>
      <div class="loader-status-row">
        <span>Loading</span>
        <span class="loader-percent">0%</span>
      </div>
    </div>
  `;
  document.body.appendChild(loader);

  const progressBar = loader.querySelector('.loader-progress-bar');
  const progressText = loader.querySelector('.loader-percent');

  let progress = 0;
  const tick = () => {
    if (prefersReducedMotion) {
      progress = 100;
    } else {
      progress = Math.min(100, progress + Math.random() * 18 + 10);
    }

    if (progressBar) progressBar.style.width = `${progress}%`;
    if (progressText) progressText.textContent = `${Math.round(progress)}%`;

    if (progress >= 100) {
      setTimeout(() => {
        loader.classList.add('is-hidden');
        document.body.classList.add('page-ready');
        setTimeout(() => loader.remove(), 420);
      }, prefersReducedMotion ? 180 : 420);
      return;
    }

    setTimeout(tick, prefersReducedMotion ? 120 : 180);
  };

  setTimeout(tick, 120);
};

const setupPageTransitions = () => {
  const localLinks = [...document.querySelectorAll('a[href]')];

  localLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank') return;

    const isSameOrigin = (() => {
      try {
        return new URL(href, window.location.href).origin === window.location.origin;
      } catch (error) {
        return false;
      }
    })();

    if (!isSameOrigin) return;

    link.addEventListener('click', (event) => {
      const nextUrl = new URL(href, window.location.href).href;
      if (nextUrl === window.location.href) return;
      event.preventDefault();
      document.body.classList.add('page-transitioning');
      setTimeout(() => {
        window.location.href = nextUrl;
      }, 220);
    });
  });
};

const setupSmoothScroll = () => {
  if (prefersReducedMotion) return;

  const smoothScrollTo = (targetY) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const duration = Math.min(900, Math.max(500, Math.abs(distance) * 0.55));
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const headerOffset = document.querySelector('.site-header')?.offsetHeight || 0;
      smoothScrollTo(target.getBoundingClientRect().top + window.pageYOffset - headerOffset - 24);
    });
  });

  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => smoothScrollTo(0));
  }
};

const setupWheelSmoothScroll = () => {
  if (prefersReducedMotion) return;

  let targetY = window.scrollY;
  let animationFrame = null;

  const stopAnimation = () => {
    if (animationFrame !== null) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
    targetY = window.scrollY;
    document.documentElement.classList.remove('wheel-smooth-scrolling');
  };

  const canScrollElement = (element, deltaY) => {
    const style = window.getComputedStyle(element);
    if (!/(auto|scroll|overlay)/.test(style.overflowY)) return false;
    if (element.scrollHeight <= element.clientHeight) return false;

    return deltaY < 0
      ? element.scrollTop > 0
      : element.scrollTop + element.clientHeight < element.scrollHeight - 1;
  };

  const animateScroll = () => {
    const currentY = window.scrollY;
    const distance = targetY - currentY;

    if (Math.abs(distance) < 0.75) {
      window.scrollTo(0, targetY);
      animationFrame = null;
      document.documentElement.classList.remove('wheel-smooth-scrolling');
      return;
    }

    window.scrollTo(0, currentY + distance * 0.16);
    animationFrame = window.requestAnimationFrame(animateScroll);
  };

  document.addEventListener('wheel', (event) => {
    if (event.defaultPrevented || event.ctrlKey || event.shiftKey || event.deltaY === 0) return;
    if (event.target instanceof Element && event.target.closest('input, textarea, select, [contenteditable="true"]')) return;

    let element = event.target instanceof Element ? event.target : null;
    while (element && element !== document.body && element !== document.documentElement) {
      if (canScrollElement(element, event.deltaY)) return;
      element = element.parentElement;
    }

    const delta = event.deltaMode === WheelEvent.DOM_DELTA_LINE
      ? event.deltaY * 32
      : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
        ? event.deltaY * window.innerHeight
        : event.deltaY;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const nextTarget = Math.min(maxScroll, Math.max(0, targetY + delta));

    if (nextTarget === targetY && nextTarget === window.scrollY) return;

    event.preventDefault();
    targetY = nextTarget;
    if (animationFrame === null) {
      document.documentElement.classList.add('wheel-smooth-scrolling');
      animationFrame = window.requestAnimationFrame(animateScroll);
    }
  }, { passive: false });

  window.addEventListener('keydown', (event) => {
    if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) {
      stopAnimation();
    }
  });

  window.addEventListener('touchstart', stopAnimation, { passive: true });
  window.addEventListener('pointerdown', stopAnimation, { passive: true });
  window.addEventListener('scroll', () => {
    if (animationFrame === null) targetY = window.scrollY;
  }, { passive: true });
};

const setupRevealAnimations = () => {
  const elements = document.querySelectorAll('section, .feature-card, .product-card, .testimonial-card, .brand-box, .solution-card, .stat-box, .footer-col, .category-item, .shop-brand-card, .deal-card');
  elements.forEach((element) => {
    element.classList.add('reveal-on-scroll');
  });

  if (prefersReducedMotion) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  elements.forEach((element) => observer.observe(element));
};

const setupCustomCursor = () => {
  if (window.matchMedia('(pointer: coarse)').matches || prefersReducedMotion || window.innerWidth < 1024) return;

  const cursor = document.createElement('div');
  cursor.className = 'industrial-cursor';
  document.body.appendChild(cursor);

  document.body.classList.add('has-custom-cursor');

  document.addEventListener('pointermove', (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  const interactiveSelectors = 'a, button, input, textarea, select, .product-card, .category-item, .nav-icon, .brand, .icon-btn';
  document.querySelectorAll(interactiveSelectors).forEach((element) => {
    element.addEventListener('pointerenter', () => cursor.classList.add('is-hovering'));
    element.addEventListener('pointerleave', () => cursor.classList.remove('is-hovering'));
  });
};

const setupErrorFallbacks = () => {
  document.querySelectorAll('a[href="#"], a[href="javascript:void(0)"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });
};

const showToast = (message = 'Action completed successfully.') => {
  const container = document.querySelector('.toast-container') || (() => {
    const node = document.createElement('div');
    node.className = 'toast-container';
    document.body.appendChild(node);
    return node;
  })();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2200);
};

const getStoredData = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch (error) {
    return [];
  }
};

const saveStoredData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const updateCounters = () => {
  const cart = getStoredData(storageKeys.cart);
  const wishlist = getStoredData(storageKeys.wishlist);

  document.querySelectorAll('[data-cart-count]').forEach((node) => {
    node.textContent = cart.reduce((sum, item) => sum + Number(item.qty || 1), 0);
  });

  document.querySelectorAll('[data-wishlist-count]').forEach((node) => {
    node.textContent = wishlist.length;
  });
};

const setActiveNav = () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.closest('li')?.classList.add('active');
      link.closest('li')?.parentElement.querySelectorAll('li').forEach((li) => {
        if (li !== link.closest('li')) li.classList.remove('active');
      });
    }
  });
};

const initNav = () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.mobile-menu-btn');

  if (toggle && header) {
    toggle.addEventListener('click', () => {
      header.classList.toggle('nav-open');
    });
  }

  const searchForm = document.querySelector('.search-box');
  if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = new FormData(searchForm).get('search')?.toString().trim();
      if (query) {
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
      } else {
        window.location.href = 'products.html';
      }
    });
  }

  setActiveNav();
};

const initHeroSlider = () => {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;

  const slides = [...slider.querySelectorAll('.hero-slide')];
  const dots = [...document.querySelectorAll('.hero-dot')];
  const nextButton = document.querySelector('.hero-next');
  const prevButton = document.querySelector('.hero-prev');

  if (!slides.length) return;

  let currentIndex = 0;
  let autoAdvanceId;

  const goToSlide = (index) => {
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === currentIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });

    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === currentIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
  };

  const restartAutoAdvance = () => {
    window.clearInterval(autoAdvanceId);
    autoAdvanceId = window.setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
  };

  nextButton?.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
    restartAutoAdvance();
  });

  prevButton?.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
    restartAutoAdvance();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      restartAutoAdvance();
    });
  });

  slider.addEventListener('mouseenter', () => window.clearInterval(autoAdvanceId));
  slider.addEventListener('mouseleave', () => restartAutoAdvance());

  goToSlide(0);
  restartAutoAdvance();
};

const productList = [
  { id: 1, name: 'Bosch Professional Angle Grinder GWS 750-100', brand: 'Bosch', category: 'Power Tools', sku: 'BOS-GWS-750', price: 3850, oldPrice: 4990, rating: 4.8, reviews: 321, image: 'https://images.unsplash.com/photo-1581147036324-c17ac5c7d7b8?auto=format&fit=crop&w=900&q=80', badge: 'Hot Deal', stock: 'In Stock' },
  { id: 2, name: 'Makita Cordless Drill DDF482', brand: 'Makita', category: 'Power Tools', sku: 'MAK-DDF482', price: 5290, oldPrice: 6990, rating: 4.7, reviews: 287, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80', badge: 'New', stock: 'In Stock' },
  { id: 3, name: 'DeWalt Impact Driver DCF887', brand: 'DeWalt', category: 'Power Tools', sku: 'DWT-DCF887', price: 5960, oldPrice: 7440, rating: 4.9, reviews: 419, image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80', badge: 'Featured', stock: 'In Stock' },
  { id: 4, name: 'Bosch Rotary Hammer GBH 220', brand: 'Bosch', category: 'Power Tools', sku: 'BOS-GBH220', price: 8900, oldPrice: 11250, rating: 4.8, reviews: 248, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80', badge: 'Popular', stock: 'In Stock' },
  { id: 5, name: 'Makita Circular Saw HS7600', brand: 'Makita', category: 'Power Tools', sku: 'MAK-HS7600', price: 7400, oldPrice: 9200, rating: 4.7, reviews: 196, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80', badge: 'Workshop', stock: 'In Stock' },
  { id: 6, name: 'Stanley Professional Tool Kit', brand: 'Stanley', category: 'Hand Tools', sku: 'STN-TOOLKIT', price: 2890, oldPrice: 3590, rating: 4.6, reviews: 176, image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80', badge: 'Bestseller', stock: 'In Stock' },
  { id: 7, name: 'Knipex Combination Pliers', brand: 'Knipex', category: 'Hand Tools', sku: 'KNP-CP-180', price: 1340, oldPrice: 1790, rating: 4.9, reviews: 228, image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80', badge: 'Premium', stock: 'In Stock' },
  { id: 8, name: 'Stanley Adjustable Wrench', brand: 'Stanley', category: 'Hand Tools', sku: 'STN-WRENCH', price: 1120, oldPrice: 1490, rating: 4.7, reviews: 164, image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80', badge: 'Industrial', stock: 'In Stock' },
  { id: 9, name: 'Taparia Screwdriver Set', brand: 'Taparia', category: 'Hand Tools', sku: 'TAP-SD-SET', price: 980, oldPrice: 1290, rating: 4.5, reviews: 134, image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80', badge: 'Value Pack', stock: 'In Stock' },
  { id: 10, name: 'Gedore Spanner Set', brand: 'Gedore', category: 'Hand Tools', sku: 'GDR-SPANNER', price: 2140, oldPrice: 2850, rating: 4.8, reviews: 147, image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80', badge: 'Workshop', stock: 'In Stock' },
  { id: 11, name: 'Bosch Cutting Disc', brand: 'Bosch', category: 'Cutting Tools', sku: 'BOS-CD-115', price: 590, oldPrice: 760, rating: 4.6, reviews: 154, image: 'https://images.unsplash.com/photo-1564769662533-4f00a2e1fe61?auto=format&fit=crop&w=900&q=80', badge: 'Top Rated', stock: 'In Stock' },
  { id: 12, name: 'Makita Metal Cutting Blade', brand: 'Makita', category: 'Cutting Tools', sku: 'MAK-MCB-180', price: 760, oldPrice: 980, rating: 4.7, reviews: 122, image: 'https://images.unsplash.com/photo-1564769662533-4f00a2e1fe61?auto=format&fit=crop&w=900&q=80', badge: 'Precision', stock: 'In Stock' },
  { id: 13, name: 'DeWalt Circular Saw Blade', brand: 'DeWalt', category: 'Cutting Tools', sku: 'DWT-CSB-7.25', price: 980, oldPrice: 1290, rating: 4.8, reviews: 188, image: 'https://images.unsplash.com/photo-1564769662533-4f00a2e1fe61?auto=format&fit=crop&w=900&q=80', badge: 'Popular', stock: 'In Stock' },
  { id: 14, name: 'Industrial Hole Saw Set', brand: 'Bosch', category: 'Cutting Tools', sku: 'BOS-HS-SET', price: 1860, oldPrice: 2440, rating: 4.6, reviews: 127, image: 'https://images.unsplash.com/photo-1564769662533-4f00a2e1fe61?auto=format&fit=crop&w=900&q=80', badge: 'Workshop', stock: 'In Stock' },
  { id: 15, name: '3M Safety Helmet', brand: '3M', category: 'Safety Equipment', sku: '3M-SAFETY-HELMET', price: 1650, oldPrice: 2200, rating: 4.8, reviews: 370, image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80', badge: 'Safety', stock: 'In Stock' },
  { id: 16, name: 'Honeywell Safety Goggles', brand: 'Honeywell', category: 'Safety Equipment', sku: 'HNY-GOGGLE', price: 780, oldPrice: 1090, rating: 4.7, reviews: 211, image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80', badge: 'Best Value', stock: 'In Stock' },
  { id: 17, name: '3M Industrial Ear Protection', brand: '3M', category: 'Safety Equipment', sku: '3M-EAR-PRO', price: 1260, oldPrice: 1690, rating: 4.9, reviews: 294, image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80', badge: 'Premium', stock: 'In Stock' },
  { id: 18, name: 'Safety Gloves Heavy Duty', brand: 'Honeywell', category: 'Safety Equipment', sku: 'HNY-GLV-HD', price: 520, oldPrice: 690, rating: 4.6, reviews: 243, image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80', badge: 'Must Have', stock: 'In Stock' },
  { id: 19, name: 'Mitutoyo Digital Vernier Caliper', brand: 'Mitutoyo', category: 'Measuring Instruments', sku: 'MIT-VC-150', price: 2450, oldPrice: 3200, rating: 4.9, reviews: 241, image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80', badge: 'Precision', stock: 'In Stock' },
  { id: 20, name: 'Digital Measuring Tape', brand: 'Stanley', category: 'Measuring Instruments', sku: 'STN-MT-25', price: 1180, oldPrice: 1490, rating: 4.8, reviews: 208, image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80', badge: 'Smart', stock: 'In Stock' },
  { id: 21, name: 'Fluke Digital Multimeter', brand: 'Fluke', category: 'Electrical Tools', sku: 'FLU-MM-789', price: 3890, oldPrice: 5290, rating: 4.9, reviews: 291, image: 'https://images.unsplash.com/photo-1581147036324-c17ac5c7d7b8?auto=format&fit=crop&w=900&q=80', badge: 'Trusted', stock: 'In Stock' },
  { id: 22, name: 'Bosch Welding Machine', brand: 'Bosch', category: 'Welding Equipment', sku: 'BOS-WELD-250', price: 28950, oldPrice: 33200, rating: 4.8, reviews: 97, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80', badge: 'Pro Choice', stock: 'Low Stock' },
  { id: 23, name: 'Heavy Duty Hydraulic Jack', brand: 'SKF', category: 'Hydraulic Equipment', sku: 'SKF-HJ-3T', price: 9640, oldPrice: 11990, rating: 4.7, reviews: 134, image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80', badge: 'Heavy Duty', stock: 'In Stock' },
  { id: 24, name: 'Industrial Air Compressor', brand: 'Atlas Copco', category: 'Pneumatic Tools', sku: 'ATC-AC-7.5', price: 22400, oldPrice: 26800, rating: 4.8, reviews: 118, image: 'https://images.unsplash.com/photo-1581092160607-ee22731d1e3b?auto=format&fit=crop&w=1500&q=80', badge: 'Industrial', stock: 'In Stock' },
  { id: 25, name: 'Automotive Socket Set', brand: 'DeWalt', category: 'Automotive Tools', sku: 'DWT-SOCKET-SET', price: 2480, oldPrice: 3340, rating: 4.7, reviews: 116, image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80', badge: 'Garage', stock: 'In Stock' },
  { id: 26, name: 'Industrial Pneumatic Nailer', brand: 'Makita', category: 'Pneumatic Tools', sku: 'MAK-PN-15', price: 7420, oldPrice: 9100, rating: 4.8, reviews: 142, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80', badge: 'Fast Fix', stock: 'Low Stock' },
  { id: 27, name: 'Hydraulic Press Machine', brand: 'SKF', category: 'Hydraulic Equipment', sku: 'SKF-HPM-25', price: 18400, oldPrice: 22900, rating: 4.7, reviews: 89, image: 'https://images.unsplash.com/photo-1581092160607-ee22731d1e3b?auto=format&fit=crop&w=1500&q=80', badge: 'Heavy Duty', stock: 'In Stock' },
  { id: 28, name: 'Industrial Voltage Tester', brand: 'Fluke', category: 'Electrical Tools', sku: 'FLU-VT-200', price: 2200, oldPrice: 2980, rating: 4.9, reviews: 201, image: 'https://images.unsplash.com/photo-1581147036324-c17ac5c7d7b8?auto=format&fit=crop&w=900&q=80', badge: 'Installer', stock: 'In Stock' }
];

window.stacklyProducts = productList;

const categoryShowcase = [
  { name: 'Power Tools', image: 'assets/images/cate-1.jpg' },
  { name: 'Hand Tools', image: 'assets/images/cate-2.jpg' },
  { name: 'Cutting Tools', image: 'assets/images/cate-3.jpg' },
  { name: 'Measuring Instruments', image: 'assets/images/cate-4.jpg' },
  { name: 'Safety Equipment', image: 'assets/images/cate-5.jpg' },
  { name: 'Welding Equipment', image: 'assets/images/cate-6.jpg' },
  { name: 'Industrial Machinery', image: 'assets/images/cate-7.jpg' },
  { name: 'Electrical Tools', image: 'assets/images/cate-8.jpg' },
  { name: 'Automotive Tools', image: 'assets/images/cate-9.jpg' },
  { name: 'Pneumatic Tools', image: 'assets/images/cate-10.jpg' },
  { name: 'Hydraulic Equipment', image: 'assets/images/cate-11.jpg' },
  { name: 'Storage', image: 'assets/images/cate-12.jpg' },
  { name: 'Site Lighting', image: 'assets/images/cate-13.jpg' },
  { name: 'Accessories', image: 'assets/images/cate-14.jpg' },
  { name: 'Lawn & Garden', image: 'assets/images/cate-15.jpg' }
];

const renderCategories = () => {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;

  const items = [...categoryShowcase, ...categoryShowcase];
  container.innerHTML = items.map((category, index) => `
    <a href="products.html?category=${encodeURIComponent(category.name)}" class="category-item ${index === 0 ? 'is-active' : ''}">
      <div class="category-visual">
        <img src="${category.image}" alt="${category.name}" />
      </div>
      <span class="category-name">${category.name}</span>
    </a>
  `).join('');
};

const productCardMarkup = (product) => `
  <article class="product-card">
    <div class="product-media">
      <img src="${product.image}" alt="${product.name}" />
      <span class="sale-badge">${product.badge || 'Featured'}</span>
      <div class="product-actions">
        <button type="button" class="icon-btn" data-wishlist="${product.id}" aria-label="Add to wishlist">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button type="button" class="icon-btn" data-quick-view="${product.id}" aria-label="Quick view">
          <i class="fa-regular fa-eye"></i>
        </button>
      </div>
    </div>
    <div class="product-body">
      <div class="product-meta-row">
        <span class="brand-tag">${product.brand}</span>
        <span class="stock-tag">${product.stock}</span>
      </div>
      <h3>${product.name}</h3>
      <div class="rating-row">
        <span>★★★★★</span>
        <small>${product.rating} (${product.reviews})</small>
      </div>
      <div class="price-row">
        <span class="current-price">${formatCurrency(product.price)}</span>
        <span class="old-price">${formatCurrency(product.oldPrice)}</span>
      </div>
      <div class="card-cta-row">
        <button class="btn btn-primary" type="button" data-add-cart="${product.id}">Add to Cart</button>
      </div>
    </div>
  </article>
`;

const renderFeaturedProducts = () => {
  const container = document.getElementById('featuredProductsGrid');
  if (!container) return;

  const featuredProducts = [...window.stacklyProducts]
    .sort((a, b) => b.rating * b.reviews - a.rating * a.reviews)
    .slice(0, 4);

  container.innerHTML = featuredProducts.map(productCardMarkup).join('');
  handleAddActionClicks();
};

const renderBestSellingProducts = () => {
  const container = document.getElementById('bestSellingGrid');
  if (!container) return;

  const bestSelling = [...window.stacklyProducts]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 4);

  container.innerHTML = bestSelling.map(productCardMarkup).join('');
  handleAddActionClicks();
};

const addToCart = (productId, quantity = 1) => {
  const cart = getStoredData(storageKeys.cart);
  const existing = cart.find((item) => item.id === Number(productId));

  if (existing) {
    existing.qty += Number(quantity);
  } else {
    const product = productList.find((item) => item.id === Number(productId));
    if (!product) return;
    cart.push({ id: product.id, qty: Number(quantity), price: product.price });
  }

  saveStoredData(storageKeys.cart, cart);
  updateCounters();
  showToast('Product added to cart.');
};

const addToWishlist = (productId) => {
  const wishlist = getStoredData(storageKeys.wishlist);
  const exists = wishlist.includes(Number(productId));

  if (exists) {
    const filtered = wishlist.filter((id) => id !== Number(productId));
    saveStoredData(storageKeys.wishlist, filtered);
    showToast('Removed from wishlist.');
  } else {
    wishlist.push(Number(productId));
    saveStoredData(storageKeys.wishlist, wishlist);
    showToast('Saved to wishlist.');
  }

  updateCounters();
};

const handleAddActionClicks = () => {
  document.querySelectorAll('#featuredProductsGrid [data-add-cart], #bestSellingGrid [data-add-cart]').forEach((button) => {
    button.addEventListener('click', (event) => {
      const productId = button.getAttribute('data-add-cart');
      addToCart(productId, 1);
      event.preventDefault();
      event.stopPropagation();
    });
  });

  document.querySelectorAll('#featuredProductsGrid [data-wishlist], #bestSellingGrid [data-wishlist]').forEach((button) => {
    button.addEventListener('click', (event) => {
      const productId = button.getAttribute('data-wishlist');
      addToWishlist(productId);
      event.preventDefault();
      event.stopPropagation();
    });
  });

  document.querySelectorAll('#featuredProductsGrid [data-quick-view], #bestSellingGrid [data-quick-view]').forEach((button) => {
    button.addEventListener('click', (event) => {
      const productId = button.getAttribute('data-quick-view');
      openHomepageQuickView(productId);
      event.preventDefault();
      event.stopPropagation();
    });
  });
};

const openHomepageQuickView = (productId) => {
  const product = productList.find((item) => item.id === Number(productId));
  if (!product) return;

  let modal = document.getElementById('quickViewModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quickViewModal';
    modal.className = 'modal';
    modal.tabIndex = -1;
    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Product</h5>
            <button type="button" class="btn-close" data-quick-view-close aria-label="Close"></button>
          </div>
          <div class="modal-body"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector('[data-quick-view-close]')?.addEventListener('click', () => {
      bootstrap.Modal.getInstance(modal)?.hide();
    });
    modal.addEventListener('hidden.bs.modal', () => {
      document.querySelectorAll('.modal-backdrop').forEach((backdrop) => backdrop.remove());
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('padding-right');
    });
  }

  const title = modal.querySelector('.modal-title');
  const body = modal.querySelector('.modal-body');
  if (!title || !body) return;

  title.textContent = product.name;
  body.innerHTML = `
    <div class="quick-view-box">
      <img src="${product.image}" alt="${product.name}" />
      <div>
        <p class="product-brand">${product.brand}</p>
        <h3>${product.name}</h3>
        <div class="rating-row">
          <span>★★★★★</span>
          <span>${product.rating} (${product.reviews} reviews)</span>
        </div>
        <div class="price-row">
          <span class="current">${formatCurrency(product.price)}</span>
          <span class="original">${formatCurrency(product.oldPrice)}</span>
        </div>
        <p>${product.category} • SKU: ${product.sku}</p>
        <div class="action-group mt-3">
          <button class="btn btn-primary" data-add-cart="${product.id}">Add to Cart</button>
          <button class="btn btn-dark" data-wishlist="${product.id}">Wishlist</button>
        </div>
      </div>
    </div>
  `;

  const bootstrapModal = bootstrap.Modal.getOrCreateInstance(modal);
  bootstrapModal.show();

  body.querySelector('[data-add-cart]')?.addEventListener('click', () => {
    addToCart(product.id, 1);
    bootstrapModal.hide();
  });

  body.querySelector('[data-wishlist]')?.addEventListener('click', () => {
    addToWishlist(product.id);
  });
};

const initNewsletter = () => {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const email = input?.value.trim() || '';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address.');
      return;
    }

    input.value = '';
    showToast('Thanks for subscribing to Stackly updates.');
  });
};

const initAuthForms = () => {
  document.querySelectorAll('.auth-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formType = form.getAttribute('data-form-type') || 'login';
      const fields = [...form.querySelectorAll('input')];
      const message = form.querySelector('.form-message');

      const values = {};
      let valid = true;

      fields.forEach((input) => {
        const value = input.value.trim();
        values[input.name] = value;

        if (!value) {
          valid = false;
        }

        if (input.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          valid = false;
        }
      });

      if (formType === 'register') {
        if (values.password !== values.confirmPassword) {
          valid = false;
          if (message) {
            message.textContent = 'Passwords do not match.';
            message.className = 'form-message text-danger';
          }
          return;
        }
      }

      if (!valid) {
        if (message) {
          message.textContent = 'Please complete all required fields correctly.';
          message.className = 'form-message text-danger';
        }
        return;
      }

      if (message) {
        message.textContent = formType === 'login' ? 'Login successful. Redirecting to storefront...' : 'Account created successfully.';
        message.className = 'form-message text-success';
      }

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 900);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setupErrorFallbacks();
  initPageLoader();
  setupPageTransitions();
  setupSmoothScroll();
  setupWheelSmoothScroll();
  setupCustomCursor();
  setupRevealAnimations();
  initHeroSlider();
  renderCategories();
  renderFeaturedProducts();
  renderBestSellingProducts();
  initNav();
  updateCounters();
  handleAddActionClicks();
  initNewsletter();
  initAuthForms();

  const backButton = document.querySelector('.back-to-top');
  if (backButton) {
    window.addEventListener('scroll', () => {
      backButton.classList.toggle('visible', window.scrollY > 420);
    });

    backButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});

window.stackly = {
  formatCurrency,
  getStoredData,
  saveStoredData,
  addToCart,
  addToWishlist,
  productList,
  showToast,
  updateCounters
};



$(function () {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  
    ScrollTrigger.normalizeScroll(false);
  
    // create the smooth scroller FIRST!
    let smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  
  });