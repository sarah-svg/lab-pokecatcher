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
    pokemonData: [],
    pageNumber: 1
  }

  fetchPokemon = async () => {
    const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&pokemon=${this.state.filter}&perPage=20`);
    this.setState({ 
      pokemonData: response.body.results,
      count: response.body.count
    });
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

  handleAdd = async () => {
    await this.setState({
      pageNumber: this.state.pageNumber + 1
    })
    await this.fetchPokemon();
  }
  
  handleMinus = async () => {
    await this.setState({
      pageNumber: this.state.pageNumber - 1
    })
    await this.fetchPokemon();
  }
  render() {
    return (
      <> 
      <div className='lstPage'>
          <div >
            <button onClick={this.handleMinus} disabled={this.state.pageNumber === 1}>
              Go back 
            </button>
            <button onClick={this.handleAdd} disabled={this.state.pageNumber === Math.ceil(this.state.count / 20)}>
              Next page 
            </button>
          </div>
          <div>
            <div >
            <SearchPokemon buttonClick={this.buttonClick} textChange={this.textChange} />
            <Sort changeTwo={this.changeTwo} changeOne={this.changeOne} />
            </div>
            <PokeyList changeTwo={this.state.changeTwo} changeOne={this.state.changeOne} pokemonData={this.state.pokemonData} filter={this.state.filter} />
            </div>
            </div> 
      </>
    )
  }
}
