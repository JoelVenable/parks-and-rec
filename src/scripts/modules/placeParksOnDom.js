import { addHTMLelement } from "./addHTMLelement";

module.exports.placeParksOnDom = function(parks) {
  parks.forEach(park => {
    const root = document.getElementById("root");
    let article = addHTMLelement("article", root, "", ["park"]);
    addHTMLelement("h3", article, park.name);
    addHTMLelement("p", article, park.state);
    if (park.visited) {
      article.classList.add("visited");
    }
    article.id = park.name;
  });
  return parks;
};
