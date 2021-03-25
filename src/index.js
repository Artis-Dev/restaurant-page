import home from './home';
import menu from './menu';
import contacts from './contacts';

const render = (() => {
  console.log('Hello World!');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  function renderHeader() {
    // Logo
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.setAttribute('src', './logo.png');
    logo.setAttribute('alt', 'Pizzeria logo');
    header.appendChild(logo);
    // Navigation
    const nav = document.createElement('nav');
    nav.classList.add('navigation');
    header.appendChild(nav);
    // Menu items
    const navHome = document.createElement('a');
    navHome.classList.add('nav-link');
    navHome.id = 'home';
    navHome.setAttribute('href', '#');
    navHome.textContent = 'HOME';
    nav.appendChild(navHome);
    const navMenu = document.createElement('a');
    navMenu.classList.add('nav-link');
    navMenu.id = 'menu';
    navMenu.setAttribute('href', '#');
    navMenu.textContent = 'MENU';
    nav.appendChild(navMenu);
    const navContacts = document.createElement('a');
    navContacts.classList.add('nav-link');
    navContacts.id = 'contacts';
    navContacts.setAttribute('href', '#');
    navContacts.textContent = 'CONTACTS';
    nav.appendChild(navContacts);
  }

  function renderFooter() {
    const credits = document.createElement('p');
    credits.classList.add('credits');
    footer.appendChild(credits);
    // Items
    const creditText = document.createTextNode('Built by ');
    credits.appendChild(creditText);
    const creditAuthor = document.createElement('a');
    creditAuthor.setAttribute('href', 'https://github.com/Artis-Dev/');
    creditAuthor.setAttribute('target', '_blank');
    creditAuthor.textContent = 'ArtisDev';
    credits.appendChild(creditAuthor);
    const creditSep = document.createTextNode(' | ');
    credits.appendChild(creditSep);
    const creditSource = document.createElement('a');
    creditSource.setAttribute('href', 'https://github.com/Artis-Dev/restaurant-page/');
    creditSource.setAttribute('target', '_blank');
    creditSource.textContent = 'Source Code';
    credits.appendChild(creditSource);
  }

  renderHeader();
  home.renderHome();
  renderFooter();

  document.addEventListener('click', (event) => {
    if (event.target.id === 'home') {
      home.renderHome();
    } else if (event.target.id === 'menu' || event.target.className === 'home-button') {
      menu.renderMenu();
    } else if (event.target.id === 'contacts') {
      contacts.renderContacts();
    }
  });
})();
