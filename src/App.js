import React, { Component } from 'react'
import './App.css';
import pokemonData from './Data.js';
import Header from './Header.js';
import PokeyList from './PokeyList.js';
import SearchPokemon from './SearchPokemon.js';

export default class App extends Component {
  state = {
    filter: '',
    textString: '',
    pokey1: 'ascending',
    pokey2: 'pokemon'
  }

  buttonClick = () => {
    this.setState({
      filter: this.state.textString
    })
  }

  textChange = (e) => {
    this.setState({
      textString: e.target.value
    })
  }


  changeOne = (e) => {
    this.setState({
      pokey2: e.target.value
    })
  }
  changeTwo = (e) => {
    this.setState({
      pokey1: e.target.value
    })
  }

  render() {
    return (
      <>
        <Header />
        <div>
          <SearchPokemon changeOne={this.changeOne} changeTwo={this.changeTwo} buttonClick={this.buttonClick} textChange={this.textChange} />
          <PokeyList pokey2={this.state.pokey2} pokey1={this.state.pokey1} pokemonData={pokemonData} filter={this.state.filter} />
        </div>
      </>
    )
  }
}
