import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PokemonContext from '../context';

const cardInfo = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    width: '10rem',
    padding: '2rem 1rem',
    background: '#7ebeda',
    border: '3px solid #ccc',
    borderRadius: '4px',
    margin: '1rem'
}

const cardImg = {
    width: '7rem',
    height: '7rem',
}

const Card = (props) => {

    const [pokemonData, setPokemon] = useState([]);
    const [pokemonPic, setPokemonPic] = useState([]);
    const { pokemons } = useContext(PokemonContext);
    useEffect(() => {
        const getPokemons = async () => {
            const res = await axios.get(props.pokemonData);
            setPokemon(res.data)
            setPokemonPic(res.data.sprites.other['official-artwork'].front_default)
        }
        getPokemons();
    }, [props.pokemonData]);

    let [isCaught, setCaught] = useState(false);

    const catchPokemon = () => {
        if (pokemons.find(el => el.id === pokemonData.id)) {
            setCaught(true);
            alert("You've already caught this one!");
        } else {
            setCaught(true);
            const caughtDate = new Date().toUTCString();
            pokemons.push(
                {
                    name: pokemonData.name, url: props.pokemonData, caughtDate, isCaught: true, id: pokemonData.id,
                });
            alert('Pokemon caught!');
        }
    }
    let [isReleased, setReleased] = useState(false)

    const releasePokemon = () => {
        setReleased(true);
        let obj;
        pokemons.find(el => {
            if (el.name === props.name) {
                obj = el;
            }
            return obj;
        });
        const index = pokemons.indexOf(obj);
        if (index > -1) {
            pokemons.splice(index, 1);
        }
        return alert('Pokemon released!')
    }

    const checkStatus = () => {
        if (props.isCaught) {
            return (
                <Button variant="dark" onClick={releasePokemon} disabled={isReleased}>
                    Release!
                </Button>
            )
        }
        return (
            <Button variant="dark" onClick={catchPokemon} disabled={isCaught}>
                Catch!
            </Button>
        )

    }


    return (
        <div style={cardInfo} className={`${props.name}_info`}>
            <Link to={`/pokemons/${pokemonData.name}`} >
                <img style={cardImg} src={pokemonPic} alt={props.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = process.env.PUBLIC_URL + '/unknown.png' }} />
            </Link>
            <p>Id: {pokemonData.id}</p>
            <p className='text-capitalize'>{props.name}</p>
            {checkStatus()}
        </div>
    )
};

export default Card;
