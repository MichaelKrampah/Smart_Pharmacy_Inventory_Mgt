import { Globe } from "@/components/ui/globe";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function GlobeDemo() {
  return (
    <div className="relative flex size-full max-w-3xl items-center justify-center overflow-hidden rounded-lg border bg-background px-8 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-transparent dark:from-white dark:to-slate-900/10 z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
          Revolutionize Your Pharmacy Inventory Management
        </h1>
        <p className="mt-6 text-xl max-w-xl">
          Smart, predictive, and fully compliant — built for modern pharmaceutical operations
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
          <Button size="lg" className="bg-white text-pharma-blue hover:bg-white/90">
            Request a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Explore Features
          </Button>
        </div>
      </div>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}