import React, { Component } from 'react'
import fetch from 'superagent';
import PokeyList from './PokeyList.js';





export default class DetailPage extends Component {

    state = {
        filter: '',
        pokemonData: []
    }
    fetchPokemon = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);
        console.log(this.props);
        this.setState({ pokemonData: response.body.results });
      }
    componentDidMount = async () => {
        this.fetchPokemon();
    }

    render() {
        return (
            < >
            <h1>{this.props.match.params.pokemonName}!</h1>
            <div className = 'row background'>
              <PokeyList pokemonData = {this.state.pokemonData} filter = {this.state.filter} />
            </div>
          </>
        )
      }
    }
