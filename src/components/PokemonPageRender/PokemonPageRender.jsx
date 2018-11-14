import React, { Component } from 'react';

import './PokemonPageRender.css';

export default class PokemonPageRender extends Component {
    render() {
        const { id, name, status, date, deletePokemon, displayData, catchPokemon } = this.props;
        return(
            <main className={"pokemon-page-wrapper"}>
                <div className={"pokemon-page-img-wrapper"}>
                    <img className={"pokemon-page-img"} src={`pokemons/${id}.png`} />
                </div>
                <div className={"pokemon-page-info-wrapper"}>
                    <ul className={"pokemon-page-info"}>
                        <li className={"pokemon-page-info-item"}>Number: {id}</li>
                        <li className={"pokemon-page-info-item"}>Name: {name.charAt(0).toUpperCase() + name.substr(1)}</li>
                        <li className={"pokemon-page-info-item"}>Status: {status}</li>
                        {displayData(status, <li className={"pokemon-page-info-item"}>Date: {date}</li>, null)}
                    </ul>
                    {displayData(status, <button className={"pokemon-page-button"} onClick={deletePokemon}>Delete from collection</button>, null)}
                    {displayData(status, null, <button className={"pokemon-page-button catch"} onClick={catchPokemon}>Catch this pokemon</button>)}
                </div>
            </main>
        )
    };
};
