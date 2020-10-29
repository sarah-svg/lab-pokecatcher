
import React, { Component } from 'react'
import pokemon from './data.js';

export default class Drop extends Component {
    render() {
        return (
            <div>
                 <select onChange={this.props.handleChange}>
                <option>See all Pokemon</option>
                {pokemon.map(pokemon => <option value={pokemon._id}>{pokemon.id}</option>)}
            </select>
            </div>
        )
    }
}