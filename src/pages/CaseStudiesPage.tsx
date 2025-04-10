
import SiteLayout from '@/components/layout/SiteLayout';
import { SectionHeading } from '@/components/ui/section-heading';
import { CTASection } from '@/components/ui/cta-section';
import { ArrowRight, Building2, Building, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

interface CaseStudyCardProps {
  title: string;
  location: string;
  type: string;
  icon: React.ElementType;
  imageSrc: string;
  challenge: string;
  solution: string;
  outcome: string;
  quote: {
    text: string;
    author: string;
    title: string;
  };
  metrics: {
    label: string;
    value: string;
    unit: string;
  }[];
}

const CaseStudyCard = ({
  title,
  location,
  type,
  icon: Icon,
  imageSrc,
  challenge,
  solution,
  outcome,
  quote,
  metrics,
}: CaseStudyCardProps) => {
  return (
    <Card className="overflow-hidden border border-border">
      <div className="md:flex">
        <div className="md:w-2/5">
          <div className="relative h-56 md:h-full">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center space-x-2 text-white mb-2">
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">{type}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-white/80 text-sm">{location}</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-3/5 p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Challenge:</h4>
              <p className="text-muted-foreground">{challenge}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Solution:</h4>
              <p className="text-muted-foreground">{solution}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Outcome:</h4>
              <p className="text-muted-foreground">{outcome}</p>
            </div>
            
            <div className="pt-2 border-t border-border">
              <blockquote className="italic text-muted-foreground">"{quote.text}"</blockquote>
              <div className="mt-2">
                <p className="text-sm font-medium">{quote.author}</p>
                <p className="text-xs text-muted-foreground">{quote.title}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold text-pharma-blue">
                    {metric.value}
                    <span className="text-sm">{metric.unit}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "Memorial Regional Hospital",
      location: "Accra, Ghana",
      type: "Hospital Pharmacy",
      icon: Building2,
      imageSrc: "https://img.freepik.com/free-photo/clinical-reception-with-waiting-room-facility-lobby-registration-counter-used-patients-with-medical-appointments-empty-reception-desk-health-center-checkup-visits_482257-51247.jpg?t=st=1744240567~exp=1744244167~hmac=77105207ea974c39c2bb9f7bdc810603a08163f6faf4caddc3cd5b21e9e472b8&w=1380",
      challenge: "The hospital pharmacy was experiencing approximately 5% monthly losses from expired medications due to inefficient tracking methods and manual inventory management processes.",
      solution: "Implementation of SmartRxInventory with FIFO alerts, automated expiry tracking, and temperature monitoring integration for sensitive medications.",
      outcome: "Expiry losses reduced to under 0.5% in just 3 months. Staff time spent on inventory management decreased by 68%, allowing pharmacists to focus on clinical services.",
      quote: {
        text: "The system paid for itself in the first quarter through expiry prevention alone. The time savings have allowed us to launch new clinical services.",
        author: "Dr. Richard",
        title: "Director of Pharmacy Services"
      },
      metrics: [
        {
          label: "Reduction in expired medication losses",
          value: "90",
          unit: "%"
        },
        {
          label: "Staff hours saved weekly",
          value: "22",
          unit: ""
        },
        {
          label: "ROI timeframe",
          value: "3",
          unit: " months"
        }
      ]
    },
    {
      title: "Austin Family Pharmacy",
      location: "Kumasi",
      type: "Community Pharmacy",
      icon: Building,
      imageSrc: "https://img.freepik.com/free-photo/man-wheelchair-social-worker-choosing-prescription-treatment_482257-67465.jpg?t=st=1744240665~exp=1744244265~hmac=c4152736aecafa794a93668070baa26fca41e2ea0674483102bc3ba09fb79831&w=1380",
      challenge: "The pharmacy was over-ordering due to manual forecasting methods, resulting in excessive capital tied up in inventory and frequent emergency orders at premium prices.",
      solution: "Implementation of AI-based demand forecasting with historical trend analysis and integration with the pharmacy's prescription system.",
      outcome: "Saved $12,000 in procurement costs over 6 months by optimizing order quantities. Emergency orders reduced by 92%, and inventory turns increased from 8 to 12 annually.",
      quote: {
        text: "We've reduced our inventory holding by almost 30% while maintaining better stock availability. The predictive ordering has been remarkably accurate.",
        author: "Michael Austin, PharmD",
        title: "Owner and Head Pharmacist"
      },
      metrics: [
        {
          label: "Reduction in inventory holding",
          value: "30",
          unit: "%"
        },
        {
          label: "Procurement savings",
          value: "$12K",
          unit: ""
        },
        {
          label: "Increase in inventory turns",
          value: "50",
          unit: "%"
        }
      ]
    }
  ];

  return (
    <SiteLayout>
      <Helmet>
        <title>Case Studies - SmartRxInventory</title>
        <meta name="description" content="Real results from pharmacies using SmartRxInventory. Discover how our system has helped hospital and community pharmacies improve operations and reduce costs." />
        <meta name="keywords" content="pharmacy case studies, medication management results, inventory system ROI" />
        <meta property="og:title" content="Case Studies - SmartRxInventory" />
        <meta property="og:description" content="Real results from pharmacies using SmartRxInventory. Discover how our system has helped hospital and community pharmacies improve operations and reduce costs." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <section className="bg-gradient-to-r from-pharma-blue to-pharma-blue-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Real Pharmacies. Real Results.</h1>
            <p className="text-xl text-white/90">
              See how SmartRxInventory has transformed inventory management for pharmacies across different settings and regions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
          
          <div className="mt-12">
            <Card className="bg-gray-50 border-dashed">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-medium mb-4">More Success Stories Coming Soon</h3>
                <p className="text-muted-foreground mb-6">
                  We're continuously adding new case studies as our clients achieve remarkable results.
                  Check back for updates or subscribe to our newsletter.
                </p>
                <Button variant="outline">
                  Subscribe to Updates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Success Across Pharmacy Settings" 
            subtitle="SmartRxInventory adapts to the unique needs of different pharmacy environments."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: "Hospital Pharmacies",
                description: "Streamlining complex inventory across multiple departments and locations.",
                stats: "25% average reduction in inventory costs",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
              },
              {
                title: "Retail Pharmacies",
                description: "Balancing front-end retail with prescription medication inventory.",
                stats: "35% increase in inventory turns",
                image: "https://img.freepik.com/free-photo/portrait-woman-working-pharmaceutical-industry_23-2151684863.jpg?t=st=1744240743~exp=1744244343~hmac=c72d794b920803cc1307f9feff37856785b37831af15b2f6ef6f89be310d6588&w=1380"
              },
              {
                title: "Specialty Pharmacies",
                description: "Managing high-cost medications with specialized storage requirements.",
                stats: "99.9% environmental compliance rate",
                image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88"
              },
              {
                title: "Long-term Care",
                description: "Optimizing medication management for extended care facilities.",
                stats: "45% reduction in medication waste",
                image: "https://img.freepik.com/free-photo/african-american-medical-team-working-healing-patient-hospital-ward-bed-man-woman-with-doctors-occupation-examining-young-adult-treatment-using-monitor-stethoscope_482257-16510.jpg?t=st=1744240854~exp=1744244454~hmac=a221391c76c91b91179bfebdb168e53eef0f0558db3b577d96bec874bafb6960&w=1380"
              }
            ].map((item, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden shadow-md h-72 border border-border">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm mb-2">{item.description}</p>
                  <p className="text-pharma-green-light font-medium text-sm">{item.stats}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="sm" className="h-8 px-3 rounded-full shadow-lg">
                    Learn more
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <CTASection 
            title="Ready to Become Our Next Success Story?"
            description="Join hundreds of pharmacies that have transformed their inventory management with our smart solution."
            primaryButtonText="Schedule a Demo"
            secondaryButtonText="Download Case Studies"
            gradient={true}
          />
        </div>
      </section>
    </SiteLayout>
  );
};

export default CaseStudiesPage;
