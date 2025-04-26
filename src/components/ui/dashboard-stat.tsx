import { ReactNode } from 'react';
import { Card, CardContent } from './card';
import { TrendingUp, TrendingDown } from 'lucide-react';

export interface DashboardStatProps {
  title: string;
  value: string;
  description: string;
  icon?: ReactNode;
  trend?: {
    direction: 'up' | 'down';
    value: string;
    text: string;
  };
  change?: {
    value: string;
    positive: boolean;
  };
  colorClass?: string;
  tooltipText?: string;
}

export function DashboardStat({ title, value, description, icon, trend, colorClass, tooltipText }: DashboardStatProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground flex items-center gap-1">
              {icon && (
                <span className={`inline-flex items-center justify-center h-8 w-8 rounded-lg mr-2 ${colorClass || 'bg-muted text-muted-foreground'}`}>{icon}</span>
              )}
              {title}
              {tooltipText && <span className="ml-1" title={tooltipText}>ⓘ</span>}
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <h2 className="text-3xl font-bold">{value}</h2>
              {/* <p className="text-sm text-muted-foreground">{description}</p> */}
            </div>
            {trend && (
              <p className={`text-xs mt-2 flex items-center ${trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {trend.direction === 'up' ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                <span>{trend.value}</span>
                {/* <span className="text-muted-foreground ml-1">{trend.text}</span> */}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
