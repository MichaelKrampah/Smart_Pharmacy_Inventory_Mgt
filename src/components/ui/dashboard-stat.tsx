
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

interface DashboardStatProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: {
    value: string | number;
    positive: boolean;
  };
  tooltipText?: string;
  colorClass?: string;
  className?: string;
}

export function DashboardStat({
  title,
  value,
  icon: Icon,
  change,
  tooltipText,
  colorClass = "bg-pharma-blue-light text-pharma-blue",
  className,
}: DashboardStatProps) {
  return (
    <div className={cn("p-4 bg-white border border-border rounded-lg shadow-sm", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={cn("p-2 rounded-md", colorClass)}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex items-center">
            <h3 className="font-medium text-sm text-gray-500">{title}</h3>
            {tooltipText && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="ml-1">
                      <InfoIcon className="h-3.5 w-3.5 text-muted-foreground" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-[200px]">{tooltipText}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </div>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold">{value}</p>
        {change && (
          <span 
            className={cn(
              "ml-2 text-xs font-medium",
              change.positive ? "text-green-600" : "text-red-600"
            )}
          >
            {change.positive ? "+" : "-"}{change.value}
          </span>
        )}
      </div>
    </div>
  );
}
