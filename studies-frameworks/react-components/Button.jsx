import React from 'react';

// O componente recebe props (propriedades) tipadas para garantir o uso correto
function Button({ onAction, label }) {
  // O componente é responsável apenas por renderizar e chamar a função onAction
  return (
    <button onClick={onAction} style={{ margin: '10px', padding: '10px 20px' }}>
      {label}
    </button>
  );
}

export default Button;