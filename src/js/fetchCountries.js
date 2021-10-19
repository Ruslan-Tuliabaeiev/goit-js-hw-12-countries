

import refs from './refs.js';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error, notice, defaultModules } from '@pnotify/core';
//defaultModules.set(PNotifyMobile, {});


//const countriContainer = document.getElementById('')

// import debounce from 'lodash.debounce';
//import {alert, error, notice, defaultModules } from '@pnotify/core';

// import '@pnotify/core/dist/PNotify.js'
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';


//const baseUrl = `https://restcountries.com/v2/name/{name}`;
//function fetchCountries(searchQuery)
// function fetchCountries(searchQuery)



// import '../css/common.css';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
// import API from './api-service';
// import getRefs from './get-refs';

// const refs = getRefs();
console.log(`123`)

// import debounce from 'lodash.debounce';
// import {alert, error, notice, defaultModules } from '@pnotify/core';

// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';


// import countryCardTpl from '../templates/country-card.hbs';



// function onSearhe(e) {
//     e.preventDefault();
//     const from = e.currentTarget;
//     const searchQuery = form.elements.query.value;
    
//     fetchCountries(searchQuery)
//     .then(renderCountryCard)
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => form.reset());
// }




// function fetchCountries() {
//     const url = `https://restcountries.com/v2/name/{name}`;
    
//      return fetch(url).then(response => response.json());   
    
// }

// function renderCountryCard(country) {
//     const markup = countryCardTpl(country);
//     refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//     alert('non pocimon! sory');

// }


fetch('https://restcountries.com/v2/name/peru')
  .then(response => {
    return response.json();
  })
  .then(peru => {
    console.log(peru);
  })
  .catch(error => {
    console.log(error);
  });



