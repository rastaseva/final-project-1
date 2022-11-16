import { Route, Switch } from 'react-router-dom';
import Navibar from './components/Navbar';
import PokeField from './page/PokeField';
import Pokeball from './page/Pokeball';
import PokemonDetails from './page/PokemonDetails';
import SearchForm from './page/SearchForm';
import SignUp from './page/SignUp';
import SignIn from './page/SignIn';

function App() {


    return (
        <div className="App">
            <Navibar />
            <div className='app_content mh-100'>
                <Switch>
                    <Route exact path='/' component={PokeField} />
                    <Route exact path='/favourite' component={Pokeball} />
                    <Route path='/pokemons/:id' component={PokemonDetails} />
                    <Route path='/search' component={SearchForm} />
                    <Route path='/sign_up' component={SignUp} />
                    <Route path='/sign_in' component={SignIn} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
