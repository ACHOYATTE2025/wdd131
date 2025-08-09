document.body.classList.add('js-enabled');
const closis = document.querySelector('.navmenu');


const navigation = document.querySelector('.navmenu');
const container = document.querySelector(".container");
const active = document.querySelector("#mena");
const navLinks = document.querySelectorAll(".navmenu a");
const hamButton = document.querySelector('#menu');



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

//========================================================================================
const products = [
  {
    value: "Infos",
    name: "Information",
  },
  {
    value: "Complt",
    name: "Complaint",
  },
  {
    value: "suggest",
    name: "Suggestion"
    
  }
  ];

  document.addEventListener("DOMContentLoaded",creationSection);

function creationSection(){
  products.forEach(product => {
  const productSelect = document.querySelector('#product-select');
  let sectioner = document.createElement("option");
  sectioner.setAttribute("id",product.id);
  sectioner.textContent=product.name;

  productSelect.appendChild(sectioner);
});
}

//=====================================================================================================

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.innerHTML = `<span>Views Count😎: 	${numVisits}</span>`;
}
else {
	visitsDisplay.innerHTML = `<span>Your first visit. 🥳 Welcome!</span>`;
}
numVisits++;
numVisits=0;
localStorage.setItem("numVisits-ls", numVisits);
