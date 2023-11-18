import axios from 'axios';
import { apiUrl } from './entity';
import type { word_id } from './entity';

export const getRandomWord = async (): Promise<word_id[]> => {
  try {
    const response = await axios.get(`${apiUrl}/word/random`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const noteWord = async (id: number, note: boolean) => {
  try {
    const response = await axios.put(`${apiUrl}/word/${id}`, { note });
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
    const response = await axios.get(`${apiUrl}/word/${name}`);
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
  try {
    const response = await axios.get(`${apiUrl}/word/day`);
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
