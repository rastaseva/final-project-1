import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardBox from "../components/CardBox";

const PokeField = () => {
    const [nextPage, setNextPage] = useState();
    const [pokemons, setPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState(`https://pokeapi.co/api/v2/pokemon?limit=18`);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if (fetching) {
            axios.get(currentPage)
                .then(response => {
                    setPokemon([...pokemons, ...response.data.results]);
                    setNextPage(response.data.next);
                    setCurrentPage(prevState => prevState = response.data.next)
                })
                .finally(() => setFetching(false));
        };
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
            && nextPage !== null) {
            setFetching(true)
        }
    }

    return (
        <>
            <div div className='d-flex p-2 justify-content-center align-items-end m-auto'>
                <CardBox pokemons={pokemons} />
            </div>
        </>
    );
}

export default PokeField;