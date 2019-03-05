import React, { Component } from 'react';

class Api extends Component {
  state = {
    avatar: ""
  }
  componentWillMount() {
    fetch('https://api.github.com/users/cauegonzalez')
    .then(data => data.json())
    .then(json => {
      this.setState({avatar: json.avatar_url})
    })
    .catch(err => console.err('Deu ruim'))
  }
  render() {
    const avatar = this.state.avatar ? <img src={this.state.avatar} /> : "Carregando...";
    return (
      <div className="App">
        {avatar}
      </div>
    );
  }
}

export default Api;
