import React from 'react';







export default class MyCoolHeader extends React.Component {
    render() {
        return (
            <div> Hi, {this.props.name}, I am the header!</div>
        );
    }
  }