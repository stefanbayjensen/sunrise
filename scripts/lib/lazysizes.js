import 'lazysizes';
import 'lazysizes/plugins/rias/ls.rias';

const widths = [512, 768, 1280, 1440, 1920, 2140, 3200];

window.lazySizes.cfg.rias.widths = widths;

document.addEventListener('lazyriasmodifyoptions', e => {
  const event = e;
  const maxWidth = Number(event.target.getAttribute('data-max-width'));
  if (maxWidth) event.detail.widths = widths.filter(w => w <= maxWidth);
  return event;
});
