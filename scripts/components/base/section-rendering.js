export default window.component(() => {
  console.log('render:some:sections');

  window.app.unmount();
  window.app.mount();
});
