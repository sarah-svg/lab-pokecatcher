import React, { Component } from 'react'
import Pokey from './Pokey.js';
import pokemon from './data.js';


export default class PokeyList extends Component {
        state = {
            filter: ''
        }

        handleChange = e => {
            this.setState({
                filter: e.target.value
            })
        }


    render() {
    const filteredPokemon = pokemon.filter((pokemon) => {
        if (!this.state.filter) return true;
        if (this.state.filter === pokemon._id) return true;
        return false;
    })
    
    
    
    {
        return (

            <>
            <select onChange={this.handleChange}>
                <option>See all Pokemon</option>
        {pokemon.map(pokemon => <option value={pokemon._id}>{pokemon.id}</option>)}
            </select>
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
