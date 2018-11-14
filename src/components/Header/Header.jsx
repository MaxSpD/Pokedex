import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

export default class Header extends Component {
    render() {
        return(
            <header className={"header"}>
                <div className={"header-inner"}>
                    <div className={"logo-wrapper"}>
                        <Link to={"/"} className={"logo-link"}>
                            <img className={"logo-img"} src={"images/logo.png"} alt={"logo"} />
                        </Link>
                    </div>
                    <nav className={"navbar-wrapper"}>
                        <ul className={"navbar"}>
                            <li className={"navbar-item indent"}>
                                <Link to={"/"} className={"navbar-item-link"}>Home</Link>
                            </li>
                            <li className={"navbar-item"}>
                                <Link to={"/catched_pokemons"} className={"navbar-item-link"}>Catched</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    };
};
