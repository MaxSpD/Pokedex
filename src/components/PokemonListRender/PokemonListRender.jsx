import React, { Component } from 'react';

import PokemonItem from "../../containers/PokemonItem.jsx";

import './PokemonListRender.css';

export default class PokemonListRender extends Component {
    render() {
        const { pokemons, loadPokemons, displayButton } = this.props;
        return(
            <main className={"pokemon-list-wrapper"}>
                <div className={"pokemon-list"}>
                    {pokemons.map((pokemon) => <PokemonItem key={pokemon.id} id={pokemon.id} name={pokemon.name}/>)}
                </div>
                <button className={displayButton ? "show-more-button" : "show-more-button-disabled"} onClick={loadPokemons}>
                    Show More
                </button>
            </main>
        )
    };
};
