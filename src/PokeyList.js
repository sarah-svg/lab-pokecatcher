import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeyList extends Component {

    render() {
        const filteredPokemon = this.props.pokemonData;
        console.log(filteredPokemon);
        const pokey = this.props.changeTwo;
        if (this.props.changeOne === 'ascending') {
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
            <div>
                {
                    (filteredPokemon.length === 0)
                        ? <iframe
                            src='https://media3.giphy.com/media/3oKIPoaRNoYOkBOZKE/giphy.gif?cid=ecf05e47w3xrxgk56hpl1vvqrpdngvxoblptfa692dxyr3y5&rid=giphy.gif'
                            title='waiting'
                            width='200px'
                            height='00px'
                            frameBorder='0'
                            allowFullScreen />
                        :
                        <div className='center row wrap'>
                            {filteredPokemon.map((pokemon, i) => {
                                return <PokeItem key={i} pokemon={pokemon} />
                            })}
                        </div>
                }
            </div>

        )
    }
}
