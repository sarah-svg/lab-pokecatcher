
import React, { Component } from 'react'
import Pokey from './Pokey.js';
import pokemon from './data.js';


export default class PokeyList extends Component {
    render() {
    const filteredPokemon = this.props.pokemon.filter((pokemon) => {
    if (!this.props.filter) return true;
    if (this.props.filter === pokemon._id) return true;
    return false;
})
        {
        return (
            <>
            {
            filteredPokemon.map(pokemon => 
                <Pokey
                pokemon={pokemon.pokemon}
                src={pokemon.url_image}
                id={pokemon.id}
                hp={pokemon.hp}
                />
            )
            }
            </>
            )
            }
    }
}
