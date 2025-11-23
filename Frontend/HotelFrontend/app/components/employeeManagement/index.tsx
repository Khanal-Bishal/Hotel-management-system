import { DataTable } from '../data-table';

import data from '../common/data.json';

const EmployeeManagementLayout = () => {
  return (
    <div>
      <DataTable data={data} />
    </div>
  );
};

export default EmployeeManagementLayout;
