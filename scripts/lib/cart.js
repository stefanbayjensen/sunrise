export function fetchCart() {
  return fetch('/cart.js', {
    method: 'GET',
    credentials: 'include',
  }).then(res => res.json());
}

function changeAddon(id, quantity) {
  window.app.emit('cart:updating');

  return fetch('/cart/change.js', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, quantity }),
  })
    .then(res => res.json())
    .then(cart => {
      window.app.emit('cart:updated', { cart });
      return cart;
    });
}

export function addItemsById(items = []) {
  window.app.emit('cart:updating');

  return fetch('/cart/add.js', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items }),
  })
    .then(r => r.json())
    .then(item => {
      if (item.status) {
        window.app.emit(['cart:updated', 'cart:error'], null, item);
        return { item, cart: window.app.getState().cart, error: item?.description };
      }

      return fetchCart().then(cart => {
        window.app.emit(['cart:updated', 'cart:toggle'], {
          cart,
          cartOpen: true,
        });
        return { item, cart };
      });
    });
}

export function addVariant(variant, quantity, properties = {}) {
  return addItemsById([{ id: variant.id, quantity, properties }]);
}

export function updateAddon(key, quantity) {
  return changeAddon(key, quantity);
}

export function removeAddon(key) {
  return updateAddon(key, 0);
}
