import React, {Component} from 'react';

class Entrada extends Component {
    render() {
        return (
            <div>
                <input type="text" id='user' value={this.props.valor} onChange={this.props.onInputChange} />
                <button onClick={this.props.onButtonClick}>Procurar</button>
            </div>
        )
    }
}

export default Entrada;