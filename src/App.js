import React from 'react';
import Pregunta from './components/Pregunta';

function App() {
  return (
    <di className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta />
        </div>
      </header>
    </di>
  );
}

export default App;
