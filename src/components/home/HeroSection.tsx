
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pharma-blue-dark to-pharma-blue opacity-90 z-10"></div>
      
      {/* Background pattern for visual interest */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0xNiAxNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 z-0"></div>

      {/* Content container */}
      <div className="relative container-custom py-20 md:py-28 flex flex-col items-center text-center z-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto animate-fade-in">
          Revolutionize Your Pharmacy Inventory Management
        </h1>
        <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
          Smart, predictive, and fully compliant — built for modern pharmaceutical operations
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" className="bg-white text-pharma-blue hover:bg-white/90">
            Request a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-pharma-blue hover:bg-white/10">
            Explore Features
          </Button>
        </div>
      </div>
    </div>
  );
}
