import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BarChart, LineChart, PieChart } from '@/components/ui/chart';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Calendar, 
  FileDown, 
  Printer, 
  RefreshCw, 
  TrendingDown, 
  TrendingUp,
  Filter,
  ArrowLeft // Import ArrowLeft icon
} from 'lucide-react';

// Mock data for sales trend analysis
const monthlySalesData = [
  { name: 'Jan', value: 42000 },
  { name: 'Feb', value: 38000 },
  { name: 'Mar', value: 45000 },
  { name: 'Apr', value: 40000 },
  { name: 'May', value: 43000 },
  { name: 'Jun', value: 48000 },
  { name: 'Jul', value: 52000 },
  { name: 'Aug', value: 49000 },
  { name: 'Sep', value: 51000 },
  { name: 'Oct', value: 54000 },
  { name: 'Nov', value: 58000 },
  { name: 'Dec', value: 62000 },
];

// Mock data for inventory turnover by category
const inventoryTurnoverData = [
  { name: 'Antibiotics', turnoverRate: 12.3 },
  { name: 'Analgesics', turnoverRate: 15.7 },
  { name: 'Cardiovascular', turnoverRate: 8.5 },
  { name: 'Antidiabetics', turnoverRate: 10.2 },
  { name: 'Respiratory', turnoverRate: 11.8 },
  { name: 'Gastrointestinal', turnoverRate: 9.6 },
  { name: 'Dermatological', turnoverRate: 7.2 },
];

// Mock data for product performance
const productPerformanceData = [
  { name: 'Amoxicillin 500mg', sales: 12500, units: 450, profit: 4200 },
  { name: 'Ibuprofen 400mg', sales: 9800, units: 820, profit: 3750 },
  { name: 'Lisinopril 10mg', sales: 8200, units: 380, profit: 2900 },
  { name: 'Metformin 1000mg', sales: 7600, units: 410, profit: 2650 },
  { name: 'Atorvastatin 20mg', sales: 11200, units: 310, profit: 4100 },
  { name: 'Salbutamol Inhaler', sales: 6800, units: 120, profit: 2200 },
  { name: 'Fluoxetine 20mg', sales: 5900, units: 270, profit: 1800 },
  { name: 'Omeprazole 20mg', sales: 6300, units: 350, profit: 2100 },
  { name: 'Paracetamol 500mg', sales: 4200, units: 720, profit: 1400 },
  { name: 'Aspirin 75mg', sales: 3800, units: 540, profit: 1150 },
];

// Mock data for inventory value by category
const inventoryValueData = [
  { name: 'Antibiotics', value: 78500 },
  { name: 'Analgesics', value: 45200 },
  { name: 'Cardiovascular', value: 92300 },
  { name: 'Antidiabetics', value: 64700 },
  { name: 'Respiratory', value: 38900 },
  { name: 'Gastrointestinal', value: 42600 },
  { name: 'Dermatological', value: 31500 },
  { name: 'Other', value: 55800 },
];

// Mock data for expiration report
const expirationReportData = [
  { name: 'Amoxicillin 250mg', batchNo: 'AMX2023-04', expiryDate: '2025-05-15', quantity: 35, value: 420 },
  { name: 'Ondansetron 4mg', batchNo: 'OND2023-09', expiryDate: '2025-05-21', quantity: 18, value: 340 },
  { name: 'Prednisone 10mg', batchNo: 'PRD2023-12', expiryDate: '2025-05-30', quantity: 42, value: 295 },
  { name: 'Doxycycline 100mg', batchNo: 'DOX2023-08', expiryDate: '2025-06-05', quantity: 28, value: 450 },
  { name: 'Ciprofloxacin 500mg', batchNo: 'CIP2023-11', expiryDate: '2025-06-12', quantity: 56, value: 675 },
  { name: 'Diazepam 5mg', batchNo: 'DIA2023-10', expiryDate: '2025-06-20', quantity: 12, value: 310 },
  { name: 'Fentanyl Patch 25mcg', batchNo: 'FEN2023-08', expiryDate: '2025-06-28', quantity: 8, value: 580 },
];

// Financial summary data
const financialSummaryData = {
  revenue: 532480,
  costs: 387250,
  profit: 145230,
  inventoryValue: 449500,
  averageMargin: 27.3,
  topCategory: 'Antibiotics',
  topProduct: 'Amoxicillin 500mg',
};

