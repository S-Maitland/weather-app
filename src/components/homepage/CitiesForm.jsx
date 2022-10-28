import cities from '../../cities.json'

const cityData = cities.cities.sort();

export const CitiesForm = ({setCity}) => {

  const citiesList = cityData.map((city,index) => {
    return (
      <option key={index} value={city}>{city}</option>
    )
  })

  return (
    <>
      <form>
        <select defaultValue='DEFAULT' onChange={(e) => { setCity(e.target.value) }}>
          <option value="DEFAULT" disabled>Select A City...</option>
          {citiesList}
        </select>
      </form>
    </>
  )
}
