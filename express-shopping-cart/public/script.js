async function getCart() {
    const response = await fetch('/cart');
    const cart = await response.json();
    
    const display = document.getElementById('cart-display');
    display.innerHTML = ''; // Clear current list
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        display.appendChild(li);
    });
}

async function addToCart(name, price) {
    await fetch('/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price })
    });
    getCart();
}

async function clearCart() {
    await fetch('/cart/clear', { method: 'POST' });
    getCart();
}

window.onload = getCart;