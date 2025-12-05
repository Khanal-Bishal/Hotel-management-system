import React from 'react';
import PerformanceLayout from '~/components/performance';
import { useEmployees } from '~/hooks/useEmployee';

const Performance = () => {
  const { employeeList, loading, error } = useEmployees();

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div>{error}</div>;
  return <PerformanceLayout employeeList={employeeList} />;
};

export default Performance;
