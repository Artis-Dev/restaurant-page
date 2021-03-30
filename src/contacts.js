const contacts = (() => {
  const content = document.querySelector('#content');

  function render() {
    console.log('Render Contacts');
    content.textContent = '';
    content.classList.remove('home');
    content.classList.add('background');
  }

  return {
    render,
  };
})();

export default contacts;
