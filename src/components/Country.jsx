export default function Country({ 
    children: country = null, 
    onCountryClick = null,
    isVisited = false
}) {

    if (!country) {
        return <p>Impossible to render countries</p>
    }

    function handleCountryClick() {
        if (onCountryClick) {
            onCountryClick(id)
        }
    }

    const { id, name, capital, region, population } = country

    const isVisitedClass = isVisited ? 'bg-green-100' : ''

    return (
      <div className={`border p-4 my-1 flex flex-row items-center space-x-2 cursor-pointer ${isVisitedClass}`} onClick={handleCountryClick}>
        {/* <img src={flag} alt={name} /> */}
        <ul>
            <li><strong>Name:</strong> {name}</li>
            <li><strong>Capital:</strong> {capital}</li>
            <li><strong>Region:</strong> {region}</li>
            <li><strong>Population:</strong> {population}</li>
        </ul>
      </div>
    )
}
