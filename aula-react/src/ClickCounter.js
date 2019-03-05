import React, { Component } from 'react';

class ClickCounter extends Component {
  state = {
    vezesPressionado: 0
  }
  handleButtonPress = () => {
    const vezesPressionado = this.state.vezesPressionado + 1;
    this.setState({vezesPressionado}) // funciona como o compact do PHP, poderia ser substituído por {'vezesPressionado': vezespressionado}
  }
  render() {
    return (
      <div>
        <span>
          Fui clicado {this.state.vezesPressionado} vezes
        </span>
        <br />
        <button onClick={this.handleButtonPress}>
          Me aperte :)
        </button>
      </div>
    );
  }
}

export default ClickCounter;
