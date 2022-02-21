import Header from '../components/Header'
import Main from '../components/Main'
import GenericInput from '../components/GenericInput'
import { allCountries } from '../data/countries';
import { useState } from 'react';
import Countries from '../components/Countries';

export default function ContriesPage() {
  const [countryFilter, setcountryFilter] = useState('');
  const [visitedCountries, setVisitedcountries] = useState([]);

  function handleCountryFilter(newCountryFilter) {
    setcountryFilter(newCountryFilter)
  }
  
  function toggleVisitedCountry(countryId) {
    let newVisitedCountries = [...visitedCountries]

    if (newVisitedCountries.indexOf(countryId) !== -1) {
      newVisitedCountries = newVisitedCountries.filter(visitedCountryId => visitedCountryId !== countryId)
    } else {
      newVisitedCountries.push(countryId)
    }

    setVisitedcountries(newVisitedCountries);
  }

  const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries = countryFilterLowerCase.length >= 3 
    ? allCountries.filter(({ nameLowerCase }) => {
      return nameLowerCase.includes(countryFilterLowerCase)
    }) : allCountries

  return(
      <>
        <Header
          pageTitle={'Country Page'}
          headerClass={'bg-yellow-300 mx-auto  p-4'}
        />
        <Main>
          <GenericInput
            inputLabel = 'Country name (at least 3 characters): ' 
            name='inputCountryName'
            type='text'
            id='inputCountryName' 
            inputClass='border' 
            onInputChange={handleCountryFilter}
            inputValue={countryFilter}
            autoFocus
            divClass=''
          />
          <Countries 
          onCountryClick={toggleVisitedCountry}
          visitedCountries={visitedCountries}
          >
            {filteredCountries}
          </Countries>
        </Main>
      </>
  );
}
