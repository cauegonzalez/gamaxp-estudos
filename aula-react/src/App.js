import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DestaqueDinamico from './DestaqueDinamico';
import ClickCounter from './ClickCounter';

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
            <ClickCounter />
            {/* <Destaque /> */}
            {/* Edit <code>src/App.js</code> and save to reload. */}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
