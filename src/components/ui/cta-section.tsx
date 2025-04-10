
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
  className?: string;
  gradient?: boolean;
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonAction,
  secondaryButtonAction,
  className,
  gradient = false,
}: CTASectionProps) {
  return (
    <div className={cn(
      "py-16 px-6 rounded-xl", 
      gradient ? "gradient-bg-blue" : "bg-white border border-border",
      className
    )}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
          gradient ? "text-white" : "text-foreground"
        )}>
          {title}
        </h2>
        <p className={cn(
          "text-lg mb-8 max-w-2xl mx-auto",
          gradient ? "text-white/90" : "text-muted-foreground"
        )}>
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            onClick={primaryButtonAction}
            className={gradient ? "bg-white text-pharma-blue hover:bg-white/90" : ""}
          >
            {primaryButtonText}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
          
          {secondaryButtonText && (
            <Button 
              size="lg" 
              variant={gradient ? "outline" : "secondary"} 
              onClick={secondaryButtonAction}
              className={gradient ? "border-white text-pharma-blue hover:bg-white/10" : ""}
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
