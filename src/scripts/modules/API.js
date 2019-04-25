export class API {
  constructor(url) {
    this.url = url,
    this.fetchJson = function() {
      return fetch(this.url)
        .then(response => response.json());
    };
  }
}
