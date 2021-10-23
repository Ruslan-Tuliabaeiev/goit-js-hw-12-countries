 import debounce from 'lodash.debounce';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
 import { error, notice } from '@pnotify/core';

import countryCardTpl from '../templates/country-card.hbs';
import SerchCountriesTpl from '../templates/country.hbs';

import refs from './refs' ;
import SerchCountries from './fetchCountries';
import { delay } from 'lodash';
const serchCountries = new SerchCountries();

const {inputSerch, countryConteiner} = refs ;



 
inputSerch.addEventListener('input', debounce(onSearhe, 500));
 // serchCountriesTpl.addEventListener('submit', onSearhe);

// console.log(refs)
//==========

  function onSearhe(e) { 

   countryConteiner.innerHTML = '';  
   serchCountries.query = e.target.value;
   if (serchCountries.query.length < 1 || serchCountries === ' ') {
     return notice({
       text: 'Enter you query',
       delay:500,
     });
   }
   serchCountries
   .fetchCountries()
   .then(showData)
   .catch(error => onFetchError())};
   
function showData(array) {
  if (array.length > 10) {
    notice({
      title: 'notifaktion',
      text: 'too many matches found . Please  enter a more specifikc Query!!',
      delay: 1000,

    });
  }
  else if (array.length >= 3 && array.length <= 10){
    countryConteiner.innerHTML = SerchCountriesTpl(array);
  }
  else{
    countryConteiner.innerHTML = countryCardTpl(...array);
  }
}


function onFetchError() {
error({
  text: `too many matches found . Please  enter a more specifikc Query!` ,
  title: `error `,
  delay: 1000,
})
};

// serchCountries.innerHTML = '';  



// const form = e.currentTarget;
// const searchQuery = form.elements.query.value;
// e.preventDefault();
// console.log(e.target.value)

// API.fetchCountries(searchQuery)

// .then(renderCountryCard)
// .catch(error => console.log(error))
// .finally(() => form.reset());



// function fetchCountries(countries) {
  
//   const markup = countryCardTpl(countries);
//   countryConteiner.innerHTML = markup;   
//   console.log(markup)
// }




////// too many matches found . Please  enter a more specifikc Query!