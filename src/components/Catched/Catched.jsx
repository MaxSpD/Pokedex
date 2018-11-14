import React, { Component } from 'react';

import PokemonList from '../../containers/PokemonList.jsx';

export default class Catched extends Component {
    render() {
        return (
            <PokemonList url={'http://localhost:3000/catched_pokemons'} />
        );
    };
};
