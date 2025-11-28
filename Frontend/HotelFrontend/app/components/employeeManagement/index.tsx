import data from '~/../public/data/EmployeeData.json';
import { EmployeeManagementTable } from './EmployeeManagementTable';

const EmployeeManagementLayout = () => {
  return (
    <div>
      <EmployeeManagementTable data={data} />
    </div>
  );
};

export default EmployeeManagementLayout;
