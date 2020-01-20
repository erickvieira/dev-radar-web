import React, { useState, useEffect } from "react"
import './styles.css'

const DevForm = ({ onSubmit }) => {
  const [github_username, setGithub_username] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { coords } = position;
        const { latitude, longitude } = coords;
        setLatitude(latitude.toFixed(6));
        setLongitude(longitude.toFixed(6));
      },
      console.error,
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault()

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    })

    setGithub_username('')
    setTechs('')
  } 

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input
          value={github_username}
          onChange={e => setGithub_username(e.target.value)}
          name="github_username"
          id="github_username"
          required
        />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          value={techs}
          onChange={e => setTechs(e.target.value)}
          name="techs"
          id="techs"
          required
        />
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            name="latitude"
            id="latitude"
            required
          />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
            name="longitude"
            id="longitude"
            required
          />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default DevForm
