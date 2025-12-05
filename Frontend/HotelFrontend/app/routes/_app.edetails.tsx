import EmployeeDetailsLayout from '~/components/employeeDetails';
import { useEmployees } from '~/hooks/useEmployee';

const EmployeeDetails = () => {
  const { employeeList, loading, error } = useEmployees();

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div>{error}</div>;

  return <EmployeeDetailsLayout employeeList={employeeList} />;
};

export default EmployeeDetails;
