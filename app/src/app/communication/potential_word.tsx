import axios from 'axios';
import { apiUrl, word } from './entity';
import { potential_word_id } from './entity';

export const getPotentialWords = async (): Promise<potential_word_id[]> => {
  try {
    console.log('Enter');
    const response = await axios.get(`${apiUrl}/potential-word`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPotentialWord = async (
  potentialWord: word,
  word: number,
) => {
  try {
    console.log(localStorage.getItem('access_token'));
    const response = await axios.post(
      `${apiUrl}/potential-word/${word}`,
      potentialWord,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const rejectPotentialWord = async (id: number) => {
  try {
    const response = await axios.delete(`${apiUrl}/potential-word/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const acceptPotentialWord = async (id: number, word: word) => {
  try {
    const response = await axios.post(
      `${apiUrl}/potential-word/validate/${id}`,
      word,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
