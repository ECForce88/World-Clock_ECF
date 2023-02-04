function updateTime() {
   let zurichElement = document.querySelector("#zurich");
   if (zurichElement) {
     let zurichDateElement = zurichElement.querySelector(".date");
     let zurichTimeElement = zurichElement.querySelector(".time");
     let zurichTime = moment().tz("Europe/Zurich");
     zurichDateElement.innerHTML = zurichTime.format("MMMM	Do YYYY");
     zurichTimeElement.innerHTML = zurichTime.format("h:mm:ss [<small>]A[</small>]");
   }
   let istanbulElement = document.querySelector("#istanbul");
   if (istanbulElement) {
     let istanbulDateElement = istanbulElement.querySelector(".date");
     let istanbulTimeElement = istanbulElement.querySelector(".time");
     let istanbulTime = moment().tz("Asia/Istanbul");
     istanbulDateElement.innerHTML = istanbulTime.format("MMMM	Do YYYY");
     istanbulTimeElement.innerHTML = istanbulTime.format("h:mm:ss [<small>]A[</small>]");
   }
   let hongKongElement = document.querySelector("#hong-kong");
   if (hongKongElement) {
     let hongKongDateElement = hongKongElement.querySelector(".date");
     let hongKongTimeElement = hongKongElement.querySelector(".time");
     let hongKongTime = moment().tz("Asia/Istanbul");
     hongKongDateElement.innerHTML = hongKongTime.format("MMMM	Do YYYY");
     hongKongTimeElement.innerHTML = hongKongTime.format("h:mm:ss [<small>]A[</small>]");
   }
   let newYorkElement = document.querySelector("#new-york");
   if (newYorkElement) {
     let newYorkDateElement = newYorkElement.querySelector(".date");
     let newYorkTimeElement = newYorkElement.querySelector(".time");
     let newYorkTime = moment().tz("America/New_York");
     newYorkDateElement.innerHTML = newYorkTime.format("MMMM	Do YYYY");
     newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");
   }
 }
 
 function updateCity(event) {
   let cityTimeZone = event.target.value;
   if (cityTimeZone === "current") {
     cityTimeZone = moment.tz.guess();
   }
   let cityName = cityTimeZone.replace("_", " ").split("/")[1];
   let cityTime = moment().tz(cityTimeZone);
   let citiesElement = document.querySelector("#cities");
   citiesElement.innerHTML = `
   <div class="city">
     <div>
       <h2>${cityName}</h2>
       <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
     </div>
     <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
     "A"
   )}</small></div>
   </div>
   `;
 }
 
 updateTime();
 setInterval(updateTime, 1000);
 
 let citiesSelectElement = document.querySelector("#city");
 citiesSelectElement.addEventListener("change", updateCity); 