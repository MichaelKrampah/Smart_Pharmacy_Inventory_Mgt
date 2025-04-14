import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ScrollToTop } from "@/components/utils/ScrollToTop";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SiteLayout;
