(()=>{"use strict";const e=(()=>{const e=document.querySelector("#content"),t=[{text:"ALL NATURAL",icon:"far fa-carrot"},{text:"HAND CRAFTED",icon:"far fa-hat-chef"},{text:"VEGETARIAN",icon:"far fa-leaf-heart"}];return{render:function(){e.classList.remove("background"),e.classList.add("home"),e.textContent="";const n=document.createElement("h1");n.classList.add("home-headline"),n.textContent="Authentic Neapoletan pizza",e.appendChild(n);const a=document.createElement("div");a.classList.add("home-sep"),e.appendChild(a);const o=document.createElement("p");o.classList.add("home-subtitle"),o.textContent="HAND MADE WITH LOVE",e.appendChild(o);const d=document.createElement("a");d.classList.add("home-button"),d.textContent="MENU",e.appendChild(d);const c=document.createElement("div");c.classList.add("home-badges"),e.appendChild(c);for(let e=0;e<t.length;e+=1){const n=document.createElement("p");c.appendChild(n);const a=document.createElement("i");a.className=t[e].icon,n.appendChild(a);const o=document.createElement("br");n.appendChild(o);const d=document.createTextNode(t[e].text);n.appendChild(d)}}}})(),t=(()=>{const e=document.querySelector("#content"),t=[{text:"TOP PICK",icon:"far fa-crown top-pick"},{text:"VEGAN",icon:"far fa-leaf vegan"},{text:"ALCO",icon:"far fa-percent alco"}],n=["Pizza","Salads","Drinks","Desserts"],a=[[{name:"Margherita  8.5 €",description:"Tomatoes, mozzarella, basil, olive oil.",badges:["far fa-crown top-pick"]},{name:"Marinara 7 €",description:"Tomatoes, garlic, oregano, olive oil.",badges:["far fa-leaf vegan"]},{name:"Quattro Formaggi 10 €",description:"Tomatoes, mozzarella, stracchino, fontina, gorgonzola, olive oil.",badges:[]},{name:"Bianca 5 €",description:"Olive oil, salt, rosemary sprigs.",badges:["far fa-leaf vegan"]}],[{name:"Panzanella 6 €",description:"Bread, red onions, tomatoes, olive oil, vinegar, spices.",badges:["far fa-leaf vegan"]},{name:"Caprese 5 €",description:"Mozzarella, tomatoes, basil, olive oil, spices.",badges:[]}],[{name:"Chai 3 €",description:"Traditional indian tea, milk or vegan versions.",badges:["far fa-crown top-pick"]},{name:"Wine 5 €",description:"Finest Italian wine.",badges:["far fa-percent alco"]},{name:"Lemonade 2 €",description:"Homemade lemonade.",badges:[]},{name:"Herbal Tea 2 €",description:"Warming tea for rainy days.",badges:[]}],[{name:"Cannoli 3 €",description:"Italian pastry dessert.",badges:[]},{name:"Powerball 2 €",description:"Sweet balls full of energy.",badges:["far fa-leaf vegan"]}]];return{render:function(){e.textContent="",e.classList.remove("home"),e.classList.add("background");const o=document.createElement("h1");o.classList.add("menu-headline"),o.textContent="MENU",e.appendChild(o);const d=document.createElement("div");d.classList.add("menu-legend"),e.appendChild(d);for(let e=0;e<t.length;e+=1){const n=document.createElement("p");d.appendChild(n);const a=document.createElement("i");a.className=t[e].icon,n.appendChild(a);const o=document.createElement("br");n.appendChild(o);const c=document.createTextNode(t[e].text);n.appendChild(c)}for(let t=0;t<n.length;t+=1){const o=document.createElement("h2");if(o.classList.add("menu-category"),o.textContent=n[t],e.appendChild(o),"Pizza"===n[t]){const t=document.createElement("p");t.classList.add("pizza-category-info"),e.appendChild(t);const n=document.createElement("i");n.classList.add("far","fa-pizza"),t.appendChild(n);const a=document.createTextNode(" - 35CM");t.appendChild(a)}const d=document.createElement("div");d.classList.add("menu-grid"),e.appendChild(d);for(let e=0;e<a[t].length;e+=1){const n=document.createElement("div");n.classList.add("menu-item"),d.appendChild(n);const o=document.createElement("h3");if(o.textContent=a[t][e].name,n.appendChild(o),a[t][e].badges!==[])for(let n=0;n<a[t][e].badges.length;n+=1){const d=document.createElement("i");d.className=a[t][e].badges[n],o.appendChild(d)}const c=document.createElement("p");c.textContent=a[t][e].description,n.appendChild(c)}}}}})(),n=(()=>{const e=document.querySelector("#content");return{render:function(){e.textContent="",e.classList.remove("home"),e.classList.add("background");const t=document.createElement("h1");t.classList.add("contacts-headline"),t.textContent="Order now!",e.appendChild(t);const n=document.createElement("div");n.classList.add("contacts-flex"),e.appendChild(n);const a=document.createElement("div");n.appendChild(a);const o=document.createElement("h2");o.textContent="Contacts",a.appendChild(o);const d=document.createElement("div");d.classList.add("contacts-list"),a.appendChild(d);const c=document.createElement("h3");d.appendChild(c);const s=document.createTextNode("Call us: ");c.appendChild(s);const i=document.createElement("a");i.setAttribute("href","tel:+393287549767"),i.textContent="+39 328 754 9767",c.appendChild(i);const r=document.createElement("h3");d.appendChild(r);const l=document.createTextNode("Follow us: ");r.appendChild(l);const m=document.createElement("a");m.setAttribute("href","https://instagram/pizzeria/"),m.setAttribute("target","_blank"),m.textContent="Instagram",r.appendChild(m);const p=document.createTextNode(" / ");r.appendChild(p);const u=document.createElement("a");u.setAttribute("href","https://facebook.com/pizzeria"),u.setAttribute("target","_blank"),u.textContent="Facebook",r.appendChild(u);const h=document.createTextNode(" / ");r.appendChild(h);const C=document.createElement("a");C.setAttribute("href","https://reddit/r/pizza"),C.setAttribute("target","_blank"),C.textContent="Reddit",r.appendChild(C);const g=document.createElement("h3");d.appendChild(g);const f=document.createTextNode("Write feedback: ");g.appendChild(f);const E=document.createElement("a");E.setAttribute("href","mailto:feedback@pizzeria.com"),E.textContent="feedback@pizzeria.com",g.appendChild(E);const b=document.createElement("h3");b.textContent="Working hours:",d.appendChild(b);const x=document.createElement("div");x.classList.add("contacts-working-hours"),d.appendChild(x);const v=document.createElement("div");x.appendChild(v);const L=document.createElement("p");L.textContent="MON-FRI",v.appendChild(L);const A=document.createElement("p");A.textContent="SAT-SUN",v.appendChild(A);const z=document.createElement("div");x.appendChild(z);const N=document.createElement("p");N.textContent="10:00 - 22:00",z.appendChild(N);const k=document.createElement("p");k.textContent="12:00 - 22:00",z.appendChild(k);const T=document.createElement("div");n.appendChild(T);const y=document.createElement("h2");y.textContent="Come to us!",T.appendChild(y);const S=document.createElement("h3");S.textContent="Piazza Sannazaro 42, 77123, Naples, Italy",T.appendChild(S);const w=document.createElement("img");w.classList.add("contacts-map"),w.setAttribute("src","./img/map.png"),w.setAttribute("alt","Map"),T.appendChild(w)}}})();(()=>{const a=document.querySelector("header"),o=document.querySelector("footer"),d=["home","menu","contacts"];!function(){const e=document.createElement("img");e.classList.add("logo"),e.setAttribute("src","./img/logo.png"),e.setAttribute("alt","Pizzeria logo"),a.appendChild(e);const t=document.createElement("nav");t.classList.add("navigation"),a.appendChild(t);for(let e=0;e<d.length;e+=1){const n=document.createElement("a");n.id=d[e],n.classList.add("nav-link"),n.setAttribute("href","#"),n.textContent=d[e].toUpperCase(),t.appendChild(n)}}(),e.render(),function(){const e=document.createElement("p");e.classList.add("credits"),o.appendChild(e);const t=document.createTextNode("Built by ");e.appendChild(t);const n=document.createElement("a");n.setAttribute("href","https://github.com/Artis-Dev/"),n.setAttribute("target","_blank"),n.textContent="ArtisDev",e.appendChild(n);const a=document.createTextNode(" | ");e.appendChild(a);const d=document.createElement("a");d.setAttribute("href","https://github.com/Artis-Dev/restaurant-page/"),d.setAttribute("target","_blank"),d.textContent="Source Code",e.appendChild(d)}(),function(){const a=document.querySelectorAll(".navigation a"),o=a[0],d=a[1],c=a[2];document.addEventListener("click",(s=>{"home"===s.target.id||"logo"===s.target.className?(e.render(),a.forEach((e=>{e.classList.remove("current")})),o.classList.add("current")):"menu"===s.target.id||"home-button"===s.target.className?(t.render(),a.forEach((e=>{e.classList.remove("current")})),d.classList.add("current")):"contacts"===s.target.id&&(n.render(),a.forEach((e=>{e.classList.remove("current")})),c.classList.add("current"))}))}()})()})();