import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ShoppingCart, BarChart2 } from 'lucide-react';

const InventoryLandingPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Inventory Management</h1>
        <p className="text-gray-500">Manage your inventory efficiently and effectively.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Add New Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg">
              <a href="/inventory/create"><Plus className="mr-2 h-4 w-4" />Add Inventory</a>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>View Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" variant="outline">
              <a href="/inventory"><ShoppingCart className="mr-2 h-4 w-4" />View Inventory</a>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Generate Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" variant="outline">
              <a href="/reports"><BarChart2 className="mr-2 h-4 w-4" />View Reports</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InventoryLandingPage;