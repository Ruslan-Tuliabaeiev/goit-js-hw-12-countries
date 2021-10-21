 import debounce from 'lodash.debounce';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
 import { error, notice } from '@pnotify/core';


import refs from './refs' ;
import SerchCountries from './fetchCountries';

const serchCountries = new SerchCountries;

import countryCardTpl from '../templates/country-card.hbs';
import serchCountriesTpl from '../templates/country.hbs';

//  defaultModules.set(PNotifyMobile, {});
  
// const { countryConteiner, serchCountries }  = refs;

//  const { countryConteiner, serchCountries }  = refs;
//   serchCountries.addEventListener('input', debounce(onSearhe, 500))
  

//==========

  function onSearhe(e) { 
      e.preventDefault();
const form = e.currentTarget;
const searchQuery = form.elements.query.value;
e.preventDefault();

fetchCountries(searchQuery)
.then(renderCountryCard)
.catch(error => console.log(error))
.finally(() => form.reset());
}


function fetchCountries(countries) {
  const markup = countryCardTpl(countries);
  countryConteiner.innerHTML = markup;   
}


// serchCountries.innerHTML = '';  




