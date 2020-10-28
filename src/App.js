import React from 'react';
import MyCoolHeader from './MyCoolHeader.js';
import MyAmazingArticle from './MyAmazingArticle.js';
import MySpecialFooter from './MySpecialFooter.js';
import PokeyList from './PokeyList.js';
import pokemon from './data.js';






export default class PutEmAllTogether extends React.Component {
  render() {
      return (
        <div>
        <h1>Time to click the legos together!</h1>
 
          <MyCoolHeader name="dani" />
          <MyAmazingArticle />
        <PokeyList pokemon={pokemon} />

          <MySpecialFooter phone="345-456-5431" />
        </div>
      );
  }
}
