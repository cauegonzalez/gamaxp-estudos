import React from 'react';

const DestaqueDinamico = (props) => {
  return (
    <div>
      <p>
        <b>autor: </b>{props.autor}
      </p>
      <p>
        <b>artigo: </b>{props.artigo}
      </p>
      <p>
        <b>data: </b>{props.data}
      </p>
      <p>&nbsp;</p>
    </div>
  )
}

export default DestaqueDinamico;
