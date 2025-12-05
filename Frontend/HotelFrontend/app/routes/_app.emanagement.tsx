import { deleteEmployee } from 'src/services/employeeService';
import EmployeeManagementLayout from '~/components/employeeManagement';
import { useEmployees } from '~/hooks/useEmployee';

const EmployeeManagement = () => {
  const { employeeList, loading, error, refetch } = useEmployees();

  const handleDelete = async (id: number) => {
    try {
      await deleteEmployee(id);
      await refetch();
    } catch (err) {
      alert('Failed to delete employee');
    }
  };

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div>{error}</div>;
  return (
    <EmployeeManagementLayout
      employeeList={employeeList}
      onDelete={handleDelete}
    />
  );
};

export default EmployeeManagement;
