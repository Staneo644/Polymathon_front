import axios from 'axios';
import { apiUrl } from './entity';
import type { theme, theme_id } from './entity';

export const getThemes = async (): Promise<theme_id[]> => {
  try {
    const response = await axios.get(`${apiUrl}/theme`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addTheme = async (themeData: theme) => {
  try {
    const response = await axios.post(`${apiUrl}/theme`, themeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTheme = async (themeId: number) => {
  try {
    await axios.delete(`${apiUrl}/theme/${themeId}`);
  } catch (error) {
    throw error;
  }
};

export const getRandomWordsByTheme = async (themeId: number) => {
  try {
    const response = await axios.get(`${apiUrl}/theme/${themeId}/random-word`);
    return response.data;
  } catch (error) {
    throw error;
  }
};