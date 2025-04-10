
import SiteLayout from '@/components/layout/SiteLayout';
import { SectionHeading } from '@/components/ui/section-heading';
import { CTASection } from '@/components/ui/cta-section';
import { 
  DollarSign, Clock, PackageCheck, FileText, 
  ShieldCheck, BarChart2, ClipboardList, Bell 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  metrics?: string;
  colorClass?: string;
}

const BenefitCard = ({ 
  icon: Icon, 
  title, 
  description, 
  metrics, 
  colorClass = "bg-pharma-blue-light text-pharma-blue" 
}: BenefitCardProps) => {
  return (
    <Card className="border border-border hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center mb-3`}>
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground mb-3">{description}</CardDescription>
        {metrics && (
          <p className="text-sm font-medium text-pharma-blue">{metrics}</p>
        )}
      </CardContent>
    </Card>
  );
};

const BenefitsPage = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Benefits - SmartRxInventory</title>
        <meta name="description" content="Discover the benefits of SmartRxInventory for pharmacy owners, pharmacists, procurement teams, and compliance officers." />
        <meta name="keywords" content="pharmacy inventory benefits, medication management ROI, pharmacy compliance, inventory efficiency" />
        <meta property="og:title" content="Benefits - SmartRxInventory" />
        <meta property="og:description" content="Discover the benefits of SmartRxInventory for pharmacy owners, pharmacists, procurement teams, and compliance officers." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <section className="bg-gradient-to-r from-pharma-blue to-pharma-blue-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Why Your Pharmacy Needs This</h1>
            <p className="text-xl text-white/90">
              Our smart pharmacy inventory management system delivers tangible benefits
              to every stakeholder in your pharmacy operations.
            </p>
          </div>
        </div>
      </section>

      {/* For Pharmacy Owners/Managers */}
      <section className="section-spacing">
        <div className="container-custom">
          <SectionHeading 
            title="For Pharmacy Owners & Managers" 
            subtitle="Boost profitability and operational efficiency with intelligent inventory control."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitCard 
              icon={DollarSign}
              title="Enhanced Profitability"
              description="Optimize inventory turns and reduce capital tied up in excess stock. Improve cash flow through precise ordering."
              metrics="Average 15% reduction in inventory carrying costs"
            />
            
            <BenefitCard 
              icon={PackageCheck}
              title="Reduced Waste"
              description="Minimize emergency orders with higher costs and virtually eliminate losses from expired medications."
              metrics="Clients report 80% fewer emergency orders"
            />
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-pharma-blue mb-2">23%</div>
                <p className="text-sm text-gray-600">Average increase in inventory turns</p>
              </div>
              
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-pharma-blue mb-2">$36K</div>
                <p className="text-sm text-gray-600">Average annual savings per location</p>
              </div>
              
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-pharma-blue mb-2">97%</div>
                <p className="text-sm text-gray-600">Client retention rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* For Pharmacists & Technicians */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="For Pharmacists & Technicians" 
            subtitle="Spend less time on inventory and more time with patients."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitCard 
              icon={Clock}
              title="Time-Saving Workflows"
              description="Eliminate manual counts and streamline receiving processes with barcode and RFID scanning technology."
              metrics="Save up to 10 hours per week on inventory management"
              colorClass="bg-pharma-green-light text-pharma-green"
            />
            
            <BenefitCard 
              icon={Bell}
              title="Prioritized Notifications"
              description="Receive intelligent alerts about critical inventory issues that need immediate attention while filtering out the noise."
              metrics="Smart priority system focuses attention where needed"
              colorClass="bg-pharma-green-light text-pharma-green"
            />
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-medium mb-4">Focus on What Matters Most</h3>
              <p className="text-muted-foreground mb-6">
                Our system handles routine inventory tasks so your pharmacy staff can focus on patient care and clinical services that drive value.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-3 h-6 w-6 rounded-full bg-pharma-green-light flex items-center justify-center">
                    <svg className="h-4 w-4 text-pharma-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Automated monthly inventory counts</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-6 w-6 rounded-full bg-pharma-green-light flex items-center justify-center">
                    <svg className="h-4 w-4 text-pharma-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Streamlined prescription filling process</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-6 w-6 rounded-full bg-pharma-green-light flex items-center justify-center">
                    <svg className="h-4 w-4 text-pharma-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Reduced time spent on vendor communications</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-6 w-6 rounded-full bg-pharma-green-light flex items-center justify-center">
                    <svg className="h-4 w-4 text-pharma-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Elimination of manual expiry date checking</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://img.freepik.com/free-photo/doctor-is-checking-medicine-stock_53876-14352.jpg?t=st=1744240071~exp=1744243671~hmac=1cc55cf3dfe7950457b44bacb6db5bbca79aa65ce1cbda1c5838d00a04f2bef8&w=1380" 
                alt="Pharmacist with patient" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* For Procurement Teams */}
      <section className="section-spacing">
        <div className="container-custom">
          <SectionHeading 
            title="For Procurement Teams" 
            subtitle="Streamline purchasing with intelligent forecasting and automated workflows."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitCard 
              icon={ClipboardList}
              title="Automated Order Generation"
              description="Generate vendor orders automatically based on current stock levels, usage patterns, and customizable reorder points."
              metrics="Reduces manual order creation by up to 95%"
            />
            
            <BenefitCard 
              icon={BarChart2}
              title="Strategic Purchasing Power"
              description="Use demand predictions to negotiate better pricing with suppliers and consolidate orders for maximum discounts."
              metrics="Average 12% reduction in overall procurement costs"
            />
          </div>
          
          <div className="mt-12">
            <Card className="border-pharma-blue">
              <CardHeader className="bg-pharma-blue-light border-b border-pharma-blue">
                <CardTitle>Procurement Dashboard Highlights</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Vendor Performance</h4>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full">
                      <div className="bg-pharma-blue h-full rounded-full" style={{ width: '82%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>ABC Corp: 82%</span>
                      <span>On-time delivery</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full">
                      <div className="bg-pharma-blue h-full rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>MedSource: 95%</span>
                      <span>Order accuracy</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Upcoming Orders</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center justify-between">
                        <span>Cardinal Health</span>
                        <span className="text-pharma-blue font-medium">Tomorrow</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>McKesson</span>
                        <span className="text-gray-500">In 3 days</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>AmerisourceBergen</span>
                        <span className="text-gray-500">In 5 days</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Potential Savings</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center justify-between">
                        <span>Order consolidation</span>
                        <span className="text-pharma-green font-medium">$2,450</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Bulk discounts</span>
                        <span className="text-pharma-green font-medium">$1,875</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Generic alternatives</span>
                        <span className="text-pharma-green font-medium">$3,260</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Button size="sm" className="bg-pharma-blue">
                    View Full Procurement Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* For Compliance Officers */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="For Compliance Officers" 
            subtitle="Ensure regulatory standards while simplifying compliance processes."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitCard 
              icon={FileText}
              title="Streamlined Audits"
              description="Generate comprehensive reports with just a few clicks. Historical data tracking for all inventory movements and events."
              metrics="Up to 80% reduction in audit preparation time"
              colorClass="bg-pharma-green-light text-pharma-green"
            />
            
            <BenefitCard 
              icon={ShieldCheck}
              title="Proactive Compliance"
              description="Real-time monitoring of controlled substances with instant alerts for discrepancies or potential diversion scenarios."
              metrics="Enhanced regulatory compliance across all medication categories"
              colorClass="bg-pharma-green-light text-pharma-green"
            />
          </div>
          
          <div className="mt-12 bg-white rounded-lg p-8 border border-border">
            <h3 className="text-xl font-medium mb-6">Compliance Feature Spotlight</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium mb-3">DEA Compliance</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-3 w-3 bg-pharma-blue rounded-full"></div>
                    <span>Electronic 222 forms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-3 w-3 bg-pharma-blue rounded-full"></div>
                    <span>Controlled substance logs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-3 w-3 bg-pharma-blue rounded-full"></div>
                    <span>Biennial inventory support</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium mb-3">HIPAA Compliance</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-3 w-3 bg-pharma-blue rounded-full"></div>
                    <span>Secure patient data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-3 w-3 bg-pharma-blue rounded-full"></div>
                    <span>Role-based access</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-3 w-3 bg-pharma-blue rounded-full"></div>
                    <span>Detailed audit trails</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium mb-3">USP Compliance</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-3 w-3 bg-pharma-blue rounded-full"></div>
                    <span>USP 795 documentation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-3 w-3 bg-pharma-blue rounded-full"></div>
                    <span>USP 800 hazardous drug tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-3 w-3 bg-pharma-blue rounded-full"></div>
                    <span>Beyond-use date monitoring</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium mb-3">Board of Pharmacy</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-3 w-3 bg-pharma-blue rounded-full"></div>
                    <span>Inspection-ready reports</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-3 w-3 bg-pharma-blue rounded-full"></div>
                    <span>State-specific requirement tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-3 w-3 bg-pharma-blue rounded-full"></div>
                    <span>Perpetual inventory management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <CTASection 
            title="Ready to Transform Your Pharmacy Operations?"
            description="Experience the benefits of intelligent inventory management with SmartRxInventory."
            primaryButtonText="Schedule a Live Demo"
            secondaryButtonText="Download Product Sheet"
            gradient={true}
          />
        </div>
      </section>
    </SiteLayout>
  );
};

export default BenefitsPage;
