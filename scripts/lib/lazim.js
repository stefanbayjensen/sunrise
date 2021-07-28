import vsbl from 'vsbl';

const globalWidths = [120, 512, 768, 1280, 1440, 1920, 2140, 3200];
let srrafInstance;

export function update() {
  if (srrafInstance) srrafInstance.update();
}

export function bind(attr = 'data-src') {
  let images;
  const nodes = document.querySelectorAll(`[${attr}],[data-srcset]`);

  const startTime = new Date().getTime();

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const img =
      node.nodeName === 'IMG' || node.nodeName === 'SOURCE'
        ? node
        : node.getElementsByTagName('img')[0];
    const src = node.getAttribute(attr);
    const { maxWidth, desktop, mobile } = node.dataset;
    const widthsObj = {
      desktop: globalWidths.filter(w => w <= maxWidth && w > 1024),
      mobile: globalWidths.filter(w => w <= maxWidth && w <= 1024),
    };
    const generatedSrcset = Object.entries({ mobile, desktop })
      .map(([key, p]) => widthsObj[key].map(w => `${p.replace('{width}', w)} ${w}w`).join(','))
      .join(',');

    console.log('img:generated', new Date().getTime() - startTime);

    img.onload = () => {
      node.classList.add('is-loaded');
    };

    node.removeAttribute(attr);

    images = vsbl(node)(() => {
      node.classList.add('is-visible');
      if (src) img.src = src;
      if (generatedSrcset) img.srcset = generatedSrcset;
    });
  }

  if (images) {
    images.update();
    if (!srrafInstance) srrafInstance = images;
  }
}
