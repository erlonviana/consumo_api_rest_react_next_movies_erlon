import { useState, useEffect } from 'react';
import { getFilmes } from '../../services/api';
import FilmeCard from '../FilmeCard/FilmeCard';
import styles from './FilmeLista.module.css';

const FilmeLista = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const carregarFilmes = async () => {
      const dados = await getFilmes();
      setFilmes(dados);
    };
    carregarFilmes();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Catálogo de Filmes</h1>
      <div className={styles.lista}>
        {filmes.map((filme) => (
          <FilmeCard key={filme.id} filme={filme} />
        ))}
      </div>
    </div>
  );
};

export default FilmeLista;