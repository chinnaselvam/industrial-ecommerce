const WISHLIST_KEY = 'stackly-wishlist';

const getWishlistItems = () => {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
  } catch (error) {
    return [];
  }
};

const saveWishlistItems = (items) => localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));

const renderWishlistPage = () => {
  const container = document.getElementById('wishlistGrid');
  if (!container) return;

  const ids = getWishlistItems();
  const products = window.stacklyProducts.filter((product) => ids.includes(product.id));

  if (!products.length) {
    container.innerHTML = '<div class="empty-state">Your wishlist is empty. <a href="products.html">Browse products</a></div>';
    return;
  }

  container.innerHTML = products.map((product) => `
    <article class="product-card">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" />
        <span class="sale-badge">${product.badge}</span>
        <div class="product-actions">
          <button class="product-action" type="button" data-wishlist="${product.id}" aria-label="Remove from wishlist">
            <i class="fa-solid fa-heart-crack"></i>
          </button>
        </div>
      </div>
      <div class="product-details">
        <div class="product-brand">${product.brand}</div>
        <h3>${product.name}</h3>
        <div class="product-price">
          <span class="current">${window.stackly.formatCurrency(product.price)}</span>
        </div>
        <div class="product-footer">
          <button class="btn btn-primary" type="button" data-add-cart="${product.id}">Add to Cart</button>
        </div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('[data-wishlist]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.getAttribute('data-wishlist'));
      const next = getWishlistItems().filter((itemId) => itemId !== id);
      saveWishlistItems(next);
      renderWishlistPage();
      window.stackly.updateCounters();
      window.stackly.showToast('Removed from wishlist.');
    });
  });

  container.querySelectorAll('[data-add-cart]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.getAttribute('data-add-cart'));
      window.stackly.addToCart(id, 1);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  renderWishlistPage();
});