const ReportsPage: React.FC = () => {
  const [dateRange, setDateRange] = useState('last-30-days');
  const [exportFormat, setExportFormat] = useState('pdf');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBackClick = () => {
    navigate('/dashboard'); // Navigate to dashboard route
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center gap-3"> 
          <Button variant="outline" className="flex items-center gap-1" onClick={handleBackClick} aria-label="Go back to Dashboard">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Reports & Analytics</h1>
            <p className="text-gray-500">Analyze inventory data and generate reports</p>
          </div>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-7-days">Last 7 Days</SelectItem>
              <SelectItem value="last-30-days">Last 30 Days</SelectItem>
              <SelectItem value="last-90-days">Last 90 Days</SelectItem>
              <SelectItem value="year-to-date">Year to Date</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
              <SelectItem value="custom">Custom Range...</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Select value={exportFormat} onValueChange={setExportFormat}>
            <SelectTrigger className="w-[130px]">
              <FileDown className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Export" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pdf">Export as PDF</SelectItem>
              <SelectItem value="csv">Export as CSV</SelectItem>
              <SelectItem value="excel">Export as Excel</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Printer className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="financial" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="product">Product Performance</TabsTrigger>
          <TabsTrigger value="expiry">Expiration</TabsTrigger>
        </TabsList>
        
        {/* Financial Tab */}
        <TabsContent value="financial">
          {/* Financial Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-blue-600">
                    ₵{financialSummaryData.revenue.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">Total Revenue</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-green-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  +5.2% from previous period
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">
                  ₵{financialSummaryData.costs.toLocaleString()}
                </div>
                <div className="flex items-center mt-1 text-sm text-red-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  +3.8% from previous period
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Profit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">
                  ₵{financialSummaryData.profit.toLocaleString()}
                </div>
                <div className="flex items-center mt-1 text-sm text-green-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  +8.4% from previous period
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sales Trend Chart */}
          <Card className="mb-6 max-w-7xl mx-auto">
            <CardHeader>
              <CardTitle>Sales Trend Analysis</CardTitle>
              <CardDescription>Monthly sales performance over the past year</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart 
                data={monthlySalesData} 
                xAxisKey="name" 
                yAxisKey="value" 
                height={250}
                categories={["value"]}
                colors={["blue"]}
                valueFormatter={(value: number) => `₵${value.toLocaleString()}`}
              />
            </CardContent>
          </Card>

          {/* Additional Financial Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Financial Highlights</CardTitle>
                <CardDescription>Key financial metrics at a glance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Total Revenue</span>
                    <span className="font-medium">₵{financialSummaryData.revenue.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Total Costs</span>
                    <span className="font-medium">₵{financialSummaryData.costs.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Gross Profit</span>
                    <span className="font-medium">₵{financialSummaryData.profit.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Inventory Value</span>
                    <span className="font-medium">₵{financialSummaryData.inventoryValue.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Average Margin</span>
                    <span className="font-medium">{financialSummaryData.averageMargin}%</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Top Performing Category</span>
                    <span className="font-medium">{financialSummaryData.topCategory}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Top Selling Product</span>
                    <span className="font-medium">{financialSummaryData.topProduct}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue by Category</CardTitle>
                <CardDescription>Distribution of revenue across product categories</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <PieChart 
                  data={inventoryValueData} 
                  nameKey="name" 
                  dataKey="value" 
                  height={300}
                  colors={[
                    "#0EA5E9", "#22C55E", "#EF4444", "#F97316", 
                    "#A855F7", "#14B8A6", "#8B5CF6", "#64748B"
                  ]}
                  valueFormatter={(value: number) => `₵${value.toLocaleString()}`}
                  legend={false}
                />
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {inventoryValueData.map((item, index) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-sm" 
                        style={{ 
                          backgroundColor: [
                            "#0EA5E9", "#22C55E", "#EF4444", "#F97316", 
                            "#A855F7", "#14B8A6", "#8B5CF6", "#64748B"
                          ][index % 8] 
                        }}
                      />
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Inventory Tab */}
        <TabsContent value="inventory">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Total Inventory Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">
                  ₵{financialSummaryData.inventoryValue.toLocaleString()}
                </div>
                <div className="flex items-center mt-1 text-sm text-green-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  +2.1% from previous month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Average Turnover Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">10.8</div>
                <div className="flex items-center mt-1 text-sm text-green-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  +0.5 from previous month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Stock-to-Sales Ratio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">1:3.2</div>
                <div className="flex items-center mt-1 text-sm text-red-600">
                  <TrendingDown className="mr-1 h-4 w-4" />
                  -0.2 from previous month
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Inventory Turnover Chart */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Inventory Turnover by Category</CardTitle>
              <CardDescription>How quickly inventory is sold by category</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart 
                data={inventoryTurnoverData} 
                xAxisKey="name" 
                yAxisKey="turnoverRate"
                categories={["turnoverRate"]}
                colors={["blue"]}
                height={350}
                valueFormatter={(value: number) => `${value} turns/year`}
              />
            </CardContent>
          </Card>

          {/* Inventory Value Distribution */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Inventory Value Distribution</CardTitle>
              <CardDescription>Current value of inventory by product category</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart 
                data={inventoryValueData} 
                nameKey="name" 
                dataKey="value" 
                height={450}
                colors={[
                  "#4F46E5", "#7C3AED", "#EC4899", "#F59E0B", 
                  "#10B981", "#06B6D4", "#8B5CF6", "#6366F1"
                ]}
                valueFormatter={(value: number) => `₵${value.toLocaleString()}`}
                legend={true}
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Product Performance Tab */}
        <TabsContent value="product">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Product Performance Analysis</h3>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Product Performance Table */}
          <Card className="mb-6">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead className="text-right">Sales (₵)</TableHead>
                    <TableHead className="text-right">Units Sold</TableHead>
                    <TableHead className="text-right">Profit (₵)</TableHead>
                    <TableHead className="text-right">Profit Margin</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productPerformanceData.map((product) => (
                    <TableRow key={product.name}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell className="text-right">₵{product.sales.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{product.units}</TableCell>
                      <TableCell className="text-right">₵{product.profit.toLocaleString()}</TableCell>
                      <TableCell className="text-right">
                        {((product.profit / product.sales) * 100).toFixed(1)}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Top Products Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
              <CardDescription>Products with highest sales volume</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={productPerformanceData.slice(0, 5)} 
                xAxisKey="name" 
                yAxisKey="sales"
                categories={["sales"]}
                colors={["blue"]}
                height={350}
                valueFormatter={(value: number) => `₵${value.toLocaleString()}`}
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Expiration Tab */}
        <TabsContent value="expiry">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Expiring Inventory Report</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Next 30 Days
              </Button>
              <Button variant="outline" size="sm">
                Next 60 Days
              </Button>
              <Button variant="outline" size="sm">
                Next 90 Days
              </Button>
            </div>
          </div>

          {/* Expiring Items Table */}
          <Card className="mb-6">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Batch Number</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Value (₵)</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expirationReportData.map((item) => {
                    const expiryDate = new Date(item.expiryDate);
                    const today = new Date();
                    const daysToExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                    
                    let status;
                    if (daysToExpiry <= 30) {
                      status = <span className="text-red-600 font-medium">Critical (within 30 days)</span>;
                    } else if (daysToExpiry <= 60) {
                      status = <span className="text-amber-600 font-medium">Warning (within 60 days)</span>;
                    } else {
                      status = <span className="text-blue-600 font-medium">Approaching (within 90 days)</span>;
                    }

                    return (
                      <TableRow key={item.batchNo}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.batchNo}</TableCell>
                        <TableCell>{item.expiryDate}</TableCell>
                        <TableCell className="text-right">{item.quantity}</TableCell>
                        <TableCell className="text-right">₵{item.value}</TableCell>
                        <TableCell>{status}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Expiry Value Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Expiring in 30 Days</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">₵1,105</div>
                <div className="text-sm text-gray-500 mt-1">35 units of inventory</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Expiring in 60 Days</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-600">₵2,310</div>
                <div className="text-sm text-gray-500 mt-1">76 units of inventory</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Expiring in 90 Days</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">₵3,070</div>
                <div className="text-sm text-gray-500 mt-1">104 units of inventory</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportsPage;