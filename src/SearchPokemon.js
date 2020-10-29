import React, { Component } from 'react'

export default class SearchPokemon extends Component {
    render() {
        return (
            <div id='search-bar'>
                <div id='box' className='border'>
                    <label>Search:</label>
                    <input type='text' onChange={this.props.textChange} />
                    <button onClick={this.props.buttonClick}>Go!</button>
                </div>
                <div id='drop' className='border'>
                    <div>
                        <select onChange={this.props.changeTwo}>
                            <option value='ascending'>Ascending</option>
                            <option value='descending'>Descending</option>
                        </select>
                        <select onChange={this.props.changeOne}>
                            <option value='pokemon'>Name</option>
                            <option value='type_1'>Primary Type</option>
                            <option value='attack'>Attack</option>
                            <option value='defense'>Defense</option>
                        </select>

                    </div>

                </div>


            </div>
        )
    }
}

