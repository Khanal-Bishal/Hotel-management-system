import {
  ChartNoAxesColumnIncreasing,
  ChartNoAxesCombined,
  Loader,
  ThumbsUp,
} from 'lucide-react';

import { Badge } from '~/components/ui/badge';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs lg:px-6 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="text-foreground font-semibold">
            Monthly Attendance Compliance
          </CardDescription>
          <CardTitle className="text-primary text-2xl font-semibold tabular-nums">
            87%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <Loader className="text-primary" />
              Stable
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-foreground line-clamp-1 flex gap-2 font-normal">
            13% attendance issues pending review
            <ChartNoAxesCombined className="size-4" />
          </div>
          <div className="text-muted-foreground">
            5 days left in this month’s cycle
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="text-foreground font-semibold">
            Monthly Performance Overview
          </CardDescription>
          <CardTitle className="text-primary text-2xl font-semibold tabular-nums">
            63%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <Loader className="text-primary" />
              In Progress
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-foreground line-clamp-1 flex gap-2 font-normal">
            37% performance review remain
            <ChartNoAxesCombined className="size-4" />
          </div>
          <div className="text-muted-foreground">
            11 days remain for monthly review
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="text-foreground font-semibold">
            Department Performance Overview
          </CardDescription>
          <CardTitle className="text-primary text-2xl font-semibold tabular-nums">
            Q4-2025
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <ThumbsUp className="text-primary" />
              Rank
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-foreground line-clamp-1 flex gap-2 font-normal">
            HouseKeeping leading the performance chart
            <ChartNoAxesColumnIncreasing className="size-4" />
          </div>
          <div className="text-muted-foreground">4.8/5 review</div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="text-foreground font-semibold">
            Pending Leave Requests
          </CardDescription>
          <CardTitle className="text-primary text-2xl font-semibold tabular-nums">
            12
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <Loader className="text-primary" />
              Approval Needed
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-foreground line-clamp-1 flex gap-2 font-normal">
            Most requests from housekeeping department
            <ChartNoAxesCombined className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Manager review required within 3 days
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
