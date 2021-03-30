const menu = (() => {
  const content = document.querySelector('#content');

  const legend = [
    {
      text: 'TOP PICK',
      icon: 'far fa-crown top-pick',
    },
    {
      text: 'VEGAN',
      icon: 'far fa-leaf-heart vegan',
    },
    {
      text: 'ALCO',
      icon: 'far fa-percent alco',
    },
  ];
  const categories = ['Pizza', 'Salads', 'Drinks', 'Desserts'];
  const food = [
    [
      {
        name: 'Margherita  8.5 €',
        description: 'Tomatoes, mozzarella, basil, olive oil.',
        badges: ['far fa-crown top-pick'],
      },
      {
        name: 'Marinara 7 €',
        description: 'Tomatoes, garlic, oregano, olive oil.',
        badges: ['far fa-leaf-heart vegan'],
      },
      {
        name: 'Quattro Formaggi 10 €',
        description: 'Tomatoes, mozzarella, stracchino, fontina, gorgonzola, olive oil.',
        badges: [],
      },
      {
        name: 'Bianca 5 €',
        description: 'Olive oil, salt, rosemary sprigs.',
        badges: ['far fa-leaf-heart vegan'],
      },
    ],
    [
      {
        name: 'Panzanella 6 €',
        description: 'Bread, red onions, tomatoes, olive oil, vinegar, spices.',
        badges: ['far fa-leaf-heart vegan'],
      },
      {
        name: 'Caprese 5 €',
        description: 'Mozzarella, tomatoes, basil, olive oil, spices.',
        badges: [],
      },
    ],
    [
      {
        name: 'Chai 3 €',
        description: 'Traditional indian tea, milk or vegan versions.',
        badges: ['far fa-crown top-pick'],
      },
      {
        name: 'Wine 5 €',
        description: 'Finest Italian wine.',
        badges: ['far fa-percent alco'],
      },
      {
        name: 'Lemonade 2 €',
        description: 'Homemade lemonade.',
        badges: [],
      },
      {
        name: 'Herbal Tea 2 €',
        description: 'Warming...',
        badges: [],
      },
    ],
    [
      {
        name: 'Cannoli 3 €',
        description: 'Italian pastry dessert.',
        badges: [],
      },
      {
        name: 'Powerball 2 €',
        description: 'Sweet balls full of energy.',
        badges: ['far fa-leaf-heart vegan'],
      },
    ],
  ];

  function render() {
    console.log('Render Menu');
    content.textContent = '';
    content.classList.remove('home');
    content.classList.add('background');
    // Headline
    const headline = document.createElement('h1');
    headline.classList.add('menu-headline');
    headline.textContent = 'MENU';
    content.appendChild(headline);
    // Menu info
    const menuInfo = document.createElement('div');
    menuInfo.classList.add('menu-info');
    content.appendChild(menuInfo);
    // Menu info items
    for (let l = 0; l < legend.length; l += 1) {
      const menuInfoItem = document.createElement('p');
      menuInfo.appendChild(menuInfoItem);
      const menuInfoItemIcon = document.createElement('i');
      menuInfoItemIcon.className = legend[l].icon;
      menuInfoItem.appendChild(menuInfoItemIcon);
      const menuInfoBr = document.createElement('br');
      menuInfoItem.appendChild(menuInfoBr);
      const menuInfoString = document.createTextNode(legend[l].text);
      menuInfoItem.appendChild(menuInfoString);
    }
    // Menu categories
    for (let i = 0; i < categories.length; i += 1) {
      const categoryTitle = document.createElement('h2');
      categoryTitle.classList.add('menu-category');
      categoryTitle.textContent = categories[i];
      content.appendChild(categoryTitle);
      if (categories[i] === 'Pizza') {
        const pizzaInfo = document.createElement('p');
        pizzaInfo.classList.add('pizza-category-info');
        content.appendChild(pizzaInfo);
        const pizzaInfoIcon = document.createElement('i');
        pizzaInfoIcon.classList.add('far', 'fa-pizza');
        pizzaInfo.appendChild(pizzaInfoIcon);
        const pizzaInfoString = document.createTextNode(' - 35CM');
        pizzaInfo.appendChild(pizzaInfoString);
      }
      // Menu items
      const menuGrid = document.createElement('div');
      menuGrid.classList.add('menu-grid');
      content.appendChild(menuGrid);
      for (let j = 0; j < food[i].length; j += 1) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuGrid.appendChild(menuItem);
        const foodName = document.createElement('h3');
        foodName.textContent = food[i][j].name;
        menuItem.appendChild(foodName);
        if (food[i][j].badges !== []) {
          for (let k = 0; k < food[i][j].badges.length; k += 1) {
            const badge = document.createElement('i');
            badge.className = food[i][j].badges[k];
            foodName.appendChild(badge);
          }
        }
        const foodDesc = document.createElement('p');
        foodDesc.textContent = food[i][j].description;
        menuItem.appendChild(foodDesc);
      }
    }
  }

  return {
    render,
  };
})();

export default menu;
