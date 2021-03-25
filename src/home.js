const home = (() => {
  const content = document.querySelector('#content');

  function render() {
    console.log('Render Home');
    content.textContent = '';
    const headline = document.createElement('h1');
    headline.classList.add('home-headline');
    headline.textContent = 'Authentic Neapoletan pizza';
    content.appendChild(headline);
    const sep = document.createElement('div');
    sep.classList.add('sep');
    content.appendChild(sep);
    const subtitle = document.createElement('p');
    subtitle.classList.add('home-subtitle');
    subtitle.textContent = 'HAND MADE WITH LOVE';
    content.appendChild(subtitle);
    const button = document.createElement('a');
    button.classList.add('home-button');
    button.textContent = 'MENU';
    content.appendChild(button);
  }

  return {
    render,
  };
})();

export default home;
