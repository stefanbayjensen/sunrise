const eventSource = new EventSource('/hot-reload');

eventSource.onmessage = () => {
  setTimeout(() => {
    window.app.mount();
  }, 600);
};
