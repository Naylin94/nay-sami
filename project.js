/* function for shopping card */
let subtotal = 0;

window.onload = function() {
  const cartList = document.getElementById('cart-list');
  /* update tax suntotal total */
  const subtotalEl = document.getElementById('subtotal');
  const taxEl = document.getElementById('tax');
  const totalEl = document.getElementById('total');

  function addToCart(name, price) {
    const item = document.createElement('li');
    item.textContent = `${name} - SEK: ${price}`;
    cartList.appendChild(item);

    // Update subtotal
    subtotal += price; 
    
    // Calculate tax and total
    const tax = +(subtotal * 0.12).toFixed(2);  // 6% tax
    const total = +(subtotal + tax).toFixed(2);

    // Update display
    subtotalEl.textContent = `Subtotal: SEK: ${subtotal.toFixed(2)}`;
    taxEl.textContent = `Tax (12%): SEK: ${tax}`;
    totalEl.textContent = `Total: SEK: ${total}`;
  }
  window.addToCart = addToCart; // Make it accessible globally
};

/* function for shopping card */
/* const cartList = document.getElementById('cart-list');

function addToCart(name, price) {
  const item = document.createElement('li');
  item.textContent = `${name} - $${price}`;
  cartList.appendChild(item);
} */
/* let subtotal = 0;

const cartList = document.getElementById('cart-list');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');

function addToCart(name, price) {
  const item = document.createElement('li');
  item.textContent = `${name} - $${price}`;
  cartList.appendChild(item);

  // Update subtotal
  subtotal += price;

  // Calculate tax and total
  const tax = +(subtotal * 0.06).toFixed(2);  // 6% tax
  const total = +(subtotal + tax).toFixed(2);

  // Update display
  subtotalEl.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  taxEl.textContent = `Tax (6%): $${tax}`;
  totalEl.textContent = `Total: $${total}`;
}
 */