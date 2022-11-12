import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';



function SearchForm(props) {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }


    function handleSubmit(e) {
        if (name === '') {
            e.preventDefault();
            return alert('You should write any pokemon name for correct search!')
        }

        setName('');
    }


    return (
        <form >
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <Link to={`pokemons/${name.toLowerCase()}`}>
                <Button type="submit" className="btn btn__primary btn__lg" onClick={handleSubmit}>
                    Find!
                </Button>
            </Link >

        </form >

    );
}

export default SearchForm;