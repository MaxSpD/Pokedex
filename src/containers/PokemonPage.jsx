import React, { Component } from 'react';
import moment from 'moment';

import PokemonPageRender from '../components/PokemonPageRender/PokemonPageRender.jsx';

export default class PokemonPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            name: '',
            status: '',
            date: '',
        };
    };

    loadPage = () => {
        const id  = this.state.id;
        fetch(`http://localhost:3000/pokemons/${id}?_embed=catched_pokemons`)
            .then((response) => response.json())
            .then((response) => {
                if (response.catched_pokemons.length > 0) {
                    this.setState({
                        name: response.name,
                        status: 'Catched',
                        date: response.catched_pokemons[0].date,
                    });
                } else {
                    this.setState({
                        name: response.name,
                        status:'Was not catched',
                    });
                }
            });
    };

    catchPokemon = () => {
        const obj = {
            id: +this.state.id,
            name: this.state.name,
            date: moment().format('MMMM Do YYYY, h:mm'),
            pokemonId: +this.state.id,
        };

        fetch('http://localhost:3000/catched_pokemons', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        this.setState({
            status: 'Catched',
            date: obj.date,
        });
    };

    deletePokemon = () => {
        fetch(`http://localhost:3000/catched_pokemons/${this.state.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }})
            .then ((response) => {
                this.setState({
                    status: 'Was not catched',
                    date: '',
                });
            });
    };

    displayData = (status, date1, date2) => {
        return (status === 'Catched' ? date1 : date2)
    };

    componentDidMount() {
        this.loadPage();
    };

    render() {
        return (
            <PokemonPageRender id={this.state.id} name={this.state.name} status={this.state.status} date={this.state.date}
                               deletePokemon={this.deletePokemon} catchPokemon={this.catchPokemon} displayData={this.displayData}/>
        )
    };
};
