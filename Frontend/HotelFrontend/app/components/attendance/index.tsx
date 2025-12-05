import data from '~/../public/data/EmployeeData.json';
import { AttendanceTable } from './AttendanceTable';
import type { Employee } from 'src/types/employee';

interface AttendanceLayoutProps {
  employeeList: Employee[];
}

const AttendanceLayout = ({ employeeList }: AttendanceLayoutProps) => {
  return <AttendanceTable data={employeeList} />;
};

export default AttendanceLayout;
