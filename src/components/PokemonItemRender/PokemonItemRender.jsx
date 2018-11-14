import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './PokemonItemRender.css';

export default class PokemonItemRender extends Component {
    render() {
        const { id, name, catchPokemon, status } = this.props;
        return (
            <div className={"pokemon-item-wrapper"}>
                <Link to={`/pokemon/${id}`} className={"pokemon-item-img-link"}>
                    <img className={"pokemon-item-img"} src={`pokemons/${id}.png`} alt={`${name}`} />
                </Link>
                <div className={"pokemon-item-info-wrapper"}>
                    <Link to={`/pokemon/${id}`} className={"pokemon-item-name"}>
                        {name.charAt(0).toUpperCase() + name.substr(1)}
                    </Link>
                    <button className={"pokemon-item-button-catch"} onClick={catchPokemon} disabled={status}>
                        {status ? "Catched" : "Catch"}
                    </button>
                </div>
            </div>
        )
    };
};
