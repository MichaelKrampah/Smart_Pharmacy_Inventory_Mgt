import { Globe } from "@/components/ui/globe";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#EDF6FF] to-white py-4 sm:py-4 md:py-4 px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[length:30px_30px] opacity-20 z-0" />
      
      {/* Mobile Globe background (positioned behind content) */}
      <div className="absolute inset-0 md:hidden pointer-events-none z-0">
        <div className="w-full h-full min-h-[500px]">
          <Globe className="w-full h-full opacity-40 saturate-150 drop-shadow-[0_0_60px_rgba(37,99,235,0.3)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#EDF6FF]/70 via-white/80 to-white/90" />
        </div>
      </div>
      
      {/* Two-column layout container */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left column: Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-blue-600 font-medium tracking-wide mb-4 backdrop-blur-sm px-4 py-1 rounded-full bg-white/60 shadow-sm text-sm sm:text-base">
            Smart Pharmacy Management System
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Revolutionize Your Pharmacy Inventory Management
          </h1>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl md:max-w-2xl">
            Smart, predictive, and fully compliant — built for modern pharmaceutical operations.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-full px-6 sm:px-8 shadow-md transition-all hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-6 sm:px-8 transition-all hover:border-blue-700 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
            >
              Explore Features
            </Button>
          </div>
        </div>
        
        {/* Right column: Globe visualization - Desktop only */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex items-center justify-center w-full hidden md:flex">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[120%] h-[120%] relative">
              <Globe className="w-full h-full opacity-80 saturate-150 drop-shadow-[0_0_60px_rgba(37,99,235,0.3)] transition-all duration-500" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,white_100%)] opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
