import React, { Component } from 'react'

export default class Pokey extends Component {
    render() {
        return (
            <div class="image">
            <div>NAME:{this.props.pokemon}</div>
            <img src={this.props.src} alt='pokemon' />  
            <div>ID:{this.props.id}</div> 
            <div>HP:{this.props.hp}</div>             
            </div>
        )
    }
}
