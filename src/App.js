import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Country/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([])
  // const [cart, setCart] = useState([])

  useEffect(()=>{
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  // const handleAddCountry = (countries) => {
  //   console.log(countries)
  //   const newCart = [...cart, countries];
  //   setCart(newCart)
  // }

  return (
    <div className="App">
      <h3>Country loaded : {countries.length}</h3>
      {/* <h3>Country added : {cart.length}</h3> */}
      {/* <Cart cart={cart}></Cart> */}
        {
          countries.map(country => <Country country={country}  key={country.alpha3Code}>{country.name}</Country>)
        }
    </div>
  );
}

export default App;
