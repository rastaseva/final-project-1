import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import PokemonContext from './context';
import reportWebVitals from './reportWebVitals';




function Main() {

  const [pokemons, setPokemon] = useState([]);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PokemonContext.Provider value={{ pokemons, setPokemon }}>
          <App />
        </PokemonContext.Provider>
      </Provider>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

reportWebVitals();
