const products = [
  {
    id: 1,
    name: 'Bosch Professional Angle Grinder GWS 750-100',
    brand: 'Bosch',
    category: 'Power Tools',
    sku: 'BOS-GWS-750',
    price: 3850,
    oldPrice: 4990,
    rating: 4.8,
    reviews: 321,
    stock: 'In Stock',
    badge: '22% off',
    image: 'assets/images/products/prd-1.jpg',
    description: 'Heavy-duty angle grinder designed for cutting, grinding, and polishing in industrial environments with dependable performance and ergonomic control.'
  },
  {
    id: 2,
    name: 'Makita Cordless Drill DDF482',
    brand: 'Makita',
    category: 'Power Tools',
    sku: 'MAK-DDF482',
    price: 5290,
    oldPrice: 6990,
    rating: 4.7,
    reviews: 287,
    stock: 'In Stock',
    badge: '24% off',
    image: 'assets/images/products/prd-2.jpg',
    description: 'Compact cordless drill with high torque output, ideal for metal, wood, and fabrication work with long battery performance for workshop use.'
  },
  {
    id: 3,
    name: 'DeWalt Impact Driver DCF887',
    brand: 'DeWalt',
    category: 'Power Tools',
    sku: 'DWT-DCF887',
    price: 5960,
    oldPrice: 7440,
    rating: 4.9,
    reviews: 419,
    stock: 'In Stock',
    badge: '20% off',
    image: 'assets/images/products/prd-3.jpg',
    description: 'Rapid-impact precision driver for high-torque fastening with brushless motor efficiency, ideal for heavy-duty industrial assembly.'
  },
  {
    id: 4,
    name: 'Bosch Rotary Hammer GBH 220',
    brand: 'Bosch',
    category: 'Power Tools',
    sku: 'BOS-GBH220',
    price: 8900,
    oldPrice: 11250,
    rating: 4.8,
    reviews: 248,
    stock: 'In Stock',
    badge: '21% off',
    image: 'assets/images/products/prd-4.jpg',
    description: 'Rotary hammer offering high drilling power and performance for masonry, concrete, and heavy construction site applications.'
  },
  {
    id: 5,
    name: 'Makita Circular Saw HS7600',
    brand: 'Makita',
    category: 'Power Tools',
    sku: 'MAK-HS7600',
    price: 7400,
    oldPrice: 9200,
    rating: 4.7,
    reviews: 196,
    stock: 'In Stock',
    badge: '19% off',
    image: 'assets/images/products/prd-5.jpg',
    description: 'Precision circular saw built for cutting wood, sheet metal, and engineered panels with accurate blade tracking and stable control.'
  },
  {
    id: 6,
    name: 'Stanley Professional Tool Kit',
    brand: 'Stanley',
    category: 'Hand Tools',
    sku: 'STN-TOOLKIT',
    price: 2890,
    oldPrice: 3590,
    rating: 4.6,
    reviews: 176,
    stock: 'In Stock',
    badge: '19% off',
    image: 'assets/images/products/prd-6.jpg',
    description: 'Complete professional tool kit for workshop and site repairs, featuring durable sockets, drivers, and accessories for daily service work.'
  },
  {
    id: 7,
    name: 'Knipex Combination Pliers',
    brand: 'Knipex',
    category: 'Hand Tools',
    sku: 'KNP-CP-180',
    price: 1340,
    oldPrice: 1790,
    rating: 4.9,
    reviews: 228,
    stock: 'In Stock',
    badge: '25% off',
    image: 'assets/images/products/prd-7.jpg',
    description: 'Industrial-grade combination pliers with precision jaw geometry for gripping, bending, and cutting in high-volume maintenance tasks.'
  },
  {
    id: 8,
    name: 'Stanley Adjustable Wrench',
    brand: 'Stanley',
    category: 'Hand Tools',
    sku: 'STN-WRENCH',
    price: 1120,
    oldPrice: 1490,
    rating: 4.7,
    reviews: 164,
    stock: 'In Stock',
    badge: '25% off',
    image: 'assets/images/products/prd-8.jpg',
    description: 'Adjustable wrench for tightening fasteners in engineering and maintenance applications where a reliable grip is essential.'
  },
  {
    id: 9,
    name: 'Taparia Screwdriver Set',
    brand: 'Taparia',
    category: 'Hand Tools',
    sku: 'TAP-SD-SET',
    price: 980,
    oldPrice: 1290,
    rating: 4.5,
    reviews: 134,
    stock: 'In Stock',
    badge: '24% off',
    image: 'assets/images/products/prd-9.jpg',
    description: 'High grip screwdriver set for electrical, mechanical, and workshop tasks with precision-tip control and durable handle design.'
  },
  {
    id: 10,
    name: 'Gedore Spanner Set',
    brand: 'Gedore',
    category: 'Hand Tools',
    sku: 'GDR-SPANNER',
    price: 2140,
    oldPrice: 2850,
    rating: 4.8,
    reviews: 147,
    stock: 'In Stock',
    badge: '25% off',
    image: 'assets/images/products/prd-10.jpg',
    description: 'Compact spanner set for industrial assembly and repair work, featuring reinforced jaws and dependable torque control.'
  },
  {
    id: 11,
    name: 'Bosch Cutting Disc',
    brand: 'Bosch',
    category: 'Cutting Tools',
    sku: 'BOS-CD-115',
    price: 590,
    oldPrice: 760,
    rating: 4.6,
    reviews: 154,
    stock: 'In Stock',
    badge: '22% off',
    image: 'assets/images/products/prd-11.jpg',
    description: 'Premium abrasive cutting disc for metal and masonry cutting with clean finish, extended life, and consistent cutting accuracy.'
  },
  {
    id: 12,
    name: 'Makita Metal Cutting Blade',
    brand: 'Makita',
    category: 'Cutting Tools',
    sku: 'MAK-MCB-180',
    price: 760,
    oldPrice: 980,
    rating: 4.7,
    reviews: 122,
    stock: 'In Stock',
    badge: '22% off',
    image: 'assets/images/products/prd-12.jpg',
    description: 'High-performance metal cutting blade designed for clean, accurate cuts on steel and alloy workpieces under industrial pressure.'
  },
  {
    id: 13,
    name: 'DeWalt Circular Saw Blade',
    brand: 'DeWalt',
    category: 'Cutting Tools',
    sku: 'DWT-CSB-7.25',
    price: 980,
    oldPrice: 1290,
    rating: 4.8,
    reviews: 188,
    stock: 'In Stock',
    badge: '24% off',
    image: 'assets/images/products/prd-13.jpg',
    description: 'Durable circular saw blade for clean and efficient cutting across wood and non-ferrous materials in construction and fabrication settings.'
  },
  {
    id: 14,
    name: 'Industrial Hole Saw Set',
    brand: 'Bosch',
    category: 'Cutting Tools',
    sku: 'BOS-HS-SET',
    price: 1860,
    oldPrice: 2440,
    rating: 4.6,
    reviews: 127,
    stock: 'In Stock',
    badge: '24% off',
    image: 'assets/images/products/prd-14.jpg',
    description: 'Industrial hole saw set for precise drilling into metal, wood, and composite panels, ideal for fabrication and plant maintenance.'
  },
  {
    id: 15,
    name: '3M Safety Helmet',
    brand: '3M',
    category: 'Safety Equipment',
    sku: '3M-SAFETY-HELMET',
    price: 1650,
    oldPrice: 2200,
    rating: 4.8,
    reviews: 370,
    stock: 'In Stock',
    badge: '25% off',
    image: 'assets/images/products/prd-15.jpg',
    description: 'Protective industrial helmet engineered for impact resistance and long work shifts in warehouses, construction, and heavy-duty environments.'
  },
  {
    id: 16,
    name: 'Honeywell Safety Goggles',
    brand: 'Honeywell',
    category: 'Safety Equipment',
    sku: 'HNY-GOGGLE',
    price: 780,
    oldPrice: 1090,
    rating: 4.7,
    reviews: 211,
    stock: 'In Stock',
    badge: '28% off',
    image: 'assets/images/products/prd-16.jpg',
    description: 'Anti-scratch safety goggles with anti-fog finish and high-impact lens protection suited for machining, grinding, and site work.'
  },
  {
    id: 17,
    name: '3M Industrial Ear Protection',
    brand: '3M',
    category: 'Safety Equipment',
    sku: '3M-EAR-PRO',
    price: 1260,
    oldPrice: 1690,
    rating: 4.9,
    reviews: 294,
    stock: 'In Stock',
    badge: '25% off',
    image: 'assets/images/products/prd-17.jpg',
    description: 'Comfortable industrial ear muffs designed for long-duration noise protection without compromising on hearing clarity and fit.'
  },
  {
    id: 18,
    name: 'Safety Gloves Heavy Duty',
    brand: 'Honeywell',
    category: 'Safety Equipment',
    sku: 'HNY-GLV-HD',
    price: 520,
    oldPrice: 690,
    rating: 4.6,
    reviews: 243,
    stock: 'In Stock',
    badge: '25% off',
    image: 'assets/images/products/prd-18.jpg',
    description: 'Cut-resistant heavy-duty gloves for handling sharp edges, abrasive materials, and day-to-day workshop tasks with secure grip.'
  },
  {
    id: 19,
    name: 'Mitutoyo Digital Vernier Caliper',
    brand: 'Mitutoyo',
    category: 'Measuring Instruments',
    sku: 'MIT-VC-150',
    price: 2450,
    oldPrice: 3200,
    rating: 4.9,
    reviews: 241,
    stock: 'In Stock',
    badge: '23% off',
    image: 'assets/images/products/prd-19.jpg',
    description: 'Precision digital caliper for accurate internal, external, and depth measurement across industrial quality control workflows.'
  },
  {
    id: 20,
    name: 'Digital Measuring Tape',
    brand: 'Stanley',
    category: 'Measuring Instruments',
    sku: 'STN-MT-25',
    price: 1180,
    oldPrice: 1490,
    rating: 4.8,
    reviews: 208,
    stock: 'In Stock',
    badge: '21% off',
    image: 'assets/images/products/prd-20.jpg',
    description: 'Digital measuring tape offering quick readings, durable casing, and workshop-friendly ergonomics for fast site measurements.'
  },
  {
    id: 21,
    name: 'Fluke Digital Multimeter',
    brand: 'Fluke',
    category: 'Electrical Tools',
    sku: 'FLU-MM-789',
    price: 3890,
    oldPrice: 5290,
    rating: 4.9,
    reviews: 291,
    stock: 'In Stock',
    badge: '26% off',
    image: 'assets/images/products/prd-21.jpg',
    description: 'Advanced digital multimeter for electrical diagnostic and preventive maintenance work across industrial and commercial systems.'
  },
  {
    id: 22,
    name: 'Bosch Welding Machine',
    brand: 'Bosch',
    category: 'Welding Equipment',
    sku: 'BOS-WELD-250',
    price: 28950,
    oldPrice: 33200,
    rating: 4.8,
    reviews: 97,
    stock: 'Low Stock',
    badge: '13% off',
    image: 'assets/images/products/prd-22.jpg',
    description: 'Industrial welding machine engineered for fabrication shops and heavy-duty metal joining with stable arc control and reliability.'
  },
  {
    id: 23,
    name: 'Heavy Duty Hydraulic Jack',
    brand: 'SKF',
    category: 'Hydraulic Equipment',
    sku: 'SKF-HJ-3T',
    price: 9640,
    oldPrice: 11990,
    rating: 4.7,
    reviews: 134,
    stock: 'In Stock',
    badge: '20% off',
    image: 'assets/images/products/prd-23.jpg',
    description: 'Heavy-duty hydraulic jack for workshops and maintenance bays built for lift stability, operation safety, and long service life.'
  },
  {
    id: 24,
    name: 'Industrial Air Compressor',
    brand: 'Atlas Copco',
    category: 'Pneumatic Tools',
    sku: 'ATC-AC-7.5',
    price: 22400,
    oldPrice: 26800,
    rating: 4.8,
    reviews: 118,
    stock: 'In Stock',
    badge: '16% off',
    image: 'assets/images/products/prd-24.jpg',
    description: 'Industrial-grade air compressor delivering reliable compressed air for workshop operations, assembly lines, and pneumatic tool setups.'
  },
  {
    id: 25,
    name: 'Automotive Socket Set',
    brand: 'DeWalt',
    category: 'Automotive Tools',
    sku: 'DWT-SOCKET-SET',
    price: 2480,
    oldPrice: 3340,
    rating: 4.7,
    reviews: 116,
    stock: 'In Stock',
    badge: '26% off',
    image: 'assets/images/products/prd-25.jpg',
    description: 'Premium automotive socket set for workshop service operations, fastener tightening, and repair jobs with dependable wear resistance.'
  },
  {
    id: 26,
    name: 'Industrial Pneumatic Nailer',
    brand: 'Makita',
    category: 'Pneumatic Tools',
    sku: 'MAK-PN-15',
    price: 7420,
    oldPrice: 9100,
    rating: 4.8,
    reviews: 142,
    stock: 'Low Stock',
    badge: '18% off',
    image: 'assets/images/products/prd-26.jpg',
    description: 'Powerful industrial pneumatic nailer for fastening applications in wood, paneling, and assembly work with efficient operation.'
  },
  {
    id: 27,
    name: 'Hydraulic Press Machine',
    brand: 'SKF',
    category: 'Hydraulic Equipment',
    sku: 'SKF-HPM-25',
    price: 18400,
    oldPrice: 22900,
    rating: 4.7,
    reviews: 89,
    stock: 'In Stock',
    badge: '20% off',
    image: 'assets/images/products/prd-27.jpg',
    description: 'Hydraulic press machine built for forming, pressing, and compact industrial operations requiring stable force application.'
  },
  {
    id: 28,
    name: 'Industrial Voltage Tester',
    brand: 'Fluke',
    category: 'Electrical Tools',
    sku: 'FLU-VT-200',
    price: 2200,
    oldPrice: 2980,
    rating: 4.9,
    reviews: 201,
    stock: 'In Stock',
    badge: '26% off',
    image: 'assets/images/products/prd-28.jpg',
    description: 'Reliable voltage tester for safe electrical verification and live circuit checks in industrial maintenance and installation work.'
  }
];

