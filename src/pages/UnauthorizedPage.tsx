import React from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '@/components/layout/SiteLayout';
import { Button } from '@/components/ui/button';
import { ShieldAlert, Home } from 'lucide-react';

const UnauthorizedPage: React.FC = () => {
  return (
    <SiteLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <ShieldAlert className="h-24 w-24 text-red-500 mb-6" />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Access Denied
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md">
          You don't have permission to access this page. Please contact your administrator if you believe this is an error.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link to="/dashboard">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </SiteLayout>
  );
};

export default UnauthorizedPage;