import React from 'react';
import MyCoolHeader from './MyCoolHeader.js';
import MyAmazingArticle from './MyAmazingArticle.js';
import MySpecialFooter from './MySpecialFooter.js';
import PokeyList from './PokeyList.js';
import pokemon from './data.js';
import Drop from './Drop.js';
import './App.css';






export default class PutEmAllTogether extends React.Component {
  state = {
    filter: ''
}

handleChange = e => {
    this.setState({
        filter: e.target.value
    })
}


render() {

}
  render() {
      return (
        <div>
          <h1>Pokemon !</h1>
          <Drop handleChange={this.handleChange} />
          <MyCoolHeader />
          <MyAmazingArticle />
          <PokeyList pokemon={pokemon} filter={this.state.filter} />
    
          <MySpecialFooter  />
        </div>
      );
  }
}
