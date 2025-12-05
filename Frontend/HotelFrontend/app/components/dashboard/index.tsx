import { SectionCards } from '../common/sectionCards';
import { ChartAreaInteractive } from './chartInteractiveArea';
import { Spacer } from '../common/Spacer';
import {
  ChartNoAxesColumnIncreasing,
  ChartNoAxesCombined,
  Loader,
  ThumbsUp,
} from 'lucide-react';
import type { DailyPerformance } from 'src/types/dailyPerformance';
import { NewDailyPerformanceSheet } from './NewDailyPerformanceSheet';

export const dashboardCards = [
  {
    title: 'Monthly Attendance Compliance',
    value: '87%',
    badgeLabel: 'Stable',
    badgeIcon: <Loader className="text-primary" />,
    footerText: '13% attendance issues pending review',
    footerSubText: '5 days left in this month’s cycle',
    footerIcon: <ChartNoAxesCombined className="size-4" />,
  },
  {
    title: 'Monthly Performance Overview',
    value: '63%',
    badgeLabel: 'In Progress',
    badgeIcon: <Loader className="text-primary" />,
    footerText: '37% performance review remain',
    footerSubText: '11 days remain for monthly review',
    footerIcon: <ChartNoAxesCombined className="size-4" />,
  },
  {
    title: 'Department Performance Overview',
    value: 'Q4-2025',
    badgeLabel: 'Rank',
    badgeIcon: <ThumbsUp className="text-primary" />,
    footerText: 'HouseKeeping leading the performance chart',
    footerSubText: '4.8/5 review',
    footerIcon: <ChartNoAxesColumnIncreasing className="size-4" />,
  },
  {
    title: 'Pending Leave Requests',
    value: 12,
    badgeLabel: 'Approval Needed',
    badgeIcon: <Loader className="text-primary" />,
    footerText: 'Most requests from housekeeping department',
    footerSubText: 'Manager review required within 3 days',
    footerIcon: <ChartNoAxesCombined className="size-4" />,
  },
];

interface DashboardLayoutProps {
  dailyPerformanceData: DailyPerformance[];
  onRefresh: () => void;
}

export default function DashboardLayout({
  dailyPerformanceData,
  onRefresh,
}: DashboardLayoutProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs lg:px-6 @5xl/main:grid-cols-4">
        {dashboardCards.map((card, idx) => (
          <SectionCards key={idx} {...card} />
        ))}
      </div>
      <Spacer size="4xs" />
      <div className="px-4 lg:px-6">
        <NewDailyPerformanceSheet onSuccess={onRefresh} /> <Spacer size="4xs" />
        <ChartAreaInteractive dailyPerformanceData={dailyPerformanceData} />
      </div>
      <Spacer size="4xs" />
    </div>
  );
}
