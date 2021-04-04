"use strict";

/*
 *  Common
 */

const API_KEY = "882a7f21e6cac480def281e05ec861b9";
const RECENT_CITIES_AMOUNT = 5;

//  decided to store here and not request on third-party resources
const ISO_COUNTRIES = {
  AF: "Afghanistan",
  AX: "Aland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua And Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia And Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CD: "Congo, Democratic Republic",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Cote D'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands (Malvinas)",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island & Mcdonald Islands",
  VA: "Holy See (Vatican City State)",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran, Islamic Republic Of",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle Of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KR: "Korea",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libyan Arab Jamahiriya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MK: "Macedonia",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia, Federated States Of",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  AN: "Netherlands Antilles",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestinian Territory, Occupied",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "Reunion",
  RO: "Romania",
  RU: "Russian Federation",
  RW: "Rwanda",
  BL: "Saint Barthelemy",
  SH: "Saint Helena",
  KN: "Saint Kitts And Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin",
  PM: "Saint Pierre And Miquelon",
  VC: "Saint Vincent And Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome And Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia And Sandwich Isl.",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard And Jan Mayen",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad And Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks And Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UM: "United States Outlying Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Virgin Islands, British",
  VI: "Virgin Islands, U.S.",
  WF: "Wallis And Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

let recentCities = new Map();



function getCountryName(countryCode) {
  if (ISO_COUNTRIES.hasOwnProperty(countryCode)) {
    return ISO_COUNTRIES[countryCode];
  } else {
    return countryCode;
  }
}

function getWeatherUrl(city) {
  //  different url for request by id and city name
  const subString = `${Number.isInteger(+city) ? "id" : "q"}=${city}`;
  return `http://api.openweathermap.org/data/2.5/weather?${subString}&units=metric&appid=${API_KEY}`;
}

//  returns simplified object for easier manipulations
function getCityCardObject(weatherApiObject) {
  return {
    id: weatherApiObject.id,
    name: weatherApiObject.name,
    country: getCountryName(weatherApiObject.sys.country),
    date: moment().format("DD MMMM YYYY"),
    weather: weatherApiObject.weather[0].main,
    weatherDetailed:
      weatherApiObject.weather[0].description.charAt(0).toUpperCase() +
      weatherApiObject.weather[0].description.slice(1),
    icon: weatherApiObject.weather[0].icon.slice(0, 2),
    temp: getRoundedTemperature(weatherApiObject.main.temp) + "°C",
    tempMin: getRoundedTemperature(weatherApiObject.main.temp_min) + "°C",
    tempMax: getRoundedTemperature(weatherApiObject.main.temp_max) + "°C",
  };
}

function getRoundedTemperature(temperature) {
  const temp = Math.round(temperature);
  if (!temp) return temp;

  return temp > 0 ? `+${temp}` : `-${temp}`;
}

/*
 *  main function that executes city weather rendering
 *  @param city name or id
 */

function renderCity(city) {
  // Using XMLHttpRequest for experience purposes, better to use fetch or axios.
  const xhr = new XMLHttpRequest();

  xhr.open("GET", getWeatherUrl(city));
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status == 200) {
      render(getCityCardObject(xhr.response));
    }
  };
}

function updateRecentCities(cityCardObject) {
  const newRecentCities = new Map();
  let currentMapValues = [...recentCities.values()];

  if (recentCities.has(cityCardObject.id)) {
    currentMapValues = currentMapValues.filter(el => el.id !== cityCardObject.id);
  } 
  newRecentCities.set(cityCardObject.id, cityCardObject);

  for (let i = 0; i < (currentMapValues.length < RECENT_CITIES_AMOUNT ? currentMapValues.length : RECENT_CITIES_AMOUNT - 1); i++) {
    newRecentCities.set(currentMapValues[i].id, currentMapValues[i]);
  }

  recentCities = newRecentCities;
}

function writeRecentCitiesToLocalStorage() {
  localStorage.clear();
  const recentCitiesArr = [...recentCities.values()];
  for (let i = 0; i < recentCitiesArr.length; i++) {
    localStorage.setItem(i, JSON.stringify({id:recentCitiesArr[i].id, name:recentCitiesArr[i].name}));
  }
}

function renderRecentCities() {
  const recentCitiesElement = document.querySelector('.recent-cities');
  recentCitiesElement.innerHTML = '';

  recentCities.forEach(element => {
    const divElement = document.createElement("div");
    divElement.id = `recent${element.id}`;
    divElement.textContent = element.name;
    
    recentCitiesElement.appendChild(divElement);
  })
}

function render(cityCardObject) {
  const nameElement = document.querySelector(
    ".weather-details__location-name-city"
  );
  const countryElement = document.querySelector(
    ".weather-details__location-name-country"
  );
  const dateElement = document.querySelector(".weather-details__date");
  const tempElement = document.querySelector(
    ".weather-details__temperature-now"
  );
  const tempMinElement = document.querySelector(
    ".weather-details__temperature-min-value"
  );
  const tempMaxElement = document.querySelector(
    ".weather-details__temperature-max-value"
  );
  const weatherElement = document.querySelector(".weather-details__name");
  const weatherDetailedElement = document.querySelector(
    ".weather-details__name-detailed"
  );
  const weatherIconElement = document.querySelector(".weather-details__image");

  nameElement.innerHTML = cityCardObject.name;
  countryElement.innerHTML = `, ${cityCardObject.country}`;
  dateElement.innerHTML = cityCardObject.date;
  tempElement.innerHTML = cityCardObject.temp;
  tempMinElement.innerHTML = cityCardObject.tempMin;
  tempMaxElement.innerHTML = cityCardObject.tempMax;
  weatherElement.innerHTML = cityCardObject.weather;
  weatherDetailedElement.innerHTML = cityCardObject.weatherDetailed;
  weatherIconElement.alt = cityCardObject.weatherDetailed;
  weatherIconElement.src = `http://openweathermap.org/img/wn/${cityCardObject.icon}${iconDayTimeModifier}@2x.png`;

  updateRecentCities(cityCardObject);
  renderRecentCities();
  writeRecentCitiesToLocalStorage();
}

