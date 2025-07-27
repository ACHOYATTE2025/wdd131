document.body.classList.add('js-enabled');

 hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navmenu');
const container = document.querySelector(".container");
const active = document.querySelector("#mena");

hamButton.addEventListener('click', () => {
  hamButton.classList.toggle('open');
  container.classList.toggle('close');
  navigation.classList.toggle('open');  
  
	
});




  
//=========================================================================================

document.addEventListener("DOMContentLoaded", function () {
  
  const today = new Date();
  let year = today.getFullYear();
  const exoTime= document.querySelector("#currentyear");
  exoTime.innerHTML=`<p>&copy;${year}| Yatte Deivy Constant ACHO | CÔTE D IVOIRE</p>`;

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
  const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
   {
    templeName: "Abidjan Ivory Coast Temple",
    location: "Abidjan ,Cocody",
    dedicated: "2025, May, 25",
    area:  3.23 ,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58324.jpg"  },
    {
    templeName: "Montreal Quebec Temple",
    location: "Montreal Quebec",
    dedicated: "2015, November, 22",
    area: 2.4,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-10671-main.jpg"  },
  {
    templeName: "Toronto Ontario Temple",
    location: "Toronto Ontario ",
    dedicated: "1990, August, 25-27",
    area:  13.4 ,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/toronto-ontario-temple/toronto-ontario-temple-57469-main.jpg"  },
  
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
//Home
const home= document.querySelector(".active");
home.addEventListener('click',()=>{

  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
  active.textContent="Home";
  createTempleCard(temples);
});

//=========================================================================================
//Old
const Old = document.querySelector("#Old");
const old = temples.filter(temple => {
  const year = parseInt(temple.dedicated.split(',')[0]);
  return year < 1900;
});
Old.addEventListener('click',()=>{

  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
  active.textContent="Old";
  createTempleCard(old);
});
//=========================================================================================
//New
const New = document.querySelector("#New");
const nex = temples.filter(temple => {
  const year = parseInt(temple.dedicated.split(',')[0]);
  return year > 1900;
});
New.addEventListener('click',()=>{
  
	
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
  active.textContent="New";
  createTempleCard(nex);
});
//=========================================================================================
//Large
const Large = document.querySelector("#Large");
const large = temples.filter(temple=>{
  const area = parseInt(temple.area);
  return area>90000;
})
Large.addEventListener('click',()=>{
 

  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
  active.textContent="Large";
  createTempleCard(large);
});
//=========================================================================================
//Small
const Small = document.querySelector("#Small");
const small = temples.filter(temple=>{
  const area = parseInt(temple.area);
  return area<10000;
})
Small.addEventListener('click',()=>{

  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
  active.textContent="Small";
  createTempleCard(small);
});


//=========================================================================================

document.addEventListener("DOMContentLoaded",createTempleCard(temples));

function createTempleCard(filteredTemples){
  container.innerHTML = "";
 
  filteredTemples.forEach(temple => {
    let cards = document.createElement("section");
    cards.classList.add("temple-card");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("section");
    let img = document.createElement("img");

    name.textContent=temple.templeName;
    location.innerHTML=`<span>Location:</span>${temple.location}`;
    dedication.innerHTML=`<span>dedicated:</span>${temple.dedicated}`;
    area.innerHTML=`<span class="Label">Area:</span>${temple.area}`;
    img.setAttribute("src",temple.imageUrl);
    img.setAttribute("alt",temple.templeName);
    img.setAttribute("width",300);
    img.setAttribute("height",200);
    img.setAttribute("loading","lazy");

    cards.appendChild(name);
    cards.appendChild(location);
    cards.appendChild(dedication);
    cards.appendChild(area);
    cards.appendChild(img);

   container.appendChild(cards);
  });

}















