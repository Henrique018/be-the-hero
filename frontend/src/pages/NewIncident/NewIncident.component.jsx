import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import './NewIncident.styles.css';

function NewIncident() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [incidentValue, setIncidentValue] = useState('');

  async function handleNewIncident(e) {
    e.preventDefault();
    const ongId = localStorage.getItem('ong_id');
    const data = {
      title,
      description,
      value: incidentValue,
    };
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso');
    }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be the hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva detalhadamente o caso para encontrar um herói que possa
            resolver isso.
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="descrição..."
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Valor em reais"
            value={incidentValue}
            onChange={e => setIncidentValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;
