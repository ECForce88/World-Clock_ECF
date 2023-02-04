function updateTime() {
   let zurichElement = document.querySelector("#zurich");
   if (zurichElement) {
      let zurichDate = zurichElement.querySelector(".date");
      let zurichTime = zurichElement.querySelector(".time");
      zurichTime = moment().tz("Europe/Zurich");
      zurichDate.innerHTML = zurichTime.format("MMMM Do YYYY");
      zurichTime.innerHTML = zurichTime.format("h:mm:ss [<small>]A[</small>]");
   }
   let newYorkElement = document.querySelector("#new-york");
   if (newYorkElement) {
      let newYorkDate = newYorkElement.querySelector(".date");
      let newYorkTime = newYorkElement.querySelector(".time");
      newYorkTime = moment().tz("America/New_York");
      newYorkDate.innerHTML = newYorkTime.format("MMMM Do YYYY");
      newYorkTime.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");
   }
   let istanbulElement = document.querySelector("#istanbul");
   if (istanbulElement) {
      let istanbulDate = istanbulElement.querySelector(".date");
      let istanbulTime = istanbulElement.querySelector(".time");
      istanbulTime = moment().tz("Asia/Istanbul");
      istanbulDate.innerHTML = istanbulTime.format("MMMM Do YYYY");
      istanbulTime.innerHTML = istanbulTime.format("h:mm:ss [<small>]A[</small>]");
   }
   let hongKongElement = document.querySelector("#hong-kong");
   if (hongKongElement) {
      let hongKongDate = hongKongElement.querySelector(".date");
      let hongKongTime = hongKongElement.querySelector(".time");
      hongKongTime = moment().tz("Asia/Hong_Kong");
      hongKongDate.innerHTML = hongKongTime.format("MMMM Do YYYY");
      hongKongTime.innerHTML = hongKongTime.format("h:mm:ss [<small>]A[</small>]");
   }
}

function updateCity(event) {
   let cityTimezone = event.target.value;
   if (cityTimezone === "current") {
     cityTimezone = moment.tz.guess();
   }      
   let cityName = cityTimezone.replace("_", " ").split("/")[1];
   let cityTime = moment().tz(cityTimezone);
   let citiesElement = document.querySelector("#cities");
   citiesElement.innerHTML = `
   <div class="city">
   <div>  
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>     
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
      </div>
  ` ;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity); 