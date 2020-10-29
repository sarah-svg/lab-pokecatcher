import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeyList extends Component {

    render() {
        const filteredPokemon = this.props.pokemonData.filter((pokemon) => {
            if (this.props.filter === '') return true;
            if (this.props.filter.toUpperCase() === pokemon.pokemon.toUpperCase()) return true;
            return false
        });
        const pokey = this.props.pokey2;
        if (this.props.pokey1 === 'ascending') {
            filteredPokemon.sort(function (a, b) {
                if (pokey === 'pokemon' || pokey === 'type_1') {

                    return a[pokey].localeCompare(b[pokey])
                } else {
                    return a[pokey] - b[pokey];
                }
            })
        } else {
            filteredPokemon.sort(function (a, b) {
                if (pokey === 'pokemon' || pokey === 'type_1') {
                    return b[pokey].localeCompare(a[pokey])
                } else {
                    return b[pokey] - a[pokey];
                }
            })
        }
        return (
            <div className='center row wrap'>
                {filteredPokemon.map(pokemon => {
                    return <PokeItem pokemon={pokemon} />
                })}
            </div>
        )
    }
}
