import Header from '../components/Header'
import Main from '../components/Main'
import GenericInput from '../components/GenericInput'
import { allCountries } from '../data/countries';
import { useState } from 'react';

export default function ContriesPage() {
  const [countryFilter, setcountryFilter] = useState("Brazil");

  function handleCountryFilter(newCountryFilter) {
    
    console.log("newCountryFilter", newCountryFilter)
    setcountryFilter(newCountryFilter)
  }

  return(
      <>
        <Header
          pageTitle={'Country Page'}
          headerClass={'bg-yellow-300 mx-auto  p-4'}
        />
        <Main>
          <GenericInput
            inputLabel = 'Nome do país (pelo menos 3 caracteres): ' 
            name='inputCountryName'
            type='text'
            id='inputCountryName' 
            inputClass='border' 
            onInputChange={handleCountryFilter}
            inputValue={countryFilter}
            autoFocus
            divClass=''
          />
        </Main>
      </>
  );
}
