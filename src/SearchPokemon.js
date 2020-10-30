import React, { Component } from 'react'


export default class SearchPokemon extends Component {
    render() {
        return (
            <div id='box' className='border'>
                <label>Search:</label>
                <input type='text' onChange={this.props.textChange} />
                <button onClick={this.props.buttonClick}>Go!</button>
                
            </div>
        )
    }
}

