import components from '../components/base/components';

window.app.add(components);

if (window?.app?.getState()?.cart) window.app.mount();