window.stacklyProducts = products;

const categoryMeta = [
  { name: 'All Products', icon: 'assets/images/cate-all.jpg' },
  { name: 'Power Tools', icon: 'assets/images/cate-1.jpg' },
  { name: 'Hand Tools', icon: 'assets/images/cate-2.jpg' },
  { name: 'Cutting Tools', icon: 'assets/images/cate-3.jpg' },
  { name: 'Measuring Instruments', icon: 'assets/images/cate-4.jpg' },
  { name: 'Safety Equipment', icon: 'assets/images/cate-5.jpg' },
  { name: 'Welding Equipment', icon: 'assets/images/cate-6.jpg' },
  { name: 'Industrial Machinery', icon: 'assets/images/cate-7.jpg' },
  { name: 'Electrical Tools', icon: 'assets/images/cate-8.jpg' },
  { name: 'Automotive Tools', icon: 'assets/images/cate-9.jpg' },
  { name: 'Pneumatic Tools', icon: 'assets/images/cate-10.jpg' },
  { name: 'Hydraulic Equipment', icon: 'assets/images/cate-11.jpg' }
];

const state = {
  category: 'All Products',
  search: '',
  selectedBrands: [],
  selectedSidebarCategories: [],
  priceRange: '',
  rating: 0,
  availability: 'all',
  sort: 'featured',
  view: 'grid',
  page: 1,
  perPage: 12,
  compare: []
};

