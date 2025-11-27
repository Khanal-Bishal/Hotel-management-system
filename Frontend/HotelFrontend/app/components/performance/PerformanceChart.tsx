import { ChartPie, TrendingUp } from 'lucide-react';
import { Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '~/components/ui/chart';
import { Badge } from '../ui/badge';

export const description = 'A pie chart with no separator';

const chartData = [
  { quarter: 'Quarter-1', performance: 20, fill: 'brown' },
  { quarter: 'Quarter-2', performance: 40, fill: 'orange' },
  { quarter: 'Quarter-3', performance: 10, fill: 'white' },
  { quarter: 'Quarter-4', performance: 30, fill: 'gray' },
];

const chartConfig = {
  quarter1: {
    label: 'Quarter-1',
    color: 'var(primary)',
  },
  quarter2: {
    label: 'Quarter-2',
    color: 'var(--chart-3)',
  },
  quarter3: {
    label: 'Quarter-3',
    color: 'var(--chart-4)',
  },
  quarter4: {
    label: 'Quarter-4',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig;

export function PerformanceChart() {
  return (
    <Card className="flex grow flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="flex items-center justify-between">
          <span className="text-primary font-bold">Performance Pie Chart</span>
          <span>
            <ChartPie size={30} className="text-primary" />
          </span>
        </CardTitle>
        <CardDescription className="text-foreground text-xs">
          <div className="text-muted-foreground flex items-center gap-2">
            July - December
            <Badge variant={'outline'}>20%+</Badge>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="performance"
              nameKey="quarter"
              stroke="1"
            />
          </PieChart>
          {/* </div> */}
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Increase in performance by 20% this quarter{' '}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Performance output for each quarter
        </div>
      </CardFooter>
    </Card>
  );
}
