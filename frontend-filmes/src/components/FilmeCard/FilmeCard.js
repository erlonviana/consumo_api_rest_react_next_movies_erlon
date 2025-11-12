import styles from './FilmeCard.module.css';

const FilmeCard = ({ filme }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.titulo}>{filme.titulo}</h2>
      <div className={styles.info}>
        <p>Diretor: {filme.diretor}</p>
        <p>Ano: {filme.ano}</p>
        <p>Gênero: {filme.genero}</p>
        <p>Duração: {filme.duracao} min</p>
      </div>
    </div>
  );
};

export default FilmeCard;