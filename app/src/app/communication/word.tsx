import axios from 'axios';
import { apiUrl } from './entity';
import type { note, word_id } from './entity';

export const getRandomWord = async (): Promise<word_id[]> => {
  const token = localStorage.getItem('access_token')
  try {
  if (token) {
      const response = await axios.get(`${apiUrl}/word/random/token`, 
      {headers: {
          Authorization: `Bearer ${token}`,
        },}
      );
      return response.data;
    }
    else {
      const response = await axios.get(`${apiUrl}/word/random`);
      return response.data;
    }
  }
  catch (error) {
    throw error;
  }
};

export const noteWord = async (id: number, note:note):Promise<note> => {
  try {
    const response = await axios.put(`${apiUrl}/word/${id}/${note}`,note, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateWord = async (id: number, wordData: word_id) => {
  try {
    const response = await axios.patch(`${apiUrl}/word/${id}`, wordData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteWord = async (id: number) => {
  try {
    const response = await axios.delete(`${apiUrl}/word/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWordByName = async (name: string): Promise<word_id | null> => {
  try {
    const response = await axios.get(`${apiUrl}/word/name/${name}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (
      (error as { response?: { status?: number } }).response?.status === 404
    ) {
      return null;
    }
    throw error;
  }
};

export const getAllWords = async (): Promise<word_id[]> => {
  try {
    const response = await axios.get(`${apiUrl}/word`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDayWord = async (): Promise<word_id[] | null> => {
  const token = localStorage.getItem('access_token')
  try {
  if (token) {
      const response = await axios.get(`${apiUrl}/word/day/token`, 
      {headers: {
          Authorization: `Bearer ${token}`,
        },}
      );
      return response.data;
    }
    else {
      const response = await axios.get(`${apiUrl}/word/day`);
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getSubString = async (substring:string): Promise<word_id[] | null> => {
  try {
    const response = await axios.get(`${apiUrl}/word/string/${substring}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWordById = async (id: number): Promise<word_id> => {
  try {
    const response = await axios.get(`${apiUrl}/word/id/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const seeWord = async (id_word: number) => {
  try {
    const response = await axios.post(`${apiUrl}/word/${id_word}`, id_word, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getWordsByThemes = async (themeNames: string[]) => {
  const token = localStorage.getItem('access_token')
  try {
    if (token) {
      const response = await axios.get(`${apiUrl}/word/theme/token`,
        {
          params: {
            themes: themeNames,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    }
    else {
      const response = await axios.get(`${apiUrl}/word/theme`,
        {
          params: {
            themes: themeNames,
          },}
      );
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

export const getLikedWords = async (Like:boolean): Promise<word_id[]> => {
  try {
    if (Like) {

      const response = await axios.get(`${apiUrl}/word/liked`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      return response.data;
    }
    else {
      const response = await axios.get(`${apiUrl}/word/disliked`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

export const getPopularWords = async (Like:boolean): Promise<word_id[]> => {
  try {
    if (Like) {
    const response = await axios.get(`${apiUrl}/word/popular`);
    return response.data;
    }
    else {
      const response = await axios.get(`${apiUrl}/word/unpopular`);
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}