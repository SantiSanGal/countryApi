import React from 'react'

const Countries = ({countries}) => {
  return (
    <article className='countries__card'>
        <img src={countries.flags.svg} alt={countries.flags.alt} />
        <div className='countries__card__data'>
            <h2>{countries.name.common}</h2>
            <ul>
                <li><b>Capital: </b>{countries.capital}</li>
                <li><b>Population: </b> {countries.population}</li>
            </ul>
        </div>
    </article>
  )
}

export default Countries