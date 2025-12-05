import { PerformanceChart } from './PerformanceChart';
import { PerformanceRanking } from './PerformanceRanking';
import { PerformanceTable } from './PerformanceTable';
import { Spacer } from '../common/Spacer';
import type { Employee } from 'src/types/employee';

interface PerformanceLayoutProps {
  employeeList: Employee[];
}

const PerformanceLayout = ({ employeeList }: PerformanceLayoutProps) => {
  return (
    <>
      <div className="flex w-full grow gap-4">
        <PerformanceChart />
        <PerformanceRanking />
      </div>
      <Spacer size="3xs" />
      <div className="">
        <span className="text-primary mx-4 text-lg font-bold tracking-wide">
          Performance table
        </span>
        <PerformanceTable data={employeeList} />
      </div>
    </>
  );
};

export default PerformanceLayout;
