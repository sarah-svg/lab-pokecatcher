import React from 'react';

class MyCoolHeader extends React.Component {
  render() {
      return (
          <div> Hi, {this.props.name}, I am the header!</div>
      );
  }
}

class MyAmazingArticle extends React.Component {
  render() {
      return (
          <div>I am the article!</div>
      );
  }
}

class MySpecialFooter extends React.Component {
  render() {
      return (
          <div> I am the footer! Call us at {this.props.phone}</div>
      );
  }
}

export default class PutEmAllTogether extends React.Component {
  render() {
      return (
        <div>
        <h1>Time to click the legos together!</h1>
        
          <MyCoolHeader name="dani" />
          <MyAmazingArticle />
          <MySpecialFooter phone="345-456-5431" />
        </div>
      );
  }
}
