import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card'; // Use Card for consistency if needed, or just a div
import {
  ResponsiveContainer,
  RadialBarChart as RechartsRadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Label
} from 'recharts';

interface ProgressCircleProps {
  value: number; // Percentage value 0-100
  label: string;
  className?: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  value,
  label,
  className,
}) => {
  const data = [{ name: 'score', value: value }];

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="w-32 h-32 md:w-36 md:h-36 relative">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsRadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="90%"
            barSize={12} // Adjust thickness of the bar
            data={data}
            startAngle={90}
            endAngle={-270} // Full circle from top
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              angleAxisId={0}
              dataKey="value"
              cornerRadius="50%" // Makes the end of the bar rounded
              background={{
                fill: 'hsla(var(--primary-text), 0.1)', // Light track color, e.g., white with opacity
              }}
              fill="hsl(var(--accent))"
            />
            <Label 
              content={({ viewBox }) => {
                if (viewBox && viewBox.cx != null && viewBox.cy != null) {
                  return (
                    <text 
                      x={viewBox.cx} 
                      y={viewBox.cy} 
                      textAnchor="middle" 
                      dominantBaseline="middle" 
                      className="fill-accent-blue text-3xl font-bold"
                    >
                      {`${value}`}
                    </text>
                  );
                }
                return null;
              }}
            />
          </RechartsRadialBarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-card-foreground text-sm font-medium mt-3 text-center">
        {label}
      </p>
    </div>
  );
};

export default ProgressCircle;
