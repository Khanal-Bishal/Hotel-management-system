import type { ReactNode } from 'react';
import { Badge } from '~/components/ui/badge';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

interface SectionCardsProps {
  title: string;
  value: string | number;
  badgeIcon: ReactNode;
  badgeLabel: string;
  footerText: string;
  footerIcon: ReactNode;
  footerSubText: string;
}

export function SectionCards({
  title,
  value,
  badgeIcon,
  badgeLabel,
  footerText,
  footerIcon,
  footerSubText,
}: SectionCardsProps) {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {value}
        </CardTitle>

        <CardAction>
          <Badge variant="outline" className="flex items-center gap-1">
            {badgeIcon}
            {badgeLabel}
          </Badge>
        </CardAction>
      </CardHeader>

      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="text-foreground line-clamp-1 flex gap-2 font-normal">
          {footerText}
          {footerIcon}
        </div>

        <div className="text-muted-foreground">{footerSubText}</div>
      </CardFooter>
    </Card>
  );
}
