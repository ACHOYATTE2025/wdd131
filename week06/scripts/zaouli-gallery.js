document.body.classList.add('js-enabled');
document.body.classList.add('js-gallery');

const navigation = document.querySelector('.navmenu');
const container = document.querySelector(".container");
const navLinks = document.querySelectorAll(".navmenu a");
const hamButton = document.querySelector('#menu');
const closis = document.querySelector('.details-menu');


function clo(){
  closis.classList.add('closed');
}

 //hidden a link after a click

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    hamButton.classList.remove("open");
   
  });
});


hamButton.addEventListener('click', () => {
  hamButton.classList.toggle('open');
  container.classList.toggle('close');
  navigation.classList.toggle('open');  
  
	
});
//====================================================================================
document.addEventListener('DOMContentLoaded', () => {
  const submenuToggle = document.getElementById('submenu-toggle');
  const detailsMenu = document.getElementById('details-menu');

  submenuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    detailsMenu.classList.toggle('show');
  });

  // Optionnel: fermer le menu si clic en dehors
  document.addEventListener('click', (e) => {
    if (!detailsMenu.contains(e.target) && !submenuToggle.contains(e.target)) {
      detailsMenu.classList.remove('show');
    }
  });
});


//========================================================================================

document.addEventListener('DOMContentLoaded', () => {
  const galleryLink = document.getElementById('galleryLink');
  const submenuToggle = document.getElementById('submenu-toggle');
  const submenu = document.querySelector('.submenu');

  if (!submenu) {
    console.warn('Element .submenu introuvable');
    return;
  }

  // Desktop : clic sur "Gallery" ouvre/ferme le sous-menu
  if (galleryLink) {
    galleryLink.addEventListener('click', function (e) {
      if (window.innerWidth > 767) {
        e.preventDefault();
        submenu.classList.toggle('show');
        console.log('Toggle submenu via galleryLink (desktop)');
      }
    });
  }

  // Mobile : clic sur "details▾" ouvre/ferme le sous-menu
  if (submenuToggle) {
    submenuToggle.addEventListener('click', e => {
      if (window.innerWidth <= 766) {
        e.stopPropagation();
        submenu.classList.toggle('show');
        console.log('Toggle submenu via submenuToggle (mobile)');
      }
    });
  }

  // Clic en dehors du sous-menu ferme le sous-menu
  document.addEventListener('click', function (e) {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      if (!submenu.contains(e.target) && (!submenuToggle || !submenuToggle.contains(e.target))) {
        submenu.classList.remove('show');
        console.log('Close submenu (mobile click outside)');
      }
    } else {
      if (galleryLink && !galleryLink.contains(e.target) && !submenu.contains(e.target)) {
        submenu.classList.remove('show');
        console.log('Close submenu (desktop click outside)');
      }
    }
  });

  // Fermer sous-menu au redimensionnement
  window.addEventListener('resize', () => {
    submenu.classList.remove('show');
    console.log('Close submenu on resize');
  });
});




  
//=========================================================================================

document.addEventListener("DOMContentLoaded", function () {
  
  const today = new Date();
  let year = today.getFullYear();
  const exoTime= document.querySelector("#currentyear");
  exoTime.innerHTML=`<p>&copy;${year} | Yatte Deivy Constant ACHO | CÔTE D IVOIRE</p>`;

  const yearN = today.getFullYear();
  const month = `0`+(today.getMonth() + 1);
  const day = today.getDate().toString();

  const hours =+ today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  // Format personnalisé (ex: 01/07/2025 22:45:00)
  const realDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  const modified= document.querySelector("#lastModified");
  modified.innerHTML=`Last modification : ${realDate}`;

});


//=========================================================================================
  const cities = [
  {
    Country: "CÔTE D'IVOIRE",
    Region: "Marahoué",
    City: "Bouaflé",
    imageUrl:
    "https://media-files.abidjan.net/photo/note-majeure(1).jpg"
  },
  {
    Country: "CÔTE D'IVOIRE",
    Region: "Marahoué",
    City: "Bouaflé",
    imageUrl:
    "https://ich.unesco.org/img/photo/thumb/10842-BIG.jpg"
  },
  {
    Country: "CÔTE D'IVOIRE",
    Region: "Marahoué",
    City: "Bouaflé",
   
    imageUrl:
    "https://ich.unesco.org/img/photo/thumb/10846-BIG.jpg"
  },
  {
    Country: "CÔTE D'IVOIRE",
    Region: "Marahoué",
    City: "Sinfra",
    imageUrl:
    "https://ich.unesco.org/img/photo/thumb/10851-BIG.jpg"
  },
  {
    Country: "CÔTE D'IVOIRE",
    Region: "Marahoué",
    City: "Sinfra",
   
    imageUrl:
    "https://ich.unesco.org/img/photo/thumb/10848-BIG.jpg"
  },
  {
    Country: "CÔTE D'IVOIRE",
    Region: "Marahoué",
    City: "Sinfra",
    imageUrl:
    "https://ich.unesco.org/img/photo/thumb/10850-BIG.jpg"
  },
  {
    Country: "CÔTE D'IVOIRE",
    Region: "Marahoué",
    City: "Zuenoula",
    imageUrl:
    "https://ich.unesco.org/img/photo/thumb/10847-BIG.jpg"
  },
   {
    Country: "CÔTE D'IVOIRE",
    Region: "Marahoué",
    City: "Zuenoula",
    imageUrl:
    "https://ich.unesco.org/img/photo/thumb/10845-BIG.jpg"  },
    {
    Country: "CÔTE D'IVOIRE",
    Region: "Marahoué",
    City: "Zuenoula",
    imageUrl:
    "https://ich.unesco.org/img/photo/thumb/10844-BIG.jpg"  },
  {
    Country: "CÔTE D'IVOIRE",
    Region: "Marahoué",
    City: "Zuenoula",
    imageUrl:
    "https://images.rove.me/w_1920,q_85/mcqeri1jgn4tilxf0pak/ivory-coast-zaouli-dance.jpg"  },
  
];

  

