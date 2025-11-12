import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // URL do seu back-end
});

export const getFilmes = async () => {
  try {
    const response = await api.get('/filmes');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    return [];
  }
};