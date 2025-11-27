import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import IconWrapper from '../common/IconWrapper';
import { Badge } from '../ui/badge';
import { Spacer } from '../common/Spacer';
import { ChefHat, ClipboardList, Home, Trophy, Users } from 'lucide-react';

const performanceRanking = [
  {
    department: 'HouseKeeping',
    performance: 4.9,
  },
  {
    department: 'HR',
    performance: 4.8,
  },
  {
    department: 'Administration',
    performance: 4.1,
  },
  {
    department: 'Culinary',
    performance: 3.4,
  },
];

export const getDepartmentIcon = (department: string) => {
  switch (department.toLowerCase().trim()) {
    case 'culinary':
      return <ChefHat className="text-primary size-4" />;

    case 'hr':
      return <Users className="text-primary size-4" />;

    case 'administration':
      return <ClipboardList className="text-primary size-4" />;

    case 'housekeeping':
      return <Home className="text-primary size-4" />;

    default:
      return null;
  }
};

export function PerformanceRanking() {
  return (
    <Card className="w-full max-w-sm rounded-md">
      <CardHeader>
        <CardTitle className="grow">
          <div className="flex items-center justify-between font-semibold">
            Performance Ranking
            <Trophy size={30} fill="primary" className="text-primary" />
          </div>
        </CardTitle>
        <CardDescription>Performance output of each department</CardDescription>
      </CardHeader>
      <Spacer size="4xs" />
      <CardContent className="flex flex-col justify-between gap-2">
        {performanceRanking.map(({ department, performance }, index) => {
          return (
            <Card key={department} className="p-4">
              <CardContent className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-4">
                  <IconWrapper size="xs" variant="default">
                    {getDepartmentIcon(department)}
                  </IconWrapper>
                  <span className="text-xs font-semibold tracking-wide uppercase">
                    {department}
                  </span>
                </div>

                <Badge variant={'default'} className="py-0 text-xs">
                  {performance}/5
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
