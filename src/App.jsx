import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Countries from './components/Countries'

function App() {

  //ACCEDER A LA INFORMACIÓN DE COUNTRIES API
  /*
  * URL = https://restcountries.com/v3.1/lang/spa
  * Se debe mostrar en consola la información
  * 
  * 
  */

  const [countries, setCountries] = useState()

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/lang/spa`

    axios.get(url)
      .then(res => setCountries(res.data))
      .catch(err => console.log(err))
  },[])
  
  console.log(countries);

  return (
    <div className="App">
      <h1 className='header'>Clase2.3</h1>

  {
    countries?.map(countries => (
      <Countries key={countries.altSpellings}
      countries={countries}
      />
    ))
  }

  </div>
  )
}

export default App
