import Country from "./Country";

export default function Countries({
    children: countries = [],
    onCountryClick = null,
    visitedCountries = []
}) {

  
  return <>
    <p>Quantity of countries: {countries.length}</p>
    <p>Quantity of visited countries: {visitedCountries.length}</p>
    {countries.map(country => {
      
      const isVisited = visitedCountries.indexOf(country.id) !== -1

      return <Country 
        key={country.id} 
        onCountryClick={onCountryClick}
        isVisited={isVisited}
      >{country}</Country>
      })
    }

  </>;
}
