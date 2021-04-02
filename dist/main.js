(()=>{"use strict";const e=(()=>{const e=document.querySelector("#content"),t=[{text:"ALL NATURAL",icon:"far fa-carrot"},{text:"HAND CRAFTED",icon:"far fa-hat-chef"},{text:"VEGETARIAN",icon:"far fa-leaf-heart"}];return{render:function(){console.log("Render Home"),e.classList.remove("background"),e.classList.add("home"),e.textContent="";const n=document.createElement("h1");n.classList.add("home-headline"),n.textContent="Authentic Neapoletan pizza",e.appendChild(n);const a=document.createElement("div");a.classList.add("home-sep"),e.appendChild(a);const o=document.createElement("p");o.classList.add("home-subtitle"),o.textContent="HAND MADE WITH LOVE",e.appendChild(o);const c=document.createElement("a");c.classList.add("home-button"),c.textContent="MENU",e.appendChild(c);const d=document.createElement("div");d.classList.add("home-badges"),e.appendChild(d);for(let e=0;e<t.length;e+=1){const n=document.createElement("p");d.appendChild(n);const a=document.createElement("i");a.className=t[e].icon,n.appendChild(a);const o=document.createElement("br");n.appendChild(o);const c=document.createTextNode(t[e].text);n.appendChild(c)}}}})(),t=(()=>{const e=document.querySelector("#content"),t=[{text:"TOP PICK",icon:"far fa-crown top-pick"},{text:"VEGAN",icon:"far fa-leaf vegan"},{text:"ALCO",icon:"far fa-percent alco"}],n=["Pizza","Salads","Drinks","Desserts"],a=[[{name:"Margherita  8.5 €",description:"Tomatoes, mozzarella, basil, olive oil.",badges:["far fa-crown top-pick"]},{name:"Marinara 7 €",description:"Tomatoes, garlic, oregano, olive oil.",badges:["far fa-leaf vegan"]},{name:"Quattro Formaggi 10 €",description:"Tomatoes, mozzarella, stracchino, fontina, gorgonzola, olive oil.",badges:[]},{name:"Bianca 5 €",description:"Olive oil, salt, rosemary sprigs.",badges:["far fa-leaf vegan"]}],[{name:"Panzanella 6 €",description:"Bread, red onions, tomatoes, olive oil, vinegar, spices.",badges:["far fa-leaf vegan"]},{name:"Caprese 5 €",description:"Mozzarella, tomatoes, basil, olive oil, spices.",badges:[]}],[{name:"Chai 3 €",description:"Traditional indian tea, milk or vegan versions.",badges:["far fa-crown top-pick"]},{name:"Wine 5 €",description:"Finest Italian wine.",badges:["far fa-percent alco"]},{name:"Lemonade 2 €",description:"Homemade lemonade.",badges:[]},{name:"Herbal Tea 2 €",description:"Warming tea for rainy days.",badges:[]}],[{name:"Cannoli 3 €",description:"Italian pastry dessert.",badges:[]},{name:"Powerball 2 €",description:"Sweet balls full of energy.",badges:["far fa-leaf vegan"]}]];return{render:function(){console.log("Render Menu"),e.textContent="",e.classList.remove("home"),e.classList.add("background");const o=document.createElement("h1");o.classList.add("menu-headline"),o.textContent="MENU",e.appendChild(o);const c=document.createElement("div");c.classList.add("menu-info"),e.appendChild(c);for(let e=0;e<t.length;e+=1){const n=document.createElement("p");c.appendChild(n);const a=document.createElement("i");a.className=t[e].icon,n.appendChild(a);const o=document.createElement("br");n.appendChild(o);const d=document.createTextNode(t[e].text);n.appendChild(d)}for(let t=0;t<n.length;t+=1){const o=document.createElement("h2");if(o.classList.add("menu-category"),o.textContent=n[t],e.appendChild(o),"Pizza"===n[t]){const t=document.createElement("p");t.classList.add("pizza-category-info"),e.appendChild(t);const n=document.createElement("i");n.classList.add("far","fa-pizza"),t.appendChild(n);const a=document.createTextNode(" - 35CM");t.appendChild(a)}const c=document.createElement("div");c.classList.add("menu-grid"),e.appendChild(c);for(let e=0;e<a[t].length;e+=1){const n=document.createElement("div");n.classList.add("menu-item"),c.appendChild(n);const o=document.createElement("h3");if(o.textContent=a[t][e].name,n.appendChild(o),a[t][e].badges!==[])for(let n=0;n<a[t][e].badges.length;n+=1){const c=document.createElement("i");c.className=a[t][e].badges[n],o.appendChild(c)}const d=document.createElement("p");d.textContent=a[t][e].description,n.appendChild(d)}}}}})(),n=(()=>{const e=document.querySelector("#content");return{render:function(){console.log("Render Contacts"),e.textContent="",e.classList.remove("home"),e.classList.add("background");const t=document.createElement("h1");t.classList.add("contacts-headline"),t.textContent="Order now!",e.appendChild(t);const n=document.createElement("div");n.classList.add("contacts-flex"),e.appendChild(n);const a=document.createElement("div");n.appendChild(a);const o=document.createElement("h2");o.textContent="Contacts",a.appendChild(o);const c=document.createElement("div");c.classList.add("contacts-list"),a.appendChild(c);const d=document.createElement("h3");c.appendChild(d);const s=document.createTextNode("Call us: ");d.appendChild(s);const i=document.createElement("a");i.setAttribute("href","tel:+393287549767"),i.textContent="+39 328 754 9767",d.appendChild(i);const r=document.createElement("h3");c.appendChild(r);const l=document.createTextNode("Follow us: ");r.appendChild(l);const m=document.createElement("a");m.setAttribute("href","https://instagram/pizzeria/"),m.setAttribute("target","_blank"),m.textContent="Instagram",r.appendChild(m);const p=document.createTextNode(" / ");r.appendChild(p);const u=document.createElement("a");u.setAttribute("href","https://facebook.com/pizzeria"),u.setAttribute("target","_blank"),u.textContent="Facebook",r.appendChild(u);const h=document.createTextNode(" / ");r.appendChild(h);const C=document.createElement("a");C.setAttribute("href","https://facebook.com/pizzeria"),C.setAttribute("target","_blank"),C.textContent="Reddit",r.appendChild(C);const g=document.createElement("h3");c.appendChild(g);const f=document.createTextNode("Write feedback: ");g.appendChild(f);const E=document.createElement("a");E.setAttribute("href","mailto:feedback@pizzeria.com"),E.textContent="feedback@pizzeria.com",g.appendChild(E);const b=document.createElement("h3");b.textContent="Working hours:",c.appendChild(b);const x=document.createElement("div");x.classList.add("contacts-working-hours"),c.appendChild(x);const v=document.createElement("div");x.appendChild(v);const L=document.createElement("p");L.textContent="MON-FRI",v.appendChild(L);const A=document.createElement("p");A.textContent="SAT-SUN",v.appendChild(A);const z=document.createElement("div");x.appendChild(z);const N=document.createElement("p");N.textContent="10:00 - 22:00",z.appendChild(N);const k=document.createElement("p");k.textContent="12:00 - 22:00",z.appendChild(k);const T=document.createElement("div");n.appendChild(T);const y=document.createElement("h2");y.textContent="Come to us!",T.appendChild(y);const S=document.createElement("h3");S.textContent="Piazza Sannazaro 42, 77123, Naples, Italy",T.appendChild(S);const M=document.createElement("img");M.classList.add("contacts-map"),M.setAttribute("src","./img/map.png"),M.setAttribute("alt","Map"),T.appendChild(M)}}})();(()=>{const a=document.querySelector("header"),o=document.querySelector("footer");!function(){const e=document.createElement("img");e.classList.add("logo"),e.setAttribute("src","./img/logo.png"),e.setAttribute("alt","Pizzeria logo"),a.appendChild(e);const t=document.createElement("nav");t.classList.add("navigation"),a.appendChild(t);const n=document.createElement("a");n.classList.add("nav-link","current"),n.id="home",n.setAttribute("href","#"),n.textContent="HOME",t.appendChild(n);const o=document.createElement("a");o.classList.add("nav-link"),o.id="menu",o.setAttribute("href","#"),o.textContent="MENU",t.appendChild(o);const c=document.createElement("a");c.classList.add("nav-link"),c.id="contacts",c.setAttribute("href","#"),c.textContent="CONTACTS",t.appendChild(c)}(),e.render(),function(){const e=document.createElement("p");e.classList.add("credits"),o.appendChild(e);const t=document.createTextNode("Built by ");e.appendChild(t);const n=document.createElement("a");n.setAttribute("href","https://github.com/Artis-Dev/"),n.setAttribute("target","_blank"),n.textContent="ArtisDev",e.appendChild(n);const a=document.createTextNode(" | ");e.appendChild(a);const c=document.createElement("a");c.setAttribute("href","https://github.com/Artis-Dev/restaurant-page/"),c.setAttribute("target","_blank"),c.textContent="Source Code",e.appendChild(c)}(),function(){const a=document.querySelectorAll(".navigation a"),o=a[0],c=a[1],d=a[2];document.addEventListener("click",(s=>{"home"===s.target.id||"logo"===s.target.className?(e.render(),a.forEach((e=>{e.classList.remove("current")})),o.classList.add("current")):"menu"===s.target.id||"home-button"===s.target.className?(t.render(),a.forEach((e=>{e.classList.remove("current")})),c.classList.add("current")):"contacts"===s.target.id&&(n.render(),a.forEach((e=>{e.classList.remove("current")})),d.classList.add("current"))}))}()})()})();