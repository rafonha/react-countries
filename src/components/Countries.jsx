import Country from "./Country";

export default function Countries({
    children: countries = [],
    onCountryClick = null,
    visitedCountries = []
}) {

  
  return <>
    <p>Quantidade de países: {countries.length}</p>
    <p>Quantidade de países visitados: {visitedCountries.length}</p>
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
