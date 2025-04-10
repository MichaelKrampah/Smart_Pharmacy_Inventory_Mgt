
import { DashboardStat } from "@/components/ui/dashboard-stat";
import { 
  ShoppingCart, Package, AlertTriangle, TrendingUp, 
  Thermometer, Calendar, Pill, DollarSign
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const demandData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 600 },
  { name: "Jul", value: 800 },
  { name: "Aug", value: 900 },
  { name: "Sep", value: 700 },
  { name: "Oct", value: 900 },
  { name: "Nov", value: 800 },
  { name: "Dec", value: 1000 },
];

const temperatureData = [
  { name: "12AM", temperature: 2.4 },
  { name: "3AM", temperature: 2.6 },
  { name: "6AM", temperature: 2.8 },
  { name: "9AM", temperature: 3.2 },
  { name: "12PM", temperature: 3.8 },
  { name: "3PM", temperature: 3.6 },
  { name: "6PM", temperature: 3.2 },
  { name: "9PM", temperature: 2.8 },
  { name: "12AM", temperature: 2.5 },
];

export function DashboardPreview() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Powerful Dashboard Interface
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gain complete visibility into your inventory with our intuitive dashboard.
            Monitor key metrics, track trends, and get alerted to critical issues in real-time.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-border shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardStat
              title="Orders Today"
              value="24"
              icon={ShoppingCart}
              change={{ value: "8%", positive: true }}
              tooltipText="Number of medication orders processed today"
            />
            <DashboardStat
              title="Current Stock"
              value="1,243"
              icon={Package}
              colorClass="bg-pharma-green-light text-pharma-green"
            />
            <DashboardStat
              title="Expiring Soon"
              value="18"
              icon={AlertTriangle}
              tooltipText="Medications expiring within 30 days"
              colorClass="bg-amber-100 text-amber-600"
            />
            <DashboardStat
              title="Out of Stock"
              value="3"
              icon={Pill}
              tooltipText="Medications currently out of stock"
              colorClass="bg-red-100 text-red-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">
                    Demand Forecasting
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={demandData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="name" 
                      fontSize={12} 
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value}`}
                    />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3498db" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">
                    Refrigerator Temperature (°C)
                  </CardTitle>
                  <Thermometer className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={temperatureData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="name" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      domain={[0, 10]}
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value}°C`}
                    />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="temperature" 
                      stroke="#2ecc71" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">
                    Expiring Medications
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Amoxicillin 500mg", count: "24 units", days: 12 },
                    { name: "Metformin 1000mg", count: "45 units", days: 18 },
                    { name: "Lisinopril 20mg", count: "30 units", days: 24 },
                  ].map((med, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{med.name}</p>
                        <p className="text-xs text-muted-foreground">{med.count}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        med.days < 15 ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
                      }`}>
                        {med.days} days
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">
                    Recent Deliveries
                  </CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { vendor: "ABC Pharma", date: "Today, 9:30 AM", status: "Received" },
                    { vendor: "MedSupply Co", date: "Yesterday", status: "Processing" },
                    { vendor: "PharmaGlobal", date: "Oct 15, 2023", status: "Complete" },
                  ].map((delivery, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{delivery.vendor}</p>
                        <p className="text-xs text-muted-foreground">{delivery.date}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        delivery.status === "Received" ? "bg-green-100 text-green-700" : 
                        delivery.status === "Processing" ? "bg-blue-100 text-blue-700" : 
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {delivery.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">
                    Financial Summary
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm">Inventory Value</p>
                      <p className="text-sm font-medium">$247,500</p>
                    </div>
                    <div className="mt-1 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-pharma-blue h-full rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm">Monthly Orders</p>
                      <p className="text-sm font-medium">$42,800</p>
                    </div>
                    <div className="mt-1 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-pharma-green h-full rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm">Expiry Waste</p>
                      <p className="text-sm font-medium">$1,250</p>
                    </div>
                    <div className="mt-1 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
