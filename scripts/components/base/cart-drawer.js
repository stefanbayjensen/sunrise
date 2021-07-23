import { clearCart } from '../../lib/cart';
import choozy from '../../lib/choozy';

export default window.component((node, ctx) => {
  const parent = node.parentNode;
  const { toggle, clear, focusEl } = choozy(node, null);

  const toggleDrawer = ({ cartOpen }) => {
    node.classList[cartOpen ? 'add' : 'remove']('open');
    if (cartOpen) {
      console.log('focus:node', node);
      node.tabIndex = '';
      (focusEl || node).focus();
    } else {
      node.tabIndex = '-1';
    }
  };

  toggle.forEach(btn => {
    btn.addEventListener('click', () =>
      ctx.emit('cart:toggle', ({ cartOpen }) => ({ cartOpen: !cartOpen ?? true }))
    );
  });

  toggleDrawer(ctx.getState());

  if (clear) clear.addEventListener('click', () => clearCart());

  ctx.on('cart:toggle', toggleDrawer);

  ctx.on('cart:render', ({ cart }) => {
    if (parent) parent.outerHTML = cart.sections['cart-drawer'];
    window.app.unmount();
    window.app.mount();
  });

  return () => ctx.on(['cart:toggle', 'cart:render'], () => {})();
});
