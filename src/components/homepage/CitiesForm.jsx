import React from 'react'

export const CitiesForm = ({setCity}) => {
  return (
    <>
      <form>
        <select onChange={(e) => { setCity(e.target.value) }}>
          <option value="" disabled>Select A Value..</option>
          <option value="aberdeen">Aberdeen</option>
          <option value="dundee">Dundee</option>
          <option value="edinburgh">Edinburgh</option>
          <option value="glasgow">Glasgow</option>
          <option value="inverness">Inverness</option>
          <option value="perth">Perth</option>
        </select>
      </form>
    </>
  )
}
