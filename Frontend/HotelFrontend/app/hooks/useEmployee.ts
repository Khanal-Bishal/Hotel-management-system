import { useEffect, useState } from 'react';
import { getEmployees } from 'src/services/employeeService';
import type { Employee } from 'src/types/employee';

export function useEmployees() {
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError(null);

      const data: Employee[] = await getEmployees();

      setEmployeeList(data);
    } catch (err) {
      setError('Failed to load employee data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return {
    employeeList,
    loading,
    error,
    refetch: fetchEmployees,
  };
}
