import type { Employee } from 'src/types/employee';
import EmployeeSheet from './EmployeeSheet';

interface EmployeeDetailsLayoutProps {
  employeeList: Employee[];
}

const EmployeeDetailsLayout = ({
  employeeList,
}: EmployeeDetailsLayoutProps) => {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-4 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs lg:px-6 @5xl/main:grid-cols-4">
      {employeeList.map((employee, idx) => (
        <EmployeeSheet key={idx} {...employee} />
      ))}
    </div>
  );
};

export default EmployeeDetailsLayout;
