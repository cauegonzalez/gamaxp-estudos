import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DestaqueDinamico from './DestaqueDinamico';

class App extends Component {
  render() {
    const artigos = [
      {'autor':"Cauê", 'artigo': 'Como ser legal', 'data': "04/03/2019"},
      {'autor':"Malu", 'artigo': 'Como ser incrível', 'data': "03/03/2019"}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {
              artigos.map((artigo, i) => {
                return <DestaqueDinamico key={i} autor={artigo.autor} artigo={artigo.artigo} data={artigo.data} />
              })
            }
            {/* <Destaque /> */}
            {/* Edit <code>src/App.js</code> and save to reload. */}
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
