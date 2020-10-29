import React, { Component } from 'react'

export default class SearchList extends Component {
    render() {
        return (
            <div>
                <select onChange = {this.props.sort1Change}>
                    
                        <option value ='ascending'>Ascending</option>
                        <option value ='descending'>Descending</option>
                    </select>
                    <label>order</label>
            </div>
        )
    }
}
