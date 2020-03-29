import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './Profile.styles.css';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

function Profile() {
  const history = useHistory();
  const ongName = localStorage.getItem('ong_name');
  const ongId = localStorage.getItem('ong_id');

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('profile', {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(response.data);
    }
    loadIncidents();
  }, [ongId]);

  async function handleDeleteIncident(id) {
    await api.delete(`incidents/${id}`, {
      headers: {
        Authorization: ongId,
      },
    });

    setIncidents(incidents.filter(incident => incident.id !== id));
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="be the hero" />
        <span>Bem vinda, {ongName}</span>

        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>

        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
