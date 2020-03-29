import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './Login.styles.css';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
function Login() {
  const history = useHistory();
  const [id, setId] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('session', { id });

      localStorage.setItem('ong_id', id);
      localStorage.setItem('ong_name', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente');
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Be the hero" />
    </div>
  );
}

export default Login;
