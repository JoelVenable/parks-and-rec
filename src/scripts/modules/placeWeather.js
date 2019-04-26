import { addHTMLelement } from "./addHTMLelement";
import { pickIcon } from "./pickIcon";

module.exports.placeWeather = function(weatherObject, park) {
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
  let dayContainer = addHTMLelement("div", article, "", ["flex-container"]);
  buildSevenDayForecast(weatherObject.daily.data, dayContainer);
};

function buildSevenDayForecast(daysArray, parkDiv) {
  daysArray.forEach((day, index) => {
    let dayDiv = addHTMLelement("div", parkDiv, "", ["dayDiv"]);
    let epoch = parseInt(`${day.time}000`);
    let date = new Date(epoch).toLocaleString("en-US", {
      weekday: "short"
    });
    addHTMLelement("h4", dayDiv, date);
    let hiTemp = addHTMLelement("p", dayDiv, parseInt(day.temperatureMax));
    hiTemp.style.color = "red";
    let imgContainer = addHTMLelement("div", dayDiv);
    let img = addHTMLelement("img", imgContainer);
    pickIcon(img, day.icon);
    let loTemp = addHTMLelement("p", dayDiv, parseInt(day.temperatureMin));
    loTemp.style.color = "blue";
  });
}
