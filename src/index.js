import home from './home';
import menu from './menu';
import contacts from './contacts';

const render = (() => {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  const navItems = ['home', 'menu', 'contacts'];

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
    for (let i = 0; i < navItems.length; i += 1) {
      const navItem = document.createElement('a');
      navItem.id = navItems[i];
      navItem.classList.add('nav-link');
      navItem.setAttribute('href', '#');
      navItem.textContent = navItems[i].toUpperCase();
      nav.appendChild(navItem);
    }
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

    menuItemHome.classList.add('current');

    function removeCurrentClass() {
      menuItems.forEach((element) => {
        element.classList.remove('current');
      });
    }

    document.addEventListener('click', (event) => {
      if (event.target.id === 'home' || event.target.className === 'logo') {
        removeCurrentClass();
        home.render();
        menuItemHome.classList.add('current');
      } else if (event.target.id === 'menu' || event.target.className === 'home-button') {
        removeCurrentClass();
        menu.render();
        menuItemMenu.classList.add('current');
      } else if (event.target.id === 'contacts') {
        removeCurrentClass();
        contacts.render();
        menuItemContacts.classList.add('current');
      }
    });
  }

  renderHeader();
  home.render();
  renderFooter();
  buttonsHandler();
})();
