import api from '~/lib/axios';
import type { DailyPerformance } from 'src/types/dailyPerformance';

export const getDailyPerformance = async (): Promise<DailyPerformance[]> => {
  const response = await api.get('/dailyPerformance');
  return response.data;
};

export const createDailyPerformance = async (
  payload: Omit<DailyPerformance, 'id'>
): Promise<DailyPerformance> => {
  const response = await api.post('/dailyPerformance', payload);
  return response.data;
};
