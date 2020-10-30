import React, { Component } from 'react';
import PokeyList from './PokeyList.js';
import SearchPokemon from './SearchPokemon.js';
import Sort from './Sort.js';
import fetch from 'superagent';

export default class App extends Component {
  state = {
    filter: '',
    textString: '',
    changeOne: 'ascending',
    changeTwo: 'pokemon',
    pokemonData: []
  }

  fetchPokemon = async () => {
    const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&perPage=1000`);
    this.setState({ pokemonData: response.body.results });
  }

  componentDidMount = async () => {
    this.fetchPokemon();
  }

  buttonClick = async () => {
    this.fetchPokemon();
  }

  textChange = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  changeOne = (e) => {
    this.setState({
      changeOne: e.target.value
    })
  }

  changeTwo = (e) => {
    this.setState({
      changeTwo: e.target.value
    })
  }

  render() {
    return (
      <>
          <div className='row background-tan'>
            <div id='search-bar' className=''>
            <SearchPokemon buttonClick={this.buttonClick} textChange={this.textChange} />
            <Sort changeTwo={this.changeTwo} changeOne={this.changeOne} />
            </div>
            <PokeyList changeTwo={this.state.changeTwo} changeOne={this.state.changeOne} pokemonData={this.state.pokemonData} filter={this.state.filter} />
            </div>
      </>
    )
  }
}
