import React, { Component } from 'react';
import moment from 'moment';

import PokemonItemRender from '../components/PokemonItemRender/PokemonItemRender.jsx';

export default class PokemonItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            catched: false,
        };
    };

    catchPokemon = () => {
        const obj = {
            id: this.props.id,
            name: this.props.name,
            date: moment().format('MMMM Do YYYY, h:mm'),
            pokemonId: this.props.id,
        };

        fetch('http://localhost:3000/catched_pokemons', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        this.setState({
            catched: true,
        });
    };

    isCatched = () => {
        fetch('http://localhost:3000/catched_pokemons')
            .then((response) => response.json())
            .then ((response) => {
                if ((response.filter(x => x.id === this.props.id)).length > 0 ) {
                    this.setState({
                        catched: true,
                    });
                }
            });
    };

    componentDidMount() {
        this.isCatched();
    };

    render() {
        return(<PokemonItemRender id={this.props.id} name={this.props.name} catchPokemon={this.catchPokemon} status={this.state.catched} />)
    };
};
