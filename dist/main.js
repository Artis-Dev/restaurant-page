(()=>{"use strict";const e=(()=>{const e=document.querySelector("#content");return{render:function(){console.log("Render Home"),e.classList.remove("background"),e.classList.add("home"),e.textContent="";const t=document.createElement("h1");t.classList.add("home-headline"),t.textContent="Authentic Neapoletan pizza",e.appendChild(t);const n=document.createElement("div");n.classList.add("sep"),e.appendChild(n);const a=document.createElement("p");a.classList.add("home-subtitle"),a.textContent="HAND MADE WITH LOVE",e.appendChild(a);const o=document.createElement("a");o.classList.add("home-button"),o.textContent="MENU",e.appendChild(o)}}})(),t=(()=>{const e=document.querySelector("#content"),t=[{text:"TOP PICK",icon:"far fa-crown top-pick"},{text:"VEGAN",icon:"far fa-leaf-heart vegan"},{text:"ALCO",icon:"far fa-percent alco"}],n=["Pizza","Salads","Drinks","Desserts"],a=[[{name:"Margherita  8.5 €",description:"Tomatoes, mozzarella, basil, olive oil.",badges:["far fa-crown top-pick"]},{name:"Marinara 7 €",description:"Tomatoes, garlic, oregano, olive oil.",badges:["far fa-leaf-heart vegan"]},{name:"Quattro Formaggi 10 €",description:"Tomatoes, mozzarella, stracchino, fontina, gorgonzola, olive oil.",badges:[]},{name:"Bianca 5 €",description:"Olive oil, salt, rosemary sprigs.",badges:["far fa-leaf-heart vegan"]}],[{name:"Panzanella 6 €",description:"Bread, red onions, tomatoes, olive oil, vinegar, spices.",badges:["far fa-leaf-heart vegan"]},{name:"Caprese 5 €",description:"Mozzarella, tomatoes, basil, olive oil, spices.",badges:[]}],[{name:"Chai 3 €",description:"Traditional indian tea, milk or vegan versions.",badges:["far fa-crown top-pick"]},{name:"Wine 5 €",description:"Finest Italian wine.",badges:["far fa-percent alco"]},{name:"Lemonade 2 €",description:"Homemade lemonade.",badges:[]},{name:"Herbal Tea 2 €",description:"Warming...",badges:[]}],[{name:"Cannoli 3 €",description:"Italian pastry dessert.",badges:[]},{name:"Powerball 2 €",description:"Sweet balls full of energy.",badges:["far fa-leaf-heart vegan"]}]];return{render:function(){console.log("Render Menu"),e.textContent="",e.classList.remove("home"),e.classList.add("background");const o=document.createElement("h1");o.classList.add("menu-headline"),o.textContent="MENU",e.appendChild(o);const s=document.createElement("div");s.classList.add("menu-info"),e.appendChild(s);for(let e=0;e<t.length;e+=1){const n=document.createElement("p");s.appendChild(n);const a=document.createElement("i");a.className=t[e].icon,n.appendChild(a);const o=document.createElement("br");n.appendChild(o);const c=document.createTextNode(t[e].text);n.appendChild(c)}for(let t=0;t<n.length;t+=1){const o=document.createElement("h2");if(o.classList.add("menu-category"),o.textContent=n[t],e.appendChild(o),"Pizza"===n[t]){const t=document.createElement("p");t.classList.add("pizza-category-info"),e.appendChild(t);const n=document.createElement("i");n.classList.add("far","fa-pizza"),t.appendChild(n);const a=document.createTextNode(" - 35CM");t.appendChild(a)}const s=document.createElement("div");s.classList.add("menu-grid"),e.appendChild(s);for(let e=0;e<a[t].length;e+=1){const n=document.createElement("div");n.classList.add("menu-item"),s.appendChild(n);const o=document.createElement("h3");if(o.textContent=a[t][e].name,n.appendChild(o),a[t][e].badges!==[])for(let n=0;n<a[t][e].badges.length;n+=1){const s=document.createElement("i");s.className=a[t][e].badges[n],o.appendChild(s)}const c=document.createElement("p");c.textContent=a[t][e].description,n.appendChild(c)}}}}})(),n=(()=>{const e=document.querySelector("#content");return{render:function(){console.log("Render Contacts"),e.textContent="",e.classList.remove("home"),e.classList.add("background")}}})();(()=>{const a=document.querySelector("header"),o=document.querySelector("footer");!function(){const e=document.createElement("img");e.classList.add("logo"),e.setAttribute("src","./logo.png"),e.setAttribute("alt","Pizzeria logo"),a.appendChild(e);const t=document.createElement("nav");t.classList.add("navigation"),a.appendChild(t);const n=document.createElement("a");n.classList.add("nav-link","current"),n.id="home",n.setAttribute("href","#"),n.textContent="HOME",t.appendChild(n);const o=document.createElement("a");o.classList.add("nav-link"),o.id="menu",o.setAttribute("href","#"),o.textContent="MENU",t.appendChild(o);const s=document.createElement("a");s.classList.add("nav-link"),s.id="contacts",s.setAttribute("href","#"),s.textContent="CONTACTS",t.appendChild(s)}(),e.render(),function(){const e=document.createElement("p");e.classList.add("credits"),o.appendChild(e);const t=document.createTextNode("Built by ");e.appendChild(t);const n=document.createElement("a");n.setAttribute("href","https://github.com/Artis-Dev/"),n.setAttribute("target","_blank"),n.textContent="ArtisDev",e.appendChild(n);const a=document.createTextNode(" | ");e.appendChild(a);const s=document.createElement("a");s.setAttribute("href","https://github.com/Artis-Dev/restaurant-page/"),s.setAttribute("target","_blank"),s.textContent="Source Code",e.appendChild(s)}(),function(){const a=document.querySelectorAll(".navigation a");document.addEventListener("click",(o=>{"home"===o.target.id?(e.render(),a.forEach((e=>{e.classList.remove("current")})),o.target.classList.add("current")):"menu"===o.target.id||"home-button"===o.target.className?(t.render(),a.forEach((e=>{e.classList.remove("current")})),a[1].classList.add("current")):"contacts"===o.target.id&&(n.render(),a.forEach((e=>{e.classList.remove("current")})),o.target.classList.add("current"))}))}()})()})();