import React from "react";
import "./Main.css";
import "./Sidebar.css";
import "./App.css";
import "./global.css";

const App = () => {
  return (
    <div id="app">
      <aside className="card">
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item card">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/17013722?v=4" alt="asas" />
              <div className="user-info">
                <strong>Erick Vieira</strong>
                <span>ReactJS</span>
                <span>Angular</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, a in asperiores minima ab tenetur mollitia! Iusto illo, praesentium quo fugit corporis ut debitis repudiandae voluptates reprehenderit exercitationem accusantium officiis.
            </p>
            <a href="https://github.com/erickvieira">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item card">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/17013722?v=4" alt="asas" />
              <div className="user-info">
                <strong>Erick Vieira</strong>
                <span>ReactJS</span>
                <span>Angular</span>
              </div>
            </header>
            <p>
              Doido
            </p>
            <a href="https://github.com/erickvieira">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item card">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/17013722?v=4" alt="asas" />
              <div className="user-info">
                <strong>Erick Vieira</strong>
                <span>ReactJS</span>
                <span>Angular</span>
              </div>
            </header>
            <p>
              Doido
            </p>
            <a href="https://github.com/erickvieira">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item card">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/17013722?v=4" alt="asas" />
              <div className="user-info">
                <strong>Erick Vieira</strong>
                <span>ReactJS</span>
                <span>Angular</span>
              </div>
            </header>
            <p>
              Doido
            </p>
            <a href="https://github.com/erickvieira">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item card">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/17013722?v=4" alt="asas" />
              <div className="user-info">
                <strong>Erick Vieira</strong>
                <span>ReactJS</span>
                <span>Angular</span>
              </div>
            </header>
            <p>
              Doido
            </p>
            <a href="https://github.com/erickvieira">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default App;
