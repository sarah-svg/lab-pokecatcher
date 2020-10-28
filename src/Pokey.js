import React, { Component } from 'react'

export default class Pokey extends Component {
    render() {
        return (
            <div class="image">
            <div>{this.props.pokemon}</div>
            <img src={this.props.src} alt='pokemon' />  
            <div>{this.props.id}</div>              
            </div>
        )
    }
}
