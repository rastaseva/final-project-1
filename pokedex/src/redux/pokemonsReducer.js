import axios from "axios";
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pokemons: [],
    caughtPokemons: []
}

const URL = `https://pokeapi.co/api/v2/pokemon?limit=27`

export const pokemonsReducer = createSlice({
    name: 'allPokemons',
    initialState: initialState,
    reducers: {
        async initPokemonsGetter(state) {
            await axios.get(URL)
                .then(response => {
                    state = [...response.data.results]
                    console.log([...response.data.results]);
                    // setPokemon([...pokemons, ...response.data.results]);
                    // setNextPage(response.data.next);
                    // setCurrentPage(prevState => prevState = response.data.next)
                })
        }
    }
})

export const { initPokemonsGetter } = pokemonsReducer.actions;
export default pokemonsReducer.reducers