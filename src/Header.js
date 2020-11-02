import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <div className='SearchPokemon'>
                      <div>  
                
                
                        <h1>Pokemon</h1>
                        <p>Welcome to the legendary world of <br />
                Pokémon search to find your
                favorite one.</p>
           
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/list" >List</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className='sixty'>
                    </div>
                    <div className='SearchPokemon'>
                    </div>
                </header>
            </>
        )
    }
}