const CART_KEY = 'stackly-cart';
const WISHLIST_KEY = 'stackly-wishlist';

const formatProductCurrency = (value) => `₹${Number(value).toLocaleString('en-IN')}`;
const getDiscount = (product) => Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

const getProductStored = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch (error) {
    return [];
  }
};

const setProductStored = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const showProductToast = (message) => {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => toast.remove(), 2200);
};

const isWishlisted = (id) => getProductStored(WISHLIST_KEY).includes(id);
const isCompared = (id) => state.compare.includes(id);

const updateProductCounters = () => {
  const cartItems = getProductStored(CART_KEY);
  const wishlistItems = getProductStored(WISHLIST_KEY);
  const cartTotal = cartItems.reduce((sum, item) => sum + Number(item.qty || 1), 0);
  document.querySelectorAll('[data-cart-count]').forEach((node) => {
    node.textContent = cartTotal;
  });
  document.querySelectorAll('[data-wishlist-count]').forEach((node) => {
    node.textContent = wishlistItems.length;
  });
};

const addProductToCart = (productId, quantity = 1) => {
  const cart = getProductStored(CART_KEY);
  const entry = cart.find((item) => item.id === productId);

  if (entry) {
    entry.qty += quantity;
  } else {
    cart.push({ id: productId, qty: quantity });
  }

  setProductStored(CART_KEY, cart);
  updateProductCounters();
  showProductToast('Added to cart.');
};