/*document.addEventListener("DOMContentLoaded", function () {
  temples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h4>${temple.templeName}</h4>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" class="temple-image">
      
    `;

    nav.appendChild(card);
  });
});*/

//=========================================================================================
document.addEventListener("DOMContentLoaded",createTempleCard(cities));
//Home
const subMenu = document.querySelector('.submenu');
const detailsMenu = document.querySelector('#details-menu');

const home= document.querySelector('#Home');
home.addEventListener('click',()=>{
  mena.textContent='Home';
  createTempleCard(cities);
  subMenu.classList.remove('show');
});

const homex= document.querySelector('#Homex');
homex.addEventListener('click',()=>{
  mena.textContent='Home';
  createTempleCard(cities);
  detailsMenu.classList.remove('show');
});

//=========================================================================================
//Bouaflé

const Bfle= document.querySelector('#Bouafle');
const bfle= cities.filter(temple => {
  const city = temple.City;
  return city =="Bouaflé";
});
Bfle.addEventListener('click',()=>{
  
  subMenu.classList.remove('show');
  mena.textContent='Bouaflé';
  createTempleCard(bfle);
 subMenu.classList.remove('show');
    
 });

const Bflex= document.querySelector('#Bouaflex');
const bflex= cities.filter(temple => {
  const city = temple.City;
  return city=="Bouaflé" ;
});
Bflex.addEventListener('click',()=>{
  mena.textContent='Bouaflé';
  createTempleCard(bflex);
  detailsMenu.classList.remove('show');

});
//=========================================================================================
//Sinfra

const Sfra= document.querySelector('#Sinfra');
const sfra= cities.filter(temple => {
  const city = temple.City;
  return city =="Sinfra";
});
Sfra.addEventListener('click',()=>{
  
  subMenu.classList.remove('show');
  mena.textContent='Sinfra';
  createTempleCard(sfra);
 
    
 });

const Sfrx= document.querySelector('#Sinfrax');
const sfrx= cities.filter(temple => {
  const city =temple.City;
  return city == "Sinfra";
});
Sfrx.addEventListener('click',()=>{
  detailsMenu.classList.remove('show')
  mena.textContent='Sinfra';
  createTempleCard(sfrx);
;

});
//==========================================================================================
//Zuenoula

const Znle= document.querySelector('#Zuenoula');
const znle= cities.filter(temple => {
const city = temple.City;
  return city == "Zuenoula";
});
Znle.addEventListener('click',()=>{
  
  subMenu.classList.remove('show');
  mena.textContent='Zuenoula';
  createTempleCard(znle);
 
    
 });

const Znlex= document.querySelector('#Zuenoulax');
const znlex= cities.filter(temple => {
  const city = temple.City;
  return city =="Zuenoula";
});
Znlex.addEventListener('click',()=>{
  detailsMenu.classList.remove('show')
  mena.textContent='Zuenoula';
  createTempleCard(znlex);})
;

//=========================================================================================



function createTempleCard(filteredTemples){
  container.innerHTML = "";
 
  filteredTemples.forEach(temple => {
    let cards = document.createElement("section");
    cards.classList.add("temple-card");
    let country = document.createElement("h3");
    let region = document.createElement("p");
    let city = document.createElement("p");
    let img = document.createElement("img");

    country.textContent=temple.Country;
    region.innerHTML=`<span>Region:</span>${temple.Region}`;
    city.innerHTML=`<span>City:</span>${temple.City}`;
    img.setAttribute("src",temple.imageUrl);
    img.setAttribute("alt",temple.City);
    img.setAttribute("width",300);
    img.setAttribute("height",200);
    img.setAttribute("loading","lazy");

    cards.appendChild(country);
    cards.appendChild(region);
    cards.appendChild(city);
    cards.appendChild(img);

   container.appendChild(cards);
  });

}