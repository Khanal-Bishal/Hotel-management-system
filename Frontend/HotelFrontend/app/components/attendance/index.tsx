import data from '~/../public/data/EmployeeData.json';
import { AttendanceTable } from './AttendanceTable';

const AttendanceLayout = () => {
  return <AttendanceTable data={data} />;
};

export default AttendanceLayout;
