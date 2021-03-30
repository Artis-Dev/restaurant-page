const home = (() => {
  const content = document.querySelector('#content');

  const badges = [
    {
      text: 'ALL NATURAL',
      icon: 'far fa-carrot',
    },
    {
      text: 'HAND CRAFTED',
      icon: 'far fa-hat-chef',
    },
    {
      text: 'VEGETARIAN',
      icon: 'far fa-leaf-heart',
    },
  ];

  function render() {
    console.log('Render Home');
    content.classList.remove('background');
    content.classList.add('home');
    content.textContent = '';
    // Headline
    const headline = document.createElement('h1');
    headline.classList.add('home-headline');
    headline.textContent = 'Authentic Neapoletan pizza';
    content.appendChild(headline);
    // Seperator
    const sep = document.createElement('div');
    sep.classList.add('home-sep');
    content.appendChild(sep);
    // Subtitle
    const subtitle = document.createElement('p');
    subtitle.classList.add('home-subtitle');
    subtitle.textContent = 'HAND MADE WITH LOVE';
    content.appendChild(subtitle);
    // Button
    const button = document.createElement('a');
    button.classList.add('home-button');
    button.textContent = 'MENU';
    content.appendChild(button);
    // Badges wrapper wip
    const badgesWrapper = document.createElement('div');
    badgesWrapper.classList.add('home-badges');
    content.appendChild(badgesWrapper);
    // Badges wip
    for (let i = 0; i < badges.length; i += 1) {
      const menuInfoItem = document.createElement('p');
      badgesWrapper.appendChild(menuInfoItem);
      const menuInfoItemIcon = document.createElement('i');
      menuInfoItemIcon.className = badges[i].icon;
      menuInfoItem.appendChild(menuInfoItemIcon);
      const menuInfoBr = document.createElement('br');
      menuInfoItem.appendChild(menuInfoBr);
      const menuInfoString = document.createTextNode(badges[i].text);
      menuInfoItem.appendChild(menuInfoString);
    }
  }

  return {
    render,
  };
})();

export default home;
