import React, { useState } from 'react';
import Button from './Button';

function App() {
  // Estado para armazenar a contagem de cliques
  const [count, setCount] = useState(0);

  // Função que será passada como prop para o componente Button
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Estudos em ReactJS</h1>
      <p>Você clicou no botão {count} vezes.</p>
      
      {/* Reutilização do componente Button */}
      <Button onAction={handleClick} label={`Clique em mim (${count})`} />

      <Button onAction={() => alert('Resetando...')} label="Resetar Contagem" />
    </div>
  );
}

export default App;