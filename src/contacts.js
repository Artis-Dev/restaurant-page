const contacts = (() => {
  const content = document.querySelector('#content');

  function renderContacts() {
    console.log('Render Contacts');
    content.textContent = '';
  }

  return {
    renderContacts,
  };
})();

export default contacts;
