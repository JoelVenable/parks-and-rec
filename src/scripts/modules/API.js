module.exports.API = function(url, optionsObject) {
  return fetch(url, optionsObject).then(response => response.json());
};