const toggleProductWishlist = (productId) => {
  const wishlist = getProductStored(WISHLIST_KEY);
  if (wishlist.includes(productId)) {
    setProductStored(WISHLIST_KEY, wishlist.filter((item) => item !== productId));
    showProductToast('Removed from wishlist.');
  } else {
    wishlist.push(productId);
    setProductStored(WISHLIST_KEY, wishlist);
    showProductToast('Saved to wishlist.');
  }
  updateProductCounters();
  renderProducts();
};

const toggleProductCompare = (productId) => {
  if (state.compare.includes(productId)) {
    state.compare = state.compare.filter((id) => id !== productId);
  } else {
    if (state.compare.length >= 3) {
      showProductToast('You can compare up to 3 products.');
      return;
    }
    state.compare.push(productId);
  }
  renderProducts();
};

const getVisibleProducts = () => {
  const query = state.search.trim().toLowerCase();
  let filtered = products.filter((product) => {
    const matchesSearch = !query || product.name.toLowerCase().includes(query) || product.brand.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
    const matchesCategory = state.category === 'All Products' || product.category === state.category;
    const matchesSidebarCategory = state.selectedSidebarCategories.length === 0 || state.selectedSidebarCategories.includes(product.category);
    const matchesBrand = state.selectedBrands.length === 0 || state.selectedBrands.includes(product.brand);
    const matchesPrice = !state.priceRange || priceMatch(product.price, state.priceRange);
    const matchesRating = Number(product.rating) >= state.rating;
    const matchesAvailability = state.availability === 'all' || (state.availability === 'in-stock' ? product.stock === 'In Stock' : product.stock !== 'In Stock');

    return matchesSearch && matchesCategory && matchesSidebarCategory && matchesBrand && matchesPrice && matchesRating && matchesAvailability;
  });

  if (state.sort === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (state.sort === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (state.sort === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
  } else if (state.sort === 'discount') {
    filtered = [...filtered].sort((a, b) => getDiscount(b) - getDiscount(a));
  } else if (state.sort === 'latest') {
    filtered = [...filtered].sort((a, b) => b.id - a.id);
  } else if (state.sort === 'popularity') {
    filtered = [...filtered].sort((a, b) => b.reviews - a.reviews);
  } else {
    filtered = [...filtered].sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
  }

  return filtered;
};

const priceMatch = (value, range) => {
  switch (range) {
    case '0-1000':
      return value >= 0 && value <= 1000;
    case '1000-5000':
      return value > 1000 && value <= 5000;
    case '5000-10000':
      return value > 5000 && value <= 10000;
    case '10000-25000':
      return value > 10000 && value <= 25000;
    case '25000+':
      return value > 25000;
    default:
      return true;
  }
};

const bindCategoryNavEvents = () => {
  document.querySelectorAll('[data-category]').forEach((button) => {
    button.onclick = () => {
      const nextCategory = button.getAttribute('data-category');
      if (!nextCategory || nextCategory === state.category) return;

      state.category = nextCategory;
      state.page = 1;
      renderCategoryNav();
      renderProducts();
    };
  });
};

const renderCategoryNav = () => {
  const nav = document.getElementById('categoryNav');
  if (!nav) return;

  nav.innerHTML = categoryMeta.map((category) => `
    <button type="button" class="category-pill ${state.category === category.name ? 'active' : ''}" data-category="${category.name}">
      <img src="${category.icon}" alt="${category.name}" />
      <span>
        <strong>${category.name}</strong>
      </span>
    </button>
  `).join('');

  bindCategoryNavEvents();
};

const createProductCard = (product) => `
  <article class="product-card">
    <div class="product-media">
      <a href="product-details.html?id=${product.id}" aria-label="View details for ${product.name}">
        <img src="${product.image}" alt="${product.name}" />
      </a>
      <span class="discount-badge">${product.badge}</span>
      <div class="card-actions">
        <button type="button" class="icon-btn ${isWishlisted(product.id) ? 'is-active' : ''}" data-wishlist="${product.id}" aria-label="Add to wishlist">
          <i class="${isWishlisted(product.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
        </button>
        <button type="button" class="icon-btn" data-quick-view="${product.id}" aria-label="Quick view">
          <i class="fa-regular fa-eye"></i>
        </button>
      </div>
    </div>
    <div class="product-body">
      <span class="brand-tag">${product.brand}</span>
      <h3><a class="product-title-link" href="product-details.html?id=${product.id}">${product.name}</a></h3>
      <div class="sku-row">SKU: ${product.sku}</div>
      <div class="rating-row">
        <span class="stars">★★★★★</span>
        <span>${product.rating.toFixed(1)} (${product.reviews})</span>
      </div>
      <div class="price-row">
        <span class="old-price">${formatProductCurrency(product.oldPrice)}</span>
        <span class="new-price">${formatProductCurrency(product.price)}</span>
      </div>
      <div class="stock-row">
        <span class="stock-badge ${product.stock === 'In Stock' ? 'in' : 'out'}">${product.stock}</span>
      </div>
      <div class="card-footer">
        <label class="compare-toggle">
          <input type="checkbox" data-compare="${product.id}" ${isCompared(product.id) ? 'checked' : ''} /> Compare
        </label>
        <div class="card-buttons-row">
          <button type="button" class="primary-btn" data-add-cart="${product.id}">Add to Cart</button>
          <a class="detail-link" href="product-details.html?id=${product.id}">Details</a>
        </div>
      </div>
    </div>
  </article>
`;

const getProductById = (productId) => products.find((item) => item.id === Number(productId));

const renderProductDetail = () => {
  const container = document.getElementById('productDetail');
  if (!container) return;

  const productId = Number(new URLSearchParams(window.location.search).get('id'));
  const product = getProductById(productId) || products[0];

  if (!product) {
    container.innerHTML = '<div class="empty-state">Product not found.</div>';
    return;
  }

  const discount = getDiscount(product);
  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  container.innerHTML = `
    <div class="product-detail-shell">
      <div class="product-detail-gallery">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-detail-content">
        <span class="detail-badge">${product.category}</span>
        <h2>${product.name}</h2>
        <div class="rating-row">
          <span class="stars">★★★★★</span>
          <span>${product.rating.toFixed(1)} (${product.reviews} reviews)</span>
        </div>
        <div class="detail-price-row">
          <span class="new-price">${formatProductCurrency(product.price)}</span>
          <span class="old-price">${formatProductCurrency(product.oldPrice)}</span>
          <span class="modal-discount">-${discount}%</span>
        </div>
        <p class="detail-description">${product.description}</p>
        <ul class="detail-list">
          <li><strong>Brand:</strong> ${product.brand}</li>
          <li><strong>SKU:</strong> ${product.sku}</li>
          <li><strong>Availability:</strong> <span class="stock-line ${product.stock === 'In Stock' ? 'in' : 'out'}">${product.stock}</span></li>
        </ul>
        <div class="detail-actions">
          <button type="button" class="primary-btn" data-add-cart-detail="${product.id}">Add to Cart</button>
          <button type="button" class="secondary-btn" data-wishlist-detail="${product.id}">Wishlist</button>
          <a class="quick-btn" href="products.html">Continue Shopping</a>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <div class="detail-section-header">
        <h3>Product Highlights</h3>
      </div>
      <div class="detail-feature-grid">
        <div class="detail-feature-box">
          <i class="fa-solid fa-shield-halved"></i>
          <h4>Industrial Grade</h4>
          <p>Built for high-use environments and long-term reliability.</p>
        </div>
        <div class="detail-feature-box">
          <i class="fa-solid fa-bolt"></i>
          <h4>Fast Performance</h4>
          <p>Engineered for consistent output and efficient workflow.</p>
        </div>
        <div class="detail-feature-box">
          <i class="fa-solid fa-screwdriver-wrench"></i>
          <h4>Precision Fit</h4>
          <p>Designed for accurate handling, controlled motion, and clean results.</p>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <div class="detail-section-header">
        <h3>Related Products</h3>
      </div>
      <div class="related-grid">
        ${relatedProducts.length ? relatedProducts.map((item) => `
          <article class="related-card">
            <img src="${item.image}" alt="${item.name}" />
            <div class="related-card-body">
              <h4>${item.name}</h4>
              <div class="price-row">
                <span class="new-price">${formatProductCurrency(item.price)}</span>
                <span class="old-price">${formatProductCurrency(item.oldPrice)}</span>
              </div>
              <a class="detail-link" href="product-details.html?id=${item.id}">View Details</a>
            </div>
          </article>
        `).join('') : '<div class="empty-state">No related products found.</div>'}
      </div>
    </div>
  `;

  const addCartButton = document.querySelector('[data-add-cart-detail]');
  const wishlistButton = document.querySelector('[data-wishlist-detail]');

  addCartButton?.addEventListener('click', () => {
    addProductToCart(product.id, 1);
  });

  wishlistButton?.addEventListener('click', () => {
    toggleProductWishlist(product.id);
  });
};

const renderProducts = () => {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const visible = getVisibleProducts();
  const totalPages = Math.max(1, Math.ceil(visible.length / state.perPage));
  if (state.page > totalPages) state.page = totalPages;

  const start = (state.page - 1) * state.perPage;
  const paginated = visible.slice(start, start + state.perPage);

  grid.classList.toggle('list-view', state.view === 'list');
  grid.innerHTML = paginated.length
    ? paginated.map((product) => createProductCard(product)).join('')
    : '<div class="empty-state">No products found. Try adjusting your filters or search term.</div>';

  const totalProductsLabel = document.getElementById('totalProducts');
  if (totalProductsLabel) totalProductsLabel.textContent = products.length;

  const resultsStatus = document.getElementById('resultsStatus');
  if (resultsStatus) {
    resultsStatus.textContent = `${visible.length} products`;
  }

  const pageNumbers = document.getElementById('pageNumbers');
  if (pageNumbers) {
    pageNumbers.innerHTML = Array.from({ length: totalPages }, (_, index) => `
      <button type="button" class="page-number ${state.page === index + 1 ? 'active' : ''}" data-page="${index + 1}">${index + 1}</button>
    `).join('');
  }

  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');
  if (prevBtn) prevBtn.disabled = state.page === 1;
  if (nextBtn) nextBtn.disabled = state.page === totalPages;

  document.querySelectorAll('[data-page]').forEach((button) => {
    button.addEventListener('click', () => {
      const page = Number(button.getAttribute('data-page'));
      if (!page) return;
      state.page = page;
      renderProducts();
      window.scrollTo({ top: 260, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('[data-quick-view]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.getAttribute('data-quick-view'));
      openQuickView(id);
    });
  });

  document.querySelectorAll('[data-add-cart]').forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = Number(button.getAttribute('data-add-cart'));
      addProductToCart(id, 1);
      event.preventDefault();
      event.stopPropagation();
    });
  });

  document.querySelectorAll('[data-wishlist]').forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = Number(button.getAttribute('data-wishlist'));
      toggleProductWishlist(id);
      event.preventDefault();
      event.stopPropagation();
    });
  });

  document.querySelectorAll('[data-compare]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const id = Number(checkbox.getAttribute('data-compare'));
      toggleProductCompare(id);
    });
  });
};

