import Card from './Card';

const CardBox = ({ pokemons}) => {

    return (
        <div className='card_Box'>
            {pokemons.map((pokemon) => (
                <Card
                    key={pokemon.url}
                    name={pokemon.name}
                    pokemonData={pokemon.url}
                    caughtDate={pokemon.caughtDate}
                    isCaught={pokemon.isCaught}
                    id={pokemon.id}
                />
            ))}

        </div>
    )
}

export default CardBox;