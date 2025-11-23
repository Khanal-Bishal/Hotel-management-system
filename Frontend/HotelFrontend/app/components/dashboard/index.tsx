import { SectionCards } from './sectionCards';
import { ChartAreaInteractive } from './chartInteractiveArea';
import { Spacer } from '../common/Spacer';

export default function DashboardLayout() {
  return (
    <div className="">
      <div className="">
        <SectionCards />
        <Spacer size="4xs" />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        <Spacer size="4xs" />
      </div>
    </div>
  );
}
