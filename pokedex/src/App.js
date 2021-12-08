import {Route, Switch} from 'react-router-dom';
import Navibar from './components/Navbar';
import PokeField from './page/PokeField';
import Pokeball from './page/Pokeball';
import PokemonDetails from './page/PokemonDetails';

function App() {
  

  return (
    <div className="App">
      <Navibar/>
      <div className='app_content mh-100'>
        <Switch>
          <Route exact path='/' component={PokeField} />
          <Route exact path='/pokeball' component={Pokeball} />
          <Route path='/pokemons/:id' component={PokemonDetails}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