/*
* On load
*/

//  if it is night theme, value changed to 'search-bar__item-night';
let classNameNight = '';

//  if it is night theme, value changed to 'n';
let iconDayTimeModifier = 'd';
const searchButtonElement = document.querySelector(".search-bar__button");

setTheme();
fillRecentCitiesFromStorage();
renderLastCityFromStorage();

function fillRecentCitiesFromStorage() {
  // from key 4 to key 1, key 0 is rendering later
  for (let i = RECENT_CITIES_AMOUNT; i > 0; i--) {
    const city = JSON.parse(localStorage.getItem(i));
    if (city) updateRecentCities(city);
  }
};


function setTheme() {
  const nightStart = moment().hour(21).minute(0).second(0).millisecond(0);
  const nightEnd = moment().hour(6).minute(0).second(0).millisecond(0);
  const heroSectionElement = document.querySelector('.hero-section');
  
  if (moment().diff(nightStart) > 0 || moment().diff(nightEnd) < 0) {
    // night theme between 21:00 and 6:00
    heroSectionElement.style.backgroundImage = "url(./images/hero-bg-night.png)";
    searchButtonElement.style.backgroundColor = "#2A344B";
    classNameNight = 'search-bar__item-night';
    iconDayTimeModifier = 'n';
  } else {
    // day theme
    heroSectionElement.style.backgroundImage = "url(./images/hero-bg.svg)";
    searchButtonElement.style.backgroundColor = "#90CAF9";
  }
}


//  renders last city from localStorage
//  or Odessa, Ukraine as default location if localStorage is empty
function renderLastCityFromStorage() {
  const city = JSON.parse(localStorage.getItem(0));

  if (city) {
    updateRecentCities(city);
    renderCity(city.id);
  } else {
    renderCity(698740);
  }
}

/*
 *  Hero section
 */

const searchInputElement = document.querySelector(".search-bar__input");
const searchResultsElement = document.querySelector(".search-bar__results");
const searchFormElement = document.querySelector(".search-bar");
const recentCitiesElement = document.querySelector(".recent-cities");

searchFormElement.addEventListener("submit", (e) => handleSearch(e));

recentCitiesElement.addEventListener("click", (e) => handleRecent(e));

function handleSearch(event) {
  event.preventDefault();
  getCities(searchInputElement.value, renderSearchResults);
}

function handleRecent(event) {
  renderCity(parseInt(event.target.id.slice(6)));
}

//  hides search results
window.onclick = (event) => {
  if (
    !event.target.matches(".search-bar__results") &&
    searchResultsElement.classList.contains("search-bar__results_visible")
  ) {
    searchResultsElement.classList.remove("search-bar__results_visible");
  }
};

/*
 *  Gets list of cities returned by api.weathermap.org
 *  @callback function executes with search results array
 */

function getCities(cityName, callback) {
  const findUrl = `http://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${API_KEY}`;

  // Using XMLHttpRequest for experience purposes, better to use fetch or axios.
  const xhr = new XMLHttpRequest();

  xhr.open("GET", findUrl);
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status == 200) {
      callback(xhr.response.list);
    } else {
      callback([]);
    }
  };
}

function renderSearchResults(citiesArr) {
  searchResultsElement.textContent = "";

  if (citiesArr.length) {
    citiesArr.forEach((element) => {
      const divElement = document.createElement("div");
      divElement.id = element.id;
      divElement.className = `search-bar__item ${classNameNight}`;
      divElement.textContent = `${element.name}, ${getCountryName(
        element.sys.country
      )}`;

      searchResultsElement.appendChild(divElement);
    });
  } else {
    const divElement = document.createElement("div");
    divElement.className = "search-bar__item_not-found";
    divElement.textContent =
      "City not found, please try to change your search query";

    searchResultsElement.appendChild(divElement);
  }

  searchResultsElement.classList.add("search-bar__results_visible");

  searchResultsElement.addEventListener("click", handleClick);

  //  handler to execute selected city render
  function handleClick(e) {
    if (e.target.id) {
      renderCity(e.target.id);
      searchInputElement.value = "";
    }
    searchResultsElement.removeEventListener("click", handleClick);
  }
}

/*
 * Popular cities
 */

document.querySelectorAll(".popular-city-item").forEach((city) => {
  city.addEventListener("click", (event) => {
    const cityName = event.target.outerText;

    // think it not working on safari, no possibilities to check
    window.scrollTo({
      top: 135,
      behavior: "smooth",
    });

    renderCity(cityName);
  });
});

/*
 * FAQ
 */

const questionHeaderElements = document.querySelectorAll(".question__header");

function toggleFaqBodyState(id) {
  const questionElement = document.getElementById(id);
  const questionIconElement = questionElement.querySelector(".question__icon");
  const questionBodyElement = questionElement.querySelector(".question__body");

  questionIconElement.classList.toggle("question__icon_opened");
  questionIconElement.classList.toggle("question__icon_closed");
  questionBodyElement.classList.toggle("question__body_displayed");
}

questionHeaderElements.forEach((element) => {
  element.addEventListener("click", () =>
    toggleFaqBodyState(element.parentNode.id)
  );
});

/*
 * Footer
 */

document.querySelector(
  ".footer__current-year"
).innerHTML = `&nbsp;- ${moment().format("YYYY")}`;
