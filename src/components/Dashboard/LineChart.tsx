import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';

interface LineChartProps {
  className?: string;
}

const lineChartData = [
  { date: '06/19', visits: 65, pageViews: 82 },
  { date: '06/20', visits: 88, pageViews: 110 },
  { date: '06/21', visits: 35, pageViews: 48 },
  { date: '06/22', visits: 120, pageViews: 135 },
  { date: '06/23', visits: 75, pageViews: 92 },
  { date: '06/24', visits: 42, pageViews: 55 },
  { date: '06/25', visits: 60, pageViews: 78 },
];

const LineChart: React.FC<LineChartProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground p-6', className)}>
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-primary-text text-lg font-semibold">
          WEBSITE TRAFFIC
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={lineChartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="websiteVisitsFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary-text))" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="hsl(var(--primary-text))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsla(var(--border), 0.5)" vertical={false} />
            <XAxis 
              dataKey="date" 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tickLine={{ stroke: 'hsl(var(--border))' }}
            />
            <YAxis 
              tickFormatter={(value) => value.toString()} 
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tickLine={{ stroke: 'hsl(var(--border))' }}
              domain={[0, 'dataMax + 20']}
            />
            <Tooltip
              cursor={{ stroke: 'hsl(var(--accent))', strokeDasharray: '3 3' }}
              contentStyle={{ 
                backgroundColor: 'hsl(var(--popover))',
                borderColor: 'hsl(var(--border))',
                color: 'hsl(var(--popover-foreground))',
                borderRadius: 'var(--radius)'
              }}
            />
            <Legend 
              iconSize={10}
              wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
              formatter={(value) => <span style={{ color: 'hsl(var(--muted-foreground))' }}>{value}</span>}
            />
            <Area
              type="monotone"
              dataKey="visits"
              name="Website Visits"
              stroke="hsl(var(--primary-text))"
              strokeWidth={1}
              fillOpacity={1}
              fill="url(#websiteVisitsFill)"
            />
            <Line
              type="monotone"
              dataKey="pageViews"
              name="Website Page Views"
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              dot={{ r: 4, fill: 'hsl(var(--accent))', strokeWidth: 0 }}
              activeDot={{ r: 6, stroke: 'hsl(var(--background))', strokeWidth: 2 }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChart;
