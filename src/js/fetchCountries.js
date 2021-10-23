

const BACE_URL = 'https://restcountries.com/v2/name';
export default class SerchCountries {
  fetchCountries() {
    const url = `${BACE_URL}/${this.searchQuery}`;
    return fetch(url).then(response => response.json())
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) { 
    this.searchQuery = newQuery;
  }
 
}
