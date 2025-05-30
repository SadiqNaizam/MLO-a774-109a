import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Boxes } from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from 'recharts';

interface BarChartProps {
  className?: string;
}

const barChartData = [
  { name: 'Region 5', sales: 40 },
  { name: 'Region 4', sales: 35 },
  { name: 'Region 3', sales: 116 },
  { name: 'Region 2', sales: 103 },
  { name: 'Region 1', sales: 70 },
];

const totalProductsSold = 364;
const salesDateRange = '06/19/2024 - 06/25/2024';

const BarChart: React.FC<BarChartProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground p-6', className)}>
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-primary-text text-lg font-semibold">
          PRODUCT SALES
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3 h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={barChartData} layout="vertical" margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
              <XAxis type="number" hide axisLine={false} tickLine={false} />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(var(--card-foreground))', fontSize: 12 }}
                width={60} 
              />
              <Tooltip
                cursor={{ fill: 'hsla(var(--card-foreground), 0.1)' }}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--popover))',
                  borderColor: 'hsl(var(--border))',
                  color: 'hsl(var(--popover-foreground))' 
                }}
              />
              <Bar dataKey="sales" fill="hsl(var(--accent))" barSize={18} radius={[0, 4, 4, 0]}>
                <LabelList 
                  dataKey="sales" 
                  position="right" 
                  style={{ fill: 'hsl(var(--card-foreground))', fontSize: 12 }} 
                />
              </Bar>
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-surface p-4 rounded-md">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-2">
            TOTAL PRODUCTS SOLD
          </p>
          <Boxes className="text-accent-blue mb-2" size={48} strokeWidth={1.5} />
          <p className="text-accent-blue text-5xl font-bold mb-2">{totalProductsSold}</p>
          <p className="text-muted-foreground text-xs">{salesDateRange}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarChart;
