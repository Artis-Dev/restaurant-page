const contacts = (() => {
  const content = document.querySelector('#content');

  function render() {
    console.log('Render Contacts');
    content.textContent = '';
  }

  return {
    render,
  };
})();

export default contacts;
