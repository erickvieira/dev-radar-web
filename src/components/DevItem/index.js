import React from 'react'
import './styles.css'

const DevItem = ({ dev }) => (
  <li className="dev-item card">
    <header>
      <img
        src={dev.avatar_url}
        alt={dev.name}
      />
      <div className="user-info">
        <strong>{dev.name}</strong>
        {dev.techs.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>
    </header>
    <p>
      {dev.bio}
    </p>
    <a href={`https://github.com/${dev.github_username}`}>
      Acessar perfil no GitHub
    </a>
  </li>
)

export default DevItem