import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { useIsMobile } from '~/hooks/use-mobile';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '~/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group';

export const description = 'An interactive area chart';

const chartData = [
  // -------- SEPTEMBER 2025 --------
  {
    date: '2025-09-01',
    housekeeping: 78,
    culinary: 62,
    hr: 41,
    Administration: 55,
  },
  {
    date: '2025-09-02',
    housekeeping: 82,
    culinary: 68,
    hr: 44,
    Administration: 59,
  },
  {
    date: '2025-09-03',
    housekeeping: 74,
    culinary: 71,
    hr: 47,
    Administration: 61,
  },
  {
    date: '2025-09-04',
    housekeeping: 69,
    culinary: 75,
    hr: 43,
    Administration: 58,
  },
  {
    date: '2025-09-05',
    housekeeping: 65,
    culinary: 79,
    hr: 48,
    Administration: 60,
  },
  {
    date: '2025-09-06',
    housekeeping: 72,
    culinary: 83,
    hr: 52,
    Administration: 63,
  },
  {
    date: '2025-09-07',
    housekeeping: 59,
    culinary: 76,
    hr: 45,
    Administration: 57,
  },
  {
    date: '2025-09-08',
    housekeeping: 55,
    culinary: 73,
    hr: 42,
    Administration: 54,
  },
  {
    date: '2025-09-09',
    housekeeping: 62,
    culinary: 77,
    hr: 46,
    Administration: 56,
  },
  {
    date: '2025-09-10',
    housekeeping: 71,
    culinary: 81,
    hr: 51,
    Administration: 62,
  },
  {
    date: '2025-09-11',
    housekeeping: 79,
    culinary: 86,
    hr: 54,
    Administration: 65,
  },
  {
    date: '2025-09-12',
    housekeeping: 83,
    culinary: 88,
    hr: 57,
    Administration: 68,
  },
  {
    date: '2025-09-13',
    housekeeping: 74,
    culinary: 82,
    hr: 49,
    Administration: 60,
  },
  {
    date: '2025-09-14',
    housekeeping: 68,
    culinary: 78,
    hr: 46,
    Administration: 57,
  },
  {
    date: '2025-09-15',
    housekeeping: 63,
    culinary: 74,
    hr: 43,
    Administration: 54,
  },
  {
    date: '2025-09-16',
    housekeeping: 59,
    culinary: 71,
    hr: 41,
    Administration: 52,
  },
  {
    date: '2025-09-17',
    housekeeping: 66,
    culinary: 76,
    hr: 45,
    Administration: 55,
  },
  {
    date: '2025-09-18',
    housekeeping: 72,
    culinary: 81,
    hr: 49,
    Administration: 60,
  },
  {
    date: '2025-09-19',
    housekeeping: 78,
    culinary: 87,
    hr: 52,
    Administration: 63,
  },
  {
    date: '2025-09-20',
    housekeeping: 85,
    culinary: 92,
    hr: 55,
    Administration: 67,
  },
  {
    date: '2025-09-21',
    housekeeping: 79,
    culinary: 84,
    hr: 50,
    Administration: 61,
  },
  {
    date: '2025-09-22',
    housekeeping: 71,
    culinary: 78,
    hr: 47,
    Administration: 58,
  },
  {
    date: '2025-09-23',
    housekeeping: 68,
    culinary: 75,
    hr: 45,
    Administration: 56,
  },
  {
    date: '2025-09-24',
    housekeeping: 76,
    culinary: 82,
    hr: 52,
    Administration: 60,
  },
  {
    date: '2025-09-25',
    housekeeping: 81,
    culinary: 88,
    hr: 54,
    Administration: 64,
  },
  {
    date: '2025-09-26',
    housekeeping: 73,
    culinary: 79,
    hr: 50,
    Administration: 59,
  },
  {
    date: '2025-09-27',
    housekeeping: 66,
    culinary: 72,
    hr: 44,
    Administration: 53,
  },
  {
    date: '2025-09-28',
    housekeeping: 59,
    culinary: 69,
    hr: 41,
    Administration: 50,
  },
  {
    date: '2025-09-29',
    housekeeping: 64,
    culinary: 73,
    hr: 45,
    Administration: 53,
  },
  {
    date: '2025-09-30',
    housekeeping: 71,
    culinary: 79,
    hr: 49,
    Administration: 58,
  },

  // -------- OCTOBER 2025 --------
  {
    date: '2025-10-01',
    housekeeping: 75,
    culinary: 81,
    hr: 52,
    Administration: 60,
  },
  {
    date: '2025-10-02',
    housekeeping: 79,
    culinary: 85,
    hr: 56,
    Administration: 63,
  },
  {
    date: '2025-10-03',
    housekeeping: 71,
    culinary: 76,
    hr: 48,
    Administration: 57,
  },
  {
    date: '2025-10-04',
    housekeeping: 63,
    culinary: 70,
    hr: 44,
    Administration: 54,
  },
  {
    date: '2025-10-05',
    housekeeping: 57,
    culinary: 66,
    hr: 41,
    Administration: 50,
  },
  {
    date: '2025-10-06',
    housekeeping: 63,
    culinary: 72,
    hr: 45,
    Administration: 54,
  },
  {
    date: '2025-10-07',
    housekeeping: 69,
    culinary: 79,
    hr: 49,
    Administration: 58,
  },
  {
    date: '2025-10-08',
    housekeeping: 76,
    culinary: 84,
    hr: 53,
    Administration: 61,
  },
  {
    date: '2025-10-09',
    housekeeping: 82,
    culinary: 89,
    hr: 57,
    Administration: 65,
  },
  {
    date: '2025-10-10',
    housekeeping: 88,
    culinary: 93,
    hr: 61,
    Administration: 68,
  },
  {
    date: '2025-10-11',
    housekeeping: 81,
    culinary: 87,
    hr: 56,
    Administration: 62,
  },
  {
    date: '2025-10-12',
    housekeeping: 73,
    culinary: 79,
    hr: 49,
    Administration: 58,
  },
  {
    date: '2025-10-13',
    housekeeping: 66,
    culinary: 72,
    hr: 45,
    Administration: 55,
  },
  {
    date: '2025-10-14',
    housekeeping: 70,
    culinary: 76,
    hr: 48,
    Administration: 57,
  },
  {
    date: '2025-10-15',
    housekeeping: 75,
    culinary: 81,
    hr: 52,
    Administration: 60,
  },
  {
    date: '2025-10-16',
    housekeeping: 80,
    culinary: 87,
    hr: 55,
    Administration: 64,
  },
  {
    date: '2025-10-17',
    housekeeping: 84,
    culinary: 92,
    hr: 59,
    Administration: 67,
  },
  {
    date: '2025-10-18',
    housekeeping: 77,
    culinary: 84,
    hr: 52,
    Administration: 60,
  },
  {
    date: '2025-10-19',
    housekeeping: 70,
    culinary: 76,
    hr: 46,
    Administration: 56,
  },
  {
    date: '2025-10-20',
    housekeeping: 62,
    culinary: 70,
    hr: 42,
    Administration: 52,
  },
  {
    date: '2025-10-21',
    housekeeping: 67,
    culinary: 74,
    hr: 45,
    Administration: 55,
  },
  {
    date: '2025-10-22',
    housekeeping: 73,
    culinary: 80,
    hr: 50,
    Administration: 59,
  },
  {
    date: '2025-10-23',
    housekeeping: 78,
    culinary: 86,
    hr: 54,
    Administration: 63,
  },
  {
    date: '2025-10-24',
    housekeeping: 83,
    culinary: 90,
    hr: 59,
    Administration: 67,
  },
  {
    date: '2025-10-25',
    housekeeping: 76,
    culinary: 82,
    hr: 52,
    Administration: 60,
  },
  {
    date: '2025-10-26',
    housekeeping: 69,
    culinary: 74,
    hr: 47,
    Administration: 56,
  },
  {
    date: '2025-10-27',
    housekeeping: 63,
    culinary: 69,
    hr: 43,
    Administration: 51,
  },
  {
    date: '2025-10-28',
    housekeeping: 68,
    culinary: 74,
    hr: 47,
    Administration: 55,
  },
  {
    date: '2025-10-29',
    housekeeping: 73,
    culinary: 79,
    hr: 51,
    Administration: 58,
  },
  {
    date: '2025-10-30',
    housekeeping: 79,
    culinary: 85,
    hr: 55,
    Administration: 63,
  },
  {
    date: '2025-10-31',
    housekeeping: 84,
    culinary: 90,
    hr: 59,
    Administration: 67,
  },

  // -------- NOVEMBER 2025 --------
  {
    date: '2025-11-01',
    housekeeping: 78,
    culinary: 84,
    hr: 55,
    Administration: 63,
  },
  {
    date: '2025-11-02',
    housekeeping: 72,
    culinary: 78,
    hr: 50,
    Administration: 59,
  },
  {
    date: '2025-11-03',
    housekeeping: 65,
    culinary: 72,
    hr: 45,
    Administration: 55,
  },
  {
    date: '2025-11-04',
    housekeeping: 69,
    culinary: 76,
    hr: 48,
    Administration: 57,
  },
  {
    date: '2025-11-05',
    housekeeping: 74,
    culinary: 81,
    hr: 52,
    Administration: 61,
  },
  {
    date: '2025-11-06',
    housekeeping: 79,
    culinary: 86,
    hr: 56,
    Administration: 64,
  },
  {
    date: '2025-11-07',
    housekeeping: 83,
    culinary: 91,
    hr: 60,
    Administration: 67,
  },
  {
    date: '2025-11-08',
    housekeeping: 77,
    culinary: 84,
    hr: 54,
    Administration: 62,
  },
  {
    date: '2025-11-09',
    housekeeping: 70,
    culinary: 76,
    hr: 48,
    Administration: 57,
  },
  {
    date: '2025-11-10',
    housekeeping: 64,
    culinary: 70,
    hr: 44,
    Administration: 53,
  },
  {
    date: '2025-11-11',
    housekeeping: 69,
    culinary: 75,
    hr: 48,
    Administration: 56,
  },
  {
    date: '2025-11-12',
    housekeeping: 75,
    culinary: 81,
    hr: 52,
    Administration: 60,
  },
  {
    date: '2025-11-13',
    housekeeping: 80,
    culinary: 87,
    hr: 57,
    Administration: 63,
  },
  {
    date: '2025-11-14',
    housekeeping: 85,
    culinary: 92,
    hr: 60,
    Administration: 66,
  },
  {
    date: '2025-11-15',
    housekeeping: 79,
    culinary: 85,
    hr: 55,
    Administration: 62,
  },
  {
    date: '2025-11-16',
    housekeeping: 72,
    culinary: 78,
    hr: 50,
    Administration: 58,
  },
  {
    date: '2025-11-17',
    housekeeping: 65,
    culinary: 71,
    hr: 45,
    Administration: 54,
  },
  {
    date: '2025-11-18',
    housekeeping: 70,
    culinary: 77,
    hr: 49,
    Administration: 57,
  },
  {
    date: '2025-11-19',
    housekeeping: 75,
    culinary: 83,
    hr: 53,
    Administration: 60,
  },
  {
    date: '2025-11-20',
    housekeeping: 81,
    culinary: 89,
    hr: 57,
    Administration: 64,
  },
  {
    date: '2025-11-21',
    housekeeping: 87,
    culinary: 94,
    hr: 61,
    Administration: 68,
  },
  {
    date: '2025-11-22',
    housekeeping: 79,
    culinary: 86,
    hr: 54,
    Administration: 61,
  },
  {
    date: '2025-11-23',
    housekeeping: 72,
    culinary: 78,
    hr: 49,
    Administration: 57,
  },
  {
    date: '2025-11-24',
    housekeeping: 66,
    culinary: 72,
    hr: 44,
    Administration: 53,
  },
  {
    date: '2025-11-25',
    housekeeping: 70,
    culinary: 77,
    hr: 48,
    Administration: 56,
  },
  {
    date: '2025-11-26',
    housekeeping: 75,
    culinary: 82,
    hr: 52,
    Administration: 60,
  },
  {
    date: '2025-11-27',
    housekeeping: 81,
    culinary: 88,
    hr: 56,
    Administration: 63,
  },
  {
    date: '2025-11-28',
    housekeeping: 86,
    culinary: 93,
    hr: 60,
    Administration: 67,
  },
  {
    date: '2025-11-29',
    housekeeping: 79,
    culinary: 85,
    hr: 54,
    Administration: 61,
  },
  {
    date: '2025-11-30',
    housekeeping: 73,
    culinary: 79,
    hr: 51,
    Administration: 58,
  },
];

const chartConfig = {
  housekeeping: {
    label: 'Housekeeping',
    color: 'var(--primary)',
  },
  culinary: {
    label: 'Culinary',
    color: 'var(--primary)',
  },
  hr: {
    label: 'HR',
    color: 'var(--primary)',
  },
  Administration: {
    label: 'Administration',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState('90d');

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange('7d');
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date('2025-11-30');
    let daysToSubtract = 90;
    if (timeRange === '30d') {
      daysToSubtract = 30;
    } else if (timeRange === '7d') {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Daily Performance Score</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Performance Score for last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[760px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[150px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="housekeeping"
              type="natural"
              fill="url(#fillHousekeeping)"
              stroke="var(--color-housekeeping)"
              stackId="a"
            />
            <Area
              dataKey="culinary"
              type="natural"
              fill="url(#fillCulinary)"
              stroke="var(--color-culinary)"
              stackId="a"
            />
            <Area
              dataKey="hr"
              type="natural"
              fill="url(#fillHr)"
              stroke="var(--color-hr)"
              stackId="a"
            />
            <Area
              dataKey="Administration"
              type="natural"
              fill="url(#fillAdministration)"
              stroke="var(--color-Administration)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
