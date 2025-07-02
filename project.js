/* function for shopping card */
window.onload = function() {
  const cartList = document.getElementById('cart-list');
  function addToCart(name, price) {
    const item = document.createElement('li');
    item.textContent = `${name} - SEK: ${price}`;
    cartList.appendChild(item);
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
