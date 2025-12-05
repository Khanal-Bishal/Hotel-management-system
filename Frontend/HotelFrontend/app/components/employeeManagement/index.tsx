import data from '~/../public/data/EmployeeData.json';
import { EmployeeManagementTable } from './EmployeeManagementTable';
import type { Employee } from 'src/types/employee';

interface EmployeeManagementLayoutProps {
  employeeList: Employee[];
  onDelete: (id: number) => void;
}
const EmployeeManagementLayout = ({
  employeeList,
  onDelete,
}: EmployeeManagementLayoutProps) => {
  return (
    <div>
      <EmployeeManagementTable data={employeeList} onDelete={onDelete} />
    </div>
  );
};

export default EmployeeManagementLayout;
