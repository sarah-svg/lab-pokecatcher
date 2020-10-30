import React, { Component } from 'react'
import fetch from 'superagent';
import { Link } from 'react-router-dom'
export default class Fetch extends Component {
    state = {
        quotes: [],
        character: '',
        loading: false
    }
    componentDidMount = async () => {
        await this.fetchQuotes();
    }



    handleSubmit = async (e) => {
        e.preventDefault();
    }

    handleChange = async (e) => {
        this.setState({ character: e.target.value });
    }

    fetchQuotes = async () => {
        this.setState({ loading: true})
        const response = await fetch.get ('https://alchemy-pokedex.herokuapp.com/api/pokedex/quotes');

        this.setState({
            quotes: response.body.result,
            loading: false,
        });
    }
    //componentDidMount = async () => {
       // const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
       // this.setState({ quotes: response.body.results });
    //}

   

    render() {
        return (
            <div className="fetch">
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} />
                <button>Search by character</button>
            </form>
                {
                this.state.loading
                ? 'loading!!!'
           
                : this.state.quotes.map(quote => 
               
                    <Link to={`/quotes/${quote.character}`}>
                        {}
                        <div key={quote.quote} onClick={(e) => this.handleClick(quote)}>
                            <p>{quote.character}</p>
                            <img src={quote.image} alt={quote.character} width="100" height="100"/>
                            <p>{quote.quote}</p>
                        </div>
                    </Link>)
                }
            </div>
        )
    }
}

          


