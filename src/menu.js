const menu = (() => {
  const content = document.querySelector('#content');

  function renderMenu() {
    console.log('Render Menu');
    content.textContent = '';
  }

  return {
    renderMenu,
  };
})();

export default menu;
