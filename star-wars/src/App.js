import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        const { pessoas, getPessoas } = this.props;

        const arrayPessoas = [
            {
                'nome': 'João'
            },
            {
                'nome': 'Cauê'
            },
            {
                'nome': 'Pedro'
            }
        ];
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <button onClick={ () => getPessoas(arrayPessoas) }>
                        Pegar Pessoas
                    </button>
                    <ul>
                    {
                        pessoas.map(item => (
                            <li>
                                {item.nome}
                            </li>
                        ))
                    }
                    </ul>
                </header>
            </div>
        );
    }
}

const mapStateToProps = store => {
    const {pessoasReducers} = store;
    return {
        pessoas: pessoasReducers.pessoasList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPessoas: (pessoas) => {
            dispatch({
                type: 'GET_PESSOAS',
                pessoas
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
