import home from './home';
import menu from './menu';
import contacts from './contacts';

const render = (() => {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  function renderHeader() {
    // Logo
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.setAttribute('src', './img/logo.png');
    logo.setAttribute('alt', 'Pizzeria logo');
    header.appendChild(logo);
    // Navigation
    const nav = document.createElement('nav');
    nav.classList.add('navigation');
    header.appendChild(nav);
    // Menu items
    const navHome = document.createElement('a');
    navHome.classList.add('nav-link', 'current');
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

  function buttonsHandler() {
    const menuItems = document.querySelectorAll('.navigation a');
    const menuItemHome = menuItems[0];
    const menuItemMenu = menuItems[1];
    const menuItemContacts = menuItems[2];
    document.addEventListener('click', (event) => {
      if (event.target.id === 'home' || event.target.className === 'logo') {
        home.render();
        menuItems.forEach((element) => {
          element.classList.remove('current');
        });
        menuItemHome.classList.add('current');
      } else if (event.target.id === 'menu' || event.target.className === 'home-button') {
        menu.render();
        menuItems.forEach((element) => {
          element.classList.remove('current');
        });
        menuItemMenu.classList.add('current');
      } else if (event.target.id === 'contacts') {
        contacts.render();
        menuItems.forEach((element) => {
          element.classList.remove('current');
        });
        menuItemContacts.classList.add('current');
      }
    });
  }

  renderHeader();
  home.render();
  renderFooter();
  buttonsHandler();
})();
