module.exports.pickIcon = function(imgElement, dayIcon) {
  /*
Icon string options passed from Dark Sky API:
clear-day
clear-night
rain
snow
sleet
wind
fog
cloudy
partly-cloudy-day
partly-cloudy-night

Need "sensible default" in case new options added in future.*/
  let icon;
  switch (dayIcon) {
    case "clear-day":
      icon = "day";
      break;
    case "clear-night":
      icon = "night";
      break;
    case "rain":
      icon = "rainy-4";
      break;
    case "snow":
      icon = "snowy-5";
      break;
    case "sleet":
      icon = "snowy-5";
      break;
    case "wind":
      break;
    case "fog":
      break;
    case "cloudy":
      icon = "cloudy";
      break;
    case "partly-cloudy-day":
      icon = "cloudy-day-2";
      break;
    case "partly-cloudy-night":
      icon = "cloudy-night-2";
      break;
  }
  imgElement.src = `./img/animated/${icon}.svg`;
};
