/* function for shopping card */
let subtotal = 0;

window.onload = function() {
  const cartList = document.getElementById('cart-list');
  /* update tax suntotal total */
  const subtotalEl = document.getElementById('subtotal');
  const taxEl = document.getElementById('tax');

  function addToCart(name, price) {
    const item = document.createElement('li'); /*  <ul id="cart-list" style="padding: 10px;"><li></li></ul> */
    item.textContent = `${name} - SEK: ${price}`;
    cartList.append(item);

    // Update subtotal
    subtotal += price; 
    
    // Calculate tax and total
    const tax = +(subtotal * 0.12).toFixed(2);  // 12% tax

    // before add will show from html 
    // (Update display) after add will show from JS
    subtotalEl.textContent = `Subtotal: SEK: ${subtotal.toFixed(2)}`; // for adjust price after (.) ex: 212.368 => 212.37
    taxEl.textContent = `moms (12%): SEK: ${tax}`;
  }
  //with event attributes can not use direct function
  window.addToCart = addToCart; // deklarera globally scope  

  $('#cart-list').on('click', 'li', function() { // jQuery for remove item
      $(this).remove();
  });
};


