import React, { Component } from 'react'

export default class Sort extends Component {
    render() {

        return (
            <div id='SearchPokemon' className='border'>
                <span>
                    <label>Sort by </label>
                    <select onChange={this.props.changeTwo}>
                        <option value='pokemon'>Name</option>
                        <option value='type_1'>Primary Type</option>
                        <option value='attack'>Attack</option>
                        <option value='defense'>Defense</option>
                    </select>
                    <label> in</label>
                </span>
                <select onChange={this.props.changeOne}>
                    <option value='ascending'>Ascending</option>
                    <option value='descending'>Descending</option>
                </select>
                <label>order</label>
            </div>
        )
    }
}
