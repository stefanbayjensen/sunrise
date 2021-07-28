const globalWidths = [120, 390, 512, 767, 768, 1280, 1440, 1920, 2140, 2560];

const generateSrcset = ({ initial, desktop, maxWidth } = {}) => {
  const array = [
    globalWidths
      .filter(w => w <= maxWidth && w < 768)
      .map(w => `${initial.replace('{width}', w)} ${w}w`)
      .join(','),
    globalWidths
      .filter(w => w <= maxWidth && w >= 768)
      .map(w => `${desktop.replace('{width}', w)} ${w}w`)
      .join(','),
  ];

  return array.join(',');
};

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const node = entry.target;
        const { src } = node.dataset;
        const srcset = generateSrcset(node.dataset);

        node.classList.add('is-visible');
        if (src) node.src = src;
        if (srcset) node.srcset = srcset;

        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: '0px',
    threshold: 0,
  }
);

const snorlax = (attr = 'data-src') => {
  const nodes = [...document.querySelectorAll(`[${attr}],[data-initial]:not([data-observed])`)];

  nodes.map(node => {
    const el = node;

    el.onload = () => {
      el.classList.add('is-loaded');
    };

    el.setAttribute('data-observed', true);

    return observer.observe(el);
  });
};

export default snorlax;
