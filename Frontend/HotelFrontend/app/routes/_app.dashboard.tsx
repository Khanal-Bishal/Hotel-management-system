import { useEffect, useState } from 'react';
import { getDailyPerformance } from 'src/services/dailyPerformanceService';
import type { DailyPerformance } from 'src/types/dailyPerformance';
import DashboardLayout from '~/components/dashboard';

const Dashboard = () => {
  const [dailyPerformanceData, setDailyPerformanceData] = useState<
    DailyPerformance[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDailyPerformance = async () => {
    try {
      const data = await getDailyPerformance();
      setDailyPerformanceData(data);
    } catch (err) {
      setError('Failed to load daily performance data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDailyPerformance();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div>{error}</div>;

  return (
    <DashboardLayout
      dailyPerformanceData={dailyPerformanceData}
      onRefresh={fetchDailyPerformance}
    />
  );
};

export default Dashboard;
