import React from 'react';

function Projeto({ projeto, handleDelete }) {
  return (
    <>
      <li key={projeto}>{projeto}</li>
      <button type="button" onClick={handleDelete} value={projeto}>Deletar</button>
    </>
  );
}

export default Projeto;
