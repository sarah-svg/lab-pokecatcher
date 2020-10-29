import React, { Component } from 'react'
import pokemon from './data.js';

export default class DropList extends Component {
    render() {
        return (
            <div>
                 <select onChange={this.props.ListChange}>
                <option>attack</option>
                {pokemon.map(pokemon => <option value={pokemon.attack}>{pokemon.attack}</option>)}
            </select>
            </div>
        )
    }
}
