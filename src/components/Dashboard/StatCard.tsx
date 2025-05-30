import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string;
  dateRange?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  dateRange,
  className,
}) => {
  return (
    <Card className={cn('bg-card text-card-foreground p-6', className)}>
      <CardHeader className="p-0 mb-2">
        <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
          {title}
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-primary-text text-4xl font-bold">{value}</p>
        {dateRange && (
          <p className="text-muted-foreground text-xs mt-1">{dateRange}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
