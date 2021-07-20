import options from '../../lib/options';
import setUrlParams from '../../lib/set-url-params';
import updatePrices from '../../lib/update-prices';

export default window.component((node, ctx) => {
  const opts = options(node);
  const {
    product: { variants },
    selectedOrFirstAvailableVariant,
  } = JSON.parse(document.querySelector('.js-product-json').innerHTML);

  let variant = variants.find(v => v.id === selectedOrFirstAvailableVariant);

  opts.onUpdate(({ id }) => {
    variant = variants.find(v => v.id === parseInt(id, 10));
    updatePrices(variant, node);
    setUrlParams([{ name: 'variant', value: id }]);
    ctx.emit('variant:change', null, variant);
  });
});
