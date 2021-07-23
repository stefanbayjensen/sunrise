import choozy from '../../lib/choozy';

export default window.component((node, ctx) => {
  const parent = node.parentNode;
  const { toggle } = choozy(node, null);

  const toggleDrawer = ({ cartOpen }) => {
    node.classList[cartOpen ? 'add' : 'remove']('open');
  };

  toggle.forEach(btn => {
    btn.addEventListener('click', () =>
      ctx.emit('cart:toggle', ({ cartOpen }) => ({ cartOpen: !cartOpen ?? true }))
    );
  });

  toggleDrawer(ctx.getState());

  ctx.on('cart:toggle', toggleDrawer);

  ctx.on('cart:render', ({ cart }) => {
    const elem = document.createElement('div');
    elem.innerHTML = cart.sections['cart-drawer'];

    if (!parent.parentNode) return;

    window.app.unmount();
    parent.parentNode.replaceChild(elem.firstElementChild, parent);
    window.app.mount();
  });

  return () => ctx.on(['cart:toggle', 'cart:render'], () => {})();
});
