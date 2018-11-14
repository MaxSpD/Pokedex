import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import PokemonList from './containers/PokemonList.jsx';
import Catched from './components/Catched/Catched.jsx';
import PokemonPage from './containers/PokemonPage.jsx';

import './index.css';


class App extends Component {
  render() {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path = {"/"} component = {PokemonList} />
                <Route exact path = {"/catched_pokemons"} component = {Catched} />
                <Route exact path = {"/pokemon/:id"} component = {PokemonPage} />
            </Switch>
        </Fragment>
    );
  };
}

ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
