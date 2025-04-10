
import SiteLayout from '@/components/layout/SiteLayout';
import { SectionHeading } from '@/components/ui/section-heading';
import { CTASection } from '@/components/ui/cta-section';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Helmet } from 'react-helmet-async';

const TestimonialsPage = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const testimonials = [
    {
      quote: "This system changed how we manage our stock. We're more compliant and more profitable. The predictive ordering has cut our emergency orders by 90%.",
      name: "Hannah Mensah",
      title: "PharmD, Regional Pharmacy Director",
      company: "Metropolitan Medical Center"
    },
    {
      quote: "Finally, a system that understands how pharmacies work, not just how to count pills. The temperature monitoring for our vaccines has been a lifesaver.",
      name: "Kojo B.",
      title: "Compliance Officer",
      company: "Healthcare Solutions Inc."
    },
    {
      quote: "After implementing SmartRxInventory, our expiry losses decreased from 4% to just 0.3%. The ROI was clear within the first quarter.",
      name: "Sarah Johnson",
      title: "Pharmacy Owner",
      company: "Johnson Family Pharmacy"
    },
    {
      quote: "The customer support team has been exceptional. They provided personalized training and were always available when we had questions during implementation.",
      name: "David Botwe",
      title: "IT Director",
      company: "Central Health System"
    },
    {
      quote: "As a compliance officer, the automated reports save me hours each month. During our last state inspection, the inspector was impressed with our documentation.",
      name: "Micky Kramps",
      title: "Regulatory Compliance Manager",
      company: "PharmaHealth Services"
    },
    {
      quote: "We've reduced our inventory holding costs by 23% while improving medication availability. The system pays for itself many times over.",
      name: "Thomas Nelson",
      title: "Chief Financial Officer",
      company: "Wellness Pharmacy Group"
    }
  ];

  const endorsements = [
    {
      name: "National Association of Hospital Pharmacists",
      logo: "https://images.unsplash.com/photo-1572173838181-589fc8c0a10a",
      comment: "Recognized for innovation in pharmacy inventory management, 2023"
    },
    {
      name: "PharmTech Innovation Awards",
      logo: "https://images.unsplash.com/photo-1588600878108-fa6480d5f762",
      comment: "Winner, Best Inventory Solution, 2022"
    },
    {
      name: "Healthcare Technology Summit",
      logo: "https://images.unsplash.com/photo-1570126688035-1e6adbd61053",
      comment: "Featured Solution Partner, 2023"
    }
  ];

  return (
    <SiteLayout>
      <Helmet>
        <title>Testimonials - SmartRxInventory</title>
        <meta name="description" content="Hear from industry leaders about their experience with SmartRxInventory. Real feedback from pharmacy professionals who have transformed their operations." />
        <meta name="keywords" content="pharmacy testimonials, medication management reviews, inventory system feedback" />
        <meta property="og:title" content="Testimonials - SmartRxInventory" />
        <meta property="og:description" content="Hear from industry leaders about their experience with SmartRxInventory. Real feedback from pharmacy professionals who have transformed their operations." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <section className="bg-gradient-to-r from-pharma-blue to-pharma-blue-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Hear from Industry Leaders</h1>
            <p className="text-xl text-white/90">
              Don't just take our word for it. See what pharmacy professionals have to say about their experience with SmartRxInventory.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Carousel Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Feedback from pharmacy professionals across various practice settings."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>
      
      
      {/* Video Testimonial */}
      <section className="section-spacing">
        <div className="container-custom">
          <SectionHeading 
            title="See SmartRxInventory in Action" 
            subtitle="Watch how pharmacy professionals use our system in their daily operations."
            centered={true}
          />
          
          <div className="mt-12">
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-border aspect-video max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer group" onClick={() => setVideoOpen(true)}>
                <div className="h-20 w-20 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                    <Play className="h-8 w-8 text-pharma-blue fill-pharma-blue" />
                  </div>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3" 
                alt="Video thumbnail" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center mt-6">
              <h3 className="text-lg font-medium">SmartRxInventory at Memorial Regional Hospital</h3>
              <p className="text-muted-foreground">
                See how the pharmacy team reduced waste and improved efficiency with our system.
              </p>
            </div>
          </div>
          
          {/* Video Dialog */}
          <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden">
              <div className="aspect-video">
                <div className="w-full h-full bg-black flex items-center justify-center text-white">
                  <p className="text-center p-8">Video placeholder</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
      
      {/* Customer Stories */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="In-Depth Customer Stories" 
            subtitle="Explore detailed accounts of how SmartRxInventory has transformed pharmacy operations."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "How Memorial Hospital Reduced Waste by 90%",
                excerpt: "A comprehensive look at the implementation process and results achieved over 12 months.",
                image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
              },
              {
                title: "Streamlining Operations at Community Care Pharmacy",
                excerpt: "Learn how a small independent pharmacy improved efficiency and patient care.",
                image: "https://images.unsplash.com/photo-1577401239170-897942555fb3"
              }
            ].map((story, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{story.title}</h3>
                  <p className="text-muted-foreground mb-4">{story.excerpt}</p>
                  <Button variant="outline">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <CTASection 
            title="Ready to Join Our Satisfied Customers?"
            description="Take the first step toward transforming your pharmacy inventory management."
            primaryButtonText="Book a Consultation"
            secondaryButtonText="Watch Full Demo"
            gradient={true}
          />
        </div>
      </section>
    </SiteLayout>
  );
};

export default TestimonialsPage;
