import api from '~/lib/axios';
import type { Employee } from 'src/types/employee';

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await api.get('/employees');
  return response.data;
};

export const deleteEmployee = async (id: number): Promise<void> => {
  await api.delete(`/employees/${id}`);
};
