import api from '~/lib/axios';
import type { Employee } from 'src/types/employee';

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await api.get('/employees');
  return response.data;
};

export const deleteEmployee = async (id: number): Promise<void> => {
  await api.delete(`/employees/${id}`);
};

export const createEmployee = async (
  payload: Omit<Employee, 'id'>
): Promise<Employee> => {
  const res = await api.post('/employees', payload);
  return res.data;
};

export const updateEmployee = async (id: number, data: any) => {
  const res = await api.put(`/employees/${id}`, data);
  return res.data;
};
