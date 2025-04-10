
import SiteLayout from '@/components/layout/SiteLayout';
import { CTASection } from '@/components/ui/cta-section';
import { FeatureCard } from '@/components/ui/feature-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { Barcode, Database, LayoutDashboard, Link } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const SystemOverviewPage = () => {
  const features = [
    {
      icon: Barcode,
      title: "Precision Tracking with RFID/Barcode",
      description: "Track every medication unit with pinpoint accuracy using advanced RFID and barcode scanning technology. Eliminate human error and maintain inventory integrity at all times."
    },
    {
      icon: Database,
      title: "Automated Procurement Workflows",
      description: "Streamline purchasing with intelligent order suggestions based on usage patterns, stock levels, and vendor performance. Reduce manual processing and improve order accuracy."
    },
    {
      icon: LayoutDashboard,
      title: "Real-Time Dashboards and Alerts",
      description: "Monitor critical inventory metrics and receive proactive alerts for expiring medications, stock shortages, and environmental conditions requiring attention."
    },
    {
      icon: Link,
      title: "Seamless Integration with Existing Pharmacy Systems",
      description: "Connect effortlessly with your EHR, dispensing software, and accounting systems for unified data flow and comprehensive operational visibility."
    }
  ];

  return (
    <SiteLayout>
      <Helmet>
        <title>System Overview - SmartRxInventory</title>
        <meta name="description" content="Not just inventory – a pharmacy-centric intelligence platform designed for precision and accuracy in pharmaceutical operations." />
        <meta name="keywords" content="pharmacy system architecture, medication tracking, pharmaceutical integration" />
        <meta property="og:title" content="System Overview - SmartRxInventory" />
        <meta property="og:description" content="Not just inventory – a pharmacy-centric intelligence platform designed for precision and accuracy in pharmaceutical operations." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-pharma-blue to-pharma-blue-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Built for Pharmacies, Designed for Precision</h1>
            <p className="text-xl text-white/90 mb-8">
              Not just inventory – a pharmacy-centric intelligence platform that addresses the unique challenges of medication management, regulatory compliance, and patient safety.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pharmacy-Specific Challenges, Smart Solutions</h2>
              <p className="text-lg mb-4">
                Traditional inventory systems fail to address the unique needs of pharmaceutical operations. Our platform was designed from the ground up with pharmacies in mind.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-pharma-green-light rounded-full p-1">
                    <svg className="h-3 w-3 text-pharma-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Handles complex expiry date management and lot tracking</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-pharma-green-light rounded-full p-1">
                    <svg className="h-3 w-3 text-pharma-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Built-in regulatory compliance for DEA, FDA, and HIPAA requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-pharma-green-light rounded-full p-1">
                    <svg className="h-3 w-3 text-pharma-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Specialized environmental monitoring for temperature-sensitive medications</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-pharma-green-light rounded-full p-1">
                    <svg className="h-3 w-3 text-pharma-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Advanced demand forecasting algorithms specific to medication usage patterns</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://img.freepik.com/free-photo/medium-shot-smiley-healthcare-professional_23-2148814203.jpg?t=st=1744239637~exp=1744243237~hmac=2770181784afa88e5d579a2c964719bef4780c63221c77555733de0a887aaf1a&w=1380" 
                alt="Pharmacist using SmartRxInventory system" 
                className="w-full h-auto object-cover"
              />
              
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="mb-16">
            <SectionHeading 
              title="Core Capabilities" 
              subtitle="Our comprehensive platform provides end-to-end inventory intelligence for modern pharmaceutical operations."
              centered={true}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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

          {/* System Architecture */}
          <div className="bg-white rounded-lg border border-border p-8">
            <SectionHeading 
              title="Architecture Snapshot" 
              subtitle="A sophisticated yet flexible system designed to meet the unique needs of pharmacy operations."
              className="mb-8"
            />
            
            <div className="mb-10">
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                  {/* User Layer */}
                  <div className="col-span-3 flex justify-center mb-4">
                    <div className="bg-white px-8 py-4 rounded-lg border border-border shadow-sm text-center min-w-[200px]">
                      <p className="font-medium">User Interface Layer</p>
                      <p className="text-xs text-gray-500">Web & Mobile Applications</p>
                    </div>
                  </div>
                  
                  {/* Arrow down */}
                  <div className="col-span-3 flex justify-center h-8">
                    <div className="h-full w-0.5 bg-gray-300"></div>
                  </div>
                  
                  {/* Core System */}
                  <div className="col-span-3 grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-pharma-blue text-white px-4 py-3 rounded-lg shadow-sm text-center">
                      <p className="font-medium">Inventory Core</p>
                      <p className="text-xs text-white/80">Tracking & Analytics</p>
                    </div>
                    <div className="bg-pharma-blue text-white px-4 py-3 rounded-lg shadow-sm text-center">
                      <p className="font-medium">Compliance Module</p>
                      <p className="text-xs text-white/80">Regulatory Tools</p>
                    </div>
                    <div className="bg-pharma-blue text-white px-4 py-3 rounded-lg shadow-sm text-center">
                      <p className="font-medium">Forecasting Engine</p>
                      <p className="text-xs text-white/80">Predictive Analytics</p>
                    </div>
                  </div>
                  
                  {/* Arrow down */}
                  <div className="col-span-3 flex justify-center h-8">
                    <div className="h-full w-0.5 bg-gray-300"></div>
                  </div>
                  
                  {/* Integrations */}
                  <div className="col-span-3 flex justify-around mb-4">
                    <div className="bg-pharma-green-light px-4 py-2 rounded-lg border border-pharma-green shadow-sm text-center">
                      <p className="text-sm font-medium">EHR Systems</p>
                    </div>
                    <div className="bg-pharma-green-light px-4 py-2 rounded-lg border border-pharma-green shadow-sm text-center">
                      <p className="text-sm font-medium">Supplier APIs</p>
                    </div>
                    <div className="bg-pharma-green-light px-4 py-2 rounded-lg border border-pharma-green shadow-sm text-center">
                      <p className="text-sm font-medium">IoT Devices</p>
                    </div>
                    <div className="bg-pharma-green-light px-4 py-2 rounded-lg border border-pharma-green shadow-sm text-center">
                      <p className="text-sm font-medium">POS Systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Technical Specifications</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Deployment Options:</span>
                    <span className="font-medium">Cloud-hosted or On-premises</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Device Support:</span>
                    <span className="font-medium">Web browsers, iOS, Android</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Data Security:</span>
                    <span className="font-medium">HIPAA-compliant, 256-bit encryption</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">API:</span>
                    <span className="font-medium">RESTful, GraphQL</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Updates:</span>
                    <span className="font-medium">Automatic monthly releases</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">System Requirements</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Internet Connection:</span>
                    <span className="font-medium">Broadband (min 10 Mbps)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Browser Support:</span>
                    <span className="font-medium">Chrome, Firefox, Safari, Edge</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Mobile OS:</span>
                    <span className="font-medium">iOS 13+, Android 9+</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Scanner Compatibility:</span>
                    <span className="font-medium">Most USB/Bluetooth models</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">RFID Support:</span>
                    <span className="font-medium">EPC Gen2 standard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <CTASection 
            title="Ready for Technical Documentation?"
            description="Access detailed specifications, integration guides, and implementation resources for your technical team."
            primaryButtonText="Request Technical Docs"
            secondaryButtonText="Schedule a Consultation"
          />
        </div>
      </section>
    </SiteLayout>
  );
};

export default SystemOverviewPage;
