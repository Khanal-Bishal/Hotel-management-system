import React from 'react';
import { PerformanceChart } from './PerformanceChart';
import { PerformanceRanking } from './PerformanceRanking';
import { PerformanceTable } from './PerformanceTable';
import { Spacer } from '../common/Spacer';

const PerformanceLayout = () => {
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
        <PerformanceTable />
      </div>
    </>
  );
};

export default PerformanceLayout;
