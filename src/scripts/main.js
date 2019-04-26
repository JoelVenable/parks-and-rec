import { API } from "./modules/API.js";
import { addHTMLelement } from "./modules/domFactory.js";
import { APIkey } from "../../env/key.js";

let parkList = [];

const parksURL =
  "https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json";

API(parksURL)
  .then(handleParkObject)
  .then(parks => {
    parks.forEach(park => {
      let weatherURL = `https://api.darksky.net/forecast/${APIkey}/${
        park.latitude
      },${park.longitude}`;
      API(weatherURL).then(weatherObject => {
        let article = document.getElementById(park.name);
        addHTMLelement("p", article, "Weather:");
        let ul = addHTMLelement("ul", article);
        let li = [
          addHTMLelement("li", ul),
          addHTMLelement("li", ul),
          addHTMLelement("li", ul)
        ];
        li[0].innerHTML = `Currently: ${weatherObject.currently.summary}`;
        li[1].innerHTML = `Today: ${weatherObject.daily.data[0].summary}`;
        li[2].innerHTML = `Week: ${weatherObject.daily.summary}`;
        addHTMLelement("h4", article, "7 day outlook");
        let dayContainer = addHTMLelement("div", article, "", [
          "flex-container"
        ]);
        weatherObject.daily.data.forEach(day => buildDay(day, dayContainer));
      });
    });
  });

const root = document.getElementById("root");

function selectIcon(imgElement, dayIcon) {
  imgElement.src = "./img/animated/day.svg";
  console.log(dayIcon);
}

function handleParkObject(object) {
  object.parks.forEach(park => {
    parkList.push(park);
    let article = addHTMLelement("article", root, "", ["park"]);
    addHTMLelement("h3", article, park.name);
    addHTMLelement("p", article, park.state);
    if (park.visited) {
      article.classList.add("visited");
    }
    article.id = park.name;
  });
  return object.parks;
}

function buildPark(park) {}

function buildDay(day, dayContainer) {
  let dayDiv = addHTMLelement("div", dayContainer, "", ["dayDiv"]);
  let date = new Date(day.time).toLocaleString("en-US", {
    weekday: "short"
  });
  addHTMLelement("h4", dayDiv, date);
  let hiTemp = addHTMLelement("p", dayDiv, parseInt(day.temperatureMax));
  hiTemp.style.color = "red";
  let imgContainer = addHTMLelement("div", dayDiv);
  let img = addHTMLelement("img", imgContainer);
  selectIcon(img, day.icon);
  let loTemp = addHTMLelement("p", dayDiv, parseInt(day.temperatureMin));
  loTemp.style.color = "blue";
}
