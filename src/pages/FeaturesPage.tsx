
import SiteLayout from '@/components/layout/SiteLayout';
import { SectionHeading } from '@/components/ui/section-heading';
import { FeatureCard } from '@/components/ui/feature-card';
import { CTASection } from '@/components/ui/cta-section';
import { 
  Barcode, Clock, ShieldCheck, ChevronRight,
  BarChart2, TrendingUp, Thermometer, Bookmark,
  AlertTriangle, FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

const FeaturesPage = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Key Features - SmartRxInventory</title>
        <meta name="description" content="Explore the advanced features of SmartRxInventory: medication intelligence, predictive analytics, environmental monitoring, and compliance tools." />
        <meta name="keywords" content="pharmacy inventory features, medication tracking, predictive analytics, compliance tools" />
        <meta property="og:title" content="Key Features - SmartRxInventory" />
        <meta property="og:description" content="Explore the advanced features of SmartRxInventory: medication intelligence, predictive analytics, environmental monitoring, and compliance tools." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <section className="bg-gradient-to-r from-pharma-blue to-pharma-blue-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">What Makes It Smart</h1>
            <p className="text-xl text-white/90">
              Our system goes beyond simple inventory counting to provide intelligent insights, 
              predictive capabilities, and comprehensive compliance tools.
            </p>
          </div>
        </div>
      </section>

      {/* Medication Intelligence Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Medication Intelligence" 
                subtitle="Track every unit with precision and eliminate manual errors."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-pharma-blue-light text-pharma-blue">
                    <Barcode className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Tracking Accuracy</h3>
                    <p className="text-muted-foreground">
                      RFID/barcode scan with real-time location updates. Every medication is
                      tracked throughout its lifecycle, from receiving to dispensing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-pharma-blue-light text-pharma-blue">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Expiration Management</h3>
                    <p className="text-muted-foreground">
                      Alerts at 90/60/30 days with FIFO auto-suggestions. Smart quarantine
                      recommendations for approaching expiry dates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-border">
              <img 
                src="https://images.unsplash.com/photo-1573883431205-98b5f10aaedb" 
                alt="Medication tracking interface" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Predictive Analytics Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-white p-6 rounded-lg shadow-lg border border-border">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                alt="Predictive analytics dashboard" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <SectionHeading 
                title="Predictive Analytics" 
                subtitle="Never guess your inventory needs again with smart reordering."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-pharma-green-light text-pharma-green">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Forecasting Algorithms</h3>
                    <p className="text-muted-foreground">
                      Learn from past prescriptions, seasonality, and local outbreaks. 
                      Our AI continuously improves ordering recommendations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-pharma-green-light text-pharma-green">
                    <BarChart2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Insurance Impact</h3>
                    <p className="text-muted-foreground">
                      Adjust inventory based on prescription coverage shifts. Proactively
                      adapt to formulary changes and new authorization requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Environmental Monitoring Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Environmental Monitoring" 
                subtitle="Protect valuable medications with advanced environmental tracking."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-pharma-blue-light text-pharma-blue">
                    <Thermometer className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Refrigeration Compliance</h3>
                    <p className="text-muted-foreground">
                      Live temperature logs & breach alerts. Historical data for regulatory
                      reporting with automated documentation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-pharma-blue-light text-pharma-blue">
                    <Bookmark className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Vaccines & Specialty Meds</h3>
                    <p className="text-muted-foreground">
                      Customized monitoring protocols for high-value medications. Special
                      handling alerts and specialized storage requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="mt-8">
                Learn more about our monitoring solutions
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-border">
              <img 
                src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843" 
                alt="Environmental monitoring interface" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Compliance Center Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Compliance Center" 
            subtitle="Maintain regulatory standards with built-in compliance tools."
            centered={true}
            className="max-w-3xl mx-auto"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              icon={ShieldCheck}
              title="DEA Compliance"
              description="Automated DEA 222 form management, controlled substance tracking, and comprehensive audit logs for Schedule II-V medications."
            />
            
            <FeatureCard 
              icon={AlertTriangle}
              title="FDA Recall Alerts"
              description="Real-time FDA recall notifications with affected inventory identification and automated quarantine recommendations."
            />
            
            <FeatureCard 
              icon={FileText}
              title="Automated Reporting"
              description="One-click generation of compliance reports for audits and inspections. Historical data retention meeting all regulatory requirements."
            />
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-lg border border-border">
            <img 
              src="https://img.freepik.com/free-photo/medical-specialist-writing-clipboard_482257-83812.jpg?t=st=1744239721~exp=1744243321~hmac=37f6c1b97c3c410181de104c9f2fa77dad1cee13dd04d2cd14f27a1f19e51218&w=1380" 
              alt="Compliance reporting dashboard" 
              className="rounded-lg w-full h-auto"
            />
            
            <div className="mt-6">
              <h3 className="text-xl font-medium mb-3">Key Compliance Features:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-pharma-blue rounded-full"></div>
                  <span>DEA Form 222 Records</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-pharma-blue rounded-full"></div>
                  <span>HIPAA-Compliant Reports</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-pharma-blue rounded-full"></div>
                  <span>FDA Recall Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-pharma-blue rounded-full"></div>
                  <span>USP 800 Compliance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-pharma-blue rounded-full"></div>
                  <span>Audit Trail & Logs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-pharma-blue rounded-full"></div>
                  <span>Temperature Monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-pharma-blue rounded-full"></div>
                  <span>Expiration Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-pharma-blue rounded-full"></div>
                  <span>Quarterly Reports</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-pharma-blue rounded-full"></div>
                  <span>Electronic Signatures</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <CTASection 
            title="Ready to See These Features in Action?"
            description="Schedule a personalized demo to see how our smart pharmacy inventory system can transform your operations."
            primaryButtonText="Request a Demo"
            secondaryButtonText="Contact Sales"
            gradient={true}
          />
        </div>
      </section>
    </SiteLayout>
  );
};

export default FeaturesPage;
