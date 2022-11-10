import React, { useState } from "react";
import { Link } from 'react-router-dom';



function SearchForm(props) {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        if (name === '') {
            return alert('You should write any pokemon name before adding them!')
        }
        e.preventDefault();
        
        setName("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <Link to={`/pokemons/${name}`} >
                <button type="submit" className="btn btn__primary btn__lg">
                    Find!
                </button>
            </Link>
            
        </form>

    );
}

export default SearchForm;