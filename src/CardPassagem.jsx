import React from 'react';
import './CardPassagem.css';

const CardPassagem = () => {
  return (
    <div className="card">
      <img src="300x200.webp" alt="Recife" className="card-image" />
      <div className="card-content">
        <p className="label">PASSAGEM</p>
        <h2 className="title">Voos para Recife</h2>
        <p className="text">Saindo de São Paulo</p>
        <p className="text">Por Gol</p>
        <p className="highlight">Ida e Volta</p>
        <div className="price-section">
          <p className="small-text">Preço ida e volta</p>
          <p className="price">R$ 710</p>
        </div>
      </div>
    </div>
  );
};

export default CardPassagem;
