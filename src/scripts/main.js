import { API } from "./modules/API.js";
import { APIkey } from "../../env/key.js";
import { placeWeather } from "./modules/placeWeather.js";
import { placeParksOnDom } from "./modules/placeParksOnDom.js";

let parksURL = "http://localhost:8088/parks",
  weatherURL = "http://localhost:8088/weather";

API(parksURL)
  .then(placeParksOnDom)
  .then(parks => {
    parks.forEach(park => {
      API(weatherURL).then(weather => placeWeather(weather, park));
    });
  });