const hideQuickViewModal = () => {
  const modal = document.getElementById('quickViewModal');
  if (!modal) return;

  modal.classList.remove('show');
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';

  document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
    if (backdrop !== modal) backdrop.remove();
  });
};

const openQuickView = (productId) => {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  if (!modal || !content) return;

  const discount = getDiscount(product);
  content.innerHTML = `
    <div class="modal-image-wrap">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="modal-info">
      <span class="modal-brand">${product.brand}</span>
      <h3 id="quickViewTitle">${product.name}</h3>
      <div class="modal-meta">
        <span>SKU: ${product.sku}</span>
        <span>${product.category}</span>
      </div>
      <div class="modal-price-row">
        <span class="new-price">${formatProductCurrency(product.price)}</span>
        <span class="old-price">${formatProductCurrency(product.oldPrice)}</span>
        <span class="modal-discount">-${discount}%</span>
      </div>
      <div class="rating-row">
        <span class="stars">★★★★★</span>
        <span>${product.rating.toFixed(1)} (${product.reviews} reviews)</span>
      </div>
      <p class="modal-description">${product.description}</p>
      <span class="stock-line ${product.stock === 'In Stock' ? 'in' : 'out'}">${product.stock}</span>
      <div class="quantity-row">
        <label for="quickViewQty">Quantity</label>
        <div class="quantity-box">
          <button type="button" data-qty-minus="quick-view">-</button>
          <input id="quickViewQty" type="number" min="1" value="1" />
          <button type="button" data-qty-plus="quick-view">+</button>
        </div>
      </div>
      <div class="modal-actions">
        <button type="button" class="modal-primary-btn" data-add-cart-modal="${product.id}">Add to Cart</button>
        <button type="button" class="secondary-btn" data-wishlist-modal="${product.id}">Wishlist</button>
      </div>
    </div>
  `;

  const qtyInput = document.getElementById('quickViewQty');
  document.querySelector('[data-qty-plus="quick-view"]')?.addEventListener('click', () => {
    qtyInput.value = Number(qtyInput.value || 1) + 1;
  });
  document.querySelector('[data-qty-minus="quick-view"]')?.addEventListener('click', () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value || 1) - 1);
  });

  document.querySelector('[data-add-cart-modal]')?.addEventListener('click', () => {
    addProductToCart(product.id, Number(qtyInput.value || 1));
    hideQuickViewModal();
  });

  document.querySelector('[data-wishlist-modal]')?.addEventListener('click', () => {
    toggleProductWishlist(product.id);
  });

  modal.classList.add('show');
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
};

