import React from 'react';
import StatCard from '../components/Dashboard/StatCard';
import BarChart from '../components/Dashboard/BarChart';
import LineChart from '../components/Dashboard/LineChart';
import ProgressCircle from '../components/Dashboard/ProgressCircle';
import { CalendarDays } from 'lucide-react';

// Data for components
const statCardData = [
  { title: "REVENUE", value: "$92,463" },
  { title: "PRODUCTION OUTPUT", value: "315" },
  { title: "CUSTOMER SATISFACTION SCORE", value: "91%" },
  { title: "EMPLOYEE ATTENDANCE", value: "96%" },
] as const;

const progressCircleData = [
  { value: 85, label: "SCORE #1" },
  { value: 73, label: "SCORE #2" },
  { value: 92, label: "SCORE #3" },
  { value: 54, label: "SCORE #4" },
  { value: 75, label: "SCORE #5" },
] as const;

const WeeklyOverviewDashboardPage: React.FC = () => {
  return (
    // Overall layout: "grid-rows-[auto_auto_1fr] gap-6 p-6"
    <div className="grid grid-rows-[auto_auto_1fr] gap-6 p-6 min-h-screen bg-background text-foreground">
      
      {/* Row 1: Header (auto) */}
      {/* Header layout: "flex items-center justify-between px-6 bg-surface", height: "h-[70px]" */}
      <header className="h-[70px] flex items-center justify-between px-6 bg-surface rounded-lg shadow">
        <h1 className="text-lg md:text-xl font-semibold text-primary-text">
          WEEKLY STATUS DASHBOARD
        </h1>
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 text-xs sm:text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4 md:h-5 md:w-5 text-accent-gray flex-shrink-0" />
          <span className="hidden lg:inline whitespace-nowrap">ENTER START DATE</span> 
          <span className="font-medium text-foreground whitespace-nowrap">06/19/2024</span>
          <span className="hidden md:inline mx-1 whitespace-nowrap">THROUGH</span>
          <span className="font-medium text-foreground whitespace-nowrap">06/25/2024</span>
        </div>
      </header>

      {/* Row 2: Main Content (auto) */}
      {/* MainContent sizing: "min-w-0 overflow-y-auto" */}
      {/* MainContent layout: "grid grid-cols-2 gap-6 p-6" */}
      {/* This main element is the scrollable container (grid cell is 'auto' height, overflow is handled by this element) */}
      {/* It also acts as the content grid per mainContent.layout. */}
      <main className="min-w-0 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg shadow bg-transparent">
        {/* StatCards, BarChart, LineChart will use their own 'bg-card' and padding. */}
        {/* Main content area background should be transparent to show page 'bg-background'. */}
        {/* The 'p-6' on main creates padding around the grid of cards. */}
        
        {statCardData.map((stat, index) => (
          <StatCard 
            key={index} 
            title={stat.title} 
            value={stat.value} 
          />
        ))}
        
        <BarChart />
        <LineChart />

        {/* Progress Circles Container - spans 2 columns in this main grid */}
        <div className="md:col-span-2 bg-surface p-6 rounded-lg shadow">
          <div className="flex flex-col sm:flex-row justify-around items-center gap-4 md:gap-6 flex-wrap">
            {progressCircleData.map((item, index) => (
              <ProgressCircle 
                key={index} 
                value={item.value} 
                label={item.label} 
                className="min-w-[100px] sm:min-w-[120px]" 
              />
            ))}
          </div>
        </div>
      </main>

      {/* Row 3: Footer (1fr) */}
      {/* This grid cell takes the remaining flexible space. The footer is aligned to its end. */}
      <div className="flex flex-col justify-end">
        {/* Footer layout: "flex justify-center items-center h-[50px] bg-surface" */}
        <footer className="h-[50px] flex-shrink-0 flex justify-center items-center bg-surface rounded-lg shadow">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Weekly Status Dashboard. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default WeeklyOverviewDashboardPage;
