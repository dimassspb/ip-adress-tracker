import icon from "../images/icon-location.svg";
import { validateIp, addTileLayer, getAdress, addOffset } from "./helpers";
import "babel-polyfill";

const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector(".search-bar__btn");

const ipInfo = document.getElementById("ip");
const locationInfo = document.getElementById("location");
const timezoneInfo = document.getElementById("timezone");
const ispInfo = document.getElementById("isp");

document.addEventListener("DOMContentLoaded", () => {
  getAdress("94.19.43.194").then(setInfo);
})

const getData = () => {
  // проверка данных
  if (validateIp(ipInput.value)) {
    // получение данных
    getAdress(ipInput.value).then(setInfo);
  }
};

const handleKey = (e) => {
  if (e.key === "Enter") {
    getData();
  }
};

btn.addEventListener("click", getData);
ipInput.addEventListener("keydown", handleKey);

const setInfo = (data) => {
  // console.log(data);
  const { country, region, timezone, lat, lng } = data.location;
  ipInfo.innerText = data.ip;
  locationInfo.innerText = country + " " + region;
  timezoneInfo.innerText = timezone;
  ispInfo.innerText = data.isp;

  map.setView([lat, lng]);
  L.marker([lat, lng], { markerIcon }).addTo(map);
  if (matchMedia("(max-width: 1023px)").matches) {
    addOffset(map);
  } else {
  
  }
  
};

// работа с картой

const markerIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 40],
  iconAnchor: [22, 94],
});

const mapArea = document.querySelector(".map");
const map = L.map(mapArea, {
  // center: [51.505, -0.09],
  zoom: 13,
  zoomControl: false,
});

addTileLayer(map);

L.marker([51.505, -0.09], { markerIcon }).addTo(map);
