const initialState = {
    pessoasList: []
};

const getPessoas = (state, action) => {
    //   const arrayPessoas = "";
    //     fetch(`https://swapi.co/api/people`)
    //         .then(data => data.json())
    //         .then(info => {
    //             arrayPessoas = info.results
    //         })
    //         .catch(erro => {
    //             arrayPessoas = ''
    //         })
    return  {
        ...state,
        pessoasList: action.pessoas
    }
}

export default function pessoasReducers(state = initialState, action) {
    switch (action.type) {
        case 'GET_PESSOAS': 
            return getPessoas(state, action);
        default:
            return state;
    }
}