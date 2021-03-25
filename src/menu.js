const menu = (() => {
  const content = document.querySelector('#content');

  function render() {
    console.log('Render Menu');
    content.textContent = '';
  }

  return {
    render,
  };
})();

export default menu;
