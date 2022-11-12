import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PokemonContext from '../context';


const infoBoxStyle = {
    background: '#7ebeda',
    border: '3px solid #ccc',
    borderRadius: '4px',
    fontSize: '1.5rem',
}


const PokemonDetails = (props) => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState([]);
    const { pokemons } = useContext(PokemonContext)
    const [loading, setLoading] = useState(false);
    const [errCheck, setErrCheck] = useState(false)
    const [pokemonPic, setPokemonPic] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [types, setTypes] = useState([]);


    useEffect(() => {

        const getPokemon = async () => {

            try {
                
                setLoading(true);
                const info = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                setPokemon(info.data);
                setPokemonPic(info.data.sprites.other['official-artwork'].front_default);
                setAbilities(info.data.abilities);
                setTypes(info.data.types);
                setLoading(false);

            }

            catch (err) {

                setLoading(false);
                setErrCheck(true);

            }

        }

        getPokemon();
    }, [id]);

    let obj;

    pokemons.find(el => {
        if (el.name === pokemon.name) {
            pokemon.caughtDate = el.caughtDate;
        }
        return obj;
    });

    const catchCheck = () => {

        if (pokemon.hasOwnProperty('caughtDate')) {
            return <p>Catch date: {pokemon.caughtDate}</p>
        }
        return <p>Pokemon is not caught yet!</p>
    }

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (errCheck) {
        return <h2>There is no such pokemon!</h2>
    }


    return (
        <div className={`${pokemon.name}_info d-flex p-2 justify-content-around align-items-center m-auto`}>
            <div className='d-flex p-2'>
                <img className='float-left' src={pokemonPic} alt={pokemon.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = process.env.PUBLIC_URL + '/unknown.png' }} />
            </div>
            <div style={infoBoxStyle} className='d-flex flex-column justify-content-center p-3 m-3 h-50'>
                Pokemon name: <p className='text-capitalize'>{pokemon.name}</p>
                <p>Pokemon id: {pokemon.id}</p>
                <p>Pokemon weight: {pokemon.weight}</p>
                <p>Pokemon abilities:
                    <p className='text-capitalize'> {abilities.map(el => el.ability.name).join(', ')}</p>
                </p>
                <p>Pokemon types:
                    <p className='text-capitalize'> {types.map(el => el.type.name).join(', ')}</p>
                </p>
                {catchCheck()}
            </div>
        </div>
    )
};

export default PokemonDetails;