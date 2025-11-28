import data from '~/../public/data/EmployeeData.json';

import EmployeeSheet from './EmployeeSheet';

const EmployeeDetailsLayout = () => {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-4 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs lg:px-6 @5xl/main:grid-cols-4">
      {data.map((dat, idx) => (
        <EmployeeSheet key={idx} {...dat} />
      ))}
    </div>
  );
};

export default EmployeeDetailsLayout;
