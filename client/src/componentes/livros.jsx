import React, { useState, useEffect } from 'react';
import LivrosCard from './cardlivros';

export default function Livros({ setToken }) {

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const [livros, setLivros] = useState([]);
  const [generoSelecionado, setGeneroSelecionado] = useState(null);

  useEffect(() => {
    fetch('/api.json')
      .then(res => res.json())
      .then(data => setLivros(data));
  }, []);

  const livrosFiltrados = livros.filter(livro => !generoSelecionado || livro.genero === generoSelecionado);

  return (
    <div className="app-container">
      <button onClick={handleLogout}>Logout</button>
      <ul className='listaAnos'>
        <li><button onClick={() => setGeneroSelecionado("romance")}>Romance</button></li>
        <li><button onClick={() => setGeneroSelecionado("acao")}>Ação</button></li>
        <li><button onClick={() => setGeneroSelecionado("comedia")}>Comédia</button></li>
        <li><button onClick={() => setGeneroSelecionado(null)}>Todos</button></li>
      </ul>
      <hr />
      <div className="livrosCard">
        {livrosFiltrados.map(livro => (
          <LivrosCard key={livro.id} nome={livro.nome} capa={livro.capa} genero={livro.genero} autor={livro.autor} ano={livro.ano_lancamento} />
        ))}
      </div>
    </div>
  );
};


