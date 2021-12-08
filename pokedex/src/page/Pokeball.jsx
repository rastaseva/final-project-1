import React, { useContext } from 'react';
import CardBox from '../components/CardBox';
import PokemonContext from '../context';

const Pokeball = (props) => {

    const { pokemons } = useContext(PokemonContext);
    return (
        <>
            <div className='d-flex p-2 justify-content-center align-items-end m-auto'>
                {(pokemons.length) ? <CardBox pokemons={pokemons} /> :
                    <h3 className='d-flex p-2 justify-content-center align-items-center font-size-1.5rem'>
                        You didn't catch any pokemon, loser!
                    </h3>}
            </div>
        </>
    );
}

export default Pokeball;