const bindEvents = () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      state.search = event.target.value;
      state.page = 1;
      renderProducts();
    });
  }

  document.querySelectorAll('[data-sidebar-category]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const values = [...document.querySelectorAll('[data-sidebar-category]:checked')].map((input) => input.value);
      state.selectedSidebarCategories = values;
      state.page = 1;
      renderProducts();
    });
  });

  document.querySelectorAll('[data-brand]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const values = [...document.querySelectorAll('[data-brand]:checked')].map((input) => input.value);
      state.selectedBrands = values;
      state.page = 1;
      renderProducts();
    });
  });

  document.querySelectorAll('input[name="priceRange"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      state.priceRange = radio.value;
      state.page = 1;
      renderProducts();
    });
  });

  document.querySelectorAll('input[name="ratingFilter"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      state.rating = Number(radio.value);
      state.page = 1;
      renderProducts();
    });
  });

  document.querySelectorAll('input[name="availabilityFilter"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      state.availability = radio.value;
      state.page = 1;
      renderProducts();
    });
  });

  document.getElementById('sortSelect')?.addEventListener('change', (event) => {
    state.sort = event.target.value;
    state.page = 1;
    renderProducts();
  });

  document.getElementById('perPageSelect')?.addEventListener('change', (event) => {
    state.perPage = Number(event.target.value);
    state.page = 1;
    renderProducts();
  });

  document.querySelectorAll('.view-btn').forEach((button) => {
    button.addEventListener('click', () => {
      state.view = button.getAttribute('data-view');
      document.querySelectorAll('.view-btn').forEach((item) => item.classList.toggle('active', item === button));
      renderProducts();
    });
  });

  document.getElementById('clearFiltersBtn')?.addEventListener('click', () => {
    state.category = 'All Products';
    state.search = '';
    state.selectedBrands = [];
    state.selectedSidebarCategories = [];
    state.priceRange = '';
    state.rating = 0;
    state.availability = 'all';
    state.sort = 'featured';
    state.page = 1;
    state.view = 'grid';

    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('input[type="checkbox"]').forEach((input) => { input.checked = false; });
    document.querySelectorAll('input[name="priceRange"]').forEach((input) => { input.checked = false; });
    document.querySelectorAll('input[name="ratingFilter"]').forEach((input) => { input.checked = false; });
    document.querySelectorAll('input[name="availabilityFilter"]').forEach((input) => {
      input.checked = input.value === 'all';
    });

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'featured';

    const perPageSelect = document.getElementById('perPageSelect');
    if (perPageSelect) perPageSelect.value = '12';

    document.querySelectorAll('.view-btn').forEach((button) => {
      button.classList.toggle('active', button.getAttribute('data-view') === 'grid');
    });

    renderCategoryNav();
    renderProducts();
  });

  document.getElementById('prevPageBtn')?.addEventListener('click', () => {
    if (state.page > 1) {
      state.page -= 1;
      renderProducts();
    }
  });

  document.getElementById('nextPageBtn')?.addEventListener('click', () => {
    const visible = getVisibleProducts();
    const totalPages = Math.max(1, Math.ceil(visible.length / state.perPage));
    if (state.page < totalPages) {
      state.page += 1;
      renderProducts();
    }
  });

  document.getElementById('closeModalBtn')?.addEventListener('click', () => {
    hideQuickViewModal();
  });

  document.getElementById('quickViewModal')?.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      hideQuickViewModal();
    }
  });
};

window.renderProductDetail = renderProductDetail;

const initProductStorePage = () => {
  renderCategoryNav();
  renderProductDetail();
  renderProducts();
  bindEvents();
  updateProductCounters();
};

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initProductStorePage, { once: true });
} else {
  initProductStorePage();
}
