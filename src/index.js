import './css/styles.css';
// Bibl
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
// HBS
import countryListHbs from './sass/templates/country-list.hbs'
import countryInfoHbs from './sass/templates/country-info.hbs';
// JS
import { fetchCountries } from './sass/js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputEL = document.querySelector('#search-box');
const countryListEL = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

inputEL.addEventListener('input', onInputCountry);

function onInputCountry(event) {
  let inputValue = event.target.value;
  inputValue = inputValue.trim();
  console.log(inputValue);

  fetchCountries(inputValue)
    .then(countries => {
        createCountryInfo(countries[0])
      console.log(data);
    })
    .catch(err => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

function createCountryInfo(countries) {
  countries.languages = Object.values(countries.languages).join(',');
  const country = countryInfoHbs(countries);
  countryInfoEl.innerHTML = country;
}

function createCountryList(countries) {
  const country = countryListHbs(countries);
  countryListEL.innerHTML = country;
}
