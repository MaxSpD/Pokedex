import React, { Component } from 'react';

import PokemonListRender from '../components/PokemonListRender/PokemonListRender.jsx';

export default class PokemonList extends Component {

    static defaultProps = {
        url: 'http://localhost:3000/pokemons'
    };

    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            page: 1,
            displayButton: false,
        };
    };

    loadPokemons = () => {
        const { pokemons, page } = this.state;
        fetch(`${this.props.url}?_limit=15&_page=${page}`)
            .then (response => response.json())
            .then (response => {
                this.setState({
                    pokemons: pokemons.concat(response),
                    page: page + 1,
                });
            })
            .then (response => this.showButton(this.state.pokemons))
    };

    showButton = (pokemons) => {
        fetch(`${this.props.url}`)
            .then((response) => response.json())
            .then((response) => {
                if (pokemons.length < response.length) {
                    this.setState({
                        displayButton: true,
                    });
                } else {
                    this.setState({
                        displayButton: false,
                    });
                }
            });
    };

    componentDidMount() {
        this.loadPokemons()
    };

    render() {
        return(
            <PokemonListRender pokemons={this.state.pokemons} loadPokemons={this.loadPokemons} displayButton={this.state.displayButton}/>
        )
    };
};
