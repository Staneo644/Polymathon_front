import axios from 'axios';
import { apiUrl } from './entity';
import type { word_id } from './entity';


export const getRandomWord = async ():Promise<word_id> => {
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
  
  export const getWordByName = async (name: string): Promise<word_id> => {
    try {
      const response = await axios.get(`${apiUrl}/word/word`, { data: { name } });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getAllWords = async ():Promise<word_id[]> => {
    try {
      const response = await axios.get(`${apiUrl}/word`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };