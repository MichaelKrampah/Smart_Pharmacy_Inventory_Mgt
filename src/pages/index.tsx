
import SiteLayout from '@/components/layout/SiteLayout';
import { HeroSection } from '@/components/home/HeroSection';
import { ValueProposition } from '@/components/home/ValueProposition';
import { DashboardPreview } from '@/components/home/DashboardPreview';
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel';
import { ContactForm } from '@/components/home/ContactForm';
import { CTASection } from '@/components/ui/cta-section';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>SmartRxInventory - Pharmacy Inventory Management System</title>
        <meta name="description" content="Revolutionize your pharmacy inventory management with SmartRxInventory - smart, predictive, and fully compliant for modern pharmaceutical operations." />
        <meta name="keywords" content="pharmacy inventory, medication management, pharmaceutical inventory system, RFID inventory" />
        <meta property="og:title" content="SmartRxInventory - Pharmacy Inventory Management System" />
        <meta property="og:description" content="Revolutionize your pharmacy inventory management with SmartRxInventory - smart, predictive, and fully compliant for modern pharmaceutical operations." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SmartRxInventory - Pharmacy Inventory Management System" />
        <meta name="twitter:description" content="Revolutionize your pharmacy inventory management with SmartRxInventory - smart, predictive, and fully compliant for modern pharmaceutical operations." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SmartRxInventory",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Cloud-based",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Smart pharmacy inventory management system with predictive reordering and compliance tools."
            }
          `}
        </script>
      </Helmet>
      
      <HeroSection />
      <ValueProposition />
      <DashboardPreview />
      <TestimonialCarousel />
      <div className="section-spacing">
        <div className="container-custom">
          <CTASection 
            title="Experience the Difference Today"
            description="Join hundreds of pharmacies that have transformed their inventory management with our smart solution."
            primaryButtonText="Schedule a Live Demo"
            secondaryButtonText="Download Product Sheet"
            gradient={true}
          />
        </div>
      </div>
      <ContactForm />
    </SiteLayout>
  );
};

export default HomePage;
