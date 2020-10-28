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
        if (this.state.filter === pokemon.keyword) return true;
        return false;
    })
    
    
    
    {
        return (

            <>
            <select onChange={this.handleChange}>
                <option></option>
        {pokemon.map(pokemon => <option value={pokemon.keyword}>{pokemon.keyword}</option>)}
            </select>
            {
            filteredPokemon.map(pokemon => 
                <Pokey
                pokemon={pokemon.pokemon}
                src={pokemon.url_image}
                id={pokemon.id}
                />
                 )
            }

            </>



           
        )
            }
    }
}
