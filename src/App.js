import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/impaciente.PNG';

import Header from './components/Header';
import Projeto from './components/Projeto';

function App() {
  // const projetos = ['vortx one', 'boletador'];
  const [projetos, setProjetos] = useState(['vortx one', 'boletador']);

  function handleAddProjeto() {
    // projetos.push(`Novo Projeto ${Date.now()}`)
    setProjetos([ ... projetos, `Novo Projeto ${Date.now()}`])
  }

  function handleDeleteProject(event) {
    const projetoDeletado = event.currentTarget.value;

    setProjetos(projetos.filter(projeto => projeto !== projetoDeletado))
  }

  return (
    <>
      <Header tittle="Projetos"/>

      <img src={backgroundImage} width={300}/>

      <ul>
        {projetos.map(project => <Projeto projeto={project} handleDelete={handleDeleteProject}/>)}
      </ul>

      <button type="button" onClick={handleAddProjeto}>Adicionar Projeto</button>
    </>
  )
}

export default App;