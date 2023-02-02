let zurichElement = document.querySelector("#zurich");
let zurichDate = zurichElement.querySelector(".date");
let zurichTime = zurichElement.querySelector(".time");
let currentZurichTime = moment().tz("Europe/Zurich");
zurichDate.innerHTML = moment().format("MMMM Do YYYY");
zurichTime.innerHTML = currentZurichTime.format("h:mm:ss [<small>]A[</small>]");

let newYorkElement = document.querySelector("#new-york");
let newYorkDate = newYorkElement.querySelector(".date");
let newYorkTime = newYorkElement.querySelector(".time");
let currentNewYorkTime = moment().tz("America/New_York");
newYorkDate.innerHTML = moment().format("MMMM Do YYYY");
newYorkTime.innerHTML = currentNewYorkTime.format("h:mm:ss [<small>]A[</small>]");

let istanbulElement = document.querySelector("#istanbul");
let istanbulDate = istanbulElement.querySelector(".date");
let istanbulTime = istanbulElement.querySelector(".time");
let currentIstanbulTime = moment().tz("Asia/Istanbul");
istanbulDate.innerHTML = moment().format("MMMM Do YYYY");
istanbulTime.innerHTML = currentIstanbulTime.format("h:mm:ss [<small>]A[</small>]");

let hongKongElement = document.querySelector("#hong-kong");
let hongKongDate = hongKongElement.querySelector(".date");
let hongKongTime = hongKongElement.querySelector(".time");
let currentHongKongTime = moment().tz("Asia/Hong_Kong");
hongKongDate.innerHTML = moment().format("MMMM Do YYYY");
hongKongTime.innerHTML = currentHongKongTime.format("h:mm:ss [<small>]A[</small>]");