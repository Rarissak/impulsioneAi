import React from 'react';
import Botao from "./Botao";

function BarraLinks() {
  const barraStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1em',
  };

  return (
    <div style={barraStyle}>
      <Botao>Gastronomia</Botao>
      <Botao>Moda</Botao>
      <Botao>Artesanato</Botao>
      <Botao>Tecnologia</Botao>
      <Botao>Educação</Botao>
      <Botao>Saúde</Botao>
      <Botao>Estética</Botao>
      <Botao>Diversos</Botao>
    </div>
  );
}

export default BarraLinks;
