import components from '../components/product/components';

window.app.add(components);

if (window?.app?.getState()?.cart) window.app.mount();
