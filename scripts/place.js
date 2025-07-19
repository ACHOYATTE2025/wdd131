
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



document.addEventListener("DOMContentLoaded", function () {

  const temp =10;
  const winds = 4.8;
  let wingchill= 0;
  let condit=" Sunny time";
  const tempo = document.querySelector("#temp");
  const windo = document.querySelector("#winds");
  const wingo = document.querySelector("#windchill");
  const cond = document.querySelector("#cond");



  tempo.textContent=`${temp}°C`;
  cond.textContent=`${condit}`;
  windo.textContent=`${winds}`;
  wingchill = calculateWindChill(temp,winds);
  wingo.innerHTML=`<td>${wingchill}</td>`;
 

});


function calculateWindChill(tempC, windSpeedKmh) {
  if (tempC <= 10 && windSpeedKmh >= 4.8) {
    const windChill = 13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(windSpeedKmh, 0.16) +
      0.3965 * tempC * Math.pow(windSpeedKmh, 0.16);

    return windChill.toFixed(1);
  } else {
    return 0;
  }
}