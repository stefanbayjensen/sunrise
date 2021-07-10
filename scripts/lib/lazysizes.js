import 'lazysizes';
import 'lazysizes/plugins/rias/ls.rias';

const widths = [48, 72, 120, 180, 500, 700, 900, 1000, 1250, 1400, 1550, 1700, 1944, 2140];

window.lazySizes.cfg.rias.widths = widths;

document.addEventListener('lazyriasmodifyoptions', e => {
  const event = e;
  const maxWidth = Number(event.target.getAttribute('data-max-width'));
  if (maxWidth) event.detail.widths = widths.filter(w => w <= maxWidth);
  return event;
});
