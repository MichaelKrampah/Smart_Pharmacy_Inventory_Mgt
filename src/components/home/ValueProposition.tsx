
import { BarChart2, Clock, ShieldCheck } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";

export function ValueProposition() {
  const features = [
    {
      icon: Clock,
      title: "Real-Time Accuracy",
      description: "Track medication with 99.9% precision using barcode & RFID technology. Eliminate manual counting errors and ensure inventory integrity.",
    },
    {
      icon: BarChart2,
      title: "Predictive Reordering",
      description: "Never run out or overstock — automated ordering with demand forecasting based on historical data and seasonal trends.",
    },
    {
      icon: ShieldCheck,
      title: "Regulatory Confidence",
      description: "Meet DEA, FDA, and HIPAA standards with built-in compliance tools. Generate reports instantly for inspections and audits.",
    },
  ];

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
