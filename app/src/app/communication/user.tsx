import axios from 'axios';
import { apiUrl } from './entity';
import type { user, user_id } from './entity';

export const createUser = async (user: user): Promise<boolean> => {
  try {
    console.log(user);
    const response = await axios.post(`${apiUrl}/user`, user);
    if (!response || !response.data) return false;
    localStorage.setItem('access_token', response.data.access_token);
    return true;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  try {
    await axios.delete(`${apiUrl}/user/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (id: number, newPassword: string) => {
  try {
    await axios.patch(`${apiUrl}/user/${id}/password`, { newPassword });
  } catch (error) {
    throw error;
  }
};

export const changeEmail = async (id: number, newEmail: string) => {
  try {
    await axios.patch(`${apiUrl}/user/${id}/email`, { newEmail });
  } catch (error) {
    throw error;
  }
};

export const isUser = async (id: number) => {
  try {
    const response = await axios.get(`${apiUrl}/user/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (user: user): Promise<boolean> => {
  try {
    console.log(user);
    const response = await axios.post(`${apiUrl}/user/login`, user);
    if (response && response.data && response.data.access_token) {
      localStorage.setItem('access_token', response.data.access_token);
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};
