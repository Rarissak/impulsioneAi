import React from 'react';
import Botao from "../button/Botao";
import "../barraLinks/barraLinks.css";
import "../../index.css";

function BarraLinks() {
  const barraStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1em',
  };

  return (
    <div style={barraStyle}>
      <Botao>GASTRONOMIA</Botao>
      <Botao>MODA</Botao>
      <Botao>ARTESANATO</Botao>
      <Botao>TECNOLOGIA</Botao>
      <Botao>EDUCAÇÃO</Botao>
      <Botao>SAÚDE</Botao>
      <Botao>ESTÉTICA</Botao>
      <Botao>DIVERSOS</Botao>
    </div>
  );
}

export default BarraLinks;
