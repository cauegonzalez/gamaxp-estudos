import React, {Component} from 'react';

class Usuario extends Component {
    render() {
        const {
            avatar_url,
            login,
            name,
            blog
        } = this.props.info;

        return (
            <div className="teste">
                <img src={avatar_url} alt="Foto do perfil" />
                <ul>
                    <li><span>Usuário:</span> {login}</li>
                    <li><span>Nome:</span> {name}</li>
                    <li><span>Blog:</span> {blog}</li>
                </ul>
            </div>
        )
    }
}

export default Usuario;