const STORAGE_KEY = 'stackly-cart';

const getCartItems = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (error) {
    return [];
  }
};

const saveCartItems = (items) => localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

const getCartProductById = (productId) => {
  const product = window.stacklyProducts.find((item) => item.id === Number(productId));
  return product || null;
};

const renderCartPage = () => {
  const cartBody = document.getElementById('cartItems');
  const summary = document.getElementById('cartSummary');
  if (!cartBody || !summary) return;

  const cart = getCartItems();
  if (!cart.length) {
    cartBody.innerHTML = '<div class="empty-state">Your cart is empty. <a href="products.html">Continue shopping</a></div>';
    summary.innerHTML = `
      <h3>Cart Summary</h3>
      <div class="summary-row"><span>Subtotal</span><span>₹0</span></div>
      <div class="summary-row"><span>Shipping</span><span>₹0</span></div>
      <div class="summary-row total"><span>Total</span><span>₹0</span></div>
      <button class="btn btn-primary w-100 mt-3" type="button" disabled>Checkout</button>
    `;
    window.stackly.updateCounters();
    return;
  }

  let subtotal = 0;
  cartBody.innerHTML = cart.map((entry) => {
    const product = getCartProductById(entry.id);
    if (!product) return '';
    const lineTotal = product.price * Number(entry.qty || 1);
    subtotal += lineTotal;
    return `
      <div class="cart-item">
        <div class="cart-product">
          <img src="${product.image}" alt="${product.name}" />
          <div>
            <h4>${product.name}</h4>
            <small>${product.brand}</small>
          </div>
        </div>
        <div>${window.stackly.formatCurrency(product.price)}</div>
        <div>
          <div class="qty-box">
            <button type="button" data-cart-minus="${product.id}">-</button>
            <input type="number" value="${entry.qty}" min="1" data-cart-qty="${product.id}" />
            <button type="button" data-cart-plus="${product.id}">+</button>
          </div>
        </div>
        <div>
          <div>${window.stackly.formatCurrency(lineTotal)}</div>
          <button type="button" class="remove-btn" data-remove-item="${product.id}">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  const shipping = subtotal > 5000 ? 0 : 399;
  const total = subtotal + shipping;
  summary.innerHTML = `
    <h3>Cart Summary</h3>
    <div class="summary-row"><span>Subtotal</span><span>${window.stackly.formatCurrency(subtotal)}</span></div>
    <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? 'Free' : window.stackly.formatCurrency(shipping)}</span></div>
    <div class="summary-row total"><span>Total</span><span>${window.stackly.formatCurrency(total)}</span></div>
    <button class="btn btn-primary w-100 mt-3" type="button">Proceed to Checkout</button>
  `;

  cartBody.querySelectorAll('[data-remove-item]').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.getAttribute('data-remove-item'));
      const next = getCartItems().filter((item) => item.id !== productId);
      saveCartItems(next);
      renderCartPage();
      window.stackly.showToast('Item removed from cart.');
      window.stackly.updateCounters();
    });
  });

  cartBody.querySelectorAll('[data-cart-plus]').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.getAttribute('data-cart-plus'));
      const items = getCartItems();
      const item = items.find((entry) => entry.id === productId);
      if (!item) return;
      item.qty += 1;
      saveCartItems(items);
      renderCartPage();
      window.stackly.updateCounters();
    });
  });

  cartBody.querySelectorAll('[data-cart-minus]').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.getAttribute('data-cart-minus'));
      const items = getCartItems();
      const item = items.find((entry) => entry.id === productId);
      if (!item) return;
      item.qty = Math.max(1, item.qty - 1);
      saveCartItems(items);
      renderCartPage();
      window.stackly.updateCounters();
    });
  });

  cartBody.querySelectorAll('[data-cart-qty]').forEach((input) => {
    input.addEventListener('change', () => {
      const productId = Number(input.getAttribute('data-cart-qty'));
      const items = getCartItems();
      const item = items.find((entry) => entry.id === productId);
      if (!item) return;
      item.qty = Math.max(1, Number(input.value || 1));
      saveCartItems(items);
      renderCartPage();
      window.stackly.updateCounters();
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  renderCartPage();
});
