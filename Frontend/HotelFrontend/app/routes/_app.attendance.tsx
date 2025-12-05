import AttendanceLayout from '~/components/attendance';
import { useEmployees } from '~/hooks/useEmployee';

const Attendance = () => {
  const { employeeList, loading, error } = useEmployees();

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div>{error}</div>;
  return <AttendanceLayout employeeList={employeeList} />;
};

export default Attendance;